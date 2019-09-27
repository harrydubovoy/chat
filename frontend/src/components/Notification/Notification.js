import React from "react";
import { notification, Icon } from 'antd';

import notificationType from './types';

const Notification = (description, type) => {
  const {
    message,
    icon: { name, color }
  } = notificationType[type];

  notification.open({
    message,
    description,
    icon: <Icon type={name} style={{ color }} />,
  });
};

export default Notification;