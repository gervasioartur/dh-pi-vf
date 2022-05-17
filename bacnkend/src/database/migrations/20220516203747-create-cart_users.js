('use strict');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('Cart_Users', {
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
    return queryInterface.dropTable('Cart_Users');
  },
};
