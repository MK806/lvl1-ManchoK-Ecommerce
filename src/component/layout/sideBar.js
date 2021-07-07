import React from 'react';
import StyleBar from '../styleSideBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Rating from '@material-ui/lab/Rating';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';


const SideBar = () => {
    const classes = StyleBar();
    const [value, setValue] = React.useState('under $25');
    const [value4] = React.useState(4);
    const [value3] = React.useState(3);
    const [value2] = React.useState(2);
    const [value1] = React.useState(1);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const marks = [
    {
      value: 0,
      label: '0$',
    },
    {
      value: 200,
      label: '200$',
    },
  ];
  function valuetext(value) {
    return `${value}$`;
  }
    return (
        <div>
            <h3>Subcategories</h3>
            <List>
                  <ListItem button>
                      <ListItemText primary="Return to Clothing, Shoes, Accesorries" />
                  </ListItem>
                  <ListItem button>
                      <ListItemText primary="Dresses" />
                  </ListItem>
                  <ListItem button>
                      <ListItemText primary="Tops, Tees & Blouses" />
                  </ListItem>
                  <ListItem button>
                      <ListItemText primary="Sweaters" />
                  </ListItem>
                  <ListItem button>
                      <ListItemText primary="Fashion Hoodies & Sweatshirt" />
                  </ListItem>
                  <ListItem button>
                      <ListItemText primary="Jeans" />
                  </ListItem>
              </List>
            <h3>Filters</h3>
            <Grid container spacing={1} className={classes.search}>
                <Grid item xs={6} sm={6} md={6} lg={8}>
                  <InputBase
                    placeholder="Search…"
                  />
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} lg={4}>
                    <Button><SearchIcon /></Button>
                  </Grid>
              </Grid>
          <h3>Condition</h3>
              <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox name="new" />}
                      label="New"
                    />
                    <FormControlLabel
                      control={<Checkbox name="used" />}
                      label="Used"
                    />
                    <FormControlLabel
                      control={<Checkbox  name="collectible" />}
                      label="Collectible"
                    />
                    <FormControlLabel
                      control={<Checkbox  name="renewed" />}
                      label="Renewed"
                    />
                  </FormGroup>
                </FormControl>
            </div>
      <div>
        <h3>Avg. Customer Review</h3>
              <List>
                  <ListItem button>
                      <ListItemText><Rating name="read-only" value={value4} readOnly /></ListItemText>
                  </ListItem>
                  <ListItem button>
                      <ListItemText><Rating name="read-only" value={value3} readOnly /></ListItemText>
                  </ListItem>
                  <ListItem button>
                      <ListItemText><Rating name="read-only" value={value2} readOnly /></ListItemText>
                  </ListItem>
                  <ListItem button>
                      <ListItemText><Rating name="read-only" value={value1} readOnly /></ListItemText>
                  </ListItem>
                  <ListItem button>
                      <ListItemText><Rating name="read-only" value={value1} readOnly /></ListItemText>
                  </ListItem>
              </List> 
      </div>
      <FormControl component="fieldset">
        <FormLabel component="legend"></FormLabel>
          <h3>Price</h3>
          <RadioGroup aria-label="price" name="priceRange" value={value} onChange={handleChange}>
            <FormControlLabel value="under $25" control={<Radio />} label="Under $25" />
            <FormControlLabel value="$25 to $50" control={<Radio />} label="$25 to $50" />
            <FormControlLabel value="$50 to $100" control={<Radio />} label="$50 to $100" />
            <FormControlLabel value="$100 to $200" control={<Radio />} label="$100 to $200" />
            <FormControlLabel value="$200 & above" control={<Radio />} label="$200 & above" />
          </RadioGroup>
      </FormControl>
        <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                  <TextField id="outlined-basic" label="$Min" variant="outlined" />
                </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
              <TextField id="outlined-basic" label="$Max" variant="outlined" />
          </Grid>
        </Grid>
    <div className={classes.priceSlider}>
      <Typography id="track-false-slider" gutterBottom>
        Price range
      </Typography>
          <Slider
            track={false}
            aria-labelledby="track-false-slider"
            getAriaValueText={valuetext}
            defaultValue={50}
            marks={marks}
          /> 
    </div>
      <div className={classes.root}>
        <h3>Size</h3>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="34" />}
                  label="34"
                />
                <FormControlLabel
                  control={<Checkbox name="36" />}
                  label="36"
                />
                <FormControlLabel
                  control={<Checkbox  name="38" />}
                  label="38"
                />
                <FormControlLabel
                  control={<Checkbox  name="40" />}
                  label="40"
                />
              </FormGroup>
            </FormControl>
        </div>
        <div className={classes.rootCol}>
          <h3>Color</h3>
            <Tooltip title="Blue">
              <Fab color="primary" className={classes.fab}></Fab>
            </Tooltip>
            <Tooltip title="Pink">
              <Fab color="secondary" className={classes.fab}></Fab>
            </Tooltip>
            <Tooltip title="White">
              <Fab className={classes.fab1}></Fab>
            </Tooltip>
            <Tooltip title="Gray">
              <Fab className={classes.fab2}></Fab>
            </Tooltip>
            <Tooltip title="Green">
              <Fab className={classes.fab3}></Fab>
            </Tooltip>
            <Tooltip title="Yellow">
              <Fab className={classes.fab4}></Fab>
            </Tooltip>
            <Tooltip title="Blue">
              <Fab className={classes.fab5}></Fab>
            </Tooltip>
            <Tooltip title="Purple">
              <Fab className={classes.fab6}></Fab>
            </Tooltip>
            <Tooltip title="Black">
              <Fab className={classes.fab7}></Fab>
            </Tooltip>
        </div>
    </div>

    );
};

export default SideBar;