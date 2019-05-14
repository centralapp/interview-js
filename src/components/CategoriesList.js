import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SearchResultListItem from "./SearchResultListItem";

const CategoriesList = ({ categories, onDelete, ...props }) => (
  <StyledCategoriesList>
    <StyledTitle>My Business Categories ({categories.length})</StyledTitle>
    {categories &&
      categories.map(category => (
        <SearchResultListItem
          key={category.id}
          name={category.name}
          path={category.path}
          slug={category.slug}
          onSelect={() => onDelete(category)}
        />
      ))}
  </StyledCategoriesList>
);

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired
};

export const StyledCategoriesList = styled.div`
  display: flex;
  flex-flow: column;

  width: 100%;
  max-height: 500px;
  height: 500px;
  overflow: auto;
`;

export const StyledCategoryItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  & > a {
    margin-right: 24px;
  }
`;

export const StyledTitle = styled.h1`
  color: rgb(0, 0, 0, 0.67);
  font-family: sans-serif;
  font-size: 22px;
  font-weight: 800;
  line-height: 1.2;
  text-transform: uppercase;
`;

export default CategoriesList;
