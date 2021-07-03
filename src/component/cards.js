import React from 'react';
import Card from '@material-ui/core/Card';
import cardStyle from '../styles/cardStyle';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const Cards = () => {
    const classes = cardStyle();
    return (
            <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Hoodie"
                        height="280"
                        image="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Red Hoodie
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        $35.99
                        </Typography>
                    </CardContent>
                    </CardActionArea>  
                  <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Jacket"
                        height="280"
                        image="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Black Denim Jacket
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        $99.99
                        </Typography>
                    </CardContent>
                    </CardActionArea>  
                  <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Tshirt"
                        height="280"
                        image="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Blue Denim T-shirt
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        $17.99
                        </Typography>
                    </CardContent>
                    </CardActionArea>  
                  <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Sweater"
                        height="280"
                        image="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Grey Sweater
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        $21.99
                        </Typography>
                    </CardContent>
                    </CardActionArea>  
                  <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Hoodie"
                        height="280"
                        image="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Red Hoodie
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        $35.99
                        </Typography>
                    </CardContent>
                    </CardActionArea>  
                  <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Jacket"
                        height="280"
                        image="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Black Denim Jacket
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        $99.99
                        </Typography>
                    </CardContent>
                    </CardActionArea>  
                  <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Tshirt"
                        height="280"
                        image="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Blue Denim T-shirt
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        $17.99
                        </Typography>
                    </CardContent>
                    </CardActionArea>  
                  <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Sweater"
                        height="280"
                        image="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Grey Sweater
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        $21.99
                        </Typography>
                    </CardContent>
                    </CardActionArea>  
                  <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Hoodie"
                        height="280"
                        image="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Red Hoodie
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        $35.99
                        </Typography>
                    </CardContent>
                    </CardActionArea>  
            </Card>
    );
};

export default Cards;