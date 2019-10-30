import React, { Component }  from 'react';
import MessageItem from './MessageItem';
import MessageBar from './MessageBar';

export default class MessageList extends Component {

    render() {
           return (
             <ul className="message-list">
               {this.props.messages.map(message => (
                <li key={message.id}>{message.text}</li>
               ))}
             </ul>
           );
    }
}