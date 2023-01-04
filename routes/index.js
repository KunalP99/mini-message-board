var express = require("express");
var router = express.Router();

// Example messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleDateString("en-UK"),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleDateString("en-UK"),
  },
];

// GET home page.
router.get("/", (req, res, next) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

// GET new page which display a form where user can enter their name and message
router.get("/new", (req, res, next) => {
  res.render("form", { title: "New Message" });
});

// Pushes a message onto the array when the submit button is pressed then redirects user to the home page
router.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date().toLocaleDateString("en-UK"),
  });
  res.redirect("/");
});

module.exports = router;
