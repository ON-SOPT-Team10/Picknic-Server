const ut = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');
const {Feed} = require('../models');

module.exports = {
    toggleBookmark: async(req,res) => {
        const feedId = req.params.feedId;
        if (!feedId)
            return res.status(sc.BAD_REQUEST).
                send(ut.fail(sc.BAD_REQUEST, rm.WRONG_INDEX));
        
        try{
            // 먼저 해당 북마크를 찾은 다음에
            const feed = await Feed.findOne({where:{id:feedId}});

            // 토글진행
            const result = await Feed.update({isBookmarked:!feed.isBookmarked},{where:{id:feedId}});
            return res.status(sc.OK)
                .send(ut.success(sc.OK, rm.SUCCESS, result));
        } catch(err){
            console.error(err);
            return res.status(sc.INTERNAL_SERVER_ERROR)
                .send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.DB_ERROR));
        }
    }
}