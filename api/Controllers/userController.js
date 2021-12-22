const mongoose = require("mongoose");
const {User} = require("../models/userModels") ////("../../api/models/userModel")
const addNewUser = (req, res) => {
    console.log(req.body);
    const addedUser = new User(req.body);
    // const addedUser = new User({
      
    //   fullName: req.body.fullName,
    //   email: req.body.email,
    //   city: req.body.city,
    //   password: req.body.password,
    // });
    addedUser.save().then(result =>{
      res.status(201).send(result);
    }
    ).catch(error =>{
      console.log(error.message)
    })  
  };

  const userLogin = (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
      res.json(user);
    });
  }

  module.exports = {addNewUser, userLogin};