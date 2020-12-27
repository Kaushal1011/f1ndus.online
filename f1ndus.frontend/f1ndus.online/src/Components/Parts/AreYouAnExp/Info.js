import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function AddressForm(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="UserName"
            name="UserName"
            label="User Name"
            fullWidth
            autoComplete="UserName"
            onChange={(e) => {
              props.userNamechange(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Password"
            name="Password"
            label="Password"
            fullWidth
            autoComplete="Password"
            onChange={(e) => {
              props.passwordchange(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="JobType"
            name="JobType"
            label="Type"
            fullWidth
            autoComplete="Job Type"
            onChange={(e) => {
              props.typechange(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Description"
            name="Description"
            label="Description"
            fullWidth
            autoComplete="Description"
            onChange={(e) => {
              props.descchange(e.target.value);
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            onChange={(e) => {
              console.log(e.target);
            }}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Upload your photo
            </Button>
          </label>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
