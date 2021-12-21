const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('./api/db');
const app = express();
require('dotenv').config();


//const User = require('./api/models/userModels');
const user = require('./api/models/userModels');
//const userRouter = require('./api/route/userRouter');
// const projectRouter = require('./Routers/Routes/projectRoute');
app.use(express.json());
//app.use('/users', userRouter);
// app.use('/project', projectRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// const express = require("express");
// const app = express();
// const db = require("./db/db")
// const cors = require("cors");
// app.use(express.json());
// const { userRouter } = require("./Routers/Routes/userRouter");
// app.use(cors());

// // const { Appointment } = require("./db/Models/Appointment");
// const { User } = require("./db/Models/user");


// app.use("/users", userRouter);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server On ${PORT}`);
// });

// // function saveUsers( firstName, lastName, email,phoneNumber,age,city,bloodGroup,Password) {
// //   const newUser = new User({
    
// //     firstName,
// //     lastName,
// //     email,
// //     phoneNumber,
// //     age,
// //     city,
// //     bloodGroup,
// //     Password,

// //   });
// //   newUser
// //     .save()
// //     .then((result) => {
// //       console.log(result);
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //     });
// // }
// // function saveAppointment(HospitalName,Date ) {
// //   const newAppointment = new Appointment({
// //     HospitalName,
// //     Date,
// //   });
// //   newAppointment
// //     .save()
// //     .then((result) => {
// //       console.log(result);
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //     });
// // }

