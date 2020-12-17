# summarize

    Hi,

    Thanks for checking out this project, which has been built using github's GraphQL API,
    React, and Apollo Client.

    This application provides a summary overview of a github user's public profile, the languages 
    that have been used in all of the public repositories that the user owns, and the top 5 starred
    repositories that the user owns.
    
    This project has been set up to use a personal access token to fetch data from
    github's GraphQL API. 

    https://docs.github.com/en/free-pro-team@latest/graphql

    The initial data fetch from the github server is done in the SearchForm component.
    Data needed in the profile, language, and repositories sections is then fetched from 
    the local cache with the username which is available through the useContext hook. 
 
    If you wanna try out the app, you will need to enter your personal access token in 
    src\apollo\client.js

    The link shows you how to create a personal access token:
    https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token

    Webpack has only been configured for development to run on:

    http://localhost:3000


    
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```
