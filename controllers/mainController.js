const ut = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');

const {
    Story,
    Feed
} = require('../models');

module.exports = {
    getStoriesFeeds: async(req,res)=>{
        try{
            const stories = await Story.findAll();
            const feeds = await Feed.findAll();
            return res.status(sc.OK)
                .send(ut.success(sc.OK, rm.SUCCESS, {stories:stories,feeds:feeds}));
        } catch(err){
            console.error(err);
            return res.status(sc.INTERNAL_SERVER_ERROR)
                .send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.DB_ERROR));
        }
    }
}