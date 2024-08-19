const express = require("express");
const router = express.Router();
const readFileAsync = require("../model/serviceList");

router.get("/:companyName/services", (req, res) => {
  // const companyName = req.params.companyName
  // // res.send(`company:${companyName}`)
  readFileAsync(
    "../onlineReservationBackend/public/serviceList.json",
    (err, data) => {
      if (err) {
        res.status(500).json({ error: "Failed to read file" });
        return;
      }
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (parseErr) {
        res.status(500).json({ error: "Failed to parse JSON" });
      }
    }
  );
});

module.exports = router;
