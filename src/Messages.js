import React, { Component } from 'react'

 class Messages extends Component {
  render() {
      if(!this.props.tmessages){
        return null;
      }
      
      const listitems = this.props.tmessages.map((message)=><li>{message}</li>);

    return (
      <div>
          <ul>              
            {listitems}
          </ul>
      </div>
    )
  }
}

export default Messages;
