import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import App from './App';
import client from './apollo/client';

import GlobalStyle from './theme/globalStyle';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    <GlobalStyle />
  </ApolloProvider>,
  document.getElementById('root'),
);

module.hot.accept();
