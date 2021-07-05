import React from 'react';
import Card from '@material-ui/core/Card';
import cardStyle from '../../styles/cardstyle/cardStyle';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const Cards3 = () => {
    const classes = cardStyle();
        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Blue denim shirt"
                        height="280"
                        image="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        Blue denim shirt
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            $17.99
                            </Typography>
                    </CardContent>
                </CardActionArea>  
            </Card>
        );
};

export default Cards3;