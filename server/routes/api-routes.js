// Filename: api-routes.js
// Initialize express router
let router = require("express").Router();
// Set default API response
router.get("/", function (req, res) {
  res.json({
    status: "API Its Working",
    message: "Welcome to RESTHub crafted with love!",
  });
});

// Import user controller
var userController = require("../controllers/user");
// Contact routes
router.route("/register").post(userController.new);

router.route("/login").post(userController.login);

// Export API routes
module.exports = router;
