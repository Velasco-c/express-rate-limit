import express from 'express';
import { pathToFileURL } from 'node:url';
import animeRouter from './routes/animer.routes.js';
import { apiLimiter, crearAnimeLimiter } from './middlewares/rateLimiter.js';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js';

const app = express();

app.disable('x-powered-by');
app.use(express.json({ limit: '32kb' }));

app.get('/', (req, res) => {
	res.json({
		mensaje: 'API de catálogo de anime',
		documentacion: '/api',
	});
});

app.get('/api', (req, res) => {
	res.json({
		nombre: 'API de catálogo de anime',
		version: '1.0.0',
		limite: '10 solicitudes por minuto y dirección IP; 2 creaciones de anime por minuto',
		rutas: {
			listar: 'GET /api/animes',
			buscar: 'GET /api/animes/:id',
			crear: 'POST /api/animes',
			actualizar: 'PATCH /api/animes/:id',
			eliminar: 'DELETE /api/animes/:id',
		},
	});
});

app.use('/api/animes', apiLimiter);
app.post('/api/animes', crearAnimeLimiter);
app.use('/api/animes', animeRouter);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
	const port = Number(process.env.PORT) || 3000;
	app.listen(port, () => {
		console.log(`API disponible en http://localhost:${port}`);
	});
}
