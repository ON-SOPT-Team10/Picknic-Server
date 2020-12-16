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
            const stories = await Story.findAll(); // 스토리 모두 불러오고
            const feeds = await Feed.findAll(); // 피드 모두 불러온 뒤
            return res.status(sc.OK) // 합쳐서 리턴
                .send(ut.success(sc.OK, rm.SUCCESS, {stories:stories,feeds:feeds}));
        } catch(err){
            console.error(err);
            return res.status(sc.INTERNAL_SERVER_ERROR)
                .send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.DB_ERROR));
        }
    }
}