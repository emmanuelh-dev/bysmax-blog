# Automatización de la Creación de Bases de Datos en Supabase

Este documento proporciona instrucciones y consultas SQL para automatizar la creación y gestión de las bases de datos en Supabase para el sistema de comentarios del blog.

## Consultas SQL para Crear la Estructura de la Base de Datos

Puedes utilizar las siguientes consultas SQL para crear automáticamente la estructura de la base de datos en Supabase. Estas consultas están diseñadas para ser ejecutadas en el Editor SQL de Supabase.

### 1. Configuración Inicial

```sql
-- Habilitar la extensión UUID si no está habilitada
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

### 2. Creación de Tablas

```sql
-- Tabla de posts (opcional, si necesitas crear posts desde Supabase)
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author_id UUID,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de comentarios
CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_slug TEXT NOT NULL,
  content TEXT NOT NULL,
  author_name TEXT,
  author_email TEXT,
  parent_id UUID REFERENCES comments(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 3. Creación de Índices

```sql
-- Índices para mejorar el rendimiento
CREATE INDEX idx_comments_post_slug ON comments(post_slug);
CREATE INDEX idx_comments_parent_id ON comments(parent_id);
CREATE INDEX idx_posts_slug ON posts(slug);
```

### 4. Configuración de Triggers para Actualización Automática

```sql
-- Función para actualizar el timestamp
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para la tabla posts
CREATE TRIGGER update_posts_modtime
    BEFORE UPDATE ON posts
    FOR EACH ROW
    EXECUTE FUNCTION update_modified_column();

-- Trigger para la tabla comments
CREATE TRIGGER update_comments_modtime
    BEFORE UPDATE ON comments
    FOR EACH ROW
    EXECUTE FUNCTION update_modified_column();
```

### 5. Configuración de Políticas de Seguridad (RLS)

```sql
-- Habilitar RLS en las tablas
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Política para lectura pública de posts
CREATE POLICY "Posts are viewable by everyone" 
ON posts FOR SELECT USING (true);

-- Política para lectura pública de comentarios
CREATE POLICY "Comments are viewable by everyone" 
ON comments FOR SELECT USING (true);

-- Política para inserción de comentarios (cualquiera puede comentar)
CREATE POLICY "Anyone can create comments"
ON comments FOR INSERT WITH CHECK (true);
```

## Consultas SQL para Gestionar los Datos

### 1. Consultar Comentarios

```sql
-- Obtener todos los comentarios de un post específico
SELECT * FROM comments 
WHERE post_slug = 'nombre-del-slug' 
ORDER BY created_at DESC;

-- Obtener comentarios con sus respuestas anidadas
WITH RECURSIVE comment_tree AS (
  SELECT id, post_slug, content, author_name, parent_id, created_at, 0 AS level
  FROM comments
  WHERE parent_id IS NULL AND post_slug = 'nombre-del-slug'
  UNION ALL
  SELECT c.id, c.post_slug, c.content, c.author_name, c.parent_id, c.created_at, ct.level + 1
  FROM comments c
  JOIN comment_tree ct ON c.parent_id = ct.id
)
SELECT * FROM comment_tree ORDER BY level, created_at;
```

### 2. Estadísticas de Comentarios

```sql
-- Contar comentarios por post
SELECT post_slug, COUNT(*) as comment_count 
FROM comments 
GROUP BY post_slug 
ORDER BY comment_count DESC;

-- Obtener los posts más comentados
SELECT p.title, p.slug, COUNT(c.id) as comment_count
FROM posts p
LEFT JOIN comments c ON p.slug = c.post_slug
GROUP BY p.id, p.title, p.slug
ORDER BY comment_count DESC
LIMIT 10;
```

### 3. Mantenimiento de la Base de Datos

```sql
-- Eliminar comentarios antiguos (ejemplo: más de 1 año)
DELETE FROM comments 
WHERE created_at < NOW() - INTERVAL '1 year';

-- Actualizar el contenido de un comentario
UPDATE comments
SET content = 'Nuevo contenido actualizado', updated_at = NOW()
WHERE id = 'id-del-comentario';
```

## Automatización con Scripts

Para automatizar completamente la creación de la base de datos, puedes crear un archivo SQL con todas las consultas necesarias y ejecutarlo en el Editor SQL de Supabase. El archivo `supabase-queries.sql` incluido en este proyecto contiene todas las consultas necesarias para crear la estructura completa de la base de datos.

### Pasos para la Automatización

1. Accede al panel de control de Supabase y ve a la sección "SQL Editor".
2. Crea un nuevo script SQL.
3. Copia y pega el contenido del archivo `supabase-queries.sql`.
4. Ejecuta el script completo para crear todas las tablas, índices, triggers y políticas de seguridad.

## Integración con la Aplicación

Una vez configurada la base de datos, puedes utilizar el componente `SupabaseCommentsWrapper` para mostrar y gestionar los comentarios en tus páginas:

```jsx
import SupabaseCommentsWrapper from '@/components/comments/SupabaseCommentsWrapper'

// En tu componente de página o layout
<SupabaseCommentsWrapper slug="ruta-del-post" />
```

Donde `slug` es el identificador único de la página o post.