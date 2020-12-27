import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Gmap from "../maps";
export default function PaymentForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="PerfomanceLocation"
            label="Enter the location of peformance"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained">Seacrh</Button>
        </Grid>
        <Grid item xs={12}>
          <div id="map">
            <Gmap />
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
