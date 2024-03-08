const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('userdb',"postgres","harshrai",{
    host:'localhost',
    dialect:'postgres',
});

module.exports=sequelize;