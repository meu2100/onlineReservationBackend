const express = require("express");
const router = express.Router();
const readFileAsync = require("../model/serviceList");
const writeFileAsync = require("../services/serviceList");

router.get("/:companyName/services", async (req, res) => {
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

router.put("/:companyName/services", async (req, res) => {
  const data = [
    {
      id: 1,
      name: "Thai massage",
      category: "Massage",
      price: "1500",
      duration: "60 min",
      description:
        "Thai massage helps a person's muscles, joints, ligaments, and fascia by relaxing muscle tension, relieving the spasm, and improving the range of motion. The combination of pressure on specific points and yoga-like stretches in traditional Thai massage relieves areas of muscular stress and tension. In fact, recipients often report that their muscles stay loose days after a session.",
      img: "Thai_massage.png",
    },
    {
      id: 2,
      name: "Foot massage",
      category: "Massage",
      price: "600",
      duration: "30 min",
      description:
        "The foot massage gets a lot of clients interest because of the convenience and effectiveness besides that soaking foot in the warm water promotes better sleep improves blood circulation, foot massage gives you energy by releasing any blockages that hold back energy and relieving symptoms of stress and fatigue by massaging and using acupressure on foot.",
      img: "Foot_massage.png",
    },
    {
      id: 3,
      name: "Hot stone massage",
      category: "Massage",
      price: "800",
      duration: "90 min",
      description:
        "Hot stone massage is a method accomplished by rubbing the muscles with long gliding strokes in the direction of blood returning to the heart, hot stone massage is exceptionally beneficial for increasing the level of oxygen in the blood, decreasing muscle toxins, improving circulation and flexibility while easing tension.",
      img: "Hot_stone_massage.png",
    },
  ];
  try {
    await writeFileAsync(
      "../onlineReservationBackend/public/serviceList.json",
      JSON.stringify(data)
    );

    const renewData = await readFileAsync(
      "../onlineReservationBackend/public/serviceList.json"
    );
    const jsonData = JSON.parse(renewData);

    res.json(jsonData);
  } catch (err) {
    res.status(500).json({ error: "Failed to read file" });
  }
});

module.exports = router;
