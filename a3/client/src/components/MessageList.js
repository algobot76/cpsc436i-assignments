import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import { fetchMessages } from '../actions';

import './MessageList.css';

class MessageList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMessages());
  }

  render() {
    const { messages } = this.props;
    console.log(messages);

    return (
      <ul>
        {messages.map(message => (
          <Message key={message.id} msg={message.data.msg} />
        ))}
      </ul>
    );
  }
}

const mapSateToProps = state => ({
  messages: state.messages,
  loading: state.loading,
  errno: state.error
});

export default connect(mapSateToProps)(MessageList);
