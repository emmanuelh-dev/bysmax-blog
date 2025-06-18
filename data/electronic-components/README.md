# Sistema de Componentes Electrónicos - Arquitectura Modular

## Descripción General

Este sistema reemplaza el archivo monolítico `logic-gates.tsx` con una arquitectura modular y escalable que permite manejar múltiples tipos de componentes electrónicos de manera organizada y mantenible.

## Arquitectura del Sistema

### 1. Tipos Base (`types.ts`)
- Define las interfaces base para todos los componentes
- Especifica los tipos de localización (es, en, pt)
- Categorías de componentes (logic-gates, decoders, counters, etc.)
- Extensiones específicas por categoría

### 2. Módulos de Componentes
Cada tipo de componente tiene su propio archivo:

#### Existentes:
- `logic-gates.ts` - Compuertas lógicas (AND, OR, NOT, NAND, NOR, XOR, XNOR, BUFFER)
- `decoders.ts` - Decodificadores (BCD-7seg, 3-to-8, binary)
- `counters.ts` - Contadores (binary, BCD, divide-by-N)
- `multiplexers.ts` - Multiplexores (8-to-1, 4-to-1-dual)
- `displays.ts` - Displays (7-segment, dot-matrix)

#### Por implementar:
- `flip-flops.ts` - Flip-flops (D, JK, SR, T)
- `comparators.ts` - Comparadores de magnitud
- `buffers.ts` - Buffers y transceptores
- `leds.ts` - LEDs discretos
- `relays.ts` - Relés electromagnéticos
- `shift-registers.ts` - Registros de desplazamiento
- `microcontrollers.ts` - Microcontroladores
- `voltage-regulators.ts` - Reguladores de voltaje

### 3. Orquestador Principal (`index.ts`)
- Clase `ElectronicComponentsOrchestrator` que gestiona todos los componentes
- Funciones de búsqueda, filtrado y análisis
- Compatibilidad con el sistema anterior
- Instancia singleton `electronicComponents`

## Características del Sistema

### 🔍 Búsqueda Avanzada
```typescript
// Búsqueda por término
electronicComponents.searchComponents("contador", "es")

// Filtrado por categoría
electronicComponents.getComponentsByCategory("logic-gates")

// Filtrado por fabricante
electronicComponents.getComponentsByManufacturer("Texas Instruments")

// Filtrado por serie
electronicComponents.getComponentsBySeries("74LS")
```

### 📊 Estadísticas
```typescript
const stats = electronicComponents.getStats()
// Retorna: total, byCategory, byManufacturer, bySeries
```

### 🔗 Componentes Relacionados
```typescript
const related = electronicComponents.getRelatedComponents(component, 5)
// Encuentra componentes relacionados por fabricante, serie o categoría
```

### 🌐 Soporte Multiidioma
Cada componente incluye traducciones completas en:
- Español (es)
- Inglés (en) 
- Portugués (pt)

## Estructura de un Componente

```typescript
{
  url: '7408',
  category: 'logic-gates',
  partNumber: 'SN74LS08',
  manufacturer: 'Texas Instruments',
  series: '74LS',
  datasheet: '/static/images/74LS08.jpg',
  pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls08.pdf',
  alternatives: ['74HC08', '74AC08'],
  translations: {
    es: {
      label: 'Compuerta 7408 AND',
      heading: 'Compuerta lógica AND (Circuito Integrado 7408/74LS08)',
      description: '...',
      configuration: '2 entradas y 1 salida',
      type: '2 entradas / 1 salida',
      applications: ['Sistemas de control', 'Circuitos aritméticos'],
      technicalSpecs: {
        operatingVoltage: '4.75V - 5.25V',
        maxCurrent: '20mA por salida',
        propagationDelay: '22ns típico',
        // ...
      },
      truthTable: [
        { 'Entrada A': 0, 'Entrada B': 0, salida: 0 },
        // ...
      ],
      pinout: {
        description: 'Configuración de pines para 74LS08 (DIP-14)',
        pins: [
          { number: 1, name: '1A', function: 'Entrada A de la compuerta 1' },
          // ...
        ]
      }
    },
    en: { /* traducción en inglés */ },
    pt: { /* traducción en portugués */ }
  }
}
```

## Información Rica por Componente

### Especificaciones Técnicas
- Voltaje de operación
- Corriente máxima
- Retardo de propagación
- Rango de temperatura
- Tipo de encapsulado
- Espaciado de pines

### Tabla de Verdad
- Estados de entrada y salida
- Condiciones de operación
- Valores lógicos

