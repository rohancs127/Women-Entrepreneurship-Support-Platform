import { pool } from "../config/db.js";
import { EntrepreneurSchema } from "../lib/schemas.js";

/**
 * @route GET /Entrepreneurs
 * @description Gets all the entrepreneurs
 * @access public
 */
export async function getAllEntrepreneurs(req, res) {
  try {
    const query = "SELECT * FROM ENTREPRENEUR";
    const entrepreneurs = await pool.query(query);
    return res.status(200).json({ entrepreneurs: entrepreneurs.rows });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

 export const getEntrepreneur = async (req, res) => {
  try {
    const ent_id = req.params.ent_id;
    console.log(ent_id);

    if (!ent_id) {
      return res.json({
        status: 401,
        success: false,
        message: "No entrepreneur details provided",
      });
    }

    // Assuming pool is your MySQL connection pool
    pool.query(
      "SELECT * FROM ENTREPRENEUR WHERE ent_id=?",
      [ent_id],
      (error, result) => {
        if (error) {
          return res.json({
            status: 401,
            success: false,
            message: error,
          });
        }
        return res.json({
          status: 201,
          success: true,
          message: "Entrepreneur data fetched successfully",
          data: result[0],
        });
      }
    );
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};




