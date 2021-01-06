// Import express
let express = require("express");
// Import Mongoose
let mongoose = require("mongoose");
const cors = require("cors");

// Initialise the app
let app = express();

// Import routes
let apiRoutes = require("./routes/api-routes");
// Configure bodyparser to handle post requests
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
// Connect to Mongoose and set connection variable
mongoose.connect("mongodb://localhost/resthub", { useNewUrlParser: true });
let db = mongoose.connection;

// Added check for DB connection
if (!db) console.log("Error connecting db");
else console.log("Db connected successfully");

// Setup server port
let port = process.env.PORT || 8080;

// Send message for default URL
app.get("/", (req, res) => res.send("Hello World with Express"));

// Use Api routes in the App
app.use("/api", apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
  console.log("Running RestHub on port " + port);
});
