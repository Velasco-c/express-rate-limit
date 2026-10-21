import { Router } from 'express';
import { animes } from '../data/anime.db.js';
import { validarAnime, validarActualizacionAnime } from '../middlewares/validator.js';

const router = Router();

// GET /api/animes: listar todos los animes.
router.get('/', (req, res) => {
	res.status(200).json({
		datos: animes,
		total: animes.length,
	});
});

// GET /api/animes/:id: buscar un anime por su ID.
router.get('/:id', (req, res) => {
	const id = parseInt(req.params.id, 10);

	if (isNaN(id)) {
		return res.status(400).json({ error: 'El ID debe ser un número entero.' });
	}

	const anime = animes.find((item) => item.id === id);

	if (!anime) {
		return res.status(404).json({ error: `No se encontró un anime con el ID ${id}.` });
	}

	return res.status(200).json({ dato: anime });
});

// POST /api/animes: agregar un anime.
router.post('/', validarAnime, (req, res) => {
	const { titulo, genero, plataforma, puntuacion } = req.body || {};

	const nuevoId = animes.length > 0
		? Math.max(...animes.map((item) => item.id)) + 1
		: 1;

	const nuevoAnime = {
		id: nuevoId,
		titulo: titulo.trim(),
		genero: genero.trim(),
		plataforma: plataforma.trim(),
		puntuacion,
	};

	animes.push(nuevoAnime);
	return res.status(201).json({ dato: nuevoAnime });
});

// PATCH /api/animes/:id: actualizar uno o más campos.
router.patch('/:id', validarActualizacionAnime, (req, res) => {
	const id = parseInt(req.params.id, 10);

	if (isNaN(id)) {
		return res.status(400).json({ error: 'El ID debe ser un número entero.' });
	}

	const indice = animes.findIndex((item) => item.id === id);

	if (indice === -1) {
		return res.status(404).json({ error: `No se encontró un anime con el ID ${id}.` });
	}

	const cambios = req.body;

	if (cambios.titulo !== undefined) animes[indice].titulo = cambios.titulo.trim();
	if (cambios.genero !== undefined) animes[indice].genero = cambios.genero.trim();
	if (cambios.plataforma !== undefined) animes[indice].plataforma = cambios.plataforma.trim();
	if (cambios.puntuacion !== undefined) animes[indice].puntuacion = cambios.puntuacion;

	return res.status(200).json({ dato: animes[indice] });
});

// DELETE /api/animes/:id: eliminar un anime.
router.delete('/:id', (req, res) => {
	const id = parseInt(req.params.id, 10);

	if (isNaN(id)) {
		return res.status(400).json({ error: 'El ID debe ser un número entero.' });
	}

	const indice = animes.findIndex((item) => item.id === id);

	if (indice === -1) {
		return res.status(404).json({ error: `No se encontró un anime con el ID ${id}.` });
	}

	const animeEliminado = animes.splice(indice, 1)[0];
	return res.status(200).json({ dato: animeEliminado });
});

export default router;
