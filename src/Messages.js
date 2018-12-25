import React, { Component } from 'react'

 class Messages extends Component {
  render() {
      if(!this.props.tmessages){
        return null;
      }
      
      const listItems = this.props.tMessages.map((message)=><li>{message}</li>);

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
