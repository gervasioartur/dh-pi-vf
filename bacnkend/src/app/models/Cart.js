const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../config/database');
const sequelize = new Sequelize(db);

//models
const User = require('./User')


const Cart = sequelize.define('Cart', {});
Cart.belongsTo(User, {
  foreignKey: 'userId',
  as: 'cart_product'
})

module.exports = Cart;
