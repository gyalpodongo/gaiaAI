import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import Button from '@material-ui/core/Button';

const MapContainer = ({ array, isAdding }) => {

  const [ selected, setSelected ] = useState({});
  const [ currentPosition, setCurrentPosition ] = useState({});
  const [ currentAdress, setCurrentAdress] = useState({});

  const markerRef = useRef(null);

  const defaultCenter = {
    lat: 42.3601, lng: -71.0589
  }

  const onSelect = item => {
    setSelected(item);
  }

  const success = (position) => {
    console.log(position);
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const currentPosition = {
      lat: latitude,
      lng: longitude
    }
    setCurrentPosition(currentPosition);
  }

  const onMarkerDragEnd = (e) => {
    console.log(e);
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng})
  };

  const footer = (
    <div className="footer">
      <div className="inner-footer">
      <span className="location-text">Choose location and press</span>
      <Button variant="contained" color="primary" onClick={() => getLocation(currentPosition)}>
        Next
      </Button>
      </div>
    </div>
  );
  const getLocation = (position)=>{
    const latlng = new window.google.maps.LatLng(position.lat, position.lng)
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ 'latLng': latlng },  (results, status) =>{
        if (status !== window.google.maps.GeocoderStatus.OK) {
            alert(status);
        }
        // This is checking to see if the Geoeode Status is OK before proceeding
        if (status == window.google.maps.GeocoderStatus.OK) {
            console.log(results);
            var address = (results[0].formatted_address);
        }
    });
  }
  const mapStyles = () => {
    if (!isAdding) {
      return {
        marginTop: "-20px",
        height: "100vh",
        width: "100%"
      }
    } else {
      return {
        marginTop: "-20px",
        height: "80vh",
        width: "100%"
      }
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  })

     return (
    <>
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyA9qncsDnocysjsJLjZMFxwG_MyXD79vXQ"
      >
        <GoogleMap
          id='example-map'
          mapContainerStyle={mapStyles()}
          draggable={true}
          zoom={13}
          center={currentPosition.lat ? currentPosition : defaultCenter}
        > 
        <Marker
            position={currentPosition.lat ? currentPosition : defaultCenter}
            ref={() => markerRef}
            onDragEnd={(e) => onMarkerDragEnd(e)}
            draggable={true} />
          
        </GoogleMap>
    
      </LoadScript>
      {
        true ?
        footer :
        null
      }
    </>
     )
  }

export default MapContainer;