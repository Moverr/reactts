import React, { Component } from 'react'

 class Messages extends Component {
  render() {
      if(!this.props.tMessages){
        return null;
      }
      
      //todo.. map function etc and move on as needed and also as required ::--
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
