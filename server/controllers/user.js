// Import register model
UserModel = require("../models/user");

// Handle create contact actions
exports.new = function (req, res) {
  let user = new UserModel();
  user.fullName = req.body.fullName ? req.body.fullName : user.fullName;
  user.age = req.body.age;
  user.score = req.body.score;
  user.password = req.body.password;
  // save the user and check for errors
  user.save(function (err) {
    // if (err)
    //     res.json(err);

    res.json({
      message: "Newly registered user!",
      data: user,
    });
  });
};
