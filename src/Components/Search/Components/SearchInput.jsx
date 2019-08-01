import React, { Fragment, useRef, useState, useEffect } from "react";
import { Row } from "reactstrap";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import searchInputStyles from "assets/jss/searchInputStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Preselection from "./PreSelection";

export default function SearchInput({ ...props }) {
  const { setFilteredCategories, setFocus, keyword, preSelection } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const menuRef = useRef(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    menuRef.current.focus();
  }, []);

  const handleChange = e => {
    setFilteredCategories(e.target.value);
  };

  const classes = searchInputStyles();

  return (
    <Fragment>
      <Paper className={classes.root}>
        <InputBase
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          inputRef={menuRef}
          className={classes.input}
          placeholder="Select Category"
          onChange={handleChange}
          value={keyword}
          startAdornment={
            <InputAdornment position="start" onClick={() => alert("fede")}>
              {preSelection.map(option => {
                return <Preselection preSelection={option} />;
              })}
            </InputAdornment>
          }
        />
        <IconButton
          disabled={preSelection.length == 0 ? true : false}
          className={classes.iconButton}
          aria-label="search"
        >
          <AddIcon />
        </IconButton>
      </Paper>
    </Fragment>
  );
}
