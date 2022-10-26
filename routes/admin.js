const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.sendStatus(200).send("<div>Hello world.</div>");
});

module.exports = router;
