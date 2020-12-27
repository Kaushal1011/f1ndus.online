import React from "react";
import { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Gmap from "../maps";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// / import Radar from "radar-sdk-js";

export default function PaymentForm(props) {
  const [list, setRadarlist] = useState([]);
  const [text, setText] = useState("");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  const [clickedlat, setClickedLat] = useState(0);
  const [clickedlong, setClickedLong] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }, []);

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="PerfomanceLocation"
            label="Enter the location of peformance"
            fullWidth
            onChange={(e) => {
              setText(e.target.value);
              console.log(e);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            onClick={() => {
              console.log(
                `https://api.radar.io/v1/search/autocomplete?query=${text}&near=${lat},${long}`
              );
              const apiUrl = `https://api.radar.io/v1/search/autocomplete?query=${text}&near=${lat},${long}`;
              const requestOptions = {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization:
                    "prj_live_pk_16d3116d3a957d12ac0dfcc9ef6fac44792db811",
                },
              };
              fetch(apiUrl, requestOptions)
                .then((response) => response.json())
                .then((data) => {
                  console.log(data);
                  setRadarlist(data.addresses);
                });
            }}
          >
            Search
          </Button>
        </Grid>
        <Grid item xs={12}>
          <div>
            <List component="nav" aria-label="secondary mailbox folders">
              {list.map((listItem) => (
                <ListItem button>
                  <ListItemText
                    primary={listItem.placeLabel || listItem.addressLabel}
                    secondary={listItem.formattedAddress}
                    onClick={() => {
                      setClickedLat(listItem.latitude);
                      props.latchange(listItem.latitude);
                      setClickedLong(listItem.longitude);
                      props.longchange(listItem.longitude);
                      props.locationNamechange(
                        (listItem.placeLabel || listItem.addressLabel) +
                          listItem.formattedAddress
                      );
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div id="map">
            <Gmap lat={clickedlat} long={clickedlong} />
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
