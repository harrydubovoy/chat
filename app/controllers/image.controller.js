const fs = require('fs');

// utils
const { crop } = require('../../utils');

function upload(req, res) {
  const file = req.file;

  if(file) {
    const image = crop(file, 'medium');

    image
      .then((result) => {
        res.json(result)
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json(error);
      })
  }
}

function remove(req, res) {
  const { image } = req.query;
  const imagePath = `./storage/avatars/${image}`;

  fs.exists(imagePath, (exists) => {
    if(exists) {
      return fs.unlink(imagePath, (error) => {
        if (error) {
          res.status(500).json({
            type: 'error',
            message: `Something went wrong ${error}`
          })
        } else {
          res.json({
            type: 'success',
            message: 'Image deleted',
          })
        }
      });
    } else {
      res.status(404).json({
        type: 'error',
        message: 'File not found, so not deleting.'
      })
    }
  })
}

module.exports = {
  upload,
  remove,
};