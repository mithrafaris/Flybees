const express = require("express");
const admin_route = express.Router();
const viewcontroll = require("../controllers/viewcontroller");
const user = require("../model/userdetails_model");
const adminlogincontrol = require("../controllers/Admin/adminlogincontrol");
const adminblock = require('../controllers/Admin/adminblockcontrol');
// const categorycontrol = require("../controllers/Admin/categorycontrol");
// const middleware=require("../middleware/middleware")



admin_route.get("/dashboard", viewcontroll.dashboard);
admin_route.post("/dashboard", viewcontroll.dashboard);

admin_route.get("/productsDetails", viewcontroll.productsDetails);
// admin_route.post("/productsDetails", viewcontroll.productsDetails);

// userdetails
admin_route.get("/user_details", viewcontroll.user_details);
admin_route.post("/user_details", viewcontroll.user_details);
admin_route.get('/blockuser', adminblock.blockUser);


admin_route.post("/Adminlogin", adminlogincontrol.Admin_login);
admin_route.get("/Adminlogin", viewcontroll.Adminlogin);



 //category
//  admin_route.get('/category',adminlogincontrol,middleware.categorycontrol.getCategoryList)

//  admin_route.get('/addCategory',adminlogincontrol,middleware,categorycontrol.getCategoryAddCat)
 
//  admin_route.post('/category/addCategory', upload.single('file'), categorycontrol.postCategoryAddCat)
 



module.exports = admin_route;
