import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppsIcon from '@material-ui/icons/Apps';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import Pagination from '@material-ui/lab/Pagination';
import Cards from './cards';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const MainBody = () => {
    return (
        <div>
          <Container>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={7} lg={8}>
                 <Button><AppsIcon /></Button>
                 <Button><FormatListBulletedIcon /></Button>
                </Grid>
              <Grid item xs={12} sm={12} md={5} lg={4}>
               <Pagination count={3} color="primary" />
              </Grid>
            </Grid>
          </Container>
                  <Cards />
            <Container>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={7} lg={8}>
                  <Button><AppsIcon /></Button>
                  <Button><FormatListBulletedIcon /></Button>
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={4}>
                  <Pagination count={3} color="primary" />
                </Grid>
              </Grid>
            </Container>
        </div>
    );
};

export default MainBody;