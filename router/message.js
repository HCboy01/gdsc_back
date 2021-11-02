const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    return res.status(200).send({ test: "like"});
});

module.exports = router;