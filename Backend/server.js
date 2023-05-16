import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser"; //this will convert json format to java script object
import cors from "cors";
const app = express();
import { config } from "dotenv";
import dbConnect from "./dbConnect.js";
import refreshTokenRoutes from "./routes/refreshToken.js"
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

//app middleware
app.use(bodyParser.json());
app.use(cors());

//allows us access environment variables like dotenv files
config();

dbConnect();
//allows us get json object in request body
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());

app.use("/api", authRoutes);
app.use("/api/refreshToken", refreshTokenRoutes);
app.use("/api/users", userRoutes);

//import routesc
//const postRoutes = require('./routes/posts');
// http://localhost:8070/business
import businessRoutes from "./routes/Business.js";
import innovatorRoutes from "./routes/Innovator.js";
import volunteerRoutes from "./routes/Volunteer.js";

//route middleware
// app.use(postRoutes);
app.use("/business",businessRoutes);
app.use("/innovator",innovatorRoutes);
app.use("/volunteer",volunteerRoutes);


const port = process.env.PORT || 8070;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));