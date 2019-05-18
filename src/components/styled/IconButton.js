import styled from "styled-components";

const IconButton = styled.button`
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

export default IconButton;
