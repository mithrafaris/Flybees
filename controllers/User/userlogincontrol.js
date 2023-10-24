const userDB = require("../../model/userdetails_model")

exports.loginUser = async (req, res) => {
  try {
    const user = await userDB.findOne({ email: req.body.email, isadmin: false });
    if (user) {
      res.redirect("/");
    } else {
      res.redirect("/user_login");
    }
  } catch (error) {
    console.log(error);
  }
};
exports.logout=async(req,res) => {
  req.session.destroy((err)=>{
    if(err){
      console.log(err);
    }else{
      console.log("session destroyed");
    }
    res.redirect("/user_login");
  })
}
