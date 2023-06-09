const conversationServices = require("../services/conversation.services");

const createConversation = async (req, res) => {
    try {
        const newConversation = req.body;
        const result = await conversationServices.create(newConversation);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
}
const getAllConversations = async (req, res) => {
    try {
        const allConversation = await conversationServices.getAll();
        res.json(allConversation);
    } catch (error) {
        res.status(400).json(error);
    }
}
const deleteConversation = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await conversationServices.delete(req.params.id);
        res.status(204).json("no content");
    } catch (error) {
        res.status(400).json(error);
    }
}
const getOneConversation = async(req, res, next)=>{
    try {
        const{id} = req.params
        const result = await conversationServices.getOneConversationMessage(id)
        res.status(200).json(result)      
    } catch (error) {
        next(error)
    }
}


module.exports = {
    createConversation,
    getAllConversations,
    deleteConversation,
    getOneConversation
}


