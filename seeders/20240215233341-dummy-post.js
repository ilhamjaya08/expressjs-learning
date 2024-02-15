'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [{
      title: 'Hello World',
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      tags: 'hello,world'
    }, {
      title: 'Lorem Ipsum',
      content: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: 'lorem,ipsum'
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {    
    return queryInterface.bulkDelete('posts', null, {});    
  }
};