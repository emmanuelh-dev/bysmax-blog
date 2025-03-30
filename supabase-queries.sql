-o- Queries para automatizar la creación de tablas en Supabase

-- Habilitar la extensión UUID si no está habilitada
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Eliminar tablas si existen (útil para recrear la estructura)
-- Comentar estas líneas si no deseas eliminar las tablas existentes
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS contact_messages CASCADE;

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

-- Tabla de mensajes de contacto
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending' -- pending, read, replied
);

-- Índices para mejorar el rendimiento
CREATE INDEX idx_comments_post_slug ON comments(post_slug);
CREATE INDEX idx_comments_parent_id ON comments(parent_id);
CREATE INDEX idx_posts_slug ON posts(slug);
CREATE INDEX idx_contact_messages_email ON contact_messages(email);

-- Triggers para actualizar automáticamente el campo updated_at

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
    
-- Trigger para la tabla contact_messages
CREATE TRIGGER update_contact_messages_modtime
    BEFORE UPDATE ON contact_messages
    FOR EACH ROW
    EXECUTE FUNCTION update_modified_column();

-- Políticas de seguridad (RLS - Row Level Security)

-- Habilitar RLS en las tablas
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Política para lectura pública de posts
CREATE POLICY "Posts are viewable by everyone" 
ON posts FOR SELECT USING (true);

-- Política para lectura pública de comentarios
CREATE POLICY "Comments are viewable by everyone" 
ON comments FOR SELECT USING (true);

-- Política para inserción de comentarios (cualquiera puede comentar)
CREATE POLICY "Anyone can create comments"
ON comments FOR INSERT WITH CHECK (true);

-- Política para inserción de mensajes de contacto (cualquiera puede enviar un mensaje)
CREATE POLICY "Anyone can create contact messages"
ON contact_messages FOR INSERT WITH CHECK (true);

-- Política para que solo administradores puedan ver los mensajes de contacto
-- Requiere configurar autenticación y roles de administrador
-- CREATE POLICY "Only admins can view contact messages"
-- ON contact_messages FOR SELECT USING (auth.role() = 'admin');

-- Política para que solo administradores puedan crear posts
-- Requiere autenticación y un rol de administrador
-- CREATE POLICY "Only admins can create posts"
-- ON posts FOR INSERT WITH CHECK (auth.uid() IN (SELECT user_id FROM admin_users));

-- Opcional: Política para que solo el autor pueda actualizar su comentario
-- Requiere autenticación y un campo adicional user_id en la tabla comments
-- CREATE POLICY "Users can update their own comments"
-- ON comments FOR UPDATE USING (auth.uid() = user_id);

-- Consultas útiles para administrar los datos

-- Obtener todos los comentarios de un post específico
-- SELECT * FROM comments WHERE post_slug = 'nombre-del-slug' ORDER BY created_at DESC;

-- Obtener comentarios con sus respuestas anidadas
-- WITH RECURSIVE comment_tree AS (
--   SELECT id, post_slug, content, author_name, parent_id, created_at, 0 AS level
--   FROM comments
--   WHERE parent_id IS NULL AND post_slug = 'nombre-del-slug'
--   UNION ALL
--   SELECT c.id, c.post_slug, c.content, c.author_name, c.parent_id, c.created_at, ct.level + 1
--   FROM comments c
--   JOIN comment_tree ct ON c.parent_id = ct.id
-- )
-- SELECT * FROM comment_tree ORDER BY level, created_at;

-- Eliminar comentarios antiguos (ejemplo: más de 1 año)
-- DELETE FROM comments WHERE created_at < NOW() - INTERVAL '1 year';

-- Contar comentarios por post
-- SELECT post_slug, COUNT(*) as comment_count FROM comments GROUP BY post_slug ORDER BY comment_count DESC;