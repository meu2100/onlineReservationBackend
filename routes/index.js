const express = require("express");
const router = express.Router();
const readFileAsync = require("../model/serviceList");

router.get("/:companyName/services", async (req, res) => {
  // const companyName = req.params.companyName
  // // res.send(`company:${companyName}`)
  try {
    const data = await readFileAsync(
      "../onlineReservationBackend/public/serviceList.json"
    );

    const jsonData = JSON.parse(data);

    res.json(jsonData);
  } catch (err) {
    res.status(500).json({ error: "Failed to read file" });
  }
});

router.get("/:companyName/services/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const data = await readFileAsync(
      "../onlineReservationBackend/public/serviceList.json"
    );

    const jsonData = JSON.parse(data);
    const listId = jsonData.find((listId) => listId.id === id);

    if (listId) {
      res.json(listId);
    } else {
      res.status(404).json({ error: "Service not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to read file" });
  }
});

router.get("/staff", async (req, res) => {
  try {
    const data = await readFileAsync(
      "../onlineReservationBackend/public/staffList.json"
    );

    const jsonData = JSON.parse(data);

    res.json(jsonData);
  } catch (err) {
    res.status(500).json({ error: "Failed to read file" });
  }
});

module.exports = router;

// readFileAsync(
//   "../onlineReservationBackend/public/serviceList.json",
//   (err, data) => {
//     if (err) {
//       res.status(500).json({ error: "Failed to read file" });
//       return;
//     }
//     try {
//       const jsonData = JSON.parse(data);
//       res.json(jsonData);
//     } catch (parseErr) {
//       res.status(500).json({ error: "Failed to parse JSON" });
//     }
//   }
// );
