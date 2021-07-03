import { makeStyles } from '@material-ui/core';

const StyleBar = makeStyles((theme) => ({
   root: {
    marginLeft: "30px",
    width: '100%',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
   },
   ListItemText: {
       fontSize: "0.5em",
   },
   search: {
    position: 'relative',
    border: '0.5px solid black',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '50%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '20%',
    [theme.breakpoints.up('md')]: {
      width: '10ch',
    },
  },
  formControl: {
    margin: theme.spacing(3),
  },
  rangeP: {
      margin: theme.spacing(1),
      width: '10ch',
    },
    priceSlider: {
      width: 100,
    },
 }));


export default StyleBar;