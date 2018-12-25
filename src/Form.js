import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange= () =>{
        // alert("pass me mover");
    }
    handleSubmit(e){
        // e.preventDefaults();
        e.preventDefault();
        console.log("Let me KNow somethings");
    }

    render() {
        return (
             <form onSubmit={this.handleSubmit}>
                 <label> Name : 
                <input type="text" value={this.state.name}  onChange={this.handleChange} />
                 </label>
                 <br/>
                 <input type="submit" value="Submit" />
             </form>
        );
    }
}

export default Form;