const { Router } = require('express');
const router = Router();

router.get('/*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

module.exports = router;