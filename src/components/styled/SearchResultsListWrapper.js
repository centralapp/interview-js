import styled from "styled-components";

const SearchResultsListWrapper = styled.div`
  display: flex;
  flex-flow: column;

  width: 100%;
  max-height: 300px;
  height: min-content;
  position: absolute;

  pointer-events: ${({ show }) => (show ? "all" : "none")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: ${({ show }) => (show ? "translateY(0)" : "translateY(-10px)")};

  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.21);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  transition: opacity 140ms cubic-bezier(0.23, 1, 0.32, 1) 0s,
    transform 140ms cubic-bezier(0.23, 1, 0.32, 1) 0s;

  overflow: auto;
`;

export default SearchResultsListWrapper;
