import './App.css';
import ImgCont from './component/imgCont';
import Grid from '@material-ui/core/Grid';
import SideBar from './component/sideBar';
import MainBody from './component/mainBody';
import { Container } from '@material-ui/core';
import FootHeader from './component/footerHead';
import FootMain from './component/footerMain';
import FootBot from './component/footerBottom';

function App() {
    return (
        <div>
            <Grid>
                <ImgCont></ImgCont>
            </Grid>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={3}>
                        <SideBar></SideBar>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <MainBody></MainBody>
                    </Grid>
                </Grid>
            </Container>
                <Grid container>
                    <Grid item xs={12} sm={12}>
                        <FootHeader></FootHeader>
                    </Grid>
                </Grid>  
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                            <FootMain></FootMain>
                        </Grid>
                    </Grid>
                <Grid container>
                    <Grid item xs={12} sm={12}>
                        <FootBot></FootBot>
                    </Grid>
                </Grid>
            </div>
    );
}

export default App;