const { Sequelize } = require("Sequelize");

const db = new Sequelize({
    database : "chat",
    host : "localhost",
    port :  "5432",
    username : "postgres",
    password : "root",
    dialect : "postgres",
    loggin : false
});


module.exports = db;