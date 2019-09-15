const { Router } = require('express');
const router = Router();

// services
const upload = require('../app/services/upload.service');

// controllers
const Image = require('../app/controllers/image.controller');
const { loggedIn } = require('../app/controllers/auth.controller');

// Images
router.post('/upload-image', loggedIn, upload.single('image'), Image.upload);
router.delete('/remove-image', loggedIn, Image.remove);


module.exports = router;