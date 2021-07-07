import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import { IconFlagUK } from 'material-ui-flags';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreIcon from '@material-ui/icons/MoreVert';
import useStyles from '../useStyles';


const PrimarySearchAppBar = () => {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
            <IconButton aria-label="cart">
              <Badge badgeContent={1} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
      </MenuItem>
      <MenuItem>
        <Button color="inherit">Contact</Button>
        </MenuItem>
      <MenuItem>
      <Button color="inherit">Shop</Button>
      </MenuItem>
      <MenuItem>
          <Button color="inherit">Sign in</Button>
          </MenuItem>
          <MenuItem>
          <Button variant="outlined" className={classes.dotMenu}>Sign up</Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.MainB}>
        <Toolbar>
        <img src="https://iconape.com/wp-content/png_logo_vector/mdb.png" alt="logo" className={classes.logo} />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
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
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

export default PrimarySearchAppBar;