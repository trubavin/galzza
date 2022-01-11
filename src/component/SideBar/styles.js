import { makeStyles } from '@mui/styles';
export default makeStyles(theme => ({

    root: {
        border: "8px solid #fff",
        margin: '16px',
        padding: "36px 0 0",
        background: "rgba(255,255,255,0.9)",
        boxShadow: [
            "0px 16px 26px -10px #222",
            theme.shadows[15]
        ]
    },
    bottom_buttons: {
        display: 'flex',
        justifyContent: "space-between",
        padding: '10px 16px'
    },
    bottom_button: {
        display: 'flex',
        justifyContent: "end !important",
        padding: '10px 16px'
    },
    nextBtn: {
        width: 120,
        fontSize: 12,
        boxShadow: theme.shadows[5],
        [theme.breakpoints.down("xs")]: {
            fontSize: 10,
            width: 90
        }
    },
    prevBtn: {
        width: 120,
        fontSize: 12,
        color: theme.palette.grey[700],
        background: theme.palette.common.white,
        boxShadow: theme.shadows[5]
    }

}));
