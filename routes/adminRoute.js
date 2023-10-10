const express = require('express');
const admin_route = express.Router();
const viewcontroll=require("../controllers/viewcontroller")
admin_route.get('/user_details',viewcontroll.user_details)




// Define other admin routes...

// admin_route.get("/userdetails", (req, res) => {
//     res.render("userdetails"); // Adjust the path based on your project structure
// });





  module.exports =admin_route