import React, { Component } from 'react';

class FancyBorder extends Component {
    render() {
        return (
        
            <div className={'FancyBorder FancyBorder'+this.props.color}>
             
                {this.props.children}
                <div>
                     
                    {this.props.poki}
                    
                </div>
            </div>
        );
    }
}

export default FancyBorder;