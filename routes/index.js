var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});
router.use('/profile', require('./profile'));
router.use('/main', require('./main'));
router.use('/bookmark', require('./bookmark'));

module.exports = router;
