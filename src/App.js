import './App.css';
import ImgCont from './component/layout/imgCont';
import Grid from '@material-ui/core/Grid';
import SideBar from './component/layout/sideBar';
import MainBody from './component/layout/mainBody';
import { Container } from '@material-ui/core';
import FootHeader from './component/layout/footer/footerHead';
import FootMain from './component/layout/footer/footerMain';
import FootBot from './component/layout/footer/footerBottom';

function App() {
    return (
        <div>
            <Grid>
                <ImgCont></ImgCont>
            </Grid>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <SideBar></SideBar>
                    </Grid>
                    <Grid item xs={12} sm={6} md={8} lg={8}>
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