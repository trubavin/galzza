import { makeStyles } from '@mui/styles';

export default makeStyles(theme => ({

    root: {},
    mainClass: {
      height: 106,
      width: 206,
      [theme.breakpoints.down("md")]: {
        height: 76,
        width: 196
      },
      [theme.breakpoints.up("xl")]: {
        height: 156,
        width: 276
      },
      borderRadius: "6px",
      boxShadow: [
        `0px 5px 2px 0px ${theme.palette.primary.main}04`,
        theme.shadows[16]
      ],
      margin: 8,
      color: theme.palette.primary.light,
      border: `3px solid ${theme.palette.common.white}`,
      filter: "grayscale(1)",
      opacity: 0.7,
      transition: theme.transitions.create(),
      "&:active": {
        filter: "grayscale(0)",
        opacity: 1,
        border: `3px solid ${theme.palette.secondary.main}`
      },
      "&:hover": {
        opacity: 1,
        filter: "grayscale(0)",
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
      filter: "grayscale(0)",
      border: `3px solid ${theme.palette.secondary.main}`
    },
    LblChecked: {color: theme.palette.secondary.main},
    itemInner: {
      height: 86,
      width: 106,
      [theme.breakpoints.down("md")]: {
        height: 56,
        width: 86
      },
      [theme.breakpoints.up("xl")]: {
        height: 136,
        width: 166
      },
      borderRadius: "6px",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      boxShadow: theme.shadows[3]
    },
    input: {
      cursor: "pointer",
      height: 106,
      width: 206,
      [theme.breakpoints.down("md")]: {
        height: 76,
        width: 196
      },
      [theme.breakpoints.up("xl")]: {
        height: 156,
        width: 276
      },
      position: "absolute",
      top: -6,
      left: -6,
      opacity: 0,
      zIndex: 1
    },
    price: {
      color: theme.palette.grey[700],
      textTransform: "uppercase",
      letterSpacing: 1,
      fontWeight: "bold",
      fontSize: "1rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "0.8rem",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "1.5rem",
      },
      opacity: 0.7,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }

}));
