export function validarAnime(req, res, next) {
	const { titulo, genero, plataforma, puntuacion } = req.body || {};

	if (!titulo || !genero || !plataforma || puntuacion === undefined) {
		return res.status(400).json({
			error: 'Debes enviar titulo, genero, plataforma y puntuacion.',
		});
	}

	if (
		typeof titulo !== 'string' || !titulo.trim() ||
		typeof genero !== 'string' || !genero.trim() ||
		typeof plataforma !== 'string' || !plataforma.trim()
	) {
		return res.status(400).json({
			error: 'titulo, genero y plataforma deben ser textos no vacíos.',
		});
	}

	if (typeof puntuacion !== 'number' || !Number.isFinite(puntuacion) || puntuacion < 0 || puntuacion > 10) {
		return res.status(400).json({
			error: 'puntuacion debe ser un número entre 0 y 10.',
		});
	}

	return next();
}

export function validarActualizacionAnime(req, res, next) {
	const cambios = req.body;
	const camposPermitidos = ['titulo', 'genero', 'plataforma', 'puntuacion'];

	if (!cambios || typeof cambios !== 'object' || Array.isArray(cambios) || Object.keys(cambios).length === 0) {
		return res.status(400).json({
			error: 'Debes enviar al menos un campo para actualizar.',
		});
	}

	for (const campo of Object.keys(cambios)) {
		if (!camposPermitidos.includes(campo)) {
			return res.status(400).json({ error: `El campo ${campo} no se puede actualizar.` });
		}

		if (campo !== 'puntuacion' &&
			(typeof cambios[campo] !== 'string' || !cambios[campo].trim())) {
			return res.status(400).json({
				error: `${campo} debe ser un texto no vacío.`,
			});
		}

		if (campo === 'puntuacion' &&
			(typeof cambios.puntuacion !== 'number' || !Number.isFinite(cambios.puntuacion) || cambios.puntuacion < 0 || cambios.puntuacion > 10)) {
			return res.status(400).json({
				error: 'puntuacion debe ser un número entre 0 y 10.',
			});
		}
	}

	return next();
}
