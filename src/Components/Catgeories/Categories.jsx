import React from "react";
import { Row, Col } from "reactstrap";
import { Transition } from "react-spring/renderprops";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";

const Categories = ({ ...props }) => {
  const { list, setList } = props;

  //Delete category from the list
  const deleteCategory = option => {
    if (list.find(category => category.name === option.name)) {
      let newList = list.filter(x => {
        return x !== option;
      });
      setList([...newList]);
    }
  };

  return (
    <Transition
      items={list}
      keys={option => option.name}
      from={{ opacity: 0, marginTop: "-500px" }}
      enter={{ opacity: 1, marginTop: "5px" }}
      leave={{ opacity: 0 }}
    >
      {option => props => (
        <Row className="justify-content-center">
          <Col md="12" className="raised" style={props}>
            <Col md="12" style={c1Style}>
              <Row>
                <Col md="9" xs="8">
                  <h2>{option.name}</h2>
                  <b>Path: </b>
                  <i>{option.path}</i>
                </Col>
                <Col md="3" xs="4" className="m-auto text-center">
                  <Tooltip title="Delete" placement="right">
                    <IconButton
                      aria-label="search"
                      onClick={() => deleteCategory(option)}
                    >
                      <Delete />
                    </IconButton>
                  </Tooltip>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      )}
    </Transition>
  );
};

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1rem",
  margin: "0.5rem",
  marginLeft: 0,
  marginRight: 0,
  border: "1px solid transparent",
  borderRadius: "10px"
};

export default Categories;
