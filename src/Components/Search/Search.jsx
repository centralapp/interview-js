import React, { Fragment, useState } from "react";
import { Row } from "reactstrap";
import centralApp from "common/centralApp";
import SearchInput from "./Components/SearchInput";
import Suggestions from "./Components/Suggestions";

function Search({ ...props }) {
  const { list, setList, setAlertError } = props;
  const [categories, setCategories] = useState([]);
  const [preSelection, setPreSelection] = useState([]);
  const [focus, setFocus] = useState(true);
  const [keyword, setKeyword] = useState("");

  const setFilteredCategories = async keyword => {
    let categories = await centralApp.getCategories(keyword);
    if (categories) setCategories([...categories]);
    setKeyword(keyword);
  };

  const handleSelection = option => {
    setKeyword("");
    setCategories([]);
    if (preSelection.length <= 2)
      if (!preSelection.find(x => x.name === option.name))
        setPreSelection([...preSelection, option]);
      else setAlertError("Category already selected");
    else setAlertError("Please add selected Categories");
  };

  const handleAdd = () => {
    //Check if options already added

    preSelection.find(option => {
      if (list.find(category => category.name === option.name)) {
        setAlertError(
          `Category name '${
            option.name
          }' already added. Please Change your selection.`
        );
        return -1;
      } else return true;
    });

    setList([...list, ...preSelection]);
    setKeyword("");
    setCategories([]);
    setPreSelection([]);
  };

  return (
    <Fragment>
      <Row className="justify-content-center">
        <SearchInput
          setFilteredCategories={setFilteredCategories}
          setFocus={setFocus}
          keyword={keyword}
          preSelection={preSelection}
          setPreSelection={setPreSelection}
          handleAdd={handleAdd}
        />
      </Row>

      <Row className="justify-content-center">
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
