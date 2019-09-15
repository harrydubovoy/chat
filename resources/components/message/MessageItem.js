import React from 'react';
import { formatedDate } from '../../utils';


const MessageItem = ({ message }) => {
  const {
    textMessage,
    date,
    isAuthor,
  } = message;

  const activeClass = isAuthor ? 'message-item--author' : '';

  return (
    <div className={`message-item ${ activeClass }`}>
      <div className='message-item__inner'>
        <div className='message-item__text'> { textMessage } </div>
        <div className='message-item__date'>{ formatedDate(date) }</div>
      </div>
    </div>
  )
};

export default MessageItem;