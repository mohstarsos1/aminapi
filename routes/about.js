const router = require("express").Router();

router.get("/about", (req, res) => {
  res.send("About");
});

module.exports = router;
