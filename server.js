const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

//controllers
const AuthRouter = require("./controllers/Auth");
const usersRouter = require("./controllers/users");
const verifyToken = require("./middleware/verify-token");
const profilesRouter = require("./controllers/profiles");

const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("./config/database");

app.use(express.json());
app.use("/Auth", AuthRouter);
app.use("/users", usersRouter);
app.use("/profiles", verifyToken, profilesRouter);
app.use(cors());

const port = process.env.PORT ? process.env.PORT : "3000";
// Routes go here

app.listen(port, () => {
  console.log("The express app is ready!");
});
