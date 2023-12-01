const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'tatva-practical',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log('DB connection establish...');
    })
    .catch((error) => {
        console.log('error', error);
    });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.userModel = require('../model/user')(sequelize, Sequelize);
db.blogModel = require('../model/blog')(sequelize, Sequelize);

db.sequelize
    .sync()
    .then(() => {
        console.log('Yes re-sync');
    })
    .catch((error) => {
        console.log('No re-sync error', error);
    });

module.exports = db;
