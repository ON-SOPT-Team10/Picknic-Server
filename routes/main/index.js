const sequelize = require('sequelize');
const ut = require('../../modules/util');
const rm = require('../../modules/responseMessage');
const sc = require('../../modules/statusCode');
const {Story}= require('../../models');
const express = require('express');
const router = express.Router();



router.get('/story',async (req, res) => {
    try {
        const story = await Story.findAll({
            attributes : ['id','storyImage','storyTitle'],
        });
        return res
            .status(sc.OK)
            .send(ut.success(sc.OK, rm.READ_POST_ALL_SUCCESS, story));
    } catch (err) {
        console.log(err);
        return res
            .status(sc.INTERNAL_SERVER_ERROR)
            .send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.READ_POST_ALL_FAIL));
    }
});

router.get('/feed', async(req,res) => {
    try{
        
    } catch(err){

    }
})

module.exports = router;