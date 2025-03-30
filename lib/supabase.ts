import { createClient } from '@supabase/supabase-js'

// Estas variables de entorno deben ser configuradas en el archivo .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Crear el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para las tablas de la base de datos
export type Post = {
  id: string
  title: string
  content: string
  author_id: string
  created_at: string
  updated_at: string
  slug: string
}

export type Comment = {
  id: string
  post_id: string
  content: string
  author_name: string
  author_email?: string
  parent_id?: string
  created_at: string
  updated_at: string
}
