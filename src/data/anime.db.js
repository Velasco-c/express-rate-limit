

const animesIniciales = [
  { id: 1, titulo: "RE: Deidad", genero: "Acción / Aventura", plataforma: "Crunchyroll", puntuacion: 10 },
  { id: 2, titulo: "Attack on Titan", genero: "Acción / Drama", plataforma: "Crunchyroll", puntuacion: 8.6 },
  { id: 3, titulo: "Death Note", genero: "Thriller / Psicológico", plataforma: "Netflix", puntuacion: 8.6 },
  { id: 4, titulo: "Steins;Gate", genero: "Ciencia Ficción / Thriller", plataforma: "Crunchyroll", puntuacion: 9.0 },
  { id: 5, titulo: "Cowboy Bebop", genero: "Ciencia Ficción / Acción", plataforma: "Netflix", puntuacion: 8.9 },
  { id: 6, titulo: "Mob Psycho 100", genero: "Acción / Comedia", plataforma: "Crunchyroll", puntuacion: 8.5 },
  { id: 7, titulo: "Violet Evergarden", genero: "Drama / Fantasía", plataforma: "Netflix", puntuacion: 8.7 },
  { id: 8, titulo: "Monster", genero: "Thriller / Drama", plataforma: "Netflix", puntuacion: 8.9 },
  { id: 9, titulo: "Vinland Saga", genero: "Acción / Drama Histórico", plataforma: "Prime Video", puntuacion: 8.8 },
  { id: 10, titulo: "Hunter x Hunter", genero: "Aventura / Shonen", plataforma: "Netflix", puntuacion: 9.0 },
  { id: 11, titulo: "Ghost in the Shell: Stand Alone Complex", genero: "Ciencia Ficción / Cyberpunk", plataforma: "Netflix", puntuacion: 8.4 },
  { id: 12, titulo: "Jujutsu Kaisen", genero: "Acción / Sobrenatural", plataforma: "Crunchyroll", puntuacion: 8.5 },
  { id: 13, titulo: "Spy x Family", genero: "Comedia / Acción", plataforma: "Crunchyroll", puntuacion: 8.2 },
  { id: 14, titulo: "Frieren: Más allá del viaje final", genero: "Fantasía / Drama", plataforma: "Crunchyroll", puntuacion: 9.3 },
  { id: 15, titulo: "Your Lie in April", genero: "Romance / Drama Musical", plataforma: "HIDIVE", puntuacion: 8.6 },
  { id: 16, titulo: "Mushoku Tensei: Jobless Reincarnation", genero: "Isekai / Fantasía", plataforma: "Crunchyroll", puntuacion: 8.0 },
  { id: 17, titulo: "Re:Zero", genero: "Isekai / Thriller", plataforma: "Crunchyroll", puntuacion: 8.2 },
  { id: 18, titulo: "Haikyu!!", genero: "Deportes / Comedia", plataforma: "Crunchyroll", puntuacion: 8.7 },
  { id: 19, titulo: "Samurai Champloo", genero: "Acción / Aventura", plataforma: "HIDIVE", puntuacion: 8.5 },
  { id: 20, titulo: "Made in Abyss", genero: "Aventura / Fantasía Oscura", plataforma: "HIDIVE", puntuacion: 8.7 },
  { id: 21, titulo: "Chainsaw Man", genero: "Acción / Terror", plataforma: "Crunchyroll", puntuacion: 8.4 },
  { id: 22, titulo: "Oshi no Ko", genero: "Drama / Musical", plataforma: "Crunchyroll", puntuacion: 8.3 },
  { id: 23, titulo: "Dandadan", genero: "Acción / Sobrenatural / Comedia", plataforma: "Netflix", puntuacion: 8.6 },
  { id: 24, titulo: "Kaguya-sama: Love is War", genero: "Comedia / Romance", plataforma: "Crunchyroll", puntuacion: 8.5 },
  { id: 25, titulo: "Akira", genero: "Ciencia Ficción / Acción", plataforma: "Prime Video", puntuacion: 8.4 }
];

export let animes = structuredClone(animesIniciales);

export function reiniciarAnimes() {
  animes.length = 0;
  animes.push(...structuredClone(animesIniciales));
  return animes;
}