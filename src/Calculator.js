import React, { Component } from 'react';
import BoilingVerdict from './boilingVerdict';


class Calculator  extends Component {

     
   
    handleChange(e){
        e.preventDefault();
    }

    render() {

        const temperature= this.state.temperature;
        return (
             <fieldset>
                 <legend>Enter temprature in celcius</legend>
                  <input value={temperature} onChange={handleChange} />

                  <BoilingVerdict celcius={parseFloat(temperature)} />
             </fieldset>
        );
    }
}

export default Calculator ;