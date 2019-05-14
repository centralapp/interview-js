import React, { useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useKey from "use-key-hook";

import SearchResultListItem from "./SearchResultListItem";

const SearchResultsList = ({
  results,
  loading,
  onSelect,
  showResults,
  setResultsVisibility
}) => {
  const [selected, setSelected] = useState({
    index: -1,
    id: results && results[0] ? results[0].id : 0
  });
  const searchResults = useRef(results);
  const selectedResult = useRef(selected);

  searchResults.current = results;
  selectedResult.current = selected;

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

  console.log(selected);

  return (
    <StyledSearchResultsList show={showResults} onFocusCapture={onResultsFocus}>
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
        results.map((result, index) => (
          <SearchResultListItem
            key={result.id}
            id={result.id}
            name={result.name}
            path={result.path}
            slug={result.slug}
            onSelect={() => onSelect(result)}
            selected={selected.id === result.id}
            autoFocus={selected.id === result.id}
          />
        ))
      )}
    </StyledSearchResultsList>
  );
};

SearchResultsList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  showResults: PropTypes.bool
};

export const StyledSearchResultsList = styled.div`
  display: flex;
  flex-flow: column;

  width: 100%;
  max-height: 300px;
  position: absolute;

  pointer-events: ${({ show }) => (show ? "all" : "none")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: ${({ show }) => (show ? "translateY(0)" : "translateY(-15px)")};
  transition: opacity 250ms cubic-bezier(0.23, 1, 0.32, 1) 0s,
    transform 250ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  box-shadow: 0 0 0.6rem 0 rgba(0, 0, 0, 0.15);
  overflow: auto;
`;

export default SearchResultsList;
