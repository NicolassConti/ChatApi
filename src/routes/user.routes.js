const {Router} = require("express");
const User = require("../models/users.models");
const { createUser, deleteUser } = require("../controllers/user.controllers");
const { getAllUsers } = require("../controllers/user.controllers");
const { getConversationId } = require("../controllers/user.controllers");
const { createUserValidator } = require("../validator/user.validator");


const router = Router();

router.post("/api/v1/users", createUserValidator , createUser);

router.get("/api/v1/users", getAllUsers);

router.get("/api/v1/users/conversations/:id", getConversationId);

router.delete("/api/v1/users/:id", deleteUser);


module.exports = router;