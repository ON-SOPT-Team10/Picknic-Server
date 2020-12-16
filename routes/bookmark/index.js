const express = require('express');
const router = express.Router();
const bookmarkController = require('../../controllers/bookmarkController');

router.put('/:feedId', bookmarkController.toggleBookmark);

module.exports = router;