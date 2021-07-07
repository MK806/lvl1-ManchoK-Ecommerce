import { makeStyles } from '@material-ui/core';

const StyleBar = makeStyles((theme) => ({
    fold: {
        fontSize: "10px",
    },
    search: {
        border: '0.5px solid black',
        borderRadius: theme.shape.borderRadius,
        width: '50%',
    },
    priceSlider: {
        width: "30%",
        marginTop: "15px",
    },
    fab: {
        margin: theme.spacing(0.5),
        height: 10,
        width: 35,
    },
    fab1: {
        margin: theme.spacing(0.5),
        backgroundColor: 'white',
        height: 10,
        width: 35,
    },
    fab2: {
        margin: theme.spacing(0.5),
        backgroundColor: 'gray',
        height: 10,
        width: 35,
    },
    fab3: {
        margin: theme.spacing(0.5),
        backgroundColor: 'green',
        height: 10,
        width: 35,
    },
    fab4: {
        margin: theme.spacing(0.5),
        backgroundColor: 'yellow',
        height: 10,
        width: 35,
    },
    fab5: {
        margin: theme.spacing(0.5),
        backgroundColor: 'blue',
        height: 10,
        width: 35,
    },
    fab6: {
        margin: theme.spacing(0.5),
        backgroundColor: 'purple',
        height: 10,
        width: 35,
    },
    fab7: {
        margin: theme.spacing(0.5),
        backgroundColor: 'black',
        height: 10,
        width: 35,
    },
    rootCol: {
        width: '80%',
    },
}));


export default StyleBar;