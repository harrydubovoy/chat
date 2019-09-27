import React from 'react';
import { connect } from "react-redux";

// Ant UI
import { Empty } from 'antd';

// Selectors
import { selectCurrentRoom } from "../../../store/rooms";


const RoomPlaceholder = ({ currentRoom }) => {
  return (
    ! currentRoom && (
      <div className="cv-content__messages-empty">
        <Empty description="Please select a chat to start messaging" />
      </div>
    )
  )
};

const mapStateToProps = state => ({
  currentRoom: selectCurrentRoom(state),
});

export default connect(mapStateToProps)(RoomPlaceholder);