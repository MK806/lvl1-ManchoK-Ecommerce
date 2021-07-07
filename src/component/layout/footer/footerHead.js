import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FootStyle from '../../footStyle';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const FootHeader = () => {
    const classes = FootStyle();
    return (
        <div>
          <AppBar position="static" className={classes.fcont}>
            <Toolbar>
              <Container>
                <Grid container>
                  <Grid item xs={12} sm={6} md={7} lg={9}>
                      <Typography variant="p" className={classes.title}>
                        Get connected with us on social networks!
                      </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={5} lg={3}>
                      <Button color="inherit"><FacebookIcon /></Button>
                      <Button color="inherit"><InstagramIcon /></Button>
                      <Button color="inherit"><WhatsAppIcon /></Button>
                      <Button color="inherit"><MailIcon /></Button>
                  </Grid>
                </Grid>
              </Container>
            </Toolbar>
          </AppBar>
        </div>
      );
}

export default FootHeader;