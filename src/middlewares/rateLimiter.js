import { rateLimit } from 'express-rate-limit';

export const apiLimiter = rateLimit({
	windowMs: 60 * 1000,
	limit: 10,
	standardHeaders: 'draft-7',
	legacyHeaders: false,
	statusCode: 429,
	message: {
		error: 'Demasiadas solicitudes. Intenta de nuevo en un minuto.',
	},
});


export const crearAnimeLimiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 2,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    statusCode: 429,
    message: {
        error: 'Límite de creación alcanzado: solo puedes registrar 2 animes por minuto.',
        detalle: 'Espera a que se reinicie la ventana antes de enviar otro registro.',
    },
});
