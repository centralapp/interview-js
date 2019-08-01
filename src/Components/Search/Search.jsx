import React, { Fragment, useState } from "react";
import { Row } from "reactstrap";
import centralApp from "common/centralApp";
import SearchInput from "./Components/SearchInput";
import Suggestions from "./Components/Suggestions";

function Search() {
  const [categories, setCategories] = useState([]);
  const [focus, setFocus] = useState(true);
  const [keyword, setKeyword] = useState("");

  const setFilteredCategories = async keyword => {
    let names = await centralApp.getCategories(keyword);
    if (names) setCategories([...names]);
    setKeyword(keyword);
  };

  const handleSelection = option => {
    setKeyword("");
    setCategories([]);
    console.log(`Add ${option} to table`);
  };

  return (
    <Fragment>
      <Row md="12" className="justify-content-center">
        <SearchInput
          setFilteredCategories={setFilteredCategories}
          setFocus={setFocus}
          keyword={keyword}
        />
      </Row>
      <Row md="12" className="justify-content-center">
        <Suggestions
          options={categories}
          keyword={keyword}
          focus={focus}
          handleSelection={handleSelection}
        />
      </Row>
    </Fragment>
  );
}

export default Search;
