const userDB = require("../model/userdetails_model")

exports.homeRoutes = async (req, res) => {
  res.render("home", { title: "Flybees" });
};
exports.about = (req, res) => {
  res.render("about", { title: "Flybees" });
};
exports.contact = (req, res) => {
  res.render("contact", { title: "Flybees" });
};
exports.otpmessage = (req, res) => {
  res.render("otpmessage", { title: "Flybees" });
};

exports.product_details = (req, res) => {
  res.render("product_details", { title: "Flybees" });
};
exports.product = (req, res) => {
  res.render("product", { title: "Flybees" });
};
exports.shoping_cart = (req, res) => {
  res.render("shoping_cart", { title: "Flybees" });
};

exports.user_login = (req, res) => {
  res.render("user_login", { title: "Flybees" });
};
exports.otp = (req, res) => {
  res.render("otp");
};

exports.user_signup = (req, res) => {
  res.render("user_signup", { title: "Flybees" });
};



//ADMIN
exports.user_details = async(req, res) => {
  try {
    const result=await userDB.find({})
    console.log(result);
    res.render("user_details", { title: "Flybees" ,user:result});
  } catch (error) {
    res.send(error.message)
  }
};

exports.productsDetails = (req, res) => {
  res.render("productsDetails", { title: "Flybees" });
};


exports.dashboard = (req, res) => {
  
  res.render("dashboard", { title: "Flybees" });
};
exports.Adminlogin = (req, res) => {
  res.render("Adminlogin", { title: "Flybees" })}
exports.categoryManagement=(req,res)=>{
    res.render("categoryManagement",{title:"Flybees"})
  }
  exports.addCategory = (req,res) => {
    res.render("addCategory", { title: "Flybees" });
  }
 
