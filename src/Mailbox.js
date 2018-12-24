import React, { Component } from 'react';

class Mailbox extends Component {
    render() {
        
    const unreadMessages = this.props.unreadMessages;
        return (
            <div>
                <h1>Hello !</h1>
                <h2>
                    You have {unreadMessages.length} unread messages.
                    </h2>
            </div>
        );
    }
}

export default Mailbox;