import React from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import queryString from 'query-string';

const MapContainer = props => {
  const queryValues = queryString.parse(props.location.search);
  return (
    <Map
      google={props.google}
      zoom={8}
      className="map"
      initialCenter={{lat: queryValues.lat, lng: queryValues.lng}}>
      <Marker position={{lat: queryValues.lat, lng: queryValues.lng}} />
    </Map>
  );
};

//Ideally, we would store the api key in a secret store or ENV file
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo',
})(MapContainer);
