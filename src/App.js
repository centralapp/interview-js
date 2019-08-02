import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect, Fragment } from "react";
import { Container } from "reactstrap";
import isEmpty from "./common/is-empty";
import "./App.css";

//Main Components
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";

function App() {
  return (
    <Container style={{ height: "100vh" }}>
      <Header />
      <Search />
    </Container>
  );
}

export default App;
