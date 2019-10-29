import React from 'react';
import MessageList from './MessageList';
import MessageBar from './MessageBar';

export default class Chat extends React.Component {

    render(){
        return (<div className="chat">
            <MessageList/>
            <MessageBar/>
        </div>)
    }
    
}