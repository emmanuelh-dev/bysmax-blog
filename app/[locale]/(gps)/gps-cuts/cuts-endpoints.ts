'use client'

import { supabase } from '@/lib/supabase'
import { SupabaseClient } from '@supabase/supabase-js'

// Type definitions for better type safety
export interface Brand {
  id: string
  name: string
  created_at?: string
}

export interface Model {
  id: string
  name: string
  brand_id: string
  created_at?: string
}

export interface Vehicle {
  id: string
  model_id: string
  brand_id?: string
  year: number
  cut_data: any
  created_at?: string
}

// Error handling utility
const handleError = (operation: string, error: any): never => {
  console.error(`Error during ${operation}:`, error)
  throw error
}

// Fetch functions with proper typing
export const fetchBrands = async (): Promise<Brand[]> => {
  try {
    const { data, error } = await supabase
      .from('cuts_brands')
      .select('*')
      .order('name', { ascending: true })

    if (error) throw error
    return data || []
  } catch (err) {
    console.error('Error fetching brands:', err)
    return []
  }
}

export const fetchModelsByBrand = async (brandId: string): Promise<Model[]> => {
  try {
    const { data, error } = await supabase
      .from('cuts_models')
      .select('*')
      .eq('brand_id', brandId)
      .order('name', { ascending: true })

    if (error) throw error
    return data || []
  } catch (err) {
    console.error('Error fetching models:', err)
    return []
  }
}

export const fetchYearsByModel = async (modelId: string): Promise<Vehicle[]> => {
  try {
    const { data, error } = await supabase
      .from('cuts_vehicles')
      .select('*')
      .eq('model_id', modelId)
      .order('year', { ascending: false })

    if (error) throw error
    return data || []
  } catch (err) {
    console.error('Error fetching years:', err)
    return []
  }
}

export const fetchVehiclesByBrand = async (brandId: string): Promise<Vehicle[]> => {
  try {
    const { data, error } = await supabase
      .from('cuts_vehicles')
      .select('*')
      .eq('brand_id', brandId)
      .order('year', { ascending: true })

    if (error) throw error
    return data || []
  } catch (err) {
    console.error('Error fetching vehicles:', err)
    return []
  }
}

// Create functions with proper typing
export const createBrand = async (name: string): Promise<Brand> => {
  try {
    const { data, error } = await supabase.from('cuts_brands').insert({ name }).select().single()

    if (error) throw error
    return data
  } catch (err) {
    return handleError('creating brand', err)
  }
}

export const createModel = async ({
  name,
  brandId,
}: {
  name: string
  brandId: string
}): Promise<Model> => {
  try {
    const { data, error } = await supabase
      .from('cuts_models')
      .insert({
        name,
        brand_id: brandId,
      })
      .select()
      .single()

    if (error) throw error
    return data
  } catch (err) {
    return handleError('creating model', err)
  }
}

export const createVehicleCut = async (
  modelId: string,
  year: number,
  cutData: any
): Promise<Vehicle> => {
  try {
    const { data, error } = await supabase
      .from('cuts_vehicles')
      .insert({
        model_id: modelId,
        year,
        cut_data: cutData,
      })
      .select()
      .single()

    if (error) throw error
    return data
  } catch (err) {
    return handleError('creating vehicle cut', err)
  }
}

// Improved file upload function with type safety
export const uploadImage = async (file: File, path: string): Promise<string> => {
  try {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}.${fileExt}`
    const filePath = `${path}/${fileName}`

    const { error } = await supabase.storage.from('images').upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
    })

    if (error) throw error

    const { data: urlData } = supabase.storage.from('images').getPublicUrl(filePath)

    if (!urlData.publicUrl) {
      throw new Error('Failed to get public URL')
    }

    return urlData.publicUrl
  } catch (err) {
    return handleError('uploading image', err)
  }
}

export const checkCutExists = async (modelId: string, year: number): Promise<boolean> => {
  try {
    const { count, error } = await supabase
      .from('cuts_vehicles')
      .select('*', { count: 'exact', head: true })
      .eq('model_id', modelId)
      .eq('year', year)

    if (error) throw error
    return count !== null && count > 0
  } catch (err) {
    console.error('Error checking if cut exists:', err)
    return false
  }
}
