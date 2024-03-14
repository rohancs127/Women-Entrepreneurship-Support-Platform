import express from "express";
import { getAllOrganisations } from "../controllers/organisation-controller.js";
// import { authenticate } from "../middleware/authenticate.js"
const router = express.Router();

router.get("/", getAllOrganisations);
// router.get("/location/:location", getDisasterByLocation)
// router.get("/:id", getDisasterById)
// router.post("/", authenticate, reportDisaster)
// router.put("/edit/:id", authenticate, editDisaster)

export default router;
