# 🔐 Verificación de Dominio en Google

## Opciones para Verificar el Dominio `.vercel.app`

### ❌ Limitación: No se pueden agregar registros TXT a `.vercel.app`

Los dominios `.vercel.app` de Vercel **NO permiten** agregar registros DNS personalizados (incluyendo TXT). Sin embargo, hay alternativas:

## ✅ Opción 1: Meta Tag en HTML (Recomendado)

Google Search Console permite verificar usando un meta tag en el `<head>`.

### Pasos:

1. **Obtén el código de verificación:**
   - Ve a [Google Search Console](https://search.google.com/search-console)
   - Agrega propiedad: `tu-proyecto.vercel.app`
   - Selecciona método: **"Etiqueta HTML"**
   - Copia el código que te da (algo como: `<meta name="google-site-verification" content="abc123..." />`)

2. **Agrega el meta tag:**
   - Edita `app/layout.tsx`
   - Descomenta y agrega el código en la sección `metadata`:

```typescript
export const metadata: Metadata = {
  title: 'AutoPost - Términos y Privacidad',
  description: 'Términos de servicio y política de privacidad de AutoPost',
  verification: {
    google: 'tu-codigo-de-verificacion-aqui',
  },
}
```

3. **Sube los cambios:**
```bash
git add app/layout.tsx
git commit -m "Add Google verification meta tag"
git push
```

4. **Vercel desplegará automáticamente** y Google podrá verificar el dominio.

## ✅ Opción 2: Archivo HTML de Verificación

Google también permite verificar usando un archivo HTML.

### Pasos:

1. **Obtén el archivo de verificación:**
   - En Google Search Console, selecciona método: **"Archivo HTML"**
   - Descarga el archivo (ej: `google123abc456.html`)

2. **Agrega el archivo al proyecto:**
   - Colócalo en la carpeta `public/`
   - Ejemplo: `public/google123abc456.html`

3. **Sube los cambios:**
```bash
git add public/google123abc456.html
git commit -m "Add Google verification file"
git push
```

4. **Accede a la URL:**
   - `https://tu-proyecto.vercel.app/google123abc456.html`
   - Google verificará automáticamente

## ✅ Opción 3: Dominio Personalizado (Si lo necesitas)

Si realmente necesitas agregar registros TXT, puedes usar un dominio personalizado:

### Pasos:

1. **Compra un dominio** (ej: `autopost.com`)

2. **Configúralo en Vercel:**
   - Ve a tu proyecto en Vercel
   - Settings > Domains
   - Agrega tu dominio personalizado
   - Sigue las instrucciones de DNS

3. **Agrega registros TXT:**
   - En tu proveedor de DNS, agrega el registro TXT que Google te proporcione
   - Ejemplo: `@ TXT google-site-verification=abc123...`

4. **Usa el dominio personalizado en Google Cloud Console:**
   - En lugar de `autopost-pages.vercel.app`
   - Usa `autopost.com`

## 📝 Para OAuth de Google (No necesitas verificación)

**IMPORTANTE:** Para OAuth de Google (Google Cloud Console), **NO necesitas verificar el dominio** en Search Console. Solo necesitas que las URLs sean accesibles públicamente, lo cual Vercel ya hace automáticamente.

La verificación de dominio es solo necesaria si quieres:
- Verificar propiedad en Google Search Console
- Usar Google Analytics
- Otras herramientas de Google que requieran verificación

## 🚀 Resumen Rápido

**Para OAuth:** No necesitas verificar, solo usa las URLs de Vercel.

**Para Search Console:** Usa el método de Meta Tag (Opción 1) - es el más fácil.

¿Necesitas ayuda con algún método específico?
