import express from "express";
import { getAllInvests } from "../controllers/invests-controller.js";
// import { authenticate } from "../middleware/authenticate.js"
const router = express.Router();

router.get("/", getAllInvests);
// router.get("/location/:location", getDisasterByLocation)
// router.get("/:id", getDisasterById)
// router.post("/", authenticate, reportDisaster)
// router.put("/edit/:id", authenticate, editDisaster)

export default router;
