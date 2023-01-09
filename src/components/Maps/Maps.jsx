// import React from 'react';
// import { withGoogleMap, withScriptjs, GoogleMap, Polyline, Marker } from 'react-google-maps'

// class Map extends React.Component {
//   state = {
//     progress: [],
//   }

//   path = [
//     { lat: 18.558908, lng: -68.389916 },
//     { lat: 18.558853, lng: -68.389922 },
//     { lat: 18.558375, lng: -68.389729 },
//     { lat: 18.558032, lng: -68.389182 },
//     { lat: 18.558050, lng: -68.388613 },
//     { lat: 18.558256, lng: -68.388213 },
//     { lat: 18.558744, lng: -68.387929 },
//   ]

//   velocity = 5
//   initialDate = new Date()

//   getDistance = () => {
//     // seconds between when the component loaded and now
//     const differentInTime = (new Date() - this.initialDate) / 1000 // pass to seconds
//     return differentInTime * this.velocity // d = v*t -- thanks Newton!
//   }

//   componentDidMount = () => {
//     this.interval = window.setInterval(this.moveObject, 10000)
//   }

//   componentWillUnmount = () => {
//     window.clearInterval(this.interval)
//   }

//   moveObject = () => {
//     console.log("hello")
//     const distance = this.getDistance()
//     if (! distance) {
//       return
//     }

//     let progress = this.path.filter(coordinates => coordinates.distance < distance)

//     const nextLine = this.path.find(coordinates => coordinates.distance > distance)
//     if (! nextLine) {
//       this.setState({ progress })
//       return // it's the end!
//     }
//     const lastLine = progress[progress.length - 1]

//     const lastLineLatLng = new window.google.maps.LatLng(
//       lastLine.lat,
//       lastLine.lng
//     )

//     const nextLineLatLng = new window.google.maps.LatLng(
//       nextLine.lat,
//       nextLine.lng
//     )

//     // distance of this line 
//     const totalDistance = nextLine.distance - lastLine.distance
//     const percentage = (distance - lastLine.distance) / totalDistance

//     const position = window.google.maps.geometry.spherical.interpolate(
//       lastLineLatLng,
//       nextLineLatLng,
//       percentage
//     )

//     progress = progress.concat(position)
//     this.setState({ progress })
//   }

//   componentWillMount = () => {
//     // console.log(this.path)
//     this.path = this.path.map((coordinates, i, array) => {
//       if (i === 0) {
//         return { ...coordinates, distance: 0 } // it begins here! 
//       }
//       const { lat: lat1, lng: lng1 } = coordinates
//       const latLong1 = new window.google.maps.LatLng(lat1, lng1)

//       const { lat: lat2, lng: lng2 } = array[0]
//       const latLong2 = new window.google.maps.LatLng(lat2, lng2)

//       // in meters:
//       const distance = window.google.maps.geometry.spherical.computeDistanceBetween(
//         latLong1,
//         latLong2
//       )

//       return { ...coordinates, distance }
//     })

//     console.log(this.path)
//   }

//   render = () => {
//     return (
//       <GoogleMap
//         defaultZoom={16}
//         defaultCenter={{ lat: 18.559008, lng: -68.388881 }}
//         >
//           { this.state.progress && (
//             <>
//               <Polyline path={this.state.progress} options={{ strokeColor: "#FF0000 "}} />
//               <Marker position={this.state.progress[this.state.progress.length - 1]} />
//             </>
//           )}
//       </GoogleMap>
//     )
//   }
// }

// const MapComponent = withScriptjs(withGoogleMap(Map))


// const Maps = () => (
  

//   <MapComponent
//   // console.log("hello")
//   googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB9X4dW_ProF_yw5tL3pp7gmjWLCpenZrY"
//   loadingElement={<div style={{ height: `100%` }} />}
//   containerElement={<div style={{ height: `400px`, width: '500px' }} />}
//   mapElement={<div style={{ height: `100%` }} />}
//   />
// )

// export  default Maps



import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './Maps.css'
import { DirectionsRenderer } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
// import { Marker } from '@react-google-maps/api';
import {  PropTypes } from 'prop-types';
import { useEffect } from 'react';
// import {  Marker } from 'google-maps-React';

// import { Marker } from 'react-google-maps';
// import { Marker } from 'react-google-maps';
// import { Marker } from '@react-google-maps/api';
// import 

const containerStyle = {
  width: '1100px',
  height: '400px'
};


const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent(directions) {

  const [response,setResponse] = React.useState(null)
  useEffect(()=>{
    console.log("entered1")

    setResponse(directions.directions)
    // console.log
  },[]
  )



  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAkZEEYr7f9GW_63YQB6GuJA5rqnij7_JA"
  })
  const latlongs = [];
    const [map, setMap] = React.useState(null)
  const [marker, setMarker] = React.useState({ lat: null, lng: null })

  const newmarker = (latlongs) => {
    console.log(latlongs)
    if (latlongs.length > 0) {
        console.log(latlongs[0])
        console.log(latlongs[ 1])
      }
    }
    
    
    useEffect(() => {
      console.log("entered")
      if (response !== null) {
        const path1 = response["routes"][0]["legs"][0]["steps"];
        const totlength = path1.length;
        for (let i = 0; i < totlength; i++) {
          const templength = path1[i]["lat_lngs"].length;
          for (let j = 0; j < templength; j++) {
            latlongs.push(path1[i]["lat_lngs"][j]["lat"]());
            latlongs.push(path1[i]["lat_lngs"][j]["lng"]());
          }
        }
        let updatedvalue = {}
        updatedvalue = { lat:latlongs[0],lng:latlongs[1]}
        setMarker(marker => ({
          ...marker,
          ...updatedvalue
        }));       
         console.log(marker)
      console.log(latlongs);
      newmarker(latlongs);
    }
  }, [response])

  

  




  

  return isLoaded ? (
    <div className='mapsdiv'>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={map => {
          const bounds = new window.google.maps.LatLngBounds();
          map.fitBounds(bounds);
          setMap(map)
        }}
        onUnmount={map => {
          setMap(null)
        }}


      
      >
        <Marker position={marker}/>
        
        { directions.directions &&

         <DirectionsRenderer directions={directions.directions} 
          options={{
            polylineOptions: {
              zIndex: 100,
              strokeWeight: 2.5,

              strokeColor: "#00b0ff"
            }
          }}
          />
          // {/* </div> */}

        }
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
          </GoogleMap>
    {/* </div> */}
          </div>
    
      
  ) : <></>
}







export default MyComponent

MyComponent.propTypes = {
  directions: PropTypes.any,
  latlongs: PropTypes.any
}





