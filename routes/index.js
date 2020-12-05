var express = require('express');
var router = express.Router();

router.use('/profile', require('./profile'));
router.use('/main', require('./main'));
router.use('/bookmark', require('./bookmark'));

module.exports = router;
