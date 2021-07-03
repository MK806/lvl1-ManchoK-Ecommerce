import './App.css';
import NavBar from './component/navbar';
import ImgCont from './component/imgCont';
import Grid from '@material-ui/core/Grid';
import SideBar from './component/sideBar';
import MainBody from './component/mainBody';

function App() {
    return (
        <div>
            <NavBar></NavBar>
            <ImgCont></ImgCont>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={4}>
                    <SideBar></SideBar>
                </Grid>
                <Grid item xs={12} sm={8}>
                   <MainBody></MainBody>
                </Grid>
             </Grid>
        </div>
    );
}

export default App;