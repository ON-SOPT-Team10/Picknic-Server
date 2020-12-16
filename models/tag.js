module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Tag', {
        tagName:{
            type:DataTypes.STRING(100),
            allowNull:false
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};