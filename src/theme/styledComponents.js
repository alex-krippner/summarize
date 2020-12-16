import styled from 'styled-components';

export const Typography = styled.div`
  color: ${(props) =>
    props.primary
      ? 'var(--color-font-primary)'
      : props.secondary
      ? 'var(--color-font-secondary)'
      : props.tertiary
      ? 'var(--color-font-tertiary)'
      : 'var(--color-font-primary)'};
  font-size: ${(props) => `var(--font-size-${props.fontSize})`};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;

export const StyledLink = styled.a`
  margin: ${(props) => props.margin};
  font-size: ${(props) => `var(--font-size-${props.fontSize})`};
  font-family: 'Open Sans';
  color: var(--color-font-secondary);
  text-decoration: none;
`;

export const Spinner = styled.div`
  border: 2px solid var(--color-secondary);
  border-top: 2px solid var(--color-primary);
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  animation: spin 2s linear infinite;
`;
