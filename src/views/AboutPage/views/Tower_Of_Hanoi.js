import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import Header from '../components/Header';
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
// import Footer from '../components/Footer';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { Alert, AlertTitle } from '@material-ui/lab';
import Chip from '@material-ui/core/Chip';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';

import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tower_ from '../assets/tower1.gif';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import LinkIcon from '@material-ui/icons/Link';

import { Paper } from '@material-ui/core';
import Share from '../assets/Share.js';
import Bar from '../assets/Bar.png';
import Bar2 from '../assets/Bar2.png';
import Popper from '@material-ui/core/Popper';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '61.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
   gridSubsection: {
    marginBottom: theme.spacing(1),
  },
  inputSmall:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    "&::after": {
        borderBottom: '1px solid #949494',
    },
  },
  formLabel:{
    fontSize: '13px',
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '600',
    marginBottom: theme.spacing(1),
  },
 button: {
    backgroundColor: red[500],
    float: 'left',
    margin: theme.spacing(2, 2, 1, 'auto'),
  },
  root_: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0),
    },
  },
   paper: {
    padding: theme.spacing(2),
  }
}));


export default function Blog() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const [ user_value, setValue ] = React.useState("");
  const [ render, set_render ] = React.useState(false);
  const [ result, setResult ] = React.useState(null);
  const [ render_popup, setRender_popup ] = React.useState(false);

  const handleExpandClick = () => {
    window.location.href = "./tower"
  };

  const handleSubmit = (e) => {

      setResult(factorial(user_value))
      set_render(true)

       function factorial(n){
            if(n == 0 || n == 1){
                return 1;
            }else{
            return n*factorial(n - 1)
        }
        }
  }

  const clear = (e) => {
     setResult(null)
     set_render(false)
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  const list_video_link = "https://www.youtube.com/watch?v=tw7ror9x32s"


  React.useEffect(() => {
    localStorage.removeItem('fac')
  }, [])

  return (
    <React.Fragment>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            F
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Tower of Hanoi"
        subheader="Tower of Hanoi,is a mathematical puzzle which consists of three towers (pegs) and more than one ring which are of different sizes and are stacked upon in an ascending order."
      />
      <CardMedia
        className={classes.media}
        image={Tower_}
        title="Paella dish"
      />
      <CardContent>
    {/* James will put the content for fibonnacci */}
        <Typography variant="body2" color="textSecondary" component="p">
         The mission is to move all the disks to some another tower without violating the sequence of arrangement. A few rules to be followed for Tower of Hanoi are −
         Only one disk can be moved among the towers at any given time.
         Only the "top" disk can be removed.
         No large disk can sit over a small disk.
        </Typography>
          <Grid
                  container
                  spacing={2}
                  className={classes.gridSubsection}
                >
            <List 
             style={{
                   'paddingTop' : '20px'
                 }}
                 // className={classes.root_} 
                 aria-label="contacts">
                <Typography
                  variant="caption"
                  display="block"
                  style={{
                    'float' : 'left',
                    'paddingLeft' : '13px'
                  }}
                  gutterBottom
                >
                  You tube Video link
                </Typography>
                <ListItem>
                  <a href="">{list_video_link}</a>
                </ListItem>
            </List>
            </Grid>

      </CardContent>
      <CardActions disableSpacing>
        <Button 
            variant="outlined" 
            onClick={handleExpandClick}  
            style={{ 'marginLeft': '100px', 'fontSize' : '10px'}}
            color="primary">
            Visualization
        </Button>
       
       
      </CardActions>
      <br />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
           <Grid item xs={12}>
              <Grid
                container
                spacing={2}
                className={classes.gridSubsection}
              >
                <Grid item xs={8}>
                  <FormLabel component="label" className={classes.formLabel}>Number</FormLabel>
                  <Input
                    className={classes.inputSmall}
                    fullWidth
                    placeholder="Add value"
                    disableUnderline
                    name="value"
                    autoComplete="add-value"
                    onChange={(e) => {
                      setValue(e.target.value)
                    }}
                    value={user_value}
                    required
                  />
                </Grid>
              </Grid>
            </Grid>

             <Button
                variant="contained"
                //disabled={disabl_}
                color="secondary"
                style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
                onClick={handleSubmit}
                className={classes.button}
              >
              <span style={{fontWeight: 'bold'}}>{"Submit"}</span>
            </Button>
            <Button
                variant="contained"
                //disabled={disabl_}
                color="secondary"
                style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
                onClick={clear}
                className={classes.button}
              >
              <span style={{fontWeight: 'bold'}}>{"Clear"}</span>
            </Button>
           
          

        </CardContent>
      </Collapse>
    </Card>
</React.Fragment>
  );
}

