const userDB = require("../../model/userdetails_model");

exports.blockuser = async (req, res) => {
  try {
    // Access session data
    const adminUsername = req.session.username;

    const id = req.query.id;
    const user = await userDB.findById({ _id: id });

    console.log(user);
    if (user.isBlock) {
      await userDB.findByIdAndUpdate(id, { $set: { isBlock: false } });
    } else {
      await userDB.findByIdAndUpdate(id, { $set: { isBlock: true } });
    }

    // Log the admin username who performed the action
    console.log(`Admin ${adminUsername} blocked/unblocked user with ID: ${id}`);

    res.redirect('/admin/user_details');
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};
