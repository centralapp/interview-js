import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CheckIcon from "mdi-react/CheckCircleOutlineIcon";
import DeleteIcon from "mdi-react/DeleteOutlineIcon";

import SearchResultListItemWrapper from "./styled/SearchResultListItemWrapper";
import ResultItemBody from "./styled/ResultItemBody";
import Title from "./styled/Title";
import SubTitle from "./styled/SubTitle";
import IconButton from "./styled/IconButton";

const SearchResultListItem = ({
  id,
  name,
  path,
  slug,
  onSelect,
  selected,
  checked,
  mode = "add"
}) => (
  <SearchResultListItemWrapper
    id={id}
    href={slug}
    title={name}
    onClick={onSelect}
    selected={selected}
    tabIndex={0}
    autoFocus={selected}
  >
    <ResultItemBody>
      <Title>{name}</Title>
      <SubTitle>{path.replace(/\/$/, "").replace("/", " › ")}</SubTitle>
    </ResultItemBody>
    {id ? (
      <IconButton
        type={"button"}
        title={mode === "delete" ? "Delete category" : "Category selected"}
        disabled={mode === "add"}
      >
        {mode === "delete" ? (
          <DeleteIcon color={"rgba(0, 0, 0, 0.67)"} />
        ) : checked ? (
          <CheckIcon color={"#43A047"} />
        ) : null}
      </IconButton>
    ) : null}
  </SearchResultListItemWrapper>
);

SearchResultListItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  slug: PropTypes.string,
  onSelect: PropTypes.func,
  selected: PropTypes.bool,
  checked: PropTypes.bool,
  mode: PropTypes.oneOf(["add", "delete"])
};

export default SearchResultListItem;
