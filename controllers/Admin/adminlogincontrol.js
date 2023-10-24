const userDB = require("../../model/userdetails_model");
const bcrypt = require("bcrypt");

exports.Admin_login = async (req, res) => {
  try {
  
    const { name, password } = req.body;

    const user = await userDB.findOne({ email: name, isadmin: true });

    console.log(user);
    if (!user) {
      // User not found
      return res.status(401).send("User not found");
    }

    console.log(user.password);

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
     
      req.session.adminUsername = user.name;
      req.session.isAdminLoggedIn = true;

      return res.redirect("/admin/dashboard");
    } else {
     
      return res.status(401).send("Invalid email or password");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
