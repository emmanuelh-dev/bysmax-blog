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
CREATE INDEX idx_contact_messages_email ON contact_messages(email);

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

-- Opcional: Política para que solo el autor pueda actualizar su comentario
-- Requiere autenticación y un campo adicional user_id en la tabla comments
-- CREATE POLICY "Users can update their own comments"
-- ON comments FOR UPDATE USING (auth.uid() = user_id);