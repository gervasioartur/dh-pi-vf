const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../config/database');
const sequelize = new Sequelize(db);

//models
const Category = require('./Category');

const Product = sequelize.define('Product', {
  name: DataTypes.STRING,
  price: DataTypes.FLOAT,
  description: DataTypes.STRING,
  images: DataTypes.ARRAY(DataTypes.STRING),
  amount: DataTypes.INTEGER
});


module.exports = Product;
