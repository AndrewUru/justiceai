<a href="https://justiceai.vercel.app/">
  <img alt="Mapa de Reportes Ciudadanos de Discriminación" src="https://justiceai.vercel.app/opengraph-image.png">
  <h1 align="center">JusticeAI - Reportes de Discriminación</h1>
</a>

<p align="center">
  Visualiza y analiza reportes ciudadanos de discriminación en la ciudad de Valencia usando Next.js, Supabase y Leaflet.
</p>

<p align="center">
  <a href="#caracteristicas"><strong>Características</strong></a> ·
  <a href="#demo"><strong>Demo</strong></a> ·
  <a href="#despliegue-en-vercel"><strong>Despliegue</strong></a> ·
  <a href="#como-clonar"><strong>Clonar y ejecutar</strong></a> ·
  <a href="#feedback"><strong>Feedback</strong></a>
</p>

---

## Características

- App fullstack con [Next.js 14](https://nextjs.org)
- Autenticación con [Supabase Auth](https://supabase.com/auth)
- Base de datos en tiempo real con [Supabase](https://supabase.com)
- API route protegida para acceder a los eventos
- Visualización de eventos geolocalizados con [React Leaflet](https://react-leaflet.js.org/)
- UI moderna con [Tailwind CSS](https://tailwindcss.com) y [shadcn/ui](https://ui.shadcn.com)
- Modo oscuro habilitado
- Responsive y optimizada para móviles

## Demo

Puedes ver el proyecto funcionando en: [justiceai.vercel.app](https://justiceai.vercel.app)

## Despliegue en Vercel

Haz clic para desplegar directamente:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/andrewuru/justiceai&project-name=justiceai&demo-title=JusticeAI&demo-description=Mapa+ciudadano+de+reportes+de+discriminaci%C3%B3n+con+Next.js+%2B+Supabase&demo-url=https://justiceai.vercel.app&demo-image=https://justiceai.vercel.app/opengraph-image.png)

## ¿Cómo clonar y ejecutar localmente?

1. Crea un proyecto en [Supabase](https://app.supabase.com)

2. Clona el repo:

```bash
git clone https://github.com/andrewuru/justiceai.git
cd justiceai
```

3. Renombra el archivo `.env.example` a `.env.local` y agrega:

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
```

4. Instala dependencias:

```bash
npm install
```

5. Ejecuta el servidor local:

```bash
npm run dev
```

6. Abre [http://localhost:3000](http://localhost:3000)

## Feedback

Puedes dejar sugerencias o reportar errores en [issues](https://github.com/andrewuru/justiceai/issues)

## Licencia

MIT - Creado con ❤️ por [andrewuru](https://github.com/andrewuru)
