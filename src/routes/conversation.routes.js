const {Router} = require("express");
const Conversation = require("../models/conversation.models");
const {createConversation} = require("../controllers/conversation.controllers");
const {getAllConversations} = require("../controllers/conversation.controllers");
const {deleteConversation} = require("../controllers/conversation.controllers");
const { getOneConversation } = require("../controllers/conversation.controllers");

const router = Router();


router.post("/api/v1/conversation", createConversation);

router.get("/api/v1/conversation", getAllConversations);

router.delete("/api/v1/conversation/:id", deleteConversation);

router.get("/api/v1/conversation/:id", getOneConversation);



module.exports	= router;


