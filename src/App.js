import './App.css';
// import Maps from './components/Maps/Maps';
import Rangeslider from './components/Rangeslider/Rangeslider';
import Inputgroup from './components/Inputgroup/Inputgroup';
// import Rangeslidercss from './components/Rangeslider/Rangeslidercss';
import React from 'react';
// import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    // <ChakraProvider>

    <div className="App">
      <Inputgroup/>
      {/* <Maps/> */}
      <Rangeslider/>
    </div>
    // </ChakraProvider>
  );
}

export default App;
