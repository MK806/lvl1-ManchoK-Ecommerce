import React from 'react';
import MainStyle from '../styles/mainStyle';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppsIcon from '@material-ui/icons/Apps';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import Pagination from '@material-ui/lab/Pagination';
import Cards from '../component/cards';

const MainBody = () => {
    const classes = MainStyle();
    return (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper1}><AppsIcon /><FormatListBulletedIcon /></Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper2}><Pagination count={3} color="primary" /></Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={4} >
                  <Cards />
              </Grid>
              <Grid item xs={4} >
                  <Cards />
              </Grid>
              <Grid item xs={4} >
                  <Cards />
              </Grid>
              <Grid item xs={4} >
                  <Cards />
              </Grid>
              <Grid item xs={4} >
                  <Cards />
              </Grid>
              <Grid item xs={4} >
                  <Cards />
              </Grid>
              <Grid item xs={4} >
                  <Cards />
              </Grid>
              <Grid item xs={4} >
                  <Cards />
              </Grid>
              <Grid item xs={4} >
                  <Cards />
              </Grid>
              </Grid>
              <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper1}><AppsIcon /><FormatListBulletedIcon /></Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper2}><Pagination count={3} color="primary" /></Paper>
            </Grid>
          </Grid>
          </div>
    );
};

export default MainBody;