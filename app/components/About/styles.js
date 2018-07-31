export default (theme) => ({
  root: {
    margin: `${theme.spacing.unit * 3}px`
  },
  shareIcon: {
    display: "inline-block",
    marginRight: theme.spacing.unit
  },
  shareIconLink: {
    fontWeight: "bold",
    textDecoration: "none"
  },
  normalLink: {
    color: theme.palette.primary[300],
    textDecoration: "none",
    fontWeight: "bold",
    "&:hover": {
      color: theme.palette.secondary[400]
    }
  }
});
