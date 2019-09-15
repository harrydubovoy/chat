const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './storage/avatars/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const uploadService = multer({ storage });

module.exports = uploadService;