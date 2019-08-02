import React from "react";
import { Row, Col } from "reactstrap";
import { Transition } from "react-spring/renderprops";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";

function Categories({ ...props }) {
  const { list, setList } = props;

  const deleteCategory = option => {
    if (list.indexOf(option) != -1) {
      let newList = list.filter(x => {
        return x != option;
      });
      setList([...newList]);
    }
  };

  return (
    <Transition
      items={list}
      keys={option => option}
      from={{ opacity: 0, marginTop: "-500px" }}
      enter={{ opacity: 1, marginTop: "5px" }}
      leave={{ opacity: 0 }}
    >
      {option => props => (
        <Row className="justify-content-center">
          <div className="raised" style={props}>
            <div style={c1Style}>
              <Row>
                <Col md="9">
                  <h2>{option}</h2>
                </Col>
                <Col md="3" className="m-auto text-center">
                  <Tooltip title="Delete" placement="right">
                    <IconButton aria-label="search">
                      <Delete onClick={() => deleteCategory(option)} />
                    </IconButton>
                  </Tooltip>
                </Col>
              </Row>
            </div>
          </div>
        </Row>
      )}
    </Transition>
  );
}

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1rem",
  margin: "0.5rem",
  border: "1px solid transparent",
  borderRadius: "10px"
};

export default Categories;
