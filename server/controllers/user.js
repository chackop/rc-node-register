// Import register model
UserModel = require("../models/user");

// Handle view contact info
exports.login = async function (req, res) {
  try {
    const user = await UserModel.findOne({
      fullName: req.body.fullName,
      password: req.body.password,
    });

    if (!user) {
      return null;
    }

    return res.json({
      fullName: user.fullName,
      age: user.age,
      score: user.score,
    });
  } catch (error) {
    return res.json({ error: error.message });
  }

  // TODO: use bcrypt and passport js

  // UserModel.findById(req.params.user_id, function (err, user) {
  //   if (err) res.send(err);
  //   res.json({
  //     message: "User details loading..",
  //     data: user,
  //   });
  // });
};

// Handle create contact actions
exports.new = function (req, res) {
  let user = new UserModel();
  user.fullName = req.body.fullName ? req.body.fullName : user.fullName;
  user.age = req.body.age;
  user.score = req.body.score;
  user.password = req.body.password;
  // save the user and check for errors
  user.save(function (err) {
    if (err) res.json(err);

    res.json({
      message: "Newly registered user!",
      data: user,
    });
  });
};
