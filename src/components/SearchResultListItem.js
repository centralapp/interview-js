import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchResultListItem = ({ id, name, path, slug, onSelect, selected }) => (
  <StyledSearchResultListItem
    id={id}
    href={slug}
    title={name}
    onClick={onSelect}
    selected={selected}
    tabIndex={0}
    autoFocus={selected}
  >
    <StyledName>{name}</StyledName>
    <StyledPath>{path.replace(/\/$/, "").replace("/", " › ")}</StyledPath>
  </StyledSearchResultListItem>
);

SearchResultListItem.propTypes = {
  onSelect: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  selected: PropTypes.bool
};

export const StyledName = styled.h1`
  margin: 0 0 2px 0;

  color: rgb(0, 0, 0, 0.67);
  font-family: sans-serif;
  font-size: 14.4px;
  font-weight: 500;
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

export const StyledSearchResultListItem = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;

  padding: 8px 12px;

  background-color: ${({ selected }) => (selected ? "#f2f2f2" : "white")};
  border-bottom: 1px solid #ddd;
  color: rgba(0, 0, 0, 0.87);
  cursor: ${({ href }) => (href ? "pointer" : "default")};

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

export default SearchResultListItem;
