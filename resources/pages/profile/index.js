import React from 'react';

// Ant UI
import {
  PageHeader,
} from "antd";

// Layout
import BaseWrap from '../../containers/Base';

// Component
import UploadImage from "../../components/upload-image";
import ProfileForm from "../../components/profile-form";

const Profile = ({ history: { goBack } }) => {
  return (
    <BaseWrap>
      <div className="cv-content__profile">
        <div className='cv-content__profile-header'>
          <PageHeader onBack={goBack} title="Profile" subTitle="customize your profile" />
        </div>
        <div className="cv-content__profile-form">
          <div className="row">
            <div className="col-4">
              <UploadImage />
            </div>
            <div className="col-8">
              <ProfileForm />
            </div>
          </div>
        </div>
      </div>
    </BaseWrap>
  )
};

export default Profile;