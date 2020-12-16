import React from 'react';
import styled from 'styled-components';
import { Typography } from '../theme/styledComponents';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterContainer>
      <Typography fontSize="small" fontFamily="Open Sans">
        summarize {currentYear}
      </Typography>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 100%;
  background: white;
`;

export default Footer;
