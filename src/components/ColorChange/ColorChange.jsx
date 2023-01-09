import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, FormControl, FormLabel, Input, useColorMode } from "@chakra-ui/react";
import React from "react"
import ReactDOM from 'react-dom/client';

const ToggleColorMode = () => {
  const {colorMode, toggleColorMode} = useColorMode();  
  return(
    <Button onClick={() => toggleColorMode()} pos = 'absolute' top="0" right="0" m="1rem" colorScheme='teal' variant='ghost'>
      {colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}
    </Button>  
  );
} 

export default ToggleColorMode;