# Arduino Pages & Comparisons

## Estructura Creada

### 📁 Páginas Principales
- `/arduino` - Listado de todas las placas Arduino
- `/arduino/comparisons` - Índice de todas las comparativas
- `/arduino/[board]` - Página individual de cada placa
- `/arduino/[comparison]` - Página de comparativa entre dos placas

### 📊 Tipos de URLs de Comparación
Siguiendo el patrón de versus.com para mejor SEO:
- `/arduino/comparisons/uno-vs-nano`
- `/arduino/comparisons/uno-vs-mega2560`
- `/arduino/comparisons/nano-vs-nano_every`
- `/arduino/comparisons/leonardo-vs-micro`
- `/arduino/comparisons/due-vs-portenta-h7`
- `/arduino/comparisons/mkr_wifi_1010-vs-mkr_zero`

### 📄 Archivos Creados

#### Datos
- `data/arduino-ui.ts` - Traducciones UI para páginas Arduino
- `data/arduino-comparison.ts` - Lógica y traducciones para comparativas
- `data/arduinos.ts` - Actualizado con descripciones y aplicaciones

#### Componentes
- `components/arduino/ArduinoSidebar.tsx` - Sidebar navegación Arduino

#### Páginas
- `app/[locale]/arduino/page.tsx` - Listado principal
- `app/[locale]/arduino/[board]/page.tsx` - Página individual
- `app/[locale]/arduino/[comparison]/page.tsx` - Páginas comparativas
- `app/[locale]/arduino/comparisons/page.tsx` - Índice comparativas

#### Imágenes
- `/static/images/arduino-boards.png` - Imagen principal
- `/static/images/arduino-[board].jpg` - Imágenes individuales
- `/static/images/arduino-comparison.png` - Imagen comparativas

### 🎨 Diseño
Siguiendo los principios de Vercel/shadcn:
- ✅ Colores: Blanco (#ffffff), Negro (#0a0a0a), Azul (#0070f3)
- ✅ Tipografía: Inter, pesos 400/600, espaciado -0.02em
- ✅ Espaciado: Sistema 8px (8, 16, 24, 40px)
- ✅ Bordes: 1px solid #e5e5e5, radio 6-8px
- ✅ Animaciones: 0.2s ease
- ✅ Responsive: Mobile-first

### 🌐 SEO Optimizado
- ✅ Meta titles únicos por comparativa
- ✅ Descripciones específicas para cada comparación
- ✅ Breadcrumbs estructurados
- ✅ URLs amigables (board1-vs-board2)
- ✅ Schema markup JSON-LD
- ✅ Open Graph optimizado

### 🔄 Funcionalidades
- ✅ Comparación automática por categorías
- ✅ Sistema de puntuación
- ✅ Pros y contras dinámicos
- ✅ Recomendaciones contextuales
- ✅ Enlaces cruzados entre comparativas
- ✅ Tabla comparativa interactiva
- ✅ Integración con sistema de ads
- ✅ Comentarios con Supabase

### 🎯 Comparativas Populares Predefinidas
1. Arduino Uno vs Arduino Nano
2. Arduino Uno vs Arduino Mega 2560
3. Arduino Nano vs Arduino Nano Every
4. Arduino Leonardo vs Arduino Micro
5. Arduino Due vs Arduino Portenta H7
6. Arduino MKR WiFi 1010 vs MKR Zero
7. Arduino Uno vs Arduino Due
8. Arduino Nano vs Arduino Leonardo

### 📱 Navegación Actualizada
Se agregaron enlaces en `headerNavLinks.ts`:
- Comparativa de Placas Arduino
- Arduino Uno vs Arduino Nano
- Arduino Uno vs Arduino Mega

### 🚀 Próximos Pasos
1. Reemplazar imágenes placeholder con fotos reales
2. Ajustar precios en `arduino-comparison.ts`
3. Probar URLs en desarrollo
4. Optimizar metadatos específicos
5. Agregar más comparativas populares

## 📊 Beneficios SEO
- URLs tipo versus.com (alta autoridad de dominio para este patrón)
- Contenido único y específico por comparación
- Estructura de enlaces internos robusta
- Meta datos optimizados para cada comparación
- Breadcrumbs para mejor crawling
