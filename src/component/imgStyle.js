import { makeStyles } from '@material-ui/core';

const imgStyle = makeStyles((theme) => ({
    media: {
        filter: 'brightness(50%)',
        height: "500px",
        width: "100%",
    },
    bCard: {
        marginBottom: "80px",
    },
    overlay: {
        position: "absolute",
        top: "35%",
        width: "100%",
        textAlign: "center",
        color: "white",
    },
    overlay2: {
        position: "absolute",
        top: "0%",
        width: "100%",
    }
}));


export default imgStyle;