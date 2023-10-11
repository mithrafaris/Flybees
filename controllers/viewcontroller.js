exports.homeRoutes=(req,res)=>{
    res.render('home');
}
exports.about=(req,res)=>{
    res.render('about');
}
exports.home_02=(req,res)=>{
    res.render('home_02')
  }
  exports.home_03=(req,res)=>{
    res.render('home-03')
  }
//   exports.blog_detail=(req, res) => {
//     res.render('blog_detail');
//   };
//   exports.blog=(req, res) => {
//     res.render('blog');
//   };
exports.contact=(req, res) => {
    res.render('contact');
  };
  exports.product_detail=(req, res) => {
    res.render('product_detail');
  };
  exports.product=(req, res) => {
    res.render('product');
  };
  exports.shoping_cart=(req, res) => {
    res.render('shoping_cart');
  };
  exports.user_login=(req, res) => {
    res.render('user_login');
  };
  exports.otp=(req,res)=>{
    res.render('otp')
  }
  //ADMIN
  exports.user_details=(req,res)=>{
    res.render('user_details')
  }
  exports.forms=(req,res)=>{
    res.render('forms')
  }

  exports.index=(req,res)=>{
    res.render("index")
  }
  exports.login=(req,res)=>{
    res.render("login")
  }
  exports.profile=(req,res)=>{
    res.render("profile")
  }
  exports.register=(req,res)=>{
    res.render("register")
  }
  exports.reset_password=(req,res)=>{
    res.render("reset_password")
  }
  exports.tables=(req,res)=>{
    res.render("tables")
  }
  exports.icons=(req,res)=>{
    res.render("icons")
  }