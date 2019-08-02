import React, { Fragment, useRef, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import searchInputStyles from "assets/jss/searchInputStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Preselection from "./PreSelection";

export default function SearchInput({ ...props }) {
  const {
    setFilteredCategories,
    setFocus,
    keyword,
    preSelection,
    setPreSelection,
    handleAdd
  } = props;

  const menuRef = useRef(null);

  //Start focusing the text input
  useEffect(() => {
    menuRef.current.focus();
  }, []);

  const handleChange = e => {
    setFilteredCategories(e.target.value);
  };

  //Remove the preselection by clicking the "x"
  const removeSelection = option => {
    let cutSelection = preSelection.filter(x => {
      return x.name !== option.name;
    });
    setPreSelection([...cutSelection]);
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
            <InputAdornment position="start">
              {preSelection.map(option => {
                return (
                  <Preselection
                    key={option.name}
                    preSelection={option}
                    removeSelection={removeSelection}
                  />
                );
              })}
            </InputAdornment>
          }
        />
        <IconButton
          disabled={preSelection.length === 0 ? true : false}
          className={classes.iconButton}
          aria-label="search"
          onClick={handleAdd}
        >
          <AddIcon />
        </IconButton>
      </Paper>
    </Fragment>
  );
}
