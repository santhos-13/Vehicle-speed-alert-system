import './App.css';
// import Maps from './components/Maps/Maps';
import Rangeslider from './components/Rangeslider/Rangeslider';
import Inputgroup from './components/Inputgroup/Inputgroup';
// import Rangeslidercss from './components/Rangeslider/Rangeslidercss';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ToggleColorMode, { Fromto } from './components/ColorChange/ColorChange';

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

function App() {
  return (
    <div className="App">
      <Inputgroup/>
      <ToggleColorMode/>
      {/* <Maps/> */}
      <Rangeslider/>
    </div>
  );
}

export default App;
