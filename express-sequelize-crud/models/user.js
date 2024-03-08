const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Adjust the path accordingly

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING, // Assuming you want to store the hashed password as a string
    allowNull: false,
  },
  // ... other fields
});

module.exports = User;
