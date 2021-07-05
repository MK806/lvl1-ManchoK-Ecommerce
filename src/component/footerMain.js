import React from 'react';
import Grid from '@material-ui/core/Grid';
import FootMStyle from '../styles/footerMain';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MapIcon from '@material-ui/icons/Map';
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

const FootMain = () => {
    const classes = FootMStyle();
    return (
        <div className={classes.Fmain}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
                <Typography variant="h6" className={classes.title}>
                    About me!
                </Typography>
                <Typography variant="p" className={classes.title}>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography variant="h6" className={classes.title}>
                    Products
                </Typography>
                <List>
                  <ListItem button>
                      <ListItemText primary="MDBootstrap" />
                  </ListItem>
                  <ListItem button>
                      <ListItemText primary="MDWordPress" />
                  </ListItem>
                  <ListItem button>
                      <ListItemText primary="BrandFlow" />
                  </ListItem>
                  <ListItem button>
                      <ListItemText primary="BootstrapAngular" />
                  </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography variant="h6" className={classes.title}>
                    Useful links
                </Typography>
                <List>
                  <ListItem button>
                      <ListItemText primary="Your Account" />
                  </ListItem>
                  <ListItem button>
                      <ListItemText primary="Become an Affilate" />
                  </ListItem>
                  <ListItem button>
                      <ListItemText primary="Shipping Rate" />
                  </ListItem>
                  <ListItem button>
                      <ListItemText primary="Help" />
                  </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography variant="h6" className={classes.title}>
                   Contacts
                </Typography>
                <List>
                  <ListItem button>
                      <MapIcon /><ListItemText primary="New York, Avenue Street 10" />
                  </ListItem>
                  <ListItem button>
                      <CallIcon /><ListItemText primary="042 876 836 908" />
                  </ListItem>
                  <ListItem button>
                      <MailOutlineIcon /><ListItemText primary="company@example.com" />
                  </ListItem>
                  <ListItem button>
                      <QueryBuilderIcon /><ListItemText primary="Monday - Friday: 10-17" />
                  </ListItem>
              </List>
            </Grid>
        </Grid>
      </div>
      );
}

export default FootMain;