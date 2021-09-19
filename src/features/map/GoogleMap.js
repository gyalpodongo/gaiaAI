import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import Button from '@material-ui/core/Button';
import MapChart from './MapChart';
import { flexbox } from '@material-ui/system';

const MapContainer = ({ array, isAdding }) => {

  const [ selected, setSelected ] = useState(false);
  const [ currentPosition, setCurrentPosition ] = useState({});
  const [ currentAdress, setCurrentAdress] = useState({});

  const markerRef = useRef(null);

  const defaultCenter = {
    lat: 32.7767, lng: -96.7970
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
    
      <div className="inner-footer">
      <span className="location-text">Choose location and Calculate</span>
      <Button variant="contained" color="primary" onClick={() => getLocation(currentPosition)}>
        Calculate
      </Button>
      </div>
    
  );
  const getLocation = (position)=>{
    const latlng = new window.google.maps.LatLng(position.lat, position.lng)
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ 'latLng': latlng },  (results, status) =>{
        if (status !== window.google.maps.GeocoderStatus.OK) {
            alert(status+"Please Zoom In");
        }
        // This is checking to see if the Geoeode Status is OK before proceeding
        if (status == window.google.maps.GeocoderStatus.OK) {
            try{
            setSelected(true);
            console.log(results);
            var address = (results[0].formatted_address);
            let state = results[0].address_components[5].short_name
            console.log(state)
            let county = results[0].address_components[4].short_name
            let short_county = county.substring(0,county.lastIndexOf(" "));
            console.log(short_county)
            setCurrentAdress({"state":state,"county":short_county});
            
            console.log(selected);
            }
            catch(e){
                alert("not valid input click a place in the US");
            }

        }
    });
  }
  const mapStyles = () => {
    
      return {
       

        marginTop: "3em",
        marginLeft: "25%",
        height: "50vh",
        width: "50%"
      }
    
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  })
 
     return (
    <>
    <p>**This only works for the us**</p>
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyA9qncsDnocysjsJLjZMFxwG_MyXD79vXQ"
      >
        <GoogleMap
          id='example-map'
          mapContainerStyle={mapStyles()}
          draggable={true}
          zoom={3}
          center={currentPosition.lat ? currentPosition : defaultCenter}
        > 
        <Marker
            position={currentPosition.lat ? currentPosition : defaultCenter}
            ref={() => markerRef}
            onDragEnd={(e) => onMarkerDragEnd(e)}
            draggable={true} />
          
        </GoogleMap>
        {
            selected?
            (
              <InfoWindow
              position={currentPosition}
              onCloseClick={() => setSelected(false)}
            >
              <div className="infowindow">
                <p>{"Data"}</p>
                {/* <img src={selected.image} className="small-image" alt="rental"/> */}
                <p>Date: {"Data"}</p>
                {/* <p>sqm2: {selected.sqm}</p> */}
                {/* <p>bedrooms: {selected.bedrooms}</p> */}
              </div>
            </InfoWindow>
            ) : null
          }
      </LoadScript>
      {footer}
      
    </>
     )
  }

export default MapContainer;