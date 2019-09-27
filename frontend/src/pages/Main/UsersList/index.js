import React, { Component } from 'react';
import { connect } from "react-redux";

// Actions
import {
  setCurrentRooms,
  getRooms,
} from "../../../store/rooms";

// Selectors
import { selectCurrentRoom } from "../../../store/rooms";
import { selectUnreadMessages } from "../../../store/messages";
import { selectUsers } from "../../../store/users";

// Components
import UserItem from './UserItem';


class UsersList extends Component {

  handleLoadRoom = (id) => {
    this.props.setCurrentRooms(id);
    this.props.getRooms(id);
  };

  render() {
    const {
      users,
      currentRoom,
      unreadMessages,
    } = this.props;

    return (
      <div className="cv-contacts">
        <ul className='users-list'>
          {
            users.map((user) => {
              const { roomId } = user;
              const isCurrent = currentRoom === roomId;
              const hasUnreadMessages = unreadMessages.includes(roomId);

              return (
                <li className='users-list__item' key={ roomId }>
                  <UserItem
                    user={{ ...user, isCurrent, hasUnreadMessages }}
                    loadRoom={ this.handleLoadRoom }
                  />
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: selectUsers(state),
  currentRoom: selectCurrentRoom(state),
  unreadMessages: selectUnreadMessages(state),
});

const actionCreators = {
  setCurrentRooms,
  getRooms,
};

export default connect(mapStateToProps, actionCreators)(UsersList);