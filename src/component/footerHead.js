import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FootStyle from '../styles/footStyle';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailIcon from '@material-ui/icons/Mail';

const FootHeader = () => {
    const classes = FootStyle();
    return (
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="p" className={classes.title}>
                Get connected with us on social networks!
              </Typography>
              <Button color="inherit"><FacebookIcon /></Button>
              <Button color="inherit"><InstagramIcon /></Button>
              <Button color="inherit"><WhatsAppIcon /></Button>
              <Button color="inherit"><MailIcon /></Button>
            </Toolbar>
          </AppBar>
        </div>
      );
}

export default FootHeader;