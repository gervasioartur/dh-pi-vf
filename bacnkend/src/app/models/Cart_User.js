const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../config/database');
const sequelize = new Sequelize(db);

//models
const Cart =  require('./Cart')
const User = require('./User')

const Cart_User = sequelize.define('Cart_User', {});

Cart.belongsToMany(User,{
  through: Cart_User,
  as: 'cart_user',
  foreignKey: 'CartId'
})







module.exports = Cart_User;
