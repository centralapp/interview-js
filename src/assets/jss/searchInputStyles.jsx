//////////////////////////////////////////////////////////////////
//A litle bit of JSS to show different types of styling      /////
//////////////////////////////////////////////////////////////////
import { makeStyles } from "@material-ui/core/styles";

const searchInputStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    minWidth: "35%",
    borderRadius: 500
  },
  input: {
    marginLeft: 8,
    flex: 1,
    paddingLeft: 23,
    overflowX: "auto",
    overflowY: "auto",
    minWidth: 50,
    minHeight: 40
  },
  iconButton: {
    padding: 10
  }
});

export default searchInputStyles;
