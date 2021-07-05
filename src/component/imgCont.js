import React from 'react';
import imgStyle from '../styles/imgStyle';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import NavBar from '../component/navbar';


const ImgCont = () => {
 const classes = imgStyle();
return (
    <Card>
        <CardMedia image={'https://mdbootstrap.com/img/Photos/Others/clothes(5)-crop.jpg'} className={classes.media}/>
            <div className={classes.overlay}>
                <h1>SHOP</h1>
            </div>
            <div className={classes.overlay2}>
                <NavBar></NavBar>
            </div>
    </Card>


    );
};

export default ImgCont;
