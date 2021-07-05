import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppsIcon from '@material-ui/icons/Apps';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import Pagination from '@material-ui/lab/Pagination';
import Cards from './cards/cards';
import Cards1 from './cards/cards1';
import Cards2 from './cards/cards2';
import Cards3 from './cards/cards3';
import { Container } from '@material-ui/core';

const MainBody = () => {
    return (
        <div>
          <Container>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={8}>
                  <AppsIcon /><FormatListBulletedIcon />
                </Grid>
              <Grid item xs={12} sm={4}>
                <Pagination count={3} color="primary" />
              </Grid>
            </Grid>
          </Container>
          <Grid container spacing={3}>
            <Grid item xs={4} >
                  <Cards />
              </Grid>
              <Grid item xs={4} >
                  <Cards1 />
              </Grid>
              <Grid item xs={4} >
                  <Cards2 />
              </Grid>
              <Grid item xs={4} >
                  <Cards3 />
              </Grid>
              <Grid item xs={4} >
                  <Cards />
              </Grid>
              <Grid item xs={4} >
                  <Cards1 />
              </Grid>
              <Grid item xs={4} >
                  <Cards2 />
              </Grid>
              <Grid item xs={4} >
                  <Cards3 />
              </Grid>
              <Grid item xs={4} >
                  <Cards />
              </Grid>
              </Grid>
            <Container>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                  <AppsIcon /><FormatListBulletedIcon />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Pagination count={3} color="primary" />
                </Grid>
              </Grid>
            </Container>
        </div>
    );
};

export default MainBody;