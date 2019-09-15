import React, { Component } from 'react';
import { connect } from "react-redux";

// Ant UI
import {
  Button,
  Spin,
  Icon,
} from "antd";

// Actions
import {
  deleteImage,
  uploadImage
} from "../../store/profile";


class UploadImage extends Component {

  render() {
    const {
      profile: {
        imageLoading,
        image,
      },
      deleteImage,
      uploadImage
    } = this.props;

    const imageSrc = image ? `/avatars/${image}` : null;

    return (
      <form className='upload-image'>
        { !image ?
          <div className='upload-image__button-upload'>
            <Icon type="upload"/>
            <input type='file' name='image' className='upload-image__input' onChange={uploadImage}/>
          </div>
          :
          <div className='upload-image__inner'>
            <div className="upload-image__preview"  style={{backgroundImage: `url('${imageSrc}')`}} />
            <div className='upload-image__button--delete'>
              <Button
                onClick={deleteImage}
                shape="circle"
                icon="delete"
                size='large'
              />
            </div>
          </div>
        }

        { imageLoading &&
        <div className='upload-image__spin'>
          <Spin size="large"/>
        </div>
        }
      </form>
    )
  }
}

const mapStateToProps = ({ profile }) => {
  return {
    profile,
  }
};

const actionCreators = {
  deleteImage,
  uploadImage,
};

export default connect(mapStateToProps, actionCreators)(UploadImage);