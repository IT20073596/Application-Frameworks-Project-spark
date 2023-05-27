const express = require("express");
const router = express.Router();
const User = require("../../models/userManagement/user.model");

router.post("/register", async (req, res) => {
    try {
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).send({ error: "User already exists" });
      }
  
      const user = new User(req.body);
      await user.save();
      res.status(201).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send({ error: "Login failed! Check authentication credentials" });
    }
    if (user.password !== req.body.password) {
      return res.status(401).send({ error: "Login failed! Check authentication credentials" });
    }
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/allusers", async (req, res) => {
  try {
    const users = await User.find(); // retrieve all users from the database, and only select name and email fields
    res.send(users); // send the user objects back to the client
  } catch (error) {
    res.status(500).send(error); // if there's an error, return a 500 error
  }
});

router.post("/logout", async (req, res) => {
  try {
    // Perform any necessary logout actions here
    res.send({ message: "Logout successful" });
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = router;
