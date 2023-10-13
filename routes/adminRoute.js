const express = require('express');
const admin_route = express.Router();
const viewcontroll=require("../controllers/viewcontroller")
admin_route.get('/user_details',viewcontroll.user_details)
// admin_route.get('/forms',viewcontroll.forms)
admin_route.get('/dashboard',viewcontroll.dashboard)
admin_route.get('/login',viewcontroll.login)
admin_route.get('/profile',viewcontroll.profile)
admin_route.get('/register',viewcontroll.register)
admin_route.get('/reset_password',viewcontroll.reset_password)
// admin_route.get('/tables',viewcontroll.tables)
// admin_route.get('/icons',viewcontroll.icons)






  module.exports =admin_route