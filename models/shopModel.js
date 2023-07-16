const sequelize = require('../util/db');
const dataType = require('sequelize');
sequelize.options.logging = false;

const Shop = sequelize.define(
    'candyshop',
    {
        id: {
            type: dataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: dataType.STRING
        },
        description: {
            type: dataType.STRING
        },
        price: {
            type: dataType.INTEGER
        },
        quantity: {
            type: dataType.INTEGER
        }
    }
    ,
    {
        createdAt: false,
        updatedAt: false,
        freezeTableName: true,
    }
)

module.exports = Shop