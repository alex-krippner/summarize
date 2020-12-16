import { InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
  typePolicies: {
    User: {
      fields: {
        repositories: {
          keyArgs: false,

          merge(existing = {}, incoming) {
            if (existing.nodes) {
              const mergedRepoNodes = existing.nodes.concat(incoming.nodes);
              const mergeComplete = existing.nodes.length + incoming.nodes.length === existing.totalCount;
              const repositories = {
                nodes: mergedRepoNodes,
                pageInfo: incoming.pageInfo,
                totalCount: incoming.totalCount,
                mergeComplete,
                __typename: 'RepositoryConnection',
              };

              return repositories;
            }
            return { ...existing, ...incoming };
          },
        },
      },
    },
    RepositoryConnection: {
      fields: {
        keyArgs: false,

        topFiveRepos: {
          read: (existing, { readField }) => {
            const repos = readField('nodes');
            return repos.slice(0, 6);
          },
        },
      },
    },
  },
});

export default cache;
