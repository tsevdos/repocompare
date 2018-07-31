import { emphasize } from "@material-ui/core/styles/colorManipulator";

export default (theme) => ({
  root: {
    flexGrow: 1
  },
  input: {
    display: "flex",
    padding: 0,
  },
  valueContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === "light"
        ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    fontSize: 18,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 18,
  },
  placeholder: {
    position: "absolute",
    left: 2,
    fontSize: 18,
  }
});
