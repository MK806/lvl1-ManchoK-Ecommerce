import React from 'react';
import FootStyle from '../styles/footStyle';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';

const FootBot = () => {
    const classes = FootStyle();
return (
    <AppBar position="static" className={classes.botRoot}>
        <Container>
            <Toolbar>
                <Typography className={classes.title1}>
                © 2020 Copyright: MDBootstrap.com
                </Typography>
            </Toolbar>
        </Container>
    </AppBar>
)
};
export default FootBot;