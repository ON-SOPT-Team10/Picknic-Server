module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Profile', {
        profileImage: {
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: false,
        },
        userName: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        userEmail: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};