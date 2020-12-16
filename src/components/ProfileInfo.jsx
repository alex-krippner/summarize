import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import UsernameContext from '../context';
import { Typography, StyledLink, Spinner } from '../theme/styledComponents';
import queries from '../apollo/queries';

const ProfileInfo = () => {
  const username = React.useContext(UsernameContext);

  const { data, error } = useQuery(queries.GET_USER_DETAILS, {
    variables: { username },
  });
  if (error)
    return (
      <Typography secondary fontSize="small" margin="1rem">
        {error.message}
      </Typography>
    );
  if (!data) return null;
  if (data.user.repositories.pageInfo.hasNextPage) return <Spinner aria-label="loading spinner" />;

  const date = new Date(data.user.createdAt).getFullYear();
  const location = data.user.location ? data.user.location : 'an unknown location';

  return (
    <Container aria-label="user profile info">
      <Header primary fontSize="large" margin="1rem 0" aria-label="username header">
        {data.user.login}
      </Header>
      <div>
        <Caption secondary fontSize="small" margin="2rem 0">
          <StyledLink href={`${data.user.websiteUrl}`}>{data.user.websiteUrl}</StyledLink>
        </Caption>
      </div>
      <div>
        <Text fontSize="small" fontFamily="Open Sans">
          On GitHub since {date}, {data.user.login} is a developer based in {location} who owns{' '}
          <span>
            <StyledLink href={`${data.user.url}?tab=repositories`}>{data.user.repositories.totalCount} public repositories </StyledLink>
          </span>
          and has{' '}
          <span>
            <StyledLink href={`${data.user.url}?tab=followers`}>{data.user.followers.totalCount} followers</StyledLink>
          </span>
          .
        </Text>
      </div>
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 4rem;
`;

const Header = Typography.withComponent('h2');
const Caption = Typography.withComponent('p');
const Text = Typography.withComponent('p');
export default ProfileInfo;
