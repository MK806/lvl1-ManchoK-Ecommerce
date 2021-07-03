import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import useStyles from '../styles/useStyles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IconFlagUK } from 'material-ui-flags';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Grid from '@material-ui/core/Grid';

const NavBar = ({children}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
      <AppBar position="static" className={classes.menu}>
        <Toolbar>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={7}>
            <img src="https://iconape.com/wp-content/png_logo_vector/mdb.png" alt="logo" className={classes.logo} />
          </Grid>
          <Grid item xs={12} sm={5}>
            <IconButton aria-label="cart">
              <Badge badgeContent={1} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleClick}
           >
        <IconButton className={classes.flag}><IconFlagUK /><ArrowDropDownIcon /></IconButton>
          </Button>
          <Menu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              Action 1
            </MenuItem>
            <MenuItem>
              Action 2
            </MenuItem>
            <MenuItem>
              Action 3
            </MenuItem>
          </Menu>
          <Button color="inherit">Shop</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">Sign in</Button>
          <Button variant="outlined" className={classes.btn}>Sign up</Button>
          </Grid>
          </Grid>
            </Toolbar>
        </AppBar>
  ); } 

  export default NavBar;