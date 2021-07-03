import { makeStyles } from '@material-ui/core';

const imgStyle = makeStyles((theme) => ({
    media: {
        minWidth: 300,
        minHeight: 450,
        filter: 'brightness(50%)',
      },
      overlay: {
        position: "absolute",
        top: "35%",
        width: "100%",
        textAlign: "center",
        color: "white",
     },
    }));


export default imgStyle;