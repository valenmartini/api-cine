import { peliculas } from "../../const/data";

export default function handler(req, res) {
  // CORS headers - permitir peticiones desde cualquier origen
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Manejar preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  res.status(200).json(peliculas);
}