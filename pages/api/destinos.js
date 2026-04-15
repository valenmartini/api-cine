import { destinos } from "../../const/data";

export default function handler(req, res) {
  // Parámetros de paginación
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;

  // Validar que la página sea válida
  if (page < 1) {
    return res.status(400).json({ error: "La página debe ser mayor a 0" });
  }

  if (limit < 1 || limit > 20) {
    return res
      .status(400)
      .json({ error: "El límite debe estar entre 1 y 20" });
  }

  // Calcular índices
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  // Obtener destinos paginados
  const paginatedDestinos = destinos.slice(startIndex, endIndex);

  // Calcular total de páginas
  const totalPages = Math.ceil(destinos.length / limit);

  // Retornar respuesta con información de paginación
  res.status(200).json({
    data: paginatedDestinos,
    pagination: {
      currentPage: page,
      totalPages: totalPages,
      totalItems: destinos.length,
      itemsPerPage: limit,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
  });
}
