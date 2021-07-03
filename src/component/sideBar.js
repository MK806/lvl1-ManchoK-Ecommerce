import React from 'react';
import StyleBar from '../styles/styleSideBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const SideBar = () => {
    const classes = StyleBar();
    const [value, setValue] = React.useState('under $25');

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
        <div className={classes.root}>
            <h3>Subcategories</h3>
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                    <ListItemText primary="RETURN TO CLOTHING, SHOES, ACCESSORIES" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="DRESSES" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="TOPS, TEES & BLOUSES" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="SWEATERS" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="FASHION HOODIES & SWEATSHIRTS" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="JEANS" />
                </ListItem>
            </List>
            <h3>Filters</h3>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
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
        <Box component="fieldset" mb={4} borderColor="transparent">
        <Rating name="read-only" readOnly />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" readOnly />
      </Box>
      <Box component="fieldset" mb={2} borderColor="transparent">
        <Rating name="read-only" readOnly />
      </Box>
      <Box component="fieldset" mb={1} borderColor="transparent">
        <Rating name="read-only" readOnly />
      </Box>
      </div>
      <FormControl component="fieldset">
      <FormLabel component="legend">Price</FormLabel>
      <RadioGroup aria-label="price" name="priceRange" value={value} onChange={handleChange}>
        <FormControlLabel value="under $25" control={<Radio />} label="Under $25" />
        <FormControlLabel value="$25 to $50" control={<Radio />} label="$25 to $50" />
        <FormControlLabel value="$50 to $100" control={<Radio />} label="$50 to $100" />
        <FormControlLabel value="$100 to $200" control={<Radio />} label="$100 to $200" />
        <FormControlLabel value="$200 & above" control={<Radio />} label="$200 & above" />
      </RadioGroup>
    </FormControl>
    <form className={classes.rangeP} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="$Min" variant="outlined" />-<TextField id="outlined-basic" label="$Max" variant="outlined" />
    </form>
    <div className={classes.priceSlider}>
      <Typography id="track-false-slider" gutterBottom>
        Price range
      </Typography>
      <Slider
        track={false}
        aria-labelledby="track-false-slider"
        getAriaValueText={valuetext}
        defaultValue={30}
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
    </div>

    );
};

export default SideBar;