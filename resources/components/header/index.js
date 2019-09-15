import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Ant UI
import { Icon, Button } from 'antd';
import { logout } from "../../store/auth";


const Menu = ({ logout }) => {
  return (
    <div className='cv-header'>
      <div className='cv-header__inner'>
        <Link to='/im' className='logo'>
          <Icon type="mail" />
          <span className='logo__text'>Convert</span>
        </Link>
        <nav className='header-navigation'>
          <ul className='navigation-list'>
            <li className='navigation-list__item'>
              <Link to='/profile' className='ant-btn navigation-list__link ant-btn-primary ant-btn-round'>
                <Icon type="user" />
                <span>Profile</span>
              </Link>
            </li>
            <li className='navigation-list__item'>
              <Button shape="round" icon="logout" type="primary" onClick={logout} className='navigation-list__link'>Logout</Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
};

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  }
};

const actionCreators = {
  logout,
};

export default connect(mapStateToProps, actionCreators)(Menu);