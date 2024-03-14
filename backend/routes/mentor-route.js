import express from "express";
import { getAllMentors } from "../controllers/mentor-controller.js";
// import { authenticate } from "../middleware/authenticate.js"
const router = express.Router();

router.get("/", getAllMentors);
// router.get("/location/:location", getDisasterByLocation)
// router.get("/:id", getDisasterById)
// router.post("/", authenticate, reportDisaster)
// router.put("/edit/:id", authenticate, editDisaster)

export default router;
