import React, { useEffect, useState } from "react";
import { Row } from "reactstrap";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Collapse from "@material-ui/core/Collapse";
import isEmpty from "common/is-empty";
import style from "./styles.module.css";

//Styles by default from Material UI.
const useStyles = makeStyles(theme => ({
  collapse: {
    width: "100%",
    margin: "auto",
    position: "absolute",
    left: 0,
    zIndex: 10
  },
  paper: {
    width: "35%",
    minWidth: "300px",
    overflow: "scroll",
    overflowX: "hidden",
    maxHeight: "300px",
    margin: "auto",
    marginTop: "5px"
  }
}));

export default function Suggestions({ ...props }) {
  const { options, keyword, focus, handleSelection } = props;
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  //On keyword, focus, or option changed, display available options.
  useEffect(() => {
    //Instrucction specified keyword has to be more or equal 3
    if (keyword.length >= 3 && !isEmpty(options) && focus) {
      setChecked(true);
    } else setChecked(false);
  }, [keyword, focus, options]);

  return (
    <Grid item xs={12}>
      <Collapse in={checked} className={classes.collapse}>
        <Paper elevation={4} className={classes.paper}>
          {options.map((option, index) => {
            return (
              <Row
                key={index}
                className={style.suggestion}
                onClick={() => handleSelection(option)}
              >
                {option.name}
              </Row>
            );
          })}
        </Paper>
      </Collapse>
    </Grid>
  );
}
