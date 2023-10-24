const express = require("express");
const admin_route = express.Router();
const viewcontroll = require("../controllers/viewcontroller");
const user = require("../model/userdetails_model")
const adminlogincontrol = require("../controllers/Admin/adminlogincontrol")
const adminblock = require('../controllers/Admin/adminblockcontrol')
const session=require('express-session')
const cookieParser=require('cookie-parser')


admin_route.use(
            session({
            secret: 'asdf',
            resave: false,
            saveUninitialized: true,
            cookie: {maxAge:1000 * 60 * 24 * 7 *24 }
})
)



admin_route.get("/dashboard", (req, res) => {
  const username = req.session.username;
  viewcontroll.dashboard(req, res);
});

admin_route.post("/dashboard", viewcontroll.dashboard);

admin_route.get("/productsDetails", viewcontroll.productsDetails);
admin_route.post("/productsDetails", viewcontroll.productsDetails);

// userdetails
admin_route.get("/user_details", viewcontroll.user_details);
admin_route.post("/user_details", viewcontroll.user_details);
admin_route.put('/blockuser', adminblock.blockuser);

admin_route.post("/Adminlogin", adminlogincontrol.Admin_login);
admin_route.get("/Adminlogin", viewcontroll.Adminlogin);

module.exports = admin_route;
