import React from 'react';

import MessageList from "../message";
import MessageSend from "../message/MessageSend";

const Room = () => {
  return (
    <div className='cv-messages'>
      <MessageList />
      <MessageSend />
    </div>
  )
};

export default Room;