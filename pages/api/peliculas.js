import { peliculas } from "../../const/data";

export default function handler(req, res) {
    res.status(200).json(peliculas)
  }