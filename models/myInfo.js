const myInfo = {
    editMyInfo : async (id,image) => {
        const editProfileImageQuery = `UPDATE picnic-db SET profileImage = '${profileImageUrl}' WHERE id = ${userIdx};`;
        try {
            
            const result = await pool.queryParam(editProfileImageQuery);
            
        } catch (err) {
            console.log('editStatusApplyUser ERROR : ', err);
            throw err;
        }
    },
}
module.exports = myInfo;