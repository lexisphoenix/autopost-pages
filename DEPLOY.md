# 🚀 Guía de Despliegue Rápido

## Paso 1: Crear el Repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Nombre del repositorio: `autopost-pages` (o el que prefieras)
3. Descripción: "Términos y Política de Privacidad para AutoPost"
4. **NO** inicialices con README, .gitignore o licencia (ya los tenemos)
5. Haz clic en "Create repository"

## Paso 2: Conectar y Subir el Código

Ejecuta estos comandos (reemplaza `TU-USUARIO` con tu usuario de GitHub):

```bash
cd /Users/user/02_Areas/AutoPost-pages

git remote add origin https://github.com/TU-USUARIO/autopost-pages.git
git branch -M main
git push -u origin main
```

## Paso 3: Desplegar en Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión con GitHub
2. Haz clic en "Add New Project"
3. Selecciona el repositorio `autopost-pages`
4. Vercel detectará Next.js automáticamente
5. Haz clic en "Deploy"
6. Espera unos segundos y obtendrás tu URL: `https://autopost-pages.vercel.app`

## Paso 4: Usar en Google Cloud Console

Una vez desplegado, usa estas URLs en OAuth Consent Screen:

- **Página principal:** `https://autopost-pages.vercel.app`
- **Términos:** `https://autopost-pages.vercel.app/terms`
- **Privacidad:** `https://autopost-pages.vercel.app/privacy`

¡Listo! 🎉
