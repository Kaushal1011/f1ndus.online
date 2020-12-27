import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { useScrollTrigger } from "@material-ui/core";

import Box from "@material-ui/core/Box";

const MapContainer = (props) => {
  const mapStyles = {
    width: "100%",
    height: "100%",
  };
  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      center={{
        lat: -34.397,
        lng: 150.644,
      }}
    >
      <Marker
        position={{
          lat: -34.397,
          lng: 150.644,
        }}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(MapContainer);
