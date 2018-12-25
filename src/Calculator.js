import React, { Component } from 'react';

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
             </fieldset>
        );
    }
}

export default Calculator ;