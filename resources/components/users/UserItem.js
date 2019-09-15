import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

// Ant UI
import {
  Avatar,
  Typography,
} from "antd";

const { Text } = Typography;


const UserItem = (props) => {
  const {
    user: {
      username,
      roomId,
      country,
      image,
      isOnline,
      isCurrent,
      hasUnredMessages,
    },
    loadRoom,
    match,
  } = props;

  const activeClass = isCurrent ? "user-item--current" : "";
  const notificationClass = hasUnredMessages? "user-item--has-new-message" : "";
  const onlineMod = isOnline ? "user-item__avatar--is-online" : "";
  const avatarSrc = image ? `/avatars/${image}` : null;

  return (
    <Link
      to={`${match.url}/${roomId}`}
      className={`user-item ${activeClass} ${notificationClass}`}
      onClick={ () => loadRoom( roomId ) }
    >
      <span className='user-item__inner'>
        <span className={`user-item__avatar ${onlineMod}`}>
          <Avatar src={avatarSrc} size={45} icon="user" className='user-item__icon'/>
        </span>
        <span className='user-item__info'>
          <Text strong={true} ellipsis={true} className='user-item__text'>{ username }</Text>
          <Text className='user-item__text'>{ country }</Text>
        </span>
      </span>
    </Link>
  )
};

export default withRouter(UserItem);