const express = require("express");
const userRouter = express.Router();
const addNewUser = require("../Controllers/userController");


// userRouter.get('/',getAllUser);
// userRouter.get('/:id',getUser);
userRouter.post('/register', addNewUser);
module.exports=userRouter;
