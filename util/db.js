const Sequelize = require('sequelize');

const sequelize = new Sequelize('sharpner', 'root', '12345', {
    dialect: 'mysql',
    host: 'localhost'
});

sequelize.authenticate().then(() => {
    console.log('Database Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});

module.exports = sequelize;
