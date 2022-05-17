('use strict');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('Carts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' },
        onupdate: 'CASCADE',
        ondelete: 'CASCADE',
      },
      ProductId: {
        type: Sequelize.INTEGER,
        references: { model: 'Products', key: 'id' },
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
    return queryInterface.dropTable('Carts');
  },
};
