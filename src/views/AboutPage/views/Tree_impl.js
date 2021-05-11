import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
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
import Tree_ from '../assets/tree.gif'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import LinkIcon from '@material-ui/icons/Link';

import { Paper } from '@material-ui/core';
import Share from '../assets/Share.js';
import Tree from './Tree.js';
import Popper from '@material-ui/core/Popper';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '68.25%', // 16:9
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

const tree_video_link = "https://youtu.be/YAdLFsTG70w"


  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  const stack_video_link = "https://www.youtube.com/watch?v=CgFVgp_VCN8"


  return (
    <React.Fragment>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            S
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Binary Tree Data structure"
        subheader="Methods: push(), pop()  Principle: LIFO (Last In First Out)"
      />
      <CardMedia
        className={classes.media}
        image={Tree_}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          A tree data structure can be defined recursively as a collection of nodes (starting at a root node), where each node is a data structure consisting of a value, together with a list of references to nodes (the "children"), with the constraints that no reference is duplicated, and none points to the root.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">

          <LinkIcon onClick={handleClick} />
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <Paper className={classes.paper}>
             <Share 
               stack_video_link={stack_video_link}/>
            </Paper> 
          </Popper>

        </IconButton>
        {/*<IconButton aria-label="share">
          <ShareIcon />
        </IconButton>*/}
        <Button 
            variant="outlined" 
            onClick={handleExpandClick}  
            style={{ 'marginLeft': '150px', 'fontSize' : '10px'}}
            color="primary">
            Try it out
        </Button>
       
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>

        <CardContent>
           <Tree />
           <br/>

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
                  <a href={tree_video_link}>{tree_video_link}</a>
                </ListItem>
            </List>
            </Grid>

        </CardContent>

        
      </Collapse>
    </Card>
</React.Fragment>
  );
}

