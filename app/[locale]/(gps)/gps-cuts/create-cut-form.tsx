'use client'

import { Badge } from '@/components/ui/badge'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { DialogFooter } from '@/components/ui/dialog'
import { Upload, X, Plus, Check, Loader2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useToast } from 'components/ui/use-toast'

interface ImageUpload {
  file: File
  preview: string
  uploading: boolean
  uploaded: boolean
  error: boolean
  url: string | null
}

interface CreateCutFormProps {
  selectedVehicle: {
    brand: string
    model: string
    year: string
    brandId?: string
    modelId?: string
  }
  onClose: () => void
}

interface CutStep {
  description: string
  image?: string
}

export function CreateCutForm({ selectedVehicle, onClose }: CreateCutFormProps) {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    brand: selectedVehicle?.brand || '',
    model: selectedVehicle?.model || '',
    year: selectedVehicle?.year || '',
    cut_info: [] as CutStep[],
    notes: '',
  })
  const [isNewBrand, setIsNewBrand] = useState(false)
  const [isNewModel, setIsNewModel] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.cut_info.length === 0) {
      toast({
        title: 'Pasos requeridos',
        description: 'Debe agregar al menos un paso de instalación',
        variant: 'destructive',
      })
      return
    }

    setIsSubmitting(true)

    try {
      const cutData = {
        cut_info: formData.cut_info,
        notes: formData.notes,
        created_at: new Date().toISOString(),
      }

      // 3. Insert data into database (simplified example)
      // In a real implementation, you would need to:
      // - Check if brand exists, if not create it
      // - Check if model exists, if not create it
      // - Create the vehicle cut entry

      let brandId = selectedVehicle?.brandId
      let modelId = selectedVehicle?.modelId

      // Create brand if needed
      if (isNewBrand) {
        const { data: brandData, error: brandError } = await supabase
          .from('cuts_brands')
          .insert({ name: formData.brand })
          .select()
          .single()

        if (brandError) throw brandError
        brandId = brandData.id
      }

      // Create model if needed
      if (isNewModel) {
        const { data: modelData, error: modelError } = await supabase
          .from('cuts_models')
          .insert({
            name: formData.model,
            brand_id: brandId,
          })
          .select()
          .single()

        if (modelError) throw modelError
        modelId = modelData.id
      }

      // Create vehicle cut
      const { error: vehicleError } = await supabase.from('cuts_vehicles').insert({
        model_id: modelId,
        year: formData.year,
        cut_data: cutData,
      })

      if (vehicleError) throw vehicleError

      toast({
        title: 'Corte GPS creado',
        description: '¡Gracias por contribuir! Tu información ayudará a otros instaladores.',
        variant: 'default',
      })

      onClose()
    } catch (error) {
      console.error('Error creating cut:', error)
      toast({
        title: 'Error al crear el corte',
        description: 'Ha ocurrido un error. Por favor, intenta nuevamente.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const [uploadingImages, setUploadingImages] = useState<{ [key: string]: boolean }>({})

  const handleImageUpload = async (stepIndex: number, file: File) => {
    const fileKey = `step-${stepIndex}`
    setUploadingImages((prev) => ({ ...prev, [fileKey]: true }))

    try {
      const fileName = `${Date.now()}-${file.name}`
      const { data, error } = await supabase.storage.from('cut-images').upload(fileName, file)

      if (error) throw error

      const { data: publicUrlData } = supabase.storage.from('cut-images').getPublicUrl(data.path)

      setFormData((prev) => ({
        ...prev,
        cut_info: prev.cut_info.map((step, idx) =>
          idx === stepIndex ? { ...step, image: publicUrlData.publicUrl } : step
        ),
      }))
    } catch (error) {
      toast({
        title: 'Error subiendo imagen',
        description: 'No se pudo subir la imagen. Intente nuevamente.',
        variant: 'destructive',
      })
    } finally {
      setUploadingImages((prev) => ({ ...prev, [fileKey]: false }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="brand">Marca</Label>
          <Input
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleInputChange}
            placeholder="Marca del vehículo"
            disabled={!isNewBrand && !!selectedVehicle?.brand}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="model">Modelo</Label>
          <Input
            id="model"
            name="model"
            value={formData.model}
            onChange={handleInputChange}
            placeholder="Modelo del vehículo"
            disabled={!isNewModel && !!selectedVehicle?.model}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="year">Año</Label>
          <Input
            id="year"
            name="year"
            value={formData.year}
            onChange={handleInputChange}
            placeholder="Año del vehículo"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Instrucciones de Instalación *</Label>
          <div className="space-y-4">
            {formData.cut_info.map((step, index) => (
              <div key={index} className="group flex items-start gap-2">
                <div className="relative flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <Input
                      value={step.description}
                      onChange={(e) => {
                        const newSteps = [...formData.cut_info]
                        newSteps[index].description = e.target.value
                        setFormData((prev) => ({ ...prev, cut_info: newSteps }))
                      }}
                      placeholder={`Paso ${index + 1}`}
                      className="pr-10"
                    />
                    <Label
                      htmlFor={`image-${index}`}
                      className="cursor-pointer rounded p-2 hover:bg-gray-100"
                    >
                      <Upload className="h-4 w-4" />
                      <input
                        id={`image-${index}`}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) =>
                          e.target.files?.[0] && handleImageUpload(index, e.target.files[0])
                        }
                      />
                    </Label>
                  </div>

                  {uploadingImages[`step-${index}`] && (
                    <div className="absolute right-12 top-2">
                      <Loader2 className="text-muted-foreground h-4 w-4 animate-spin" />
                    </div>
                  )}

                  {step.image && !uploadingImages[`step-${index}`] && (
                    <div className="mt-1 flex items-center gap-1 text-sm text-green-600">
                      <Check className="h-4 w-4" />
                      <span className="text-xs">Imagen adjunta</span>
                    </div>
                  )}
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                  onClick={() => {
                    const newSteps = formData.cut_info.filter((_, i) => i !== index)
                    setFormData((prev) => ({ ...prev, cut_info: newSteps }))
                  }}
                >
                  <X className="text-destructive h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Notas Adicionales</Label>
          <Textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="Consejos o precauciones importantes..."
            rows={3}
          />
        </div>
      </div>

      <DialogFooter>
        <Button type="button" variant="outline" onClick={onClose}>
          Cancelar
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Guardar Corte'}
        </Button>
      </DialogFooter>
    </form>
  )
}
