'use strict'
module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define(
    'OrderItem',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      price: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      OrderId: DataTypes.INTEGER,
      ProductId: DataTypes.INTEGER
    },
    {}
  )
  OrderItem.associate = function (models) {
    // associations can be defined here
  }
  return OrderItem
}
