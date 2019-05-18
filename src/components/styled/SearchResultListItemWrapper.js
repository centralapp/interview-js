import styled from "styled-components";

import Title from "./Title";
import SubTitle from "./SubTitle";

const SearchResultListItemWrapper = styled.div`
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
    ${Title}, ${SubTitle} {
      color: ${({ href }) => (href ? "rgba(0, 0, 0, 0.87);" : "")};
    }
  }
`;

export default SearchResultListItemWrapper;
