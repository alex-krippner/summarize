import React from 'react';
import styled from 'styled-components';

import Header from './layout/Header';
import Main from './layout/Main';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
