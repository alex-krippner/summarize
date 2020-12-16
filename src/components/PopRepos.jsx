import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import RepoInfo from './RepoInfo';
import UsernameContext from '../context';
import queries from '../apollo/queries';

import { Typography } from '../theme/styledComponents';

const PopRepos = () => {
  const username = React.useContext(UsernameContext);

  const { data, error } = useQuery(queries.GET_REPO_DETAILS, {
    variables: { username },
  });

  if (error) return null;
  if (!data) return null;
  const { topFiveRepos } = data.user.repositories;
  return (
    <Container>
      <Header fontSize="medium" margin="2rem 0">
        Popular Repositories
      </Header>

      {topFiveRepos.length === 0 ? (
        <Typography secondary fontSize="medium">
          No repositories found
        </Typography>
      ) : (
        topFiveRepos.map((repo) => <RepoInfo key={repo.nameWithOwner} username={username} repo={repo} />)
      )}
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 2rem;
`;

const Header = Typography.withComponent('h3');

export default PopRepos;
