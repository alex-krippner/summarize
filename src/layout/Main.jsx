import React, { useState } from 'react';
import styled from 'styled-components';

import SearchForm from '../components/SearchForm';
import ProfileInfo from '../components/ProfileInfo';
import Languages from '../components/Languages';
import PopRepos from '../components/PopRepos';
import { Typography } from '../theme/styledComponents';

import UsernameContext from '../context';

const Main = () => {
  // username is received on submit and passed into context for local queries
  const [username, setUsername] = useState('');

  return (
    <Container>
      <HeadingContainer>
        <Heading primary fontSize="medium">
          summarize
        </Heading>
      </HeadingContainer>
      <SearchForm username={username} setUsername={setUsername} />
      <UsernameContext.Provider value={username}>
        <ResumeContainer>
          <ProfileInfo />
          <Languages />
          <PopRepos />
        </ResumeContainer>
      </UsernameContext.Provider>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  padding: 15rem 0;
`;

const ResumeContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 6em;
  background-color: var(--color-white);
  border: solid 1px transparent;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
`;

const HeadingContainer = styled.header`
  width: max-content;
`;

const Heading = Typography.withComponent('h1');

export default Main;
