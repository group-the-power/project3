
const express = require("express");
const jwt = require("jsonwebtoken");
const userRouter = require("./api/route/userRouter");
const db = require("./api/db")
const cors = require("cors")

const app = express();
require('dotenv').config();


app.use(express.json());
app.use(cors())

app.use("/", userRouter);

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "Post created...",
        authData,
      });
    }
  });
});

app.post("/api/login", (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  // jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
  //   res.json({
  //     token
  //   });
  // });
});


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


// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

app.listen(5000, () => console.log("Server started on port 5000"));

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


