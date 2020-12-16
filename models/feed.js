module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Feed",
    {
      feedImage: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      feedTitle: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      feedContents: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      bookmarkCount: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        default: 0,
      },
      isBookmarked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
