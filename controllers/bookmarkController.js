const ut = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');
const {Feed} = require('../models');

module.exports = {
    toggleBookmark: async(req,res) => {
        const feedId = req.params.feedId;
        if (!feedId) return res.status(sc.BAD_REQUEST) // feedId를 클라에서 넘겨주지 않은 경우.
            .send(ut.fail(sc.BAD_REQUEST, rm.NULL_VALUE));
        
        try{
            const feed = await Feed.findOne({where:{id:feedId}}); // 해당 피드를 먼저 찾은 다음에
            if(!feed) return res.status(sc.BAD_REQUEST) // 없는 인덱스면 에러 띄워주고
                .send(ut.fail(sc.BAD_REQUEST, rm.WRONG_INDEX));
            
            if(feed.isBookmarked){ // 토글 진행
                result = await Feed.update({
                    isBookmarked:false,
                    bookmarkCount:feed.bookmarkCount-1
                },{where:{id:feedId}});
            } else{
                result = await Feed.update({
                    isBookmarked:true,
                    bookmarkCount:feed.bookmarkCount+1
                },{where:{id:feedId}});
            }
            
            return res.status(sc.OK) // 성공메세지 반환
                .send(ut.success(sc.OK, rm.SUCCESS, "토글 성공"));
                
        } catch(err){
            console.error(err);
            return res.status(sc.INTERNAL_SERVER_ERROR)
                .send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.DB_ERROR));
        }
    }
}