# API de catálogo de anime

API REST construida con Express 5 para consultar y administrar un catálogo de anime en memoria. Limita cada dirección IP a 10 solicitudes por minuto y a 2 creaciones por minuto. Los datos vuelven a su estado inicial cuando se reinicia el proceso.

## Requisitos

- Node.js 20 o superior
- npm

## Inicio

```bash
npm install
npm start
```

La API queda disponible en `http://localhost:3000`. Puedes cambiar el puerto con la variable de entorno `PORT`. Para desarrollo con reinicio automático usa `npm run dev`.

## Rutas

| Método | Ruta | Descripción |
| --- | --- | --- |
| `GET` | `/` | Mensaje de bienvenida |
| `GET` | `/api` | Información de rutas y límite de solicitudes |
| `GET` | `/api/animes` | Lista el catálogo |
| `GET` | `/api/animes/:id` | Obtiene un anime por ID |
| `POST` | `/api/animes` | Crea un anime |
| `PATCH` | `/api/animes/:id` | Actualiza uno o más campos |
| `DELETE` | `/api/animes/:id` | Elimina un anime |

Los campos para crear son `titulo`, `genero`, `plataforma` (textos no vacíos) y `puntuacion` (número de 0 a 10). Las respuestas de listado usan `{ "datos": [...], "total": n }`; las de elemento usan `{ "dato": ... }`; los errores usan `{ "error": "..." }`.

La validación de los datos está separada en `src/middlewares/validator.js` y se usa en las rutas `POST` y `PATCH`.

Ejemplos:

```bash
curl http://localhost:3000/api/animes
curl http://localhost:3000/api/animes/1
curl -X POST http://localhost:3000/api/animes \
  -H 'Content-Type: application/json' \
  -d '{"titulo":"Ejemplo","genero":"Aventura","plataforma":"Crunchyroll","puntuacion":8.5}'
curl -X PATCH http://localhost:3000/api/animes/1 \
  -H 'Content-Type: application/json' \
  -d '{"puntuacion":9}'
curl -X DELETE http://localhost:3000/api/animes/1
```

Las respuestas incluyen los encabezados estándar de rate limit. Al superar el límite general o el límite de creación, la API responde `429` con un mensaje JSON.
