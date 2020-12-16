const sequelize = require('sequelize');
const ut = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');
const {
    User,
    Post,
    Class,
} = require('../models');

module.exports = {
    readProfile: async (req, res) => {
        try {
            const posts = await Post.findAll({
                
                include: [{
                    model: User,
                    attributes: ['email', 'userName']
                }, {
                    model: User,
                    as: 'Liker',
                    attributes: ['userName'],
                }]
            });
            console.log(JSON.stringify(posts, null, 2));
            return res
                .status(sc.OK)
                .send(ut.success(sc.OK, rm.READ_POST_ALL_SUCCESS, posts));
        } catch (err) {
            console.log(err);
            return res
                .status(sc.INTERNAL_SERVER_ERROR)
                .send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.READ_POST_ALL_FAIL));
        }
    },
    postProfile: async (req, res) => {
        const image = req.file.location;
        const userName = req.userName;
        const userEmail = req.userEmail
        
        try{
        
        //const editProfile = await profileController.postProfile(image,userName,userEmail)
        return res.status("성공").send({ imageUrl: image, file: req.file, body:req.body})
        }
        catch(e){
            return res.status("실패").send("입력에러")
        }
    },

    createPost: async (req, res) => {
        const {
            classId,
            questionId,
            img,
            contents
        } = req.body;

        try {
            
            const classes = await Class.findOne({
                where: {
                    id: classId
                }
            });
            const post = await Post.create({
                questionId,
                img,
                contents
            });
            await classes.addPost(post);
            return res.status(sc.OK).send(ut.success(sc.OK, rm.CREATE_POST_SUCCESS, post));
        } catch (err) {
            console.log(err);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.CREATE_POST_FAIL));
        }
    },
    readPosts: async (req, res) => {
        try {
            const posts = await Post.findAll({
                
                include: [{
                    model: User,
                    attributes: ['email', 'userName']
                }, {
                    model: User,
                    as: 'Liker',
                    attributes: ['userName'],
                }]
            });
            console.log(JSON.stringify(posts, null, 2));
            return res
                .status(sc.OK)
                .send(ut.success(sc.OK, rm.READ_POST_ALL_SUCCESS, posts));
        } catch (err) {
            console.log(err);
            return res
                .status(sc.INTERNAL_SERVER_ERROR)
                .send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.READ_POST_ALL_FAIL));
        }
    },
}
