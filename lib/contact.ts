import { supabase } from './supabase'

// Tipo para los mensajes de contacto
export type ContactMessage = {
  id: string
  name: string
  email: string
  message: string
  created_at: string
  updated_at: string
  status: 'pending' | 'read' | 'replied'
}

// Función para enviar un mensaje de contacto
export async function sendContactMessage({
  name,
  email,
  message,
}: {
  name: string
  email: string
  message: string
}) {
  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([{ name, email, message }])
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error al enviar mensaje de contacto:', error)
    return { success: false, error }
  }
}

// Función para obtener todos los mensajes (solo para administradores)
export async function getContactMessages() {
  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error al obtener mensajes de contacto:', error)
    return { success: false, error }
  }
}

// Función para actualizar el estado de un mensaje
export async function updateContactMessageStatus(id: string, status: 'pending' | 'read' | 'replied') {
  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .update({ status })
      .eq('id', id)
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error al actualizar estado del mensaje:', error)
    return { success: false, error }
  }
}