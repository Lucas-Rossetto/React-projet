import React, { Component }  from 'react';
import MessageItem from './MessageItem';

export default class MessageList extends Component {

    render() {
        return (
          <ul>
            {this.props.items.map(item => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        );
      }
}