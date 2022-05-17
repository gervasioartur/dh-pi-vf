const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../config/database');
const sequelize = new Sequelize(db);

//models
const Product = require('./Product')
const Cart =  require('./Cart')

const Cart_product = sequelize.define('Cart_product', {});

Product.belongsToMany(Cart,{
  through: Cart_product,
  as: 'product_cart',
  foreignKey: 'ProductId'
})







module.exports = Cart_product;
