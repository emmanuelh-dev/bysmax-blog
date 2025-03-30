# Configuración de Supabase para el sistema de comentarios

Este documento proporciona instrucciones para configurar Supabase como backend para el sistema de comentarios del blog.

## Paso 1: Crear una cuenta en Supabase

1. Ve a [Supabase](https://supabase.com/) y crea una cuenta gratuita.
2. Crea un nuevo proyecto y toma nota de la URL y la clave anónima (anon key).

## Paso 2: Configurar las variables de entorno

1. Crea un archivo `.env.local` en la raíz del proyecto basado en el archivo `.env.local.example`.
2. Completa las variables con los valores de tu proyecto de Supabase:

```
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-clave-anonima
```

## Paso 3: Crear las tablas en Supabase

1. En el panel de control de Supabase, ve a la sección "SQL Editor".
2. Copia y pega el contenido del archivo `supabase-schema.sql` incluido en este proyecto.
3. Ejecuta el script SQL para crear las tablas necesarias.

## Paso 4: Configurar las políticas de seguridad (opcional)

El script SQL ya incluye políticas básicas de seguridad (RLS - Row Level Security) que permiten:

- Lectura pública de posts y comentarios
- Creación de comentarios por cualquier usuario

Si deseas implementar autenticación y políticas más restrictivas, puedes modificar las políticas según tus necesidades.

## Paso 5: Usar el componente de comentarios

Para usar el componente de comentarios en tus páginas de blog:

```jsx
import SupabaseCommentsWrapper from '@/components/comments/SupabaseCommentsWrapper'

// En tu componente de página o layout
<SupabaseCommentsWrapper slug="ruta-del-post" />
```

Donde `slug` es el identificador único de la página o post.

## Estructura de la base de datos

### Tabla `posts` (opcional)

Si deseas gestionar tus posts desde Supabase:

- `id`: Identificador único del post
- `title`: Título del post
- `content`: Contenido del post
- `author_id`: ID del autor (si implementas autenticación)
- `slug`: URL amigable única del post
- `created_at`: Fecha de creación
- `updated_at`: Fecha de última actualización

### Tabla `comments`

- `id`: Identificador único del comentario
- `post_slug`: Slug del post al que pertenece el comentario
- `content`: Contenido del comentario
- `author_name`: Nombre del autor del comentario
- `author_email`: Email del autor (opcional)
- `parent_id`: ID del comentario padre (para respuestas anidadas)
- `created_at`: Fecha de creación
- `updated_at`: Fecha de última actualización