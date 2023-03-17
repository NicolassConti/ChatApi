const { DataTypes } = require("sequelize");
const db = require("../utils/database");


const Participant = db.define("participant", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    conversationparticipanteId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "conversationparticipantes_id"

    },
    userparticipanteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "usersparticipante_id"

    }
});

module.exports = Participant;