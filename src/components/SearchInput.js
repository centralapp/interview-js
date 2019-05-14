import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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
      ...props
    },
    ref
  ) => (
    <StyledInputWrapper ref={ref}>
      <StyledSearchInput onChange={onChange} {...props} />
      <StyledSearchResultsContainer>
        <SearchResultsList
          showResults={showResults}
          setResultsVisibility={setResultsVisibility}
          loading={loading}
          results={searchResults}
          onSelect={onSelect}
        />
      </StyledSearchResultsContainer>
    </StyledInputWrapper>
  )
);

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  setResultsVisibility: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired,
  showResults: PropTypes.bool.isRequired,
  loading: PropTypes.bool
};

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
  border: 1px solid #c1c1c1;
  border-radius: 6px;
  color: #333b42;
  font-size: 1.45rem;
  transition: color 250ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  resize: none;

  &:focus {
    border-color: blue;
  }
`;

export const StyledSearchResultsContainer = styled.div`
  width: 100%;
  position: relative;
`;

export default SearchInput;
