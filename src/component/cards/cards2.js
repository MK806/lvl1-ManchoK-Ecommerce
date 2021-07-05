import React from 'react';
import Card from '@material-ui/core/Card';
import cardStyle from '../../styles/cardstyle/cardStyle';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';



const Cards2 = () => {
    const classes = cardStyle();
        return (
            <Badge color="primary" badgeContent="Sale">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Grey sweater"
                        height="280"
                        image="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        Grey sweater
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            $21.99<s>$36.99</s>
                            </Typography>
                    </CardContent>
                </CardActionArea>  
            </Card>
        </Badge>
        );
};

export default Cards2;