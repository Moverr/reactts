import React, { Component } from 'react'

 class Messages extends Component {
  render() {
      if(!this.props.tMessages){
        return null;
      }      
      const listItems = this.props.tMessages.map((message)=><li key={message.toString()}>{message}</li>);
    return (
      <div>
          <ul>              
            {listItems}
          </ul>
      </div>
    )
  }
}

export default Messages;
