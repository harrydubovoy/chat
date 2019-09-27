import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";

// Ant UI
import { Empty } from 'antd';

// Selectors
import { selectRoom } from "../../../store/rooms";

// Component
import MessageItem from "./MessageItem";

class MessageList extends Component {

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ block: "end" });
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const {
      room,
      auth: { _id: currentUserId },
      messages: { typing },
      match: { params: { id }}
    } = this.props;

    return (
      <ul className='cv-messages__list'>
        {
          room.length ?
            room.map((message) => {
              const { _id, date, textMessage, userId } = message;
              const isAuthor = userId === currentUserId;

              return (
                <li key={ _id } className='cv-messages__list-item'>
                  <MessageItem message={{ textMessage, date, isAuthor }} />
                </li>
              )
            })
            :
            <div className='cv-messages__list-empty'>
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='No message yet'/>
            </div>
        }
        <li ref={(el) => { this.messagesEnd = el; }} className='cv-messages__list-item'>
          <div className='cv-messages__type-info'> { typing === id && 'typing...' }</div>
        </li>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  room: selectRoom(state),
  messages: state.messages
});

export default connect(mapStateToProps)(withRouter(MessageList));