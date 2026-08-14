# LG State Clean LLC — Sitio Web

Sitio estático optimizado, listo para publicar en **Netlify** vía **GitHub**.

## 📁 Qué hay en esta carpeta

```
index.html              → Inicio
services.html            → Servicios
specialized-care.html    → Cuidado especializado (mascotas / adultos mayores)
about.html                → Nosotros
contact.html              → Contacto (con formulario funcional)
thank-you.html            → Página de agradecimiento tras enviar el formulario
404.html                  → Página de error personalizada
robots.txt / sitemap.xml  → SEO básico
netlify.toml              → Configuración de Netlify (cache headers)
assets/
  css/style.css           → CSS compilado y minificado (Tailwind, sin dependencias externas)
  js/main.js               → Menú móvil + envío del formulario
  img/                      → Logo, íconos, favicons e imagen para redes sociales
```

No hay build step para desplegar: son archivos HTML/CSS/JS listos para servir tal cual.

---

## 🚀 Cómo publicarlo (GitHub + Netlify)

### 1. Subir a GitHub
```bash
cd site
git init
git add .
git commit -m "LG State Clean LLC — sitio web"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/lg-state-clean.git
git push -u origin main
```

### 2. Conectar en Netlify
1. Entra a [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**.
2. Elige tu repositorio de GitHub.
3. Build command: **(dejar vacío)**. Publish directory: **`.`** (raíz).
4. Deploy site.

Netlify detecta automáticamente el archivo `netlify.toml` y el formulario de contacto (ver abajo). En unos minutos tendrás una URL tipo `nombre-al-azar.netlify.app`, que luego puedes conectar a tu dominio propio (`lgstateclean.com`) desde **Site settings → Domain management**.

---

## ✉️ El formulario de contacto — cómo funciona

El formulario en `contact.html` usa **Netlify Forms**, la forma estándar de tener un formulario funcional sin backend propio:

- Ya tiene el atributo `data-netlify="true"` — Netlify lo detecta automáticamente al hacer deploy, **no hay que configurar nada adicional**.
- Incluye un campo oculto "honeypot" (`bot-field`) para filtrar spam automático.
- El envío se hace por JavaScript (AJAX) sin recargar la página, mostrando un mensaje de confirmación inline. Si el visitante tiene JavaScript desactivado, el formulario funciona igual con un envío normal y lo redirige a `thank-you.html`.

### Dónde ver los mensajes recibidos
En el panel de Netlify: **Site → Forms**. Ahí aparecerán todas las solicitudes de cotización con nombre, email, teléfono, tipo de servicio y mensaje.

### Recomendado: activar notificaciones por email
En Netlify → **Forms → Settings and usage → Form notifications → Add notification → Email notification**, y agrega el correo donde quieras recibir cada solicitud (por ejemplo `hello@lgstateclean.com`). Así no tienes que entrar al panel a revisar manualmente.

---

## 🎨 Sobre el diseño

- **Sin imágenes externas**: reemplacé las fotos de stock generadas por IA (que apuntaban a un servidor temporal de Google) por ilustraciones propias en SVG que usan la paleta de tu marca (navy, sky blue, dorado) y el motivo de montaña de tu logo. Esto hace el sitio más rápido, 100% autónomo y sin riesgo de "imágenes rotas" en el futuro.
- **Excepción**: la foto de la señora con su perrito dorado en `specialized-care.html` sí es una imagen real en alta resolución que tenías en tus archivos — la optimicé (WebP + JPG) y la autohospedé en `assets/img/`.
- **Logo real**: extraje tu logo desde la foto de WhatsApp que subiste, le quité el fondo y generé versiones optimizadas para navegación, footer y favicons.
- **CSS compilado**: en vez de cargar Tailwind completo desde un CDN (como venía de Stitch), compilé un archivo CSS final minificado de ~25 KB con solo las clases que el sitio realmente usa — carga considerablemente más rápido.
- **Íconos**: son SVG inline (no dependen de ninguna fuente de íconos externa).

### 📸 Recomendación para el futuro
Cuando tengas fotos reales de trabajos terminados, de tu equipo o del camión rotulado (¡tienes un mockup buenísimo de eso!), sería el momento ideal de reemplazar los paneles ilustrados por esas fotos reales — dan aún más confianza a un cliente potencial que las imágenes genéricas. Puedo ayudarte con eso apenas las tengas.

---

## 🔧 Si necesitas volver a editar el sitio

Las páginas HTML fueron generadas con un pequeño script (no incluido en esta carpeta de entrega, pero puedo compartírtelo si quieres seguir editando por código en vez de manualmente). Si prefieres editar directamente el HTML, cada página es independiente y puedes modificar el texto o los enlaces con cualquier editor de texto — solo ten cuidado de no romper las clases de Tailwind ya compiladas en `style.css` (si agregas una clase de Tailwind que no existía antes, no tendrá estilo hasta recompilar).
