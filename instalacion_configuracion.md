🧱 1. ESTRUCTURA DE CARPETAS

```bash
src/
├── assets/           # Imágenes, logos, íconos
├── components/       # Header, Footer, CardCurso, etc.
├── pages/            # Home.jsx, Login.jsx, Register.jsx, Perfil.jsx, Carrito.jsx, CursoDetalle.jsx
├── routes/           # index.jsx para configurar React Router
├── styles/           # variables.css o tailwind.config.js
├── App.jsx           # Enrutamiento principal y layout
└── main.jsx          # Root rendering
```

🛠️ 2. INSTALACIÓN DEL PROYECTO

```bash
npm create vite@latest frontend --template react
cd frontend
npm install
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- Configura tailwind.config.js:

```js
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
```

- Configura src/index.css:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
