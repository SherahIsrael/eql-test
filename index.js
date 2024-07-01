// const express = require("express");
// const app = express();
// const dotenv = require('dotenv');

// dotenv.config();
// const port = process.env.PORT;

// //app.set("view engine", "ejs");

// // use res.render to load up an ejs view file

// // index page
// app.get("/", function(req, res) {
//   res.render("pages/index");
// });

// // about page
// app.get("/about", function(req, res) {
//   res.render("pages/about");
// });

import cors from 'cors';
import express from 'express';
import 'dotenv/config';

const port = process.env.PORT || 8080;

const app = express();

app.use(cors());

app.get('/', (req, res) => res.send('Server is running!'));

app.listen(port, () => {
 console.log(`App listening on port: ${port}`);
});

// app.listen(port, () => { 
//     console.log("Server running at PORT: ", port); 
//   }).on("error", (error) => {
//     // gracefully handle error
//     throw new Error(error.message);
//   })