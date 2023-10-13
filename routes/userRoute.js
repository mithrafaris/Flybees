
const express = require('express');
const user_route = express.Router();
const viewcontroll=require("../controllers/viewcontroller")
//USER
user_route.get('/',viewcontroll.homeRoutes)
user_route.get('/about',viewcontroll.about);
user_route.get('/home_02',viewcontroll.home_02)
user_route.get('/home_03',viewcontroll.home_03)
user_route.get('/blog_detail',viewcontroll.blog_detail)
 user_route.get('/blog',viewcontroll.blog)
user_route.get('/contact',viewcontroll.contact )
 user_route.get('/product-detail',viewcontroll.product_detail )
user_route.get('/product',viewcontroll.product )
user_route.get('/shoping_cart',viewcontroll.shoping_cart)
user_route.get('/user_login',viewcontroll.user_login );
user_route.get('/otp',viewcontroll.otp)






module.exports =user_route
