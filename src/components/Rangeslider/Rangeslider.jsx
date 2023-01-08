import React, { useState } from 'react';
import './Rangeslider.css';



function Rangeslider(){
    const [value, setValue] = useState(0);
    
      const handleChange = (e) => {
        setValue(e.target.value);
        console.log(e.target.value);
        };
    return(


        
        
        <div className="range-slider">
            
            <input type="range" min="0" max="200" value={value } className="range" id="myRange"  onChange={handleChange} onMouseMove={handleChange} />
            <p> <span id="rangeValue">{value} </span><span id='unit'> km/hr</span></p>
        </div>
       
       
    

    )
}


export default Rangeslider;