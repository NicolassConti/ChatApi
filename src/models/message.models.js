const { DataTypes } = require("sequelize");
const db = require("../utils/database");


const Message = db.define("message", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    usersmessageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "usersmessage_id"    
    },

    conversationmessageId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "conversationmessage_id"
    },

});

module.exports = Message;