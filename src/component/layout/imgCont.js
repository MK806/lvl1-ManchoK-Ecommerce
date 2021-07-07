import React from 'react';
import imgStyle from '../imgStyle';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import PrimarySearchAppBar from './navigation';


const ImgCont = () => {
 const classes = imgStyle();
return (
    <Card className={classes.bCard}>
        <CardMedia image={'https://mdbootstrap.com/img/Photos/Others/clothes(5)-crop.jpg'} className={classes.media}/>
            <div className={classes.overlay}>
                <h1>SHOP</h1>
            </div>
            <div className={classes.overlay2}>
                <PrimarySearchAppBar></PrimarySearchAppBar>
            </div>
    </Card>


    );
};

export default ImgCont;
