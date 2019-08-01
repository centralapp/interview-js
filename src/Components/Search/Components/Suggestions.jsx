import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Collapse from "@material-ui/core/Collapse";
import isEmpty from "common/is-empty";
import style from "./styles.module.css";

const useStyles = makeStyles(theme => ({
  collapse: {
    width: "100%",
    margin: "auto"
  },
  paper: {
    width: "35%",
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

  useEffect(() => {
    if (keyword.length >= 3 && !isEmpty(options) && focus) {
      setChecked(true);
    } else setChecked(false);
  }, [keyword, focus, options]);

  return (
    <Grid item xs={12}>
      <Collapse in={checked} className={classes.collapse}>
        <Paper elevation={4} className={classes.paper}>
          {!isEmpty(options)
            ? options.map((option, index) => {
                return (
                  <Row
                    key={index}
                    className={style.suggestion}
                    onClick={() => handleSelection(option)}
                  >
                    {option}
                  </Row>
                );
              })
            : ""}
        </Paper>
      </Collapse>
    </Grid>
  );
}