### Distribución de Pines (Pinout)
- Número de pin
- Nombre de la señal
- Función del pin
- Descripción detallada

### Aplicaciones
- Casos de uso principales
- Ejemplos de implementación
- Industrias donde se aplica

## Ventajas del Nuevo Sistema

### ✅ Mantenibilidad
- Cada tipo de componente en su propio archivo
- Fácil agregar nuevos componentes
- Código organizado y limpio

### ✅ Escalabilidad
- Soporte para múltiples categorías
- Arquitectura extensible
- Fácil agregar nuevas características

### ✅ Rendimiento
- Búsqueda optimizada
- Filtrado eficiente
- Carga bajo demanda

### ✅ SEO y Contenido
- Información rica y detallada
- Múltiples idiomas
- Metadatos estructurados

### ✅ Experiencia de Usuario
- Navegación intuitiva
- Búsqueda avanzada
- Componentes relacionados

## Migración del Sistema Anterior

El sistema mantiene compatibilidad con las funciones anteriores:

```typescript
// Función anterior (sigue funcionando)
getLogicGateTranslation(url, locale)

// Nuevo sistema (más potente)
electronicComponents.getComponentByUrl(url)
```

## Implementación de Nuevos Componentes

### 1. Definir el Tipo
```typescript
// En types.ts
export interface NuevoTipoComponent extends BaseComponent {
  category: 'nuevo-tipo';
  propiedadEspecifica: string;
}
```

### 2. Crear el Archivo de Datos
```typescript
// nuevo-tipo.ts
import { NuevoTipoComponent, LocaleTypes } from './types';

export const NUEVO_TIPO: NuevoTipoComponent[] = [
  {
    url: 'ejemplo',
    category: 'nuevo-tipo',
    // ... datos del componente
  }
];
```

### 3. Agregar al Orquestador
```typescript
// En index.ts
import { NUEVO_TIPO } from './nuevo-tipo';

// Agregar al constructor
this.components = [...NUEVO_TIPO, ...otrosComponentes];
```

### 4. Crear la Página
```typescript
// pages/nuevo-tipo/page.tsx
const componentes = electronicComponents.getComponentsByCategory('nuevo-tipo');
```

## Componentes Incluidos Actualmente

### 🔧 Compuertas Lógicas (8 componentes)
- 7408 (AND), 7432 (OR), 7404 (NOT), 7400 (NAND)
- 7402 (NOR), 7486 (XOR), 74266 (XNOR), 7407 (BUFFER)

### 🔍 Decodificadores (3 componentes)
- SN7447A (BCD-7seg, ánodo común)
- SN7448 (BCD-7seg, cátodo común)  
- SN74LS138 (3-a-8 líneas)

### 🔢 Contadores (3 componentes)
- SN74LS90 (decádico, mod-10)
- SN74LS92 (divide-por-12)
- SN74LS93 (binario 4-bit, mod-16)

### 🔀 Multiplexores (2 componentes)
- SN74LS151 (8-a-1)
- SN74LS153 (dual 4-a-1)

### 📟 Displays (1 componente)
- SC56-11EWA (7-seg, cátodo común)

## Próximos Pasos

1. **Completar componentes mencionados en el documento**:
   - Flip-flops (SN74LS74A, SN74LS76A)
   - Comparadores (SN74LS85)
   - Buffers (SN74LS125A, SN74LS245)
   - LEDs (5mm, 3mm)
   - Relés (Panasonic DS2E-SL2-DC5V)
   - Registros de desplazamiento (SN74HC595)
   - Microcontroladores (ATmega328P)
   - Reguladores (LM7805)

2. **Mejorar la interfaz de usuario**:
   - Página de búsqueda avanzada
   - Filtros interactivos
   - Comparación de componentes

3. **Optimizar SEO**:
   - Páginas individuales para cada componente
   - Esquemas estructurados
   - Sitemaps dinámicos

4. **Funcionalidades adicionales**:
   - Calculadoras de resistencias
   - Simuladores básicos
   - Listas de materiales (BOM)

## Uso del Sistema

```typescript
// Obtener todos los componentes
const todos = electronicComponents.getAllComponents();

// Buscar componentes
const resultados = electronicComponents.searchComponents("7408", "es");

// Obtener estadísticas
const stats = electronicComponents.getStats();

// Componentes por categoría
const compuertas = electronicComponents.getComponentsByCategory("logic-gates");

// Componentes relacionados
const relacionados = electronicComponents.getRelatedComponents(componente);
```

Este sistema proporciona una base sólida y escalable para un sitio web completo de componentes electrónicos, manteniendo el contenido organizado y fácil de mantener.
