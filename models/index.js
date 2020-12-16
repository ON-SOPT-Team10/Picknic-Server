const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Profile = require('./profile')(sequelize, Sequelize);
db.Story = require('./story')(sequelize, Sequelize);
db.Feed = require('./feed')(sequelize, Sequelize);
db.Tag = require('./tag')(sequelize, Sequelize);

db.Tag.belongsTo(db.Feed); // 한 피드는 한 개의 태그를 가짐.


module.exports = db;