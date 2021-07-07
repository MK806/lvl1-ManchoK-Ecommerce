import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    MainB: {
        backgroundColor: 'transparent',
    },
    logo: {
        maxWidth: 60,
    },
    badge: {
        right: -3,
        top: 13,
        border: `0.1px solid ${theme.palette.background.paper}`,
        padding: '0 1px',
    },
    btn: {
        color: 'white',
        borderRadius: '50px',
        border: '1px solid black',
    },
    flag: {
        padding: "1px",
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    dotMenu: {
        color: "black",
        border: "1px solid black",
        borderRadius: "20px",
    },

}));

export default useStyles;