import React, { Component } from 'react';

class Calculator  extends Component {
    boilingVerdict(props){
        if(props.celcius >= 100){
            return <p>The water would boil. </p>
        }
        return <p> The water would not boil. </p>
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Calculator ;