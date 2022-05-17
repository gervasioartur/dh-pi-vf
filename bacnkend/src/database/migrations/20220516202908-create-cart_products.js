('use strict');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('Cart_products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      ProductId: {
        type: Sequelize.INTEGER,
        references: { model: 'Products', key: 'id' },
        onupdate: 'CASCADE',
        ondelete: 'CASCADE',
      },
      CartId: {
        type: Sequelize.INTEGER,
        references: { model: 'Carts', key: 'id' },
        onupdate: 'CASCADE',
        ondelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Cart_products');
  },
};
