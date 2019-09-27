import React from 'react';
import { Route } from "react-router-dom";

// Layout
import BaseWrap from '../../containers/Base';

// Modules
import UsersList from './UsersList';
import MessageList from "./MessageList";
import MessageSend from "./MessageSend";
import RoomPlaceholder from './RoomPlaceholder';


const Main = () => {
  return (
    <BaseWrap>
      <div className="cv-content__main">
        <div className="cv-content__contacts">
          <UsersList />
        </div>
        <div className="cv-content__messages">
          <RoomPlaceholder />
          <Route
            path={'/im/:id'}
            render={() => (
              <div className='cv-messages'>
                <MessageList />
                <MessageSend />
              </div>
          )} />
        </div>
      </div>
    </BaseWrap>
  )
};

export default Main;