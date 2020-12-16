import { gql } from '@apollo/client';

const GET_USER_REPOS = gql`
  query($username: String!, $after: String) {
    user(login: $username) {
      id
      login
      resourcePath
      url
      createdAt
      websiteUrl
      location
      followers(first: 100) {
        totalCount
      }
      repositories(
        first: 100
        orderBy: { field: STARGAZERS, direction: DESC }
        after: $after
        ownerAffiliations: [OWNER]
        privacy: PUBLIC
      ) {
        pageInfo {
          hasNextPage
          endCursor
        }
        totalCount
        nodes {
          isPrivate
          createdAt
          updatedAt
          description
          nameWithOwner
          url
          forkCount
          stargazerCount
          owner {
            login
          }
          name
          primaryLanguage {
            id
            name
          }
          ... on Repository {
            languages(first: 20, orderBy: { field: SIZE, direction: DESC }) {
              nodes {
                name
              }
              edges {
                size
              }
            }
          }
        }
      }
    }
  }
`;

const GET_USER_DETAILS = gql`
  query($username: String!) {
    user(login: $username) @client {
      login
      location
      websiteUrl
      createdAt
      url
      followers(first: 100) {
        totalCount
      }
      repositories(
        first: 100
        orderBy: { field: STARGAZERS, direction: DESC }
        after: $after
        ownerAffiliations: [OWNER]
        privacy: PUBLIC
      ) {
        totalCount
        pageInfo {
          hasNextPage
        }
      }
    }
  }
`;

const GET_REPO_DETAILS = gql`
  query($username: String!) {
    user(login: $username) @client {
      repositories(first: 10, orderBy: { field: STARGAZERS, direction: DESC }, privacy: PUBLIC) {
        pageInfo {
          hasNextPage
        }
        topFiveRepos {
          createdAt
          updatedAt
          description
          nameWithOwner
          forkCount
          stargazerCount
          url
          primaryLanguage {
            id
            name
          }
          owner {
            login
          }
          name
          languages(first: 20, orderBy: { field: SIZE, direction: DESC }) {
            nodes {
              name
            }
            edges {
              size
            }
          }
        }
      }
    }
  }
`;

const GET_LANGUAGES = gql`
  query($username: String!) {
    user(login: $username) @client {
      repositories(first: 10, orderBy: { field: STARGAZERS, direction: DESC }, privacy: PUBLIC) {
        totalCount
        pageInfo {
          hasNextPage
        }
        nodes {
          primaryLanguage {
            id
            name
          }

          languages(first: 20, orderBy: { field: SIZE, direction: DESC }) {
            nodes {
              name
            }
            edges {
              size
            }
          }
        }
      }
    }
  }
`;

export default { GET_USER_REPOS, GET_USER_DETAILS, GET_REPO_DETAILS, GET_LANGUAGES };

// languages(first: 20, orderBy: { field: SIZE, direction: DESC }) {
//   nodes {
//     name
//   }
//   edges {
//     size
//   }

// }
