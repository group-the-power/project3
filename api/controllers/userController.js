const mongoose = require("mongoose");
const {User} = require("../../api/models/userModel")

const addNewUser = (req, res) => {
    console.log(req.body);
  
    const addedUser = new User({
      
      fullName: req.body.fullName,
      email: req.body.email,
      city: req.body.city,
      password: req.body.password,
      phoneNumber:req.body.phoneNumber,
      education:req.body.education
    });
    addedUser.save().then(result =>{
      res.status(201).send(result);
    }
    ).catch(error =>{
      console.log(error.message)
    })  
  };
  

  module.exports = addNewUser;