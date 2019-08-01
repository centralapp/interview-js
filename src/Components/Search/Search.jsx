import React, { Fragment } from "react";
import { Row } from "reactstrap";

import SearchInput from "./Components/SearchInput";

function Search() {
  return (
    <Row md="12" className="justify-content-center">
      <SearchInput />
    </Row>
  );
}

export default Search;
