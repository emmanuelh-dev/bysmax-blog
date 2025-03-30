-- Esquema para la tabla de mensajes de contacto en Supabase

-- Crear la tabla de mensajes de contacto
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending' -- pending, read, replied
);

-- Índice para mejorar el rendimiento en búsquedas por email
CREATE INDEX idx_contact_messages_email ON contact_messages(email);

-- Trigger para actualizar automáticamente el campo updated_at
CREATE TRIGGER update_contact_messages_modtime
    BEFORE UPDATE ON contact_messages
    FOR EACH ROW
    EXECUTE FUNCTION update_modified_column();

-- Habilitar RLS en la tabla
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Política para inserción de mensajes (cualquiera puede enviar un mensaje)
CREATE POLICY "Anyone can create contact messages"
ON contact_messages FOR INSERT WITH CHECK (true);

-- Política para que solo administradores puedan ver los mensajes
-- Requiere configurar autenticación y roles de administrador
-- CREATE POLICY "Only admins can view contact messages"
-- ON contact_messages FOR SELECT USING (auth.role() = 'admin');