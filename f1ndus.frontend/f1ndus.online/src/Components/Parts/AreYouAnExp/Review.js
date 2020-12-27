import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <List disablePadding>
        <ListItem className={classes.listItem}>
          <ListItemText primary="User Name" />
          <Typography variant="subtitle1" className={classes.total}>
            {props.userName}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Password" />
          <Typography variant="subtitle1" className={classes.total}>
            {props.password}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Type" />
          <Typography variant="subtitle1" className={classes.total}>
            {props.type}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Description" />
          <Typography variant="subtitle1" className={classes.total}>
            {props.desc}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Location Name" />
          <Typography variant="subtitle1" className={classes.total}>
            {props.lsName}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Image" />
          <img src={props.photourl} />
        </ListItem>
      </List>
    </React.Fragment>
  );
}
