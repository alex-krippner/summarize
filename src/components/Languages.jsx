import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import UsernameContext from '../context';

import Language from './Language';
import { Typography, Spinner } from '../theme/styledComponents';
import helpers from '../helpers';
import queries from '../apollo/queries';

const Languages = () => {
  const username = React.useContext(UsernameContext);

  const { data, error } = useQuery(queries.GET_LANGUAGES, {
    variables: { username },
  });
  if (!data) return null;
  if (error)
    return (
      <Typography secondary fontSize="medium">
        An error occured
      </Typography>
    );
  if (data.user.repositories.nodes.length === 0)
    return (
      <React.Fragment>
        <Header primary margin="2rem 0" fontSize="medium">
          Languages
        </Header>
        <Typography secondary fontSize="medium">
          No languages found
        </Typography>
      </React.Fragment>
    );
  const { repositories } = data.user;
  let languagesFoundInRepos;
  let languageBytesObj;
  let languageOverallTotal;
  // compute language percentages once all repositories have been merged
  if (!repositories.pageInfo.hasNextPage) {
    const reposArray = repositories.nodes;
    languagesFoundInRepos = reposArray.reduce(helpers.reduceLangInRepos, {});
    languageBytesObj = reposArray.reduce(helpers.reduceLangBytes, languagesFoundInRepos);
    languageOverallTotal = Object.values(languageBytesObj).reduce((acc, cur) => acc + cur);
  }
  return (
    <Container>
      <Header primary margin="2rem 0" fontSize="medium">
        Languages
      </Header>
      <LanguageStatsContainer>
        {languageBytesObj && languageOverallTotal ? (
          Object.entries(languageBytesObj).map((lang) => {
            const perc = ((lang[1] / languageOverallTotal) * 100).toFixed(2) * 1;
            if (perc <= 0.0) return;
            return <Language key={lang[0]} lang={lang[0]} perc={perc} />;
          })
        ) : (
          <Spinner aria-label="loading spinner" />
        )}
      </LanguageStatsContainer>
    </Container>
  );
};
const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 2rem;
`;
const LanguageStatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;
const Header = Typography.withComponent('h3');
export default Languages;
