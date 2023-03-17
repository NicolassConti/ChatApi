const User = require("./user.models");
const Conversation = require("../models/conversation.models");
const Message = require("../models/message.models");
const Partipants = require("../models/participant.models");
const Participant = require("../models/participant.models");


const initModels = () => {
    User.hasMany(Conversation, {foreignKey: "userconversationId"});
    Conversation.belongsTo(User, {foreignKey: "userconversationId"});

    User.hasMany(Message, {foreignKey: "usersmessageId"});
    Message.belongsTo(User, {foreignKey: "usersmessageId"});

    Conversation.hasMany(Message, {foreignKey : "conversationmessageId"});
    Message.belongsTo(User, {foreignKey : "conversationmessageId"});

    Conversation.hasMany(Participant, {foreignKey: "conversationparticipanteId"});
    Participant.belongsTo(Conversation, {foreignKey: "conversationparticipanteId"});

    User.hasMany(Participant, {foreignKey: "userparticipanteId"});
    Participant.belongsTo(User, {foreignKey: "userparticipanteId"});
}

module.exports = initModels;