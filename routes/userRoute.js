const express = require('express');
const user_route = express.Router();
const viewcontroll = require("../controllers/viewcontroller");
const session=require('express-session')
const cookieParser=require('cookie-parser')



user_route.use(
            session({
            secret: 'qwer',
            resave: false,
            saveUninitialized: true,
            cookie: {maxAge:1000 * 60 * 24 * 7 *24 }
})
)

// Sessions and Cookies middleware is already added in app.js, no need to add it here again

user_route.get('/', viewcontroll.homeRoutes);
user_route.get('/user', viewcontroll.otpmessage);

user_route.get('/about', viewcontroll.about);

user_route.get('/contact', viewcontroll.contact);

user_route.get('/product_details', viewcontroll.product_details);

user_route.get('/product', viewcontroll.product);

user_route.get('/shoping_cart', viewcontroll.shoping_cart);
user_route.get('/otpmessage', viewcontroll.otpmessage);

//user login 
const uselogincontrol=require("../controllers/User/userlogincontrol")
user_route.get('/user_login', viewcontroll.user_login);
user_route.post('/user_login', (req, res) => {
  // Access session data
  const username = req.session.username;

  // Set a cookie
  res.cookie("user_id", 123, { maxAge: 3600000, httpOnly: true });

  // Your existing logic for user login
  uselogincontrol.loginUser(req, res);
});

//usersignup
const usersigncontrol=require("../controllers/User/usersigncontrol")
user_route.get('/user_signup',viewcontroll.user_signup);
user_route.post('/register', (req, res) => {
  // Access session data
  const username = req.session.username;

  // Set a cookie
  res.cookie("user_id", 123, { maxAge: 3600000, httpOnly: true });

  // Your existing logic for user signup
  usersigncontrol.post_signup(req, res);
});

user_route.get('/otp', viewcontroll.otp);

module.exports = user_route;
