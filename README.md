# Centro de Gestión Política — versión simple

Un solo archivo HTML autocontenido, sin backend, sin Node, sin npm y sin comando de build.
Los datos se guardan en el navegador (localStorage), igual que trabajas con MrNetflix.

## ¿Cómo funciona?

- Todo el código (HTML + CSS + JavaScript) vive en `index.html`.
- Al abrirlo, crea automáticamente el proyecto **"Gestión Política Caldas"**.
- Puedes crear más "Proyectos Políticos" desde el menú (ej: Asamblea Departamental de Antioquia) — cada uno guarda sus propios contactos, tareas, agenda, gestiones, compromisos y territorios sin mezclarse con los demás.
- Los datos quedan guardados en **este navegador, en este computador/celular**. Si cambias de navegador o de equipo, no los verás automáticamente — para eso usa **Configuración → Exportar respaldo**, y luego **Importar respaldo** en el otro lugar.

## Probarlo ahora mismo

Simplemente abre `index.html` haciendo doble clic, o arrástralo a una pestaña del navegador. No necesitas instalar nada.

## Publicarlo en internet (GitHub + Netlify, sin Supabase)

1. **Crear el repositorio en GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: version simple de Gestion Politica (sin backend)"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/gestion-politica-simple.git
   git push -u origin main
   ```

2. **Conectar con Netlify:**
   - Entra a [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project → GitHub**.
   - Selecciona el repositorio.
   - Deja **Build command vacío** y **Publish directory** en `.` (así viene configurado en `netlify.toml`).
   - Haz clic en **Deploy**. En segundos tendrás tu link público (algo como `https://tu-sitio.netlify.app`).

3. **Actualizaciones futuras:** cada vez que quieras subir un cambio, repite:
   ```bash
   git add .
   git commit -m "describe aquí el cambio"
   git push
   ```
   Netlify detecta el push y publica la nueva versión automáticamente — no hay build que pueda fallar, porque no hay paso de build.

## Importante sobre los datos

- Esta versión **no tiene usuarios ni contraseñas** — cualquiera con el link puede usar la app, pero cada quien ve solo lo que tiene guardado en su propio navegador (no hay una base de datos compartida en la nube).
- Si varias personas necesitan ver y editar exactamente la misma información al mismo tiempo desde distintos dispositivos, esta versión simple no lo permite — para eso sirve la versión con Supabase que armamos antes (`gestion-politica-fase1.zip`), donde los datos sí viven en una base de datos central.
- Para uso individual (como manejas MrNetflix), esta versión es la más simple posible: un archivo, un link, sin piezas que se puedan romper.

## Instalarla como app (con tu logo y nombre)

Una vez publicada en Netlify (necesita `https://`, no funciona abriendo el archivo directo), la app se puede "instalar" como cualquier app nativa, con tu ícono y el nombre "Gestión Política" en la pantalla de inicio:

**En Android (Chrome):**
1. Abre el link de Netlify.
2. Toca el menú ⋮ (tres puntos) → **"Instalar app"** o **"Agregar a pantalla de inicio"**.
3. Confirma — aparecerá el ícono y el nombre en el celular, y al abrirla se ve como una app independiente (sin la barra del navegador).

**En iPhone (Safari):**
1. Abre el link de Netlify.
2. Toca el botón compartir (el cuadrito con la flecha hacia arriba).
3. Elige **"Agregar a pantalla de inicio"**.

**En computador (Chrome/Edge):** aparece un ícono de instalación (⊕ o pantalla con flecha) en la barra de direcciones, a la derecha.

Esto funciona gracias a tres archivos que ya vienen incluidos: `manifest.json` (nombre e íconos de la app), `sw.js` (requisito técnico de Chrome para poder instalarla) y la carpeta `icons/` con tu logo en varios tamaños. No necesitas tocar nada de esto — ya está listo, solo publica en Netlify como se explica arriba.

## Próximos ajustes

Si más adelante quieres agregar sincronización entre tu computador y tu celular (como el servidor local de PowerShell de MrNetflix), se puede sumar sin rehacer nada de lo ya construido — solo se agregaría una forma de compartir el archivo de respaldo (`.json`) automáticamente en vez de hacerlo manual.

## Publicar una "versión 2" para otro usuario/cliente (otro correo)

Como esta app no tiene backend ni cuentas de usuario, cada instalación es completamente independiente — perfecto para dar una copia propia a otro cliente político sin que sus datos se mezclen con los tuyos. Pasos:

1. **Copia la carpeta completa** (`index.html`, `netlify.toml`, `README.md`) a una carpeta nueva, por ejemplo `gestion-politica-cliente2/`.
2. Si quieres renombrar el proyecto sembrado por defecto (hoy dice "Gestión Política Caldas"), edita en `index.html` la función `seedDB()` y cambia el `name` del proyecto inicial.
3. **Crea un repositorio nuevo en GitHub**, esta vez iniciando sesión con el correo/cuenta del otro usuario (o usando "Add another account" en GitHub si lo vas a manejar tú mismo):
   ```bash
   git init
   git add .
   git commit -m "feat: version 2 - Gestion Politica [nombre del cliente]"
   git branch -M main
   git remote add origin https://github.com/OTRO_USUARIO/gestion-politica-v2.git
   git push -u origin main
   ```
4. **Conecta ese repositorio a Netlify** desde la cuenta de Netlify de ese correo (o agrega el repo como un "New site" adicional si administras varias cuentas). Deploy igual que la primera vez: sin build command, publish directory `.`.
5. Tendrás un link independiente (ej. `https://gestion-politica-cliente2.netlify.app`) con sus propios datos guardados en el navegador de quien lo use — completamente separado de tu primera instalación.

No hace falta tocar el código para esto: es la misma aplicación, simplemente publicada por segunda vez bajo otra cuenta.
