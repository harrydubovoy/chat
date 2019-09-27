import React from "react";
import { notification, Icon } from 'antd';

const MessageNotification = (message, description) => {
  notification.open({
    message,
    description,
    icon: <Icon type='mail' />,
  });
};

export default MessageNotification;