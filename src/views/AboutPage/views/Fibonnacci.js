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
import List_ from '../assets/list.png'
import Fib from '../assets/fib.gif'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import LinkIcon from '@material-ui/icons/Link';

import { Paper } from '@material-ui/core';
import Share from '../assets/Share.js';
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

const fibonnacci_video_link = "https://youtu.be/9DV0u7encA4"

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleSubmit = (e) => {
      let n1 = 0, n2 = 1, nextTerm;
      if(localStorage.getItem('fib') == null){
        localStorage.setItem('fib', "[]");
      }
      var old_data = JSON.parse(localStorage.getItem('fib'));

      // console.log("fibonacci series upto" , user_value,  "terms")
      for (var i = 1; i <= user_value; i++){
          // console.log(n1)
          old_data.push(String(n1))
          set_render(true)
          // console.log(old_data)
          nextTerm = n1+n2
          n1 = n2;
          n2 = nextTerm;
      }

      localStorage.setItem('fib', JSON.stringify(old_data));
  }

  const clear = (e) => {
     localStorage.removeItem('fib')
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
    localStorage.removeItem('fib')
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
      
        title="A Fibonacci Function"
        subheader="Fibonacci numbers are strongly related to the golden ratio: Binet's formula."
      />
      <CardMedia
        className={classes.media}
        image={Fib}
        title="Paella dish"
      />
      <CardContent>
    {/* James will put the content for fibonnacci */}
        <Typography variant="body2" color="textSecondary" component="p">
              The Fibonacci sequence is a series of numbers where a number is the addition of the last two numbers, starting with 0, and 1. Written as a rule, the expression is: Xn = Xn-1 + Xn-2
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">

          <LinkIcon onClick={handleClick} />
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <Paper className={classes.paper}>
             <Share 
               fibonnacci_video_link={fibonnacci_video_link}/>
            </Paper> 
          </Popper>

        </IconButton>

        {/*<IconButton aria-label="share">
          <ShareIcon />
        </IconButton>*/}
        <Button 
            variant="outlined" 
            onClick={handleExpandClick}  
            style={{ 'marginLeft': '80px', 'fontSize' : '10px'}}
            color="primary">
            Try it out
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
                  <FormLabel component="label" className={classes.formLabel}>Number of terms</FormLabel>
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
           
          
             <Grid item xs={12}>
              <Grid
                container
                spacing={2}
                className={classes.gridSubsection}
              >
               
                {
                   render ? 
                    (
                      <div>
                        <Grid
                          container
                          spacing={2}
                          className={classes.gridSubsection}
                          style={{ 'marginTop' : '10px' }}
                        >
                         
                            {
                              JSON.parse(localStorage.getItem('fib')) ? (
                                <div>
                                     {JSON.parse(localStorage.getItem('fib')).map((value) => (
                                           <Button variant="outlined" color="primary">
                                             {value}
                                          </Button>
                                 ))}
                                </div>):("")
                             }
                        </Grid>
                      </div>
                    ) 
                    : null
                  }
                 
              </Grid>
            </Grid>

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
                  <a target = "_blank" href={fibonnacci_video_link}>{fibonnacci_video_link}</a>
                </ListItem>
            </List>
            </Grid>

        </CardContent>
      </Collapse>
      <br />
       <br />
       <br />
    </Card>
</React.Fragment>
  );
}

