import express from "express";
import {
  getAllEntrepreneurs,
} from "../controllers/entrepreneur-controller.js";
// import { authenticate } from "../middleware/authenticate.js"
const router = express.Router();

router.get("/", getAllEntrepreneurs);
// router.get("/entrepreneur/:ent_id",getEntrepreneur)
// router.get("/location/:location", getDisasterByLocation)
// router.get("/:id", getDisasterById)
// router.post("/", authenticate, reportDisaster)
// router.put("/edit/:id", authenticate, editDisaster)

export default router;
