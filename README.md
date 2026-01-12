# 📄 AutoPost Pages - Términos y Privacidad

Páginas legales para AutoPost: Términos del Servicio y Política de Privacidad.

## 🚀 Despliegue en Vercel

### Opción 1: Desde GitHub

1. **Sube este proyecto a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/tu-usuario/autopost-pages.git
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Importa el repositorio
   - Vercel detectará automáticamente Next.js
   - Haz clic en "Deploy"

3. **Obtén tu URL:**
   - Después del deploy, tendrás una URL como: `https://autopost-pages.vercel.app`
   - Usa esta URL en Google Cloud Console

### Opción 2: Desde Vercel CLI

```bash
npm i -g vercel
vercel
```

## 🔗 URLs para Google Cloud Console

Una vez desplegado, usa estas URLs:

- **Página principal:** `https://tu-proyecto.vercel.app`
- **Términos:** `https://tu-proyecto.vercel.app/terms`
- **Privacidad:** `https://tu-proyecto.vercel.app/privacy`

## ✅ Verificación del Dominio en Google

1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Agrega la propiedad: `tu-proyecto.vercel.app`
3. Verifica usando el método HTML (Vercel permite agregar meta tags)
4. O usa el método de archivo (crea un archivo de verificación en `public/`)

## 📝 Personalización

Edita los archivos:
- `app/terms/page.tsx` - Términos del Servicio
- `app/privacy/page.tsx` - Política de Privacidad

## 🎨 Estilos

El proyecto usa Tailwind CSS. Puedes personalizar los estilos en `app/globals.css`.
