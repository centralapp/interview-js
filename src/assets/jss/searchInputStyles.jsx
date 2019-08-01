import { makeStyles } from "@material-ui/core/styles";

const searchInputStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "35%",
    borderRadius: 500
  },
  input: {
    marginLeft: 8,
    flex: 1,
    paddingLeft: 23
  },
  iconButton: {
    padding: 10
  }
});

export default searchInputStyles;
