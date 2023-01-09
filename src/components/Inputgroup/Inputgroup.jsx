import React from "react";
import ReactDOM from "react-dom";
import Maps from "../Maps/Maps";
import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightElement, useColorMode } from "@chakra-ui/react";
import { DirectionsRenderer } from "react-google-maps";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { ArrowForwardIcon, ArrowUpDownIcon, PhoneIcon } from "@chakra-ui/icons";

// import { Select } from "@chakra-ui/react";




const Inputgroup = () => {
    
    // const { isLoaded } = useJsApiLoader({
        // class Map extends React.Component{
        //     state = {
        //         directions: null,
        
        
        // };}
    //     id: 'google-map-script',
    //     googleMapsApiKey: "AIzaSyB1heQTaBN9zC22DqdRlOmql4sLlh5WaL8"
    //   })
    // type DirectionsResult = new window.google.maps.DirectionsResult();
    const latlongs =[]
    var directionsService = new window.google.maps.DirectionsService();
    var directionsRenderer = new window.google.maps.DirectionsRenderer();

     var input1autocomplete = new window.google.maps.places.Autocomplete(
         document.getElementById("input1")
         );
    var input2autocomplete = new window.google.maps.places.Autocomplete(
        document.getElementById("input2")
    );
    // var DirectionResult = new window.google.maps.DirectionsResult();
    
    
    const [origin, setOrigin] = React.useState("");
    const [destination, setDestination] = React.useState("");
    const [directions, setDirections] = React.useState(null);   
    const [finallatlongs, setFinalLatlongs] = React.useState([]);
    // const [latlongs, setLatlongs] = React.useState(null);

    // const handlechange = (e,value) => {
    //     console.log(value)
        
    //     setOrigin(e.target.value);
    //     console.log(e.target.value);
    //     };

        
    // const handleChange2 = (e) => {
    //     setDestination(e.target.value);
    //     console.log(e.target.value);
    //     };
    
    const scrollToBottom = () =>{ 
        window.scrollTo({ 
            top: document.documentElement.scrollHeight, 
            behavior: 'smooth'
           
        }); 
    };
    const handleSubmit = (e) => {
        scrollToBottom();
        const input1 = document.getElementById("input1").value
        const input2 = document.getElementById("input2").value
        // console.log(input1)
        // console.log(origin)
        setOrigin(input1)
        setDestination(input2)
        e.preventDefault();
        // console.log("origin: " + origin);
        // console.log("destination: " + destination);
        calculateAndDisplayRoute(directionsService, directionsRenderer)
        console.log(finallatlongs);
        function calculateAndDisplayRoute(directionsService, directionsRenderer){
//             fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=${input1}&destination=${input2}&key=AIzaSyAkZEEYr7f9GW_63YQB6GuJA5rqnij7_JA`, {
//                 method: 'GET',
//                 headers: {
                    
// "Access-Control-Allow-Headers" : "Origin, Content-Type, Accept",
//                     "Access-Control-Allow-Origin": "*",
//                     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//                     "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
//                     }
//                     }
//                     )
            
//             .then(response => response.json())
            
//             .then(data =>{
//                 console.log(data);
//                 const path1 = data["routes"][0]["legs"][0]["steps"]; 
//                 const totlength = path1.length;
//                 for(let i = 0; i < totlength; i++){
//                     const templength = path1[i]["lat_lngs"].length;
//                     for(let j = 0; j < templength; j++){
//                         latlongs.push(path1[i]["lat_lngs"][j]["lat"]());
//                         latlongs.push(path1[i]["lat_lngs"][j]["lng"]());
//                     }
//                 }
//                 console.log(latlongs);
//             })
//             // .then(data => console.log(data.routes[0].legs[0].steps[0].lat_lngs[0].lat()))
//             .catch(error => console.log(error));


            directionsService.route(
                {
                    origin: input1,
                    destination: input2,
                    travelMode: window.google.maps.TravelMode.DRIVING,
                    // header: {
                    //     "Access-Control-Allow-Origin": "*",
                    //     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                    //     "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
                    // }
                },
                (response, status) => {
                    if (status === "OK") {
                        // console.log(response);
                        // console.log(response.routes[0].legs[0].steps[0].lat_lngs[0].lat());
                        setDirections(response)
                        const path1 = response["routes"][0]["legs"][0]["steps"]; 
const totlength = path1.length;
for(let i = 0; i < totlength; i++){
    const templength = path1[i]["lat_lngs"].length;
    for(let j = 0; j < templength; j++){
        latlongs.push(path1[i]["lat_lngs"][j]["lat"]());
        latlongs.push(path1[i]["lat_lngs"][j]["lng"]());
    }
}
console.log(latlongs);
// console.log(typeof(latlongs[0]));
// console.log(latlongs[0]);
setFinalLatlongs(...latlongs);
console.log(finallatlongs);
return latlongs;
                        // directionsRenderer.setDirections({direction:response});
                        // this.setState({ directions: response });
                    } else {
                        window.alert("Directions request failed due to " + status);
                    }
                }
            );
        }
        // findspeedlimits()
    };

    // const findspeedlimits = () => {
    //     fetch("https://roads.googleapis.com/v1/speedLimits?path=60.170880,24.942795|60.170879,24.942796|60.170877,24.942796&key=AIzaSyB1heQTaBN9zC22DqdRlOmql4sLlh5WaL8")
    //     .then(response => response.json())
    //     .then(data => console.log(data))

    // };



    return (
     
        <div class="input-group mb-3 w-100 ml-2 d-flex flex-column justify-content-center align-items-center">
            <div class="w-25 d-flex flex-row justify-content-center align-items-center mt-1">

  <div class="input-group-prepend">
  </div>
  <InputGroup>
  <InputRightElement
      pointerEvents='none'
      children={<ArrowUpDownIcon color='gray.300' />}
    />
  <InputLeftAddon children='Origin' color='teal'/>
  <Input color='teal' type="text" class="form-control" id = "input1" placeholder="start point" aria-label="Username" _placeholder={{ opacity: 0.3, color: 'inherit' }} aria-describedby="basic-addon1" variant='outline' colorScheme='teal'></Input>
  </InputGroup>          
            </div>
            <div class="w-25 d-flex flex-row justify-content-center align-items-center mt-2">

  <div class="input-group-prepend">
    {/* <span class="input-group-text" id="basic-addon1">Destination</span> */}
  </div>
  <InputGroup >
  <InputRightElement
        pointerEvents='none'
        children={<ArrowUpDownIcon color='gray.300' />}
    />
  <InputLeftAddon children='Destination' color='teal' />
  <Input color='teal' type="text" class="form-control" id = "input2" placeholder="end point" _placeholder={{ opacity: 0.3, color: 'inherit' }} aria-label="Username" aria-describedby="basic-addon1" variant='outline' colorScheme='teal'></Input>
  </InputGroup>
            </div>
            {/* <div class="w-25 h-20 d-flex flex-row justify-content-center align-items-center mt-1 " >


  <select class="form-select form-select-lg" type="text" aria-label=".form-select-lg example">
  <option selected>Choose travel mode</option>
  <option value="1"></option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>   
            </div> */}
            <Button type="button" class="btn btn-light mt-2" onClick={handleSubmit} colorScheme='teal' variant='ghost' rightIcon={<ArrowForwardIcon/>} margin='2'>Start</Button>
    <Maps directions={directions}  latlongs={latlongs}/>
    {/* <DirectionsRenderer directions={this.state.directions}/> */}
</div>

    );
    }



export default Inputgroup;  