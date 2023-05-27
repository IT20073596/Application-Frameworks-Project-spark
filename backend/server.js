const FeedbackRoutes = require('./routes/feedback.router.js')
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const userRoute = require("./routes/userManagement/user.route");
app.use("/users", userRoute);
app.use("/hotelbooking", require("./routes/hotelbookingManagement/hotelbooking.route"));
app.use("/feedbacks", FeedbackRoutes);

// Database connection
mongoose
  .connect(process.env.DBLINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start server
const port = process.env.PORT || 8060;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
