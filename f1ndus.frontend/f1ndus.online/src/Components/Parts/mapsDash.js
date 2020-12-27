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
        lat: props.lat,
        lng: props.long,
      }}
    >
      {props.list.map((listElement) => {
        console.log(listElement);
        return (
          <Marker
            position={{
              lat: listElement[1],
              lng: listElement[0],
            }}
            label={listElement[4]}
            onClick={() => {
              console.log("marker clicked");
            }}
          />
        );
      })}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(MapContainer);
