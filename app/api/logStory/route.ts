import pool from "../../../db.js";


export default async function handler(req, res) {
    
    try {
        const result = await pool.query("SELECT * FROM codikit.backend.version ");
        res.status(200).json(result.rows);
    
    } catch (error) {
        console.error("Error", error);
        res.status(500).json({error: "Uh Oh"});
    
    }

} 
