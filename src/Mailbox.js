import React, { Component } from 'react';

class Mailbox extends Component {

     constructor(props) {
         super(props);
         this.getMst = this.getMst.bind(this);
     }
     
    render() {
       this.validate();
        
    const unreadMessages = this.props.unreadMessages;
        return (
            <div>
                <h1>Hello !</h1>
                {this.getMst(unreadMessages)}
            </div>
        );
    }

validate = () =>{
    if(!this.props.unreadMessages){
        return null;
    }
}   

 getMst(unreadMessages) {
    return <h2> You have {unreadMessages.length} unread messages. </h2>;
}


}

export default Mailbox;
