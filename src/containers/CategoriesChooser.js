import React, { useState, useCallback, useEffect, useRef } from "react";

import styled from "styled-components";
import fetch from "cross-fetch";
import useOnClickOutside from "use-onclickoutside";

import { BASE_URL } from "../config/constants";
import { canPerformSearch, getSearchQuery } from "../utils";

import SearchBar from "../components/SearchBar";
import CategoriesList from "../components/CategoriesList";
import CategoriesChooserWrapper from "../components/styled/CategoriesChooserWrapper";

const CategoriesChooser = () => {
  const [dataLoading, setDataLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const lastQuery = useRef();
  const searchAreaRef = useRef(null);
  const categories = useRef(selectedCategories);
  categories.current = selectedCategories;

  useOnClickOutside(searchAreaRef, () => setShowResults(false));
  useEffect(() => {
    if (lastQuery.current !== searchQuery && canPerformSearch(searchQuery)) {
      const fetchData = async query => {
        setDataLoading(true);
        const res = await fetch(`${BASE_URL}/categories/like?search=${query}`);
        if (res.ok) {
          const json = await res.json();
          setSearchResults(json);
          setShowResults(true);
          lastQuery.current = query;
        }
        setDataLoading(false);
      };
      fetchData(searchQuery);
    }
  }, [searchQuery]);

  const onSearchQueryChange = useCallback(
    event => {
      event.persist();
      let query = getSearchQuery(event);
      setSearchQuery(query);
      if (query.length <= 2) {
        setSearchResults([]);
        setShowResults(false);
      }
      return query;
    },
    [setSearchQuery]
  );

  const onSearchClick = useCallback(() => {
    if (searchQuery.length >= 3 && searchResults.length > 0) {
      setShowResults(true);
    }
  }, [searchResults, searchQuery]);

  const onCategoryAdd = useCallback(
    category => {
      if (!categories.current.find(c => c.id === category.id)) {
        setSelectedCategories([...categories.current, category]);
        setShowResults(false);
      }
    },
    [categories]
  );

  const onCategoryDelete = useCallback(
    category => {
      setSelectedCategories([
        ...categories.current.filter(c => c.id !== category.id)
      ]);
      setShowResults(false);
    },
    [categories]
  );

  return (
    <CategoriesChooserWrapper>
      <SearchBar
        ref={searchAreaRef}
        onChange={onSearchQueryChange}
        onClick={onSearchClick}
        onSelect={onCategoryAdd}
        selectedCategories={selectedCategories}
        searchResults={searchResults}
        showResults={showResults}
        setResultsVisibility={setShowResults}
        value={searchQuery}
        loading={dataLoading}
        placeholder={"Business category..."}
      />
      <CategoriesList
        categories={selectedCategories}
        onDelete={onCategoryDelete}
      />
    </CategoriesChooserWrapper>
  );
};

export default CategoriesChooser;
