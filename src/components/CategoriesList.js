import React from "react";
import PropTypes from "prop-types";

import CategoriesHeader from "./styled/CategoriesHeader";
import CategoriesListContainer from "./styled/CategoriesListContainer";
import Heading1 from "./styled/Heading1";
import Caption from "./styled/Caption";

import SearchResultListItem from "./SearchResultListItem";

const CategoriesList = ({ categories, onDelete, ...props }) => (
  <React.Fragment>
    <CategoriesHeader>
      <Heading1>My Business Categories</Heading1>
      <Caption>{categories.length} selected</Caption>
    </CategoriesHeader>
    <CategoriesListContainer>
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
    </CategoriesListContainer>
  </React.Fragment>
);

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default CategoriesList;
