import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    menu: {
    backgroundColor:'#bfbfbf',
    zIndex: '100',
  },

  logo: {
    maxWidth: 60,
    paddingLeft: "80px",
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
}));


export default useStyles;