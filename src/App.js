import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect, Fragment } from "react";
import isEmpty from "./common/is-empty";
import "./App.css";

//Main Components
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";

function App() {
  return (
    <Fragment>
      <Header />
      <Search />
      {/* <div className="App" onClick={() => setFilteredCategories("bar")}>
        Fede
      </div> */}
    </Fragment>
  );
}

export default App;
