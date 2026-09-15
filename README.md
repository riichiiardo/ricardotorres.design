# ricardotorres.design

Portfolio personal de Ricardo Andrei Torres Medina — UX/UI Project Lead & Digital Product Designer.

Proyecto generado originalmente en [emergent.sh](https://emergent.sh) (React + FastAPI + MongoDB) y adaptado para desplegarse como sitio estático en **GitHub Pages**.

## Estructura del repositorio

```
.
├── frontend/                  # App React (Create React App + craco)
│   ├── src/
│   │   ├── components/        # Header, Footer, secciones del home, UI (shadcn)
│   │   ├── pages/             # HomePage, CaseStudyPage (/work/:slug), CVPage (/cv)
│   │   ├── data/              # Contenido estructurado (proyectos, multimedia, i18n ES/EN)
│   │   ├── i18n/              # Contexto de idioma y diccionarios
│   │   └── index.js           # Entry point
│   ├── public/                # index.html, CV PDF e imágenes de proyectos
│   └── package.json
├── backend/                   # API FastAPI + MongoDB (formulario de contacto)
│   ├── server.py
│   └── requirements.txt
├── scripts/                   # Utilidades usadas durante la construcción (Figma, CV)
├── memory/                    # PRD del proyecto
└── .github/workflows/         # Deploy automático a GitHub Pages
```

## Stack

- **Frontend:** React 19, react-router-dom 7, Tailwind CSS, framer-motion, lenis
- **Backend (opcional):** FastAPI + MongoDB — solo necesario para el formulario de contacto con almacenamiento y notificación por email

## Desarrollo local (frontend)

```bash
cd frontend
npm install
npm start          # http://localhost:3000
```

Build de producción (se genera en `frontend/build/`):

```bash
npm run build
```

## Backend (opcional)

```bash
cd backend
pip install -r requirements.txt
# Requiere MONGO_URL y DB_NAME en backend/.env
uvicorn server:app --reload
```

El frontend solo llama al backend si `REACT_APP_BACKEND_URL` está definido; sin esa variable, el formulario de contacto abre el cliente de correo (`mailto:`).

## Despliegue

El workflow [`.github/workflows/node.js.yml`](.github/workflows/node.js.yml) construye el frontend y lo publica automáticamente en GitHub Pages con cada push a `main`:

- URL: https://riichiiardo.github.io/ricardotorres.design/
- Las rutas usan `homepage` de `frontend/package.json` como basename, de modo que `/work/:slug` y `/cv` funcionan bajo la subruta del repositorio.
- El soporte de rutas SPA se resuelve con un `404.html` (copia de `index.html`).
