const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../config/database');
const sequelize = new Sequelize(db);

const Category = sequelize.define('Category', {
  name: DataTypes.STRING,
});

module.exports = Category;
