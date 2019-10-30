import React from 'react';
import MessageList from './MessageList';
import MessageBar from './MessageBar';
import index from '../index.css';
import { createStore } from 'redux'

export default class Chat extends React.Component {

    constructor(props){
        super(props);
        this.state = { messages: []};
        this.addMessage = this.addMessage.bind(this);
    }

    addMessage(message) {

        this.setState(state => ({
            messages: state.messages.concat(message),
          }));
    }

    render(){
        return (<div className="chat">
            <MessageList messages={this.state.messages}/>
            <MessageBar addMessage={this.addMessage}/>
        </div>)
    }
    
}