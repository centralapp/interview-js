import React, { Fragment, useState } from "react";
import { Row, Container, Alert, Col } from "reactstrap";
import centralApp from "common/centralApp";
import SearchInput from "./Components/SearchInput";
import Suggestions from "./Components/Suggestions";
import PreSelection from "./Components/PreSelection";

import style from "./Components/styles.module.css";
import isEmpty from "../../common/is-empty";

function Search({ ...props }) {
  const { list, setList } = props;
  const [categories, setCategories] = useState([]);
  const [preSelection, setPreSelection] = useState([]);
  const [focus, setFocus] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [alertError, setAlertError] = useState(null);

  const setFilteredCategories = async keyword => {
    let names = await centralApp.getCategories(keyword);
    if (names) setCategories([...names]);
    setKeyword(keyword);
  };

  const handleSelection = option => {
    setKeyword("");
    setCategories([]);
    if (preSelection.length <= 2)
      if (preSelection.indexOf(option) == -1)
        setPreSelection([...preSelection, option]);
      else setAlertError("Category already selected");
    else setAlertError("Please add selected Categories");
  };

  const handleAdd = () => {
    //Check if options already added
    if (
      preSelection.some(option => {
        if (list.indexOf(option) != -1) {
          setAlertError(
            `Category name '${option}' already added. Please Change your selection.`
          );
          return -1;
        }
      })
    )
      return false;
    else {
      setList([...list, ...preSelection]);
      setKeyword("");
      setCategories([]);
      setPreSelection([]);
    }
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
      <Row className={style.alert}>
        <Alert
          color="danger"
          isOpen={!isEmpty(alertError)}
          toggle={() => setAlertError("")}
        >
          {alertError}
        </Alert>
      </Row>
    </Fragment>
  );
}

export default Search;
