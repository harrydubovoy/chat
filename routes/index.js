const { Router } = require('express');
const router = Router();

const auth = require('./auth.route');
const profile = require('./profile.route');
const client = require('./client.route');


// Auth routes
router.use('/', auth);
// Profile routes
router.use('/profile', profile);
// Client routes
router.use('/', client);

module.exports = router;