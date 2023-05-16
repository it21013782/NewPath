const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); //this will convert json format to java script object
const cors = require("cors");
const app = express();

//app middleware
app.use(bodyParser.json());
app.use(cors());

//import routesc
//const postRoutes = require('./routes/posts');
// http://localhost:8070/business
const businessRoutes = require("./routes/Business.js");
const innovatorRoutes = require("./routes/Innovator.js");
const volunteerRoutes = require("./routes/Volunteer.js");

//route middleware
// app.use(postRoutes);
app.use("/business",businessRoutes);
app.use("/innovator",innovatorRoutes);
app.use("/volunteer",volunteerRoutes);

const PORT = 8070;
const DB_URL ='mongodb+srv://erangaamarasekara99:browthbridge12345@growthbridge.y6grsfp.mongodb.net/growthbridge_db?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() =>{
   console.log('DB connected');
})
.catch((err) => console.log('DB connection ERROR',err));


app.listen(PORT, () => {
    console.log(`Server is up and running at port ${PORT}`)
})




// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware to parse JSON request body
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Start server
app.listen(5000, () => {
  console.log('Server started on http://localhost:5000');
});

const express = require('express');
const router = express.Router();
const User = require('../models/User');

