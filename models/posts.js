'use strict';
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define('posts', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    tags: DataTypes.STRING,
    published: DataTypes.BOOLEAN
  }, {
    timestamps: true,
    tableName: 'posts',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  posts.associate = function(models) {
    // associations can be defined here
  };
  return posts;
};