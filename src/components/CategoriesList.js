import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SearchResultListItem from "./SearchResultListItem";

const CategoriesList = ({ categories, onDelete, ...props }) => (
  <React.Fragment>
    <StyledHeader>
      <StyledTitle>My Business Categories</StyledTitle>
      <StyledCaption>{categories.length} selected</StyledCaption>
    </StyledHeader>
    <StyledCategoriesList>
      {categories &&
        categories.map(category => (
          <SearchResultListItem
            key={category.id}
            id={category.id}
            name={category.name}
            path={category.path}
            slug={category.slug}
            onSelect={() => onDelete(category)}
            mode={"delete"}
          />
        ))}
    </StyledCategoriesList>
  </React.Fragment>
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

export const StyledHeader = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin: 32px 0 20px 0;
`;

export const StyledTitle = styled.h1`
  margin: 0;

  color: #1b83a4;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const StyledCaption = styled.span`
  margin: 0;

  color: rgba(159, 159, 159, 0.6);
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 800;
  line-height: 1.2;
  text-transform: uppercase;
`;

export default CategoriesList;
