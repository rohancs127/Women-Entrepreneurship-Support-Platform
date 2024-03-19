import express from "express";
const router = express.Router();
import { pool } from "../config/db.js";

router.post("/login", async (req, res) => {
  try {
    const { email, userId, role } = req.body;

    console.log(email);
    console.log(userId);
    console.log(role);

    if (!email || !userId) {
      return res.status(401).json({
        success: false,
        message: "No email and userId provided",
      });
    }

    if (role === "Entrepreneur") {
      pool.query(
        "SELECT * FROM ENTREPRENEUR WHERE email=? and ent_id=?",
        [email, userId],
        (results, error) => {
          if (error) {
            return res.status(401).json({
              success: false,
              message: "No ENTREPRENEUR found ",
            });
          }
          if (results.length > 0) {
            return res.status(401).json({
              success: true,
              message: "match found",
            });
          }
        }
      );
    }

    if (role === "Mentor") {
      pool.query(
        "SELECT * FROM MENTOR WHERE email=? and mentor_id=?",
        [email, userId],
        (results, error) => {
          if (error) {
            return res.status(401).json({
              success: false,
              message: "No Mentor found ",
            });
          }
          if (results.length > 0) {
            return res.status(401).json({
              success: true,
              message: "match found",
            });
          }
        }
      );
    }

    if (role === "Investor") {
      pool.query(
        "SELECT * FROM INVESTOR WHERE email=? and investor_id=?",
        [email, userId],
        (results, error) => {
          if (error) {
            return res.status(401).json({
              success: false,
              message: "No Investor found ",
            });
          }
          if (results.length > 0) {
            return res.status(401).json({
              success: true,
              message: "match found",
            });
          }
        }
      );
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
});

export default router;
