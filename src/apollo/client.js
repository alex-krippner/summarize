import { ApolloClient, HttpLink } from '@apollo/client';
import cache from './cache';

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `bearer ${process.env.GIT_ACCESS_TOKEN}`,
    },
  }),
});

export default client;
