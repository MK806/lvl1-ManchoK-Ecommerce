import { makeStyles } from '@material-ui/core';

const MainStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper1: {
        padding: "14px",
        display: "flex",
        justifyContent: 'space-around',
        textAlign: 'center',
    },
    paper2: {
        padding: "10px",
        display: "flex",
        justifyContent: 'space-around',
        textAlign: 'center',
    },
}));


export default MainStyle;