import React from "react";
import styled from "styled-components";

import "./App.css"; // Would use global styles from styled in real-code.
import CategoriesChooser from "./containers/CategoriesChooser";

function App() {
  return (
    <Wrapper>
      <CategoriesChooser />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
`;

export default App;
