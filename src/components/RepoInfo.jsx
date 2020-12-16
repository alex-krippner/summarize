import React from 'react';
import styled from 'styled-components';

import { Typography, StyledLink } from '../theme/styledComponents';

const RepoInfo = ({ username, repo }) => {
  const fromTo = [repo.createdAt, repo.updatedAt].map((d) => new Date(d).getFullYear());

  const repoRights = repo.owner.login === username ? 'Owner' : 'Contributor';

  const primLang = repo.primaryLanguage ? repo.primaryLanguage.name : 'No primary language';
  return (
    <Container>
      <RepoNameDate>
        <div>
          <StyledLink primary fontSize="small" href={`${repo.url}`}>
            {repo.name}
          </StyledLink>
          <Typography tertiary fontSize="small" margin="1rem 0 0 0">
            {primLang} - {repoRights}
          </Typography>
        </div>
        <Typography tertiary fontSize="small">
          {fromTo[0]} - {fromTo[1]}
        </Typography>
      </RepoNameDate>
      <Typography primary fontSize="small" margin="2rem 0">
        {repo.description}
      </Typography>
      <Typography primary fontSize="small" margin="2rem 0">
        This repository has {repo.stargazerCount} stars and {repo.forkCount} forks. If you would like more information about this repository
        and my contributed code, please visit{' '}
        <span>
          {' '}
          <StyledLink primary fontSize="small" href={`${repo.url}`}>
            {repo.name}{' '}
          </StyledLink>
        </span>{' '}
        on GitHub.
      </Typography>
    </Container>
  );
};

const RepoNameDate = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 2px solid #e1dfe2;
  margin: 2rem 0;
`;

export default RepoInfo;
