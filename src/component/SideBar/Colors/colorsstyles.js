import { makeStyles } from '@mui/styles';

export default makeStyles(theme => ({
  mainClass: {
    height: 106,
    width: 106,
    [theme.breakpoints.down("md")]: {
      height: 76,
      width: 76
    },
    [theme.breakpoints.up("xl")]: {
      height: 156,
      width: 156
    },
    borderRadius: "6px",
    boxShadow: [
      `0px 5px 2px 0px ${theme.palette.primary.main}04`,
      theme.shadows[16]
    ],
    margin: 8,
    color: theme.palette.primary.light,
    border: `3px solid ${theme.palette.common.white}`,
    transition: theme.transitions.create(),
    "&:active": {
      opacity: 1,
      border: `3px solid ${theme.palette.secondary.main}`
    },
    "&:hover": {
      border: `3px solid ${theme.palette.secondary.main}`
    }
  },
  mainLblClass: {
    color: theme.palette.grey[700],
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 16,
    cursor: "pointer"
  },
  //class for checked item
  checked: {
    opacity: 1,
    border: `3px solid ${theme.palette.secondary.main}`
  },
  LblChecked: {color: theme.palette.secondary.main},
  itemInner: {
    height: 86,
    width: 86,
    [theme.breakpoints.down("md")]: {
      height: 56,
      width: 56
    },
    [theme.breakpoints.up("xl")]: {
      height: 136,
      width: 136
    },
    borderRadius: "6px",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    boxShadow: theme.shadows[3]
  },
  input: {
    cursor: "pointer",
    height: 106,
    width: 106,
    [theme.breakpoints.down("md")]: {
      height: 76,
      width: 76
    },
    [theme.breakpoints.up("xl")]: {
      height: 156,
      width: 156
    },
    position: "absolute",
    top: -6,
    left: -6,
    opacity: 0
  }
}));
