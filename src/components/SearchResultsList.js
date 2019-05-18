import React, { useState, useRef, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import useKey from "use-key-hook";

import SearchResultsListWrapper from "./styled/SearchResultsListWrapper";
import SearchResultListItem from "./SearchResultListItem";

const SearchResultsList = ({
  results,
  loading,
  onSelect,
  showResults,
  setResultsVisibility,
  selectedCategories
}) => {
  const [selected, setSelected] = useState({
    index: -1,
    id: null
  });
  const searchResults = useRef(results);
  const selectedResult = useRef(selected);

  searchResults.current = results;
  selectedResult.current = selected;

  useEffect(() => {
    if (!showResults) {
      setSelected({ index: -1, id: null });
    }
  }, [showResults, selected]);

  useKey(
    (key, event) => {
      function handleKeys() {
        if (!showResults) {
          setResultsVisibility(true);
        }

        if (key === 40) {
          event.preventDefault();
          let newIndex = selectedResult.current.index + 1;
          if (newIndex > searchResults.current.length - 1) {
            newIndex = 0;
          }
          if (searchResults.current[newIndex] == null) {
            return;
          }
          setSelected({
            index: newIndex,
            id: searchResults.current[newIndex].id
          });
        } else if (key === 38) {
          event.preventDefault();
          if (searchResults.current.length === 0) {
            setResultsVisibility(false);
            return;
          }

          let newIndex = selectedResult.current.index - 1;
          if (newIndex < 0) {
            newIndex = searchResults.current.length - 1;
          }
          if (searchResults.current[newIndex] == null) {
            return;
          }
          setSelected({
            index: newIndex,
            id: searchResults.current[newIndex].id
          });
        } else if (key === 13 && selectedResult.current.id != null) {
          if (searchResults.current[selectedResult.current.index]) {
            onSelect(searchResults.current[selectedResult.current.index]);
          }
        } else if (key === 27) {
          setResultsVisibility(false);
        }
      }
      handleKeys();
    },
    {
      detectKeys: [13, 38, 40, 27]
    }
  );

  const onResultsFocus = useCallback(
    event => {
      event.persist();
      const { id: idStr } = event.target;
      const id = Number.parseInt(idStr);
      const index = searchResults.current.indexOf(
        searchResults.current.find(r => r.id === id)
      );

      if (searchResults.current[index]) {
        setSelected({ index, id });
        setResultsVisibility(true);
      }
    },
    [searchResults, setResultsVisibility]
  );

  return (
    <SearchResultsListWrapper
      show={showResults}
      onFocusCapture={onResultsFocus}
    >
      {loading ? (
        <SearchResultListItem
          name={"Loading..."}
          path={"This might take 1 or 2 seconds..."}
        />
      ) : !results || results.length === 0 ? (
        <SearchResultListItem
          name={"No results."}
          path={"We found nothing matching your query"}
        />
      ) : (
        results.map((result, index) => {
          const isItemChecked =
            selectedCategories &&
            selectedCategories.find(r => r.id === result.id);
          return (
            <SearchResultListItem
              key={result.id}
              id={result.id}
              name={result.name}
              path={result.path}
              slug={result.slug}
              onSelect={() => onSelect(result)}
              selected={selected.id === result.id}
              checked={isItemChecked != null}
            />
          );
        })
      )}
    </SearchResultsListWrapper>
  );
};

SearchResultsList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func,
  loading: PropTypes.bool,
  showResults: PropTypes.bool,
  selectedCategories: PropTypes.array.isRequired
};

export default SearchResultsList;
