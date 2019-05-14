import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CheckIcon from "mdi-react/CheckCircleOutlineIcon";
import DeleteIcon from "mdi-react/DeleteOutlineIcon";

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
  <StyledSearchResultListItem
    id={id}
    href={slug}
    title={name}
    onClick={onSelect}
    selected={selected}
    tabIndex={0}
    autoFocus={selected}
  >
    <StyledResultTexts>
      <StyledName>{name}</StyledName>
      <StyledPath>{path.replace(/\/$/, "").replace("/", " › ")}</StyledPath>
    </StyledResultTexts>
    {id ? (
      <StyledIconButton
        type={"button"}
        title={mode === "delete" ? "Delete category" : "Category selected"}
        disabled={mode === "add"}
      >
        {mode === "delete" ? (
          <DeleteIcon color={"rgba(0, 0, 0, 0.67)"} />
        ) : checked ? (
          <CheckIcon color={"#43A047"} />
        ) : null}
      </StyledIconButton>
    ) : null}
  </StyledSearchResultListItem>
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

export const StyledName = styled.h1`
  margin: 0 0 2px 0;

  color: rgb(0, 0, 0, 0.67);
  font-family: sans-serif;
  font-size: 14.4px;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  transition: color 250ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
`;

export const StyledPath = styled.h2`
  margin: 2px 0 0 0;

  color: rgba(0, 0, 0, 0.47);
  font-family: sans-serif;
  font-size: 12.6px;
  font-weight: 400;
  line-height: 1.2;
  text-transform: none;
  transition: color 250ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
`;

export const StyledResultTexts = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
`;

export const StyledSearchResultListItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  padding: 8px 12px;

  background-color: ${({ selected }) => (selected ? "#f2f2f2" : "white")};
  border-bottom: 1px solid #ddd;
  color: rgba(0, 0, 0, 0.87);
  cursor: ${({ href }) => (href ? "pointer" : "default")};
  outline: none; /* For the demo only, wouldn't do that in real world. */

  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    ${StyledName}, ${StyledPath} {
      color: ${({ href }) => (href ? "rgba(0, 0, 0, 0.87);" : "")};
    }
  }
`;

export const StyledIconButton = styled.button`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  background: none;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.23, 1, 0.32, 1) 0s;

  &:hover:not(:disabled) {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export default SearchResultListItem;
