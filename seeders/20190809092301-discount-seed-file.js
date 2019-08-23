'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Discounts',
      [
        {
          id: 1,
          name: '十周年慶',
          description: '周年慶跳樓大折扣',
          target_price: 5000,
          percent: 20,
          product_reduce: 2000,
          shipping_free: 1,
          start_date: new Date(),
          end_date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: '聖誕特價',
          description: '聖誕節超划算方案',
          target_price: 1000,
          percent: 70,
          product_reduce: 300,
          shipping_free: 0,
          start_date: new Date(),
          end_date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Discounts', null, {})
  }
}