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
    const { messages, error, loading } = this.props;
    console.log(messages)
    if (error) {
      return <div>Error! {error.message}</div>;
    }
    if (loading) {
      return <div>Loading....</div>;
    }
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
  messages: state.messages.items,
  loading: state.messages.loading,
  errno: state.messages.error
});

export default connect(mapSateToProps)(MessageList);
