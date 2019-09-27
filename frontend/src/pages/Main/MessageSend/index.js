import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";

// Utils
import { throttle } from '../../../utils'

// Ant UI
import {
  Input,
} from 'antd';

const { TextArea } = Input;

// Selectors
import { selectCurrentRoom } from "../../../store/rooms";

// Actions
import { sendMessage } from "../../../store/rooms";
import { startTyping, endTyping } from "../../../utils/actions";


class MessageSend extends Component {

  state = {
    textMessage: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { target: { value } } = event;
    const {
      match: { params: { id }},
      auth: { _id: userId },
      sendMessage,
      endTyping,
    } = this.props;

    if(value) {
      sendMessage(id, value, userId);
      endTyping(id);
      this.setState({ textMessage: '' })
    }
  };

  handleInput = (event) => {
    const { target: { value } } = event;
    this.setState({ textMessage: value })
  };

  debounceInput = throttle(() => {
    const {
      match: { params: { id }},
      startTyping,
    } = this.props;

    startTyping(id)
  }, 2000);

  render() {

    return (
      <form action="" className='cv-messages__form'>
        <div className='cv-messages__form-input'>
          <TextArea
            placeholder="Enter your message..."
            value={this.state.textMessage}
            onPressEnter={this.handleSubmit}
            onChange={this.handleInput}
            onKeyUp={this.debounceInput}
            autosize
          />
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    currentRoom: selectCurrentRoom(state)
  }
};

const actionCreators = {
  sendMessage,
  startTyping,
  endTyping,
};

export default connect(mapStateToProps, actionCreators)(withRouter(MessageSend));