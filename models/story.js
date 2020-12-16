module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Story', {
        storyImage: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        storyTitle: {
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};