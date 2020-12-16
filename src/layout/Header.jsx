import React from 'react';
import styled from 'styled-components';

import Logo from '../assets/Logo';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1.5rem;
  background: white;
  box-shadow: 0 4px 2px -2px gray;
  z-index: 2;
`;

export default Header;
