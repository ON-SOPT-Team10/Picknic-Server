const express = require('express');
const router = express.Router();
const ut = require('../../modules/util');
const rm = require('../../modules/responseMessage');
const sc = require('../../modules/statusCode');
const {Profile}= require('../../models');
const upload = require('../../modules/multer');

router.post('/', upload.single('image'), async (req, res) => {
    const image = req.file.location;
try{
    
    return res
        .status(sc.OK)
        .send(ut.success(sc.OK, rm.READ_POST_ALL_SUCCESS, image));

} catch(err) {
    console.log(err);
    return res
        .status(sc.INTERNAL_SERVER_ERROR)
        .send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.READ_POST_ALL_FAIL));
}
});


router.get('/',async (req, res) => {
    try {
        const profile = await Profile.findOne({
            where:{
                id: 1,
            }
        });
        return res
            .status(sc.OK)
            .send(ut.success(sc.OK, rm.READ_POST_ALL_SUCCESS, profile));
    } catch (err) {
        console.log(err);
        return res
            .status(sc.INTERNAL_SERVER_ERROR)
            .send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.READ_POST_ALL_FAIL));
    }
});

module.exports = router;
