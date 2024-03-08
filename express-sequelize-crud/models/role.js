// role.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Role = sequelize.define('Role', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true, // Adjust as needed
  },                                                                                                                                                                                   
  // ... other fields
});

module.exports = Role;
