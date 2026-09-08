# CÍVICO 🇻🇪
**Desarrollado por Leonardo Urdaneta • La ley en tus manos**

Aplicación web progresiva (PWA) móvil, 100% gratuita y funcional **sin conexión a internet (offline)**, diseñada para que los ciudadanos venezolanos (a pie, en moto o en vehículo) conozcan sus derechos al instante, consulten con su propia voz, respondan a los funcionarios con educación y base jurídica sólida, y tengan acceso a números de emergencia de marcado rápido.

Enlace oficial: [https://leonjuv.github.io/civico/](https://leonjuv.github.io/civico/)

---

## Características Principales

1. **Búsqueda por Voz Nativa ($0 costo):**
   * Presiona el botón del micrófono y di: *"¿Me pueden revisar el morral?"* o *"¿Puedo grabar en la alcabala?"*.
   * Utiliza la API nativa del navegador del teléfono (sin pagar servidores ni OpenAI).
2. **Respuestas en Dos Niveles:**
   * **Nivel 1 (Lo que dices en voz alta):** Texto grande, claro y educado citando la ley sin sonar agresivo ni amenazante.
   * **Nivel 2 (Consecuencia para el funcionario):** Marco penal y administrativo (sanciones del Estatuto Policial, Ley Anticorrupción y Fiscalía) + frase diplomática si el funcionario insiste.
3. **Cobertura Integral:**
   * **🚶 A Pie (Peatones):** Celular, morral, bolsillos, falta de cédula física, detenciones arbitrarias.
   * **🚗 Vehículo / Moto:** Derecho a grabar (Res. 109 / Gaceta 42.458), documentos obligatorios, causales del Art. 181 para retención, inspección de maleta y concusión ("matraca").
4. **Directorio SOS con Marcado a 1 Toque:**
   * Fiscalía General de la República: `0800-FISCA-00`
   * Defensoría del Pueblo: `08000-PUEBLO`
   * Emergencias Nacionales: `VEN 911`
   * Órgano de Control Policial (ICAP): `0800-POLICIA`
5. **Botón Alerta SOS por WhatsApp:**
   * Envía un mensaje de auxilio inmediato con tu ubicación GPS a tus contactos de confianza.
6. **100% Offline (Sin datos ni cobertura):**
   * Gracias al Service Worker (`sw.js`), la aplicación se almacena en el teléfono y funciona en cualquier carretera sin internet.

---

## Cómo Probarla en tu Computadora o Celular

### Opción A: Probar en tu computadora de inmediato
Puedes abrir directamente el archivo `index.html` en tu navegador (Google Chrome, Edge, etc.) haciendo doble clic sobre él.

Para probar la instalación PWA y el Service Worker en local:
```bash
npx serve .
# o
npx http-server .
```
Abre en tu navegador `http://localhost:3000` (o el puerto que indique).

---

## Cómo Publicarla en Internet 100% GRATIS ($0)

No necesitas pagar dominios ni servidores. Puedes usar cualquiera de estas tres opciones gratuitas:

### Opción 1: Cloudflare Pages (La más recomendada para Venezuela)
1. Crea una cuenta gratuita en [pages.cloudflare.com](https://pages.cloudflare.com).
2. Selecciona **"Crear un proyecto"** > **"Carga directa"**.
3. Arrastra la carpeta `guia-legal-ve` completa.
4. En 10 segundos tendrás un enlace seguro con HTTPS gratuito (ej: `guia-legal-ve.pages.dev`).

### Opción 2: Vercel
1. Crea una cuenta gratuita en [vercel.com](https://vercel.com).
2. Si tienes Node instalado, solo escribe en esta carpeta:
   ```bash
   npx vercel
   ```
3. Te dará un enlace instantáneo (ej: `guia-legal-ve.vercel.app`).

### Opción 3: GitHub Pages
1. Sube estos archivos a un repositorio público en tu cuenta de GitHub.
2. Ve a **Settings** > **Pages** y activa GitHub Pages desde la rama `main`.

---

## Cómo Instalarla en el Teléfono (Como App Nativa)

* **En Android (Google Chrome):**
  1. Entra al enlace de la app.
  2. Toca los tres puntos arriba a la derecha.
  3. Selecciona **"Instalar aplicación"** o **"Agregar a la pantalla principal"**.
* **En iPhone (Safari):**
  1. Entra al enlace de la app en Safari.
  2. Toca el botón Compartir (el cuadrado con la flecha hacia arriba).
  3. Selecciona **"Agregar al inicio"**.

---

## Cómo Cambiar el Nombre y Logotipo Cuando los Tengas Listos

1. **Nombre:** Abre `index.html`, `app.js` y `manifest.json`, y cambia `"Guía Legal VE"` por el nombre definitivo que elijas.
2. **Logotipo / Icono:** Reemplaza los archivos `icon-192.png` y `icon-512.png` por tu logotipo en formato PNG de 192x192 y 512x512 píxeles.
