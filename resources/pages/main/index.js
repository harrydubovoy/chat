import React from 'react';
import { Route } from "react-router-dom";

// Layout
import BaseWrap from '../../containers/Base';

// Components
import UsersList from '../../components/users';
import Room from '../../components/room';
import RoomPlaceholder from '../../components/room/RoomPlaceholder';


const Main = () => {
  return (
    <BaseWrap>
      <div className="cv-content__main">
        <div className="cv-content__contacts">
          <UsersList />
        </div>
        <div className="cv-content__messages">
          <RoomPlaceholder />
          <Route path={'/im/:id'} component={ Room } />
        </div>
      </div>
    </BaseWrap>
  )
};

export default Main;