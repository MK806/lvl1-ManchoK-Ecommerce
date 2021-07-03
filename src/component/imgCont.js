import React from 'react';
import Card from '@material-ui/core/Card';
import imgStyle from '../styles/imgStyle';
import CardMedia from '@material-ui/core/CardMedia';


const ImgCont = () => {
    const classes = imgStyle();
    return (
     <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://mdbootstrap.com/img/Photos/Others/clothes(5)-crop.jpg"
          title="Clothes"
        />
        <div className={classes.overlay}>
            <h1>Shop</h1>
        </div>      
    </Card>
    );
};

export default ImgCont;