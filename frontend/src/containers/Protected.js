import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";


const Protected = (props) => {

  const {
    auth,
    children
  } = props;

  return auth._id ? children : <Redirect to={{ pathname: '/login' }} />;
};


const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
};

export default connect(mapStateToProps)(Protected);