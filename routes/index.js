var express = require("express");
var router = express.Router();

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

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("form", { title: "New Message" });
});

router.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date().toLocaleDateString("en-UK"),
  });
  res.redirect("/");
});

module.exports = router;
