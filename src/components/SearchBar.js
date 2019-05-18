import React from "react";
import PropTypes from "prop-types";
import DropdownWrapper from "./styled/DropdownWrapper";
import SearchInput from "./styled/SearchInput";
import SearchResultsContainer from "./styled/SearchResultsContainer";

import SearchResultsList from "./SearchResultsList";
import FocusLocker from "./FocusLocker";

const SearchBar = React.forwardRef(
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
    <FocusLocker>
      <DropdownWrapper ref={ref}>
        <SearchInput onChange={onChange} showResults={showResults} {...props} />
        <SearchResultsContainer>
          <SearchResultsList
            showResults={showResults}
            setResultsVisibility={setResultsVisibility}
            selectedCategories={selectedCategories}
            loading={loading}
            results={searchResults}
            onSelect={onSelect}
          />
        </SearchResultsContainer>
      </DropdownWrapper>
    </FocusLocker>
  )
);

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  setResultsVisibility: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired,
  selectedCategories: PropTypes.array.isRequired,
  showResults: PropTypes.bool.isRequired,
  loading: PropTypes.bool
};

export default SearchBar;
