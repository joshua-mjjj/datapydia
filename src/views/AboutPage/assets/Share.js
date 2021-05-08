import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  social: {
    marginLeft: "10px",
    paddingBottom: "20px",
    marginBottom: "20px",
  },
  icon: {
    outline: "none",
    border: "none",
  },
  share: {
    fontWeight: "bold",
    fontSize: "20px",
  },
}));

export default function InsetList(props) {
  const classes = useStyles();
  const shareUrl = "https://homepetvet.com";
  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      <Typography
        className={classes.share}
        variant="caption"
        display="block"
        gutterBottom
      >
        Video link
      </Typography>
      <ListItem>
        <a href={props.stack_video_link}>{props.stack_video_link}</a>
      </ListItem>
    </List>
  );
}
