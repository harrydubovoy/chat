import React from "react";
import { connect } from "react-redux";

// Ant UI
import {
  Button,
  Form,
  Input,
} from "antd";

// Actions
import { updateProfile } from "../../store/profile";


const handleSubmit = (event, props) => {
  event.preventDefault();

  props.form.validateFields((err, values) => {
    if (!err) {
      props.updateProfile(values)
    }
  });
};

const ProfileForm = (props) => {

  const { getFieldDecorator } = props.form;
  const { profile: {
    username,
    firstName,
    lastName,
    country,
    phone,
  }} = props;

  return (
    <Form onSubmit={(event) => handleSubmit(event, props)} className="profile-form">
      <div className="row justify-content-end">
        <div className="col-12">
          <Form.Item label="Username">
            {getFieldDecorator('username', {
              initialValue: username
            })(
              <Input
                placeholder="johndoe"
              />,
            )}
          </Form.Item>
        </div>
        <div className="col-6">
          <Form.Item label="First Name">
            {getFieldDecorator('firstName', {
              initialValue: firstName
            })(
              <Input
                placeholder="John"
              />,
            )}
          </Form.Item>
        </div>
        <div className="col-6">
          <Form.Item label="Last Name">
            {getFieldDecorator('lastName', {
              initialValue: lastName
            })(
              <Input
                placeholder="Doe"
              />,
            )}
          </Form.Item>
        </div>
        <div className="col-6">
          <Form.Item label="Phone">
            {getFieldDecorator('phone', {
              initialValue: phone
            })(
              <Input
                placeholder="+1234567890"
              />,
            )}
          </Form.Item>
        </div>
        <div className="col-6">
          <Form.Item label="Country">
            {getFieldDecorator('country', {
              initialValue: country
            })(
              <Input
                placeholder="Ukraine"
              />,
            )}
          </Form.Item>
        </div>
        <div className='col-auto'>
          <Button type="primary" htmlType="submit" className="login-form-button">Save</Button>
        </div>
      </div>
    </Form>
  )
};

const WrappedProfileForm = Form.create({ name: 'profile-form' })(ProfileForm);

const mapStateToProps = ({ profile }) => {
  return {
    profile,
  }
};

const actionCreators = {
  updateProfile,
};

export default connect(mapStateToProps, actionCreators)(WrappedProfileForm);
