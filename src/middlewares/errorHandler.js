export function notFoundHandler(req, res) {
	res.status(404).json({
		error: `Ruta no encontrada: ${req.method} ${req.originalUrl}`,
	});
}

export function errorHandler(error, req, res, next) {
	if (res.headersSent) {
		return next(error);
	}

	const status = Number.isInteger(error.status) ? error.status : 500;
	const message = status === 500 ? 'Error interno del servidor.' : error.message;
	return res.status(status).json({ error: message });
}
