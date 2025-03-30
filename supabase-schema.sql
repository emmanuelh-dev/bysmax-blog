-- Esquema de base de datos para Supabase

-- Tabla de posts (si necesitas crear posts desde Supabase)
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

-- Índices para mejorar el rendimiento
CREATE INDEX idx_comments_post_slug ON comments(post_slug);
CREATE INDEX idx_comments_parent_id ON comments(parent_id);

-- Políticas de seguridad (RLS - Row Level Security)

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

-- Opcional: Política para que solo el autor pueda actualizar su comentario
-- Requiere autenticación y un campo adicional user_id en la tabla comments
-- CREATE POLICY "Users can update their own comments"
-- ON comments FOR UPDATE USING (auth.uid() = user_id);