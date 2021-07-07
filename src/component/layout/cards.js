import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    CardHeader,
    CardActionArea
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1)
    }
}));

const Cards = () => {
    const classes = useStyles();
    const data = {
        name: [
            { image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg", title: 'Black jacket', price: '$99.99' },
            { image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg", title: "Blue denim shirt", price: '$17.99' },
            { image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg", title: 'Red hoodie', price: '$35.99' },
            { image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg", title: 'Grey sweater', price: '$36.99' },
            { image: "https://media.missguided.com/i/missguided/DD925864_01?fmt=jpeg&fmt.jpeg.interlaced=true&$product-page__main--2x$", title: 'Red dress', price: '$25.99' },
            { image: "https://www.maisonmargiela.com/13/13300772as_24_f.jpg", title: 'Wide trousers', price: '$11.00' },
        ],
        id: [1, 2]
    };
    return ( 
        <div className={classes.root}>
        {data.id.map((elem) => (
          <Grid
            container
            spacing={1}
          >
            {data.name.map((elem) => (
              <Grid item xs={12} sm={12} md={6} lg={4} key={data.name.indexOf(elem)}>
                <Card>
                  <CardContent>
                    <CardActionArea>
                      <CardMedia 
                          component = "img"
                          height = "280"
                          image = {`${elem.image}`} />
                      <CardHeader
                        title={`${elem.title}`}
                        subheader={`${elem.price}`}
                      />
                  </CardActionArea>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ))}
      </div>
    );
}

export default Cards;