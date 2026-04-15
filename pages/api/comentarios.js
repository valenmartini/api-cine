import { comentarios } from "../../const/data";

export default function handler(req, res) {
  const { idDestino } = req.query;

  // Si se proporciona un ID de destino, filtrar comentarios
  if (idDestino) {
    const idDestinoNum = parseInt(idDestino);

    if (isNaN(idDestinoNum)) {
      return res
        .status(400)
        .json({ error: "idDestino debe ser un número válido" });
    }

    const comentariosDestino = comentarios.filter(
      (c) => c.idDestino === idDestinoNum
    );

    if (comentariosDestino.length === 0) {
      return res
        .status(404)
        .json({ error: `No hay comentarios para el destino ${idDestinoNum}` });
    }

    return res.status(200).json({
      idDestino: idDestinoNum,
      totalComentarios: comentariosDestino.length,
      comentarios: comentariosDestino,
    });
  }

  // Si no se proporciona ID, retornar todos los comentarios
  res.status(200).json({
    totalComentarios: comentarios.length,
    comentarios: comentarios,
  });
}
