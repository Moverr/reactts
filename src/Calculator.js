import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';



class Calculator  extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temperature:''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
     
   
    handleChange(e){
        // e.preventDefault();
        this.setState({
            temperature: e.target.value
        });
    }

    render() {

        const temperature= this.state.temperature;
        return (
             <fieldset>
                 <legend>Enter temprature in celcius</legend>
                  <input value={temperature} onChange={this.handleChange} />

                  <BoilingVerdict celcius={parseFloat(temperature)} />
             </fieldset>
        );
    }
}

export default Calculator ;