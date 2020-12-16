import React from 'react';
import styled from 'styled-components';

import { Typography } from '../theme/styledComponents';

const Language = ({ lang, perc }) => {
  return (
    <LangCont>
      <div>
        <span>
          <Typography secondary fontSize="small">
            {lang}
          </Typography>
        </span>
        <LangPerc tertiary fontSize="small">
          {' '}
          {perc}%
        </LangPerc>
      </div>
      <BottomBar />
    </LangCont>
  );
};

const LangCont = styled.div`
  display: flex;
  flex-direction: column;
`;

const BottomBar = styled.div`
  width: 100%;
  height: 2.5px;
  background: linear-gradient(to right, #d8d8d8 50%, #f5f7fa 50%);
  border-radius: 1rem;
`;

const LangPerc = Typography.withComponent('span');

export default Language;
