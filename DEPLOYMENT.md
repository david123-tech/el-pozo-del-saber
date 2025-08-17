# 🚀 Guía de Despliegue en GitHub Pages

Esta guía te ayudará a desplegar "El Pozo del Saber" en GitHub Pages paso a paso.

## 📋 Prerrequisitos

- Una cuenta de GitHub
- El repositorio clonado en tu máquina local
- Git configurado en tu sistema

## 🔧 Paso 1: Configurar el Repositorio

1. **Crear el repositorio en GitHub:**
   - Ve a [github.com](https://github.com) y crea un nuevo repositorio
   - Nómbralo: `el-pozo-del-saber`
   - Hazlo público
   - NO inicialices con README, .gitignore o licencia

2. **Clonar y configurar localmente:**
   ```bash
   git clone https://github.com/[tu-usuario]/el-pozo-del-saber.git
   cd el-pozo-del-saber
   ```

## 📁 Paso 2: Estructura de Archivos

Asegúrate de que tu repositorio tenga esta estructura:

```
el-pozo-del-saber/
├── index.html              # Página principal
├── 404.html               # Página de error
├── manifest.json           # Configuración PWA
├── sw.js                  # Service Worker
├── sitemap.xml            # Sitemap para SEO
├── robots.txt             # Robots para SEO
├── _config.yml            # Configuración GitHub Pages
├── .github/               # Workflows de GitHub Actions
│   └── workflows/
│       └── deploy.yml     # Configuración de despliegue
├── README.md              # Documentación
├── LICENSE                # Licencia MIT
├── DEPLOYMENT.md          # Esta guía
└── public/                # Archivos estáticos
    ├── placeholder-logo.png
    └── placeholder-logo.svg
```

## 🔄 Paso 3: Subir Código a GitHub

```bash
# Agregar todos los archivos
git add .

# Hacer commit inicial
git commit -m "🚀 Despliegue inicial de El Pozo del Saber"

# Subir a la rama main
git push -u origin main
```

## ⚙️ Paso 4: Configurar GitHub Pages

1. **Ir a la configuración del repositorio:**
   - En tu repositorio, ve a `Settings` (Configuración)
   - En el menú lateral, busca `Pages`

2. **Configurar la fuente:**
   - En `Source`, selecciona `Deploy from a branch`
   - En `Branch`, selecciona `main`
   - En `Folder`, deja `/ (root)`
   - Haz clic en `Save`

3. **Esperar el despliegue:**
   - GitHub comenzará a construir tu sitio
   - Esto puede tomar unos minutos
   - Verás un mensaje verde cuando esté listo

## 🌐 Paso 5: Verificar el Despliegue

1. **URL del sitio:**
   - Tu sitio estará disponible en: `https://[tu-usuario].github.io/el-pozo-del-saber`

2. **Verificar funcionalidades:**
   - ✅ Página principal cargando
   - ✅ Navegación funcionando
   - ✅ Responsive design
   - ✅ Service Worker registrado
   - ✅ PWA instalable

## 🔄 Paso 6: Despliegue Automático

El workflow de GitHub Actions se ejecutará automáticamente:

- **Trigger:** Cada push a la rama `main`
- **Acción:** Despliegue automático en GitHub Pages
- **Estado:** Puedes ver el progreso en la pestaña `Actions`

## 📱 Paso 7: Probar como PWA

1. **Abrir en Chrome/Edge:**
   - Ve a tu sitio en GitHub Pages
   - Deberías ver un banner de instalación
   - O usa el menú de Chrome para instalar

2. **Funcionalidades offline:**
   - El Service Worker cachea recursos
   - La aplicación funciona sin conexión
   - Página 404 personalizada

## 🛠️ Paso 8: Personalización

### Cambiar Colores
Edita las variables CSS en `index.html`:
```css
:root {
  --primary-color: #1e3c72;
  --secondary-color: #2a5298;
  --accent-color: #ffd700;
}
```

### Cambiar Contenido
- Edita el texto en `index.html`
- Modifica las descripciones de materias
- Actualiza la información del profesor

### Cambiar Imágenes
- Reemplaza `placeholder-logo.png` con tu logo
- Actualiza `manifest.json` con las nuevas imágenes
- Ajusta los tamaños en el CSS

## 🔍 Paso 9: SEO y Analytics

### Verificar SEO
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Meta Tags](https://metatags.io/)

### Agregar Analytics
Para Google Analytics, agrega esto en `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚨 Solución de Problemas

### El sitio no se despliega
1. Verifica que la rama sea `main`
2. Revisa los logs en `Actions`
3. Asegúrate de que `index.html` esté en la raíz

### Service Worker no funciona
1. Verifica que `sw.js` esté en la raíz
2. Revisa la consola del navegador
3. Asegúrate de que HTTPS esté habilitado

### Página 404 no funciona
1. Verifica que `404.html` esté en la raíz
2. Asegúrate de que GitHub Pages esté configurado correctamente

## 📞 Soporte

Si tienes problemas:

1. **Revisa los logs:** Ve a `Actions` en tu repositorio
2. **Consulta la documentación:** [GitHub Pages](https://docs.github.com/en/pages)
3. **Verifica la configuración:** Asegúrate de seguir todos los pasos

## 🎉 ¡Listo!

Tu plataforma "El Pozo del Saber" estará funcionando en GitHub Pages con:

- ✅ Diseño responsive y moderno
- ✅ Navegación fluida
- ✅ PWA funcional
- ✅ SEO optimizado
- ✅ Despliegue automático
- ✅ Funcionalidad offline

---

**¡Disfruta tu nueva plataforma educativa en la web! 🎓🚀**
