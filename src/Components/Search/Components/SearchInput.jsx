import React, { Fragment, useRef } from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Add";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import searchInputStyles from "assets/jss/searchInputStyles";

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel"
];

const ITEM_HEIGHT = 48;

export default function SearchInput() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuRef = useRef();
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(menuRef.current);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const classes = searchInputStyles();
  return (
    <Fragment>
      <Paper className={classes.root}>
        <InputBase
          ref={menuRef}
          className={classes.input}
          placeholder="Type a Category"
        />
        <IconButton className={classes.iconButton} aria-label="search">
          <SearchIcon onClick={handleClick} />
        </IconButton>
      </Paper>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        // anchorReference="none"
        keepMounted
        open={open}
        onClose={handleClose}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{
          style: {
            marginTop: ITEM_HEIGHT * 2.9,
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "34%"
          }
        }}
      >
        {options.map(option => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
}
