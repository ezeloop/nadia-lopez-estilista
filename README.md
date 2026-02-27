# Nadia López — Estilista Profesional · Landing Page

Sitio web profesional para estilista en Córdoba Capital, Argentina.
Stack: **Next.js 14 · React 18 · Three.js · Framer Motion · Tailwind CSS**

---

## Levantar el proyecto

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar en producción
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

---

## Estructura de carpetas

```
app/
  layout.tsx          ← metadata SEO + favicon
  page.tsx            ← ensambla todas las secciones
  globals.css         ← variables CSS, paleta, utilidades

components/
  Navbar.tsx
  HeroSection.tsx     ← Three.js 3D integrado
  AboutSection.tsx
  ServicesSection.tsx
  GallerySection.tsx  ← lightbox + antes/después
  BookingSection.tsx
  ContactSection.tsx
  Footer.tsx
  three/
    HeroCanvas.tsx
    HairStrand.tsx

lib/
  data.ts             ← servicios, galería, contacto

types/
  index.ts

public/
  estilista-nadia-lopez/
  antes-despues/
  peinados-trabajos/
  favicon.svg
```

---

## Datos a completar

Editar `lib/data.ts`:

| Campo | Estado |
|---|---|
| `CONTACT.whatsapp` | ✅ Completado |
| `CONTACT.instagram` | ✅ Completado |
| `CONTACT.email` | ✅ Completado |
| `TESTIMONIALS` | ⏳ Pendiente — sección oculta hasta tener reales |

---

## Integraciones pendientes

### 1. Sistema de turnos (Turnero)

[Cal.com](https://cal.com) (gratuito) o Calendly**

---

### 2. Calificaciones de clientes (Reviews)

**Opción recomendada: Google Reviews embed o base de datos propia**

```bash
# Para reviews propias con base de datos:
npm install @prisma/client prisma
npm install zod react-hook-form
```

Archivos a crear:

```
app/
  api/
    reviews/
      route.ts          ← GET (listar aprobadas) + POST (nueva reseña)

components/
  TestimonialsSection.tsx   ← ya existe, actualmente oculto
  ReviewForm.tsx            ← formulario: nombre, servicio, estrellitas, texto
  StarRating.tsx            ← componente de estrellas interactivo

lib/
  reviews.ts                ← filtrar solo aprobadas (moderación)
```

Campos del formulario:
- Nombre (requerido)
- Servicio recibido (select desde `SERVICES`)
- Puntuación 1–5 estrellas
- Comentario (máx. 300 caracteres)
- Estado: `pendiente` → Nadia aprueba → `publicado`

Para activar la sección cuando esté lista, en `app/page.tsx`:

```tsx
// Descomentar estas dos líneas:
import { TestimonialsSection } from "@/components/TestimonialsSection";
// ...
<TestimonialsSection />
```

---

### 3. Gestión de imágenes

Actualmente las imágenes se sirven desde `/public` de forma estática.
Para cuando el catálogo crezca o Nadia quiera actualizarlas sin tocar código:

**Opción A — Cloudinary (recomendada, tiene plan gratuito)**

```bash
npm install next-cloudinary
```

```env
# .env.local
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=tu_cloud_name
```

Cambios en `lib/data.ts`:

```ts
// Cambiar rutas locales:
src: "/antes-despues/despues1.jpg"

// Por URLs de Cloudinary:
src: "https://res.cloudinary.com/TU_CLOUD/image/upload/v.../despues1.jpg"
```

**Opción B — Seguir con `/public` (actual)**
Simplemente reemplazar los archivos en:
```
public/antes-despues/
public/estilista-nadia-lopez/
public/peinados-trabajos/
```
Los nombres deben coincidir exactamente con los definidos en `lib/data.ts`.

Imágenes pendientes de agregar:
- [ ] Más fotos de antes/después (`antes3.jpg`, `despues3.jpg`, etc.)
- [ ] Fotos de trabajos de color adicionales
- [ ] Foto principal de Nadia para el Hero (si se decide agregar)

---

## Variables de entorno

Crear `.env.local` en la raíz cuando se integre backend:

```env
# Base de datos (Prisma)
DATABASE_URL="postgresql://..."

# Email (confirmaciones de turno)
RESEND_API_KEY="re_..."

# Cloudinary (imágenes, opcional)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="..."

# WhatsApp Business API (opcional, para notificaciones automáticas)
WHATSAPP_TOKEN="..."
```

---

## Deploy

```bash
# Vercel (recomendado — integración directa con Next.js)
npm install -g vercel
vercel

# O conectar el repositorio en vercel.com
# y hace deploy automático en cada push a main
```
