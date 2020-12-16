import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLazyQuery } from '@apollo/client';
import queries from '../apollo/queries';

import { Typography, Spinner } from '../theme/styledComponents';

const SearchForm = ({ setUsername }) => {
  const [getUser, { data, loading, error, fetchMore }] = useLazyQuery(queries.GET_USER_REPOS);
  useEffect(() => {
    if (data && data.user.repositories.pageInfo.hasNextPage) {
      const { pageInfo } = data.user.repositories;

      if (pageInfo.hasNextPage) {
        fetchMore({
          variables: { after: pageInfo.endCursor },
        });
      }
    }
  }, [data]);
  const handleSearch = async (e) => {
    e.preventDefault();
    const username = e.target.search.value;
    getUser({ variables: { username } });

    // the input field is uncontrolled to prevent local query searches,
    //  for each keystroke, taking place in the other components
    // username is passed up to the Main component from where it is put into the context provider
    setUsername(username);
    e.target.search.value = '';
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSearch} id="search-username">
        <InputContainer>
          <FormLabel primary fontSize="small" fontFamily="Ubuntu" fontWeight="600" width="80%" name="search">
            Github username
          </FormLabel>
          <StyledInput name="search" aria-label="search" />
        </InputContainer>
        {loading ? (
          <Spinner aria-label="loading spinner" />
        ) : (
          <StyledButton type="submit" form="search-username" aria-label="search username">
            summarize
          </StyledButton>
        )}
      </StyledForm>
      {error ? (
        <Typography secondary fontSize="small" margin="1rem">
          {error.message}
        </Typography>
      ) : (
        ''
      )}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 15rem;
  width: 100%;
  padding: 1rem;
  transform: translate(0, 15%);
  background-color: var(--color-white);
  border: solid 1px transparent;
  box-shadow: 0 3px 2px 2px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const StyledInput = styled.input`
  width: 80%;
  padding: 1rem;
  border-left: none;
  border-top: none;
  border-right: none;
  border-bottom: 1px solid #707070;
  font-size: 2rem;

  ::placeholder {
    color: var(--color-font-tertiary);
  }
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
  border: none;
  padding: 1rem;
  border-radius: 2rem;
  width: 15rem;
  height: 30%;
  align-self: flex-end;
  color: white;
  font-family: Open sans;
  font-weight: 900;
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const StyledForm = styled.form`
  display: flex;
  width: 80%;
`;

const InputContainer = styled.div`
  width: 80%;
`;

const FormLabel = Typography.withComponent('label');

export default SearchForm;
