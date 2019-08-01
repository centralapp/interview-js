import React, { Fragment, useRef, useState, useEffect } from "react";
import { Row } from "reactstrap";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import searchInputStyles from "assets/jss/searchInputStyles";

export default function SearchInput({ ...props }) {
  const { setFilteredCategories, setFocus, keyword } = props;

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
        />
        <IconButton disabled className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Fragment>
  );
}
