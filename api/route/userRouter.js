const express = require("express");
const userRouter = express.Router();

const { addNewUser, userLogin } = require("../Controllers/userController");

// userRouter.get('/',getAllUser);
// userRouter.get('/:id',getUser);
userRouter.post("/register", addNewUser);
userRouter.post("/login", userLogin);

module.exports = userRouter;


