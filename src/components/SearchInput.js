import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FocusLock from "react-focus-lock";

import SearchResultsList from "./SearchResultsList";

const SearchInput = React.forwardRef(
  (
    {
      onChange,
      onSelect,
      searchResults,
      showResults,
      loading,
      setResultsVisibility,
      selectedCategories,
      ...props
    },
    ref
  ) => (
    <StyledFocusLock>
      <StyledInputWrapper ref={ref}>
        <StyledSearchInput
          onChange={onChange}
          showResults={showResults}
          {...props}
        />
        <StyledSearchResultsContainer>
          <SearchResultsList
            showResults={showResults}
            setResultsVisibility={setResultsVisibility}
            selectedCategories={selectedCategories}
            loading={loading}
            results={searchResults}
            onSelect={onSelect}
          />
        </StyledSearchResultsContainer>
      </StyledInputWrapper>
    </StyledFocusLock>
  )
);

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  setResultsVisibility: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired,
  selectedCategories: PropTypes.array.isRequired,
  showResults: PropTypes.bool.isRequired,
  loading: PropTypes.bool
};

export const StyledFocusLock = styled(FocusLock)`
  display: flex;
  flex-flow: column nowrap;

  width: 100%;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const StyledSearchInput = styled.input`
  display: flex;

  width: 100%;
  padding: 1.2rem 1.5rem;

  background-color: white;
  border: none;
  border-radius: 6px;
  color: #333b42;
  font-size: 1.45rem;
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

export const StyledSearchResultsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

export default SearchInput;
