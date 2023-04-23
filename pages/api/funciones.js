// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { funciones, peliculas } from "../../const/data";

export default function handler(req, res) {
  res.status(200).json(funciones)
}
