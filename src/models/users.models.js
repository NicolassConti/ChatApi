const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../utils/database");

const User = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING(200),
        unique: true,
        allownul: false
    },

    firstname: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

    lastname: {
        type: DataTypes.STRING(50),
        allowNull: false,
    }



}
)

module.exports = User;