import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import { useState, useEffect } from "react";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import YourInfo from "../Parts/AreYouAnExp/Info";
import Location from "../Parts/AreYouAnExp/Location";
import Review from "../Parts/AreYouAnExp/Review";
import UserNav from "../Parts/UserNav";
import { server_addr } from "../../config.js";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Your Information", "Location", "Review "];

export function Ruexp() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [userName, setuserName] = React.useState(0);
  const [password, setpassword] = React.useState(0);
  const [Type, setType] = React.useState(0);
  const [Description, setDescription] = React.useState(0);
  const [lat, setlat] = React.useState(0);
  const [long, setlong] = React.useState(0);
  const [locationName, setlocationName] = React.useState(0);
  const [photourl, setPhotourl] = React.useState(
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F297378381615706224%2F&psig=AOvVaw3F5ShJritBrcQRdBHI2LI4&ust=1609159413975000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjpqo2Y7u0CFQAAAAAdAAAAABAD"
  );

  // function CbYourInfo(type, desc) {
  //   setType(type);
  //   setDescription(desc);
  //   console.log(type);
  // }
  // function CbLocation(lat, long) {
  //   setlat(lat);
  //   setlong(long);
  // }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <YourInfo
            userNamechange={setuserName}
            passwordchange={setpassword}
            typechange={setType}
            descchange={setDescription}
          />
        );
      case 1:
        return (
          <Location
            latchange={setlat}
            longchange={setlong}
            locationNamechange={setlocationName}
          />
        );
      case 2:
        return (
          <Review
            userName={userName}
            password={password}
            type={Type}
            desc={Description}
            lsName={locationName}
            photourl={photourl}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <UserNav />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Are You An Experience
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you .
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    const apiUrl = `http://${server_addr}/api/v1/post`;
                    const requestOptions = {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        username: userName,
                        type: Type,
                        description: Description,
                        location_name: locationName,
                        long: long,
                        lat: lat,
                        activeuntil: Date.now() + 200000000000,
                        activefrom: Date.now(),
                        image: photourl,
                      }),
                    };
                    fetch(apiUrl, requestOptions)
                      .then((response) => response.json())
                      .then((data) => {
                        console.log(data);
                      });
                  }}
                  className={classes.button}
                >
                  Book Slot
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Next
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
