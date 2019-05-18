import styled from "styled-components";

const SearchInput = styled.input`
  display: flex;

  width: 100%;
  padding: 1.2rem 1.5rem;

  background-color: white;
  border: none;
  border-radius: 6px;
  color: #333b42;
  font-size: 18px;
  text-transform: capitalize;
  outline: none; /* I know. Bad thing. But for the demo it breaks coolness */

  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.21);
  border-radius: 6px;
  border-bottom-left-radius: ${({ showResults }) => (showResults ? 0 : 6)};
  border-bottom-right-radius: ${({ showResults }) => (showResults ? 0 : 6)};
  border-bottom: ${({ showResults }) =>
    showResults ? "1px solid #dddddd" : "none"};

  transition: color 250ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  resize: none;
`;

export default SearchInput;
