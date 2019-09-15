import React from "react"

// Ant UI
import { notification, Icon } from 'antd';

export const notificationType = {
  success: {
    message: 'Done!',
    icon: {
      name: 'check',
      color: '#d3f261'
    }
  },
  warning: {
    message: 'Oops.',
    icon: {
      name: 'exclamation',
      color: '#ffc069'
    }
  },
  error: {
    message: 'Oh no!',
    icon: {
      name: 'close',
      color: '#ff7875'
    }
  },
};

export const Notification = (description, type) => {
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

export const MessageNotification = (message, description) => {
  notification.open({
    message,
    description,
    icon: <Icon type='mail' />,
  });
};