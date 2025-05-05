'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { DialogFooter } from '@/components/ui/dialog'
import { Upload, X, Plus, CheckCircle, Loader2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { supabase } from '@/lib/supabase'
import { useToast } from 'components/ui/use-toast'
import { compressImage, formatFileSize } from '@/lib/image-compressor'

interface ImageUpload {
  file: File
  preview: string
  uploading: boolean
  uploaded: boolean
  error: boolean
  url: string | null
}

interface EditCutFormProps {
  cutInfo: any
  selectedVehicle: {
    brand: string
    model: string
    year: string
    brandId?: string
    modelId?: string
  }
  onClose: () => void
  checkIfCutExists: (modelId: string, year: string) => Promise<void>
}

interface CutStep {
  description: string
  image?: string
}

export function EditCutForm({
  cutInfo,
  selectedVehicle,
  onClose,
  checkIfCutExists,
}: EditCutFormProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [steps, setSteps] = useState<CutStep[]>([])
  const [notes, setNotes] = useState('')
  const [images, setImages] = useState<{ [key: number]: ImageUpload }>({})

  useEffect(() => {
    if (cutInfo?.cut_info) {
      setSteps(cutInfo.cut_info.cut_info || [])
      setNotes(cutInfo.cut_info.notes || '')
    }
  }, [cutInfo])

  const handleImageUpload = async (index: number, file: File) => {
    try {
      const initialSize = formatFileSize(file.size)

      setImages((prev) => ({
        ...prev,
        [index]: {
          file,
          preview: URL.createObjectURL(file),
          uploading: true,
          uploaded: false,
          error: false,
          url: null,
        },
      }))

      const compressedFile = await compressImage(file)
      const compressedSize = formatFileSize(compressedFile.size)

      const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9-.]/g, '_')}`
      const { data, error } = await supabase.storage
        .from('cuts-images')
        .upload(fileName, compressedFile)

      if (error) throw error

      const { data: publicUrlData } = supabase.storage.from('cuts-images').getPublicUrl(data.path)

      const newSteps = [...steps]
      newSteps[index] = {
        ...newSteps[index],
        image: publicUrlData.publicUrl,
      }
      setSteps(newSteps)

      setImages((prev) => ({
        ...prev,
        [index]: {
          ...prev[index],
          uploading: false,
          uploaded: true,
          url: publicUrlData.publicUrl,
        },
      }))

      toast({
        title: 'Imagen actualizada exitosamente',
        description: `Tamaño original: ${initialSize} → Comprimido: ${compressedSize}`,
      })
    } catch (error) {
      console.error('Error uploading image:', error)
      setImages((prev) => ({
        ...prev,
        [index]: {
          ...prev[index],
          uploading: false,
          error: true,
        },
      }))

      toast({
        title: 'Error al subir la imagen',
        description: 'No se pudo subir la imagen. Por favor, intente nuevamente.',
        variant: 'destructive',
      })
    }
  }

  const removeImage = (index: number) => {
    const newSteps = [...steps]
    newSteps[index] = {
      ...newSteps[index],
      image: '',
    }
    setSteps(newSteps)

    if (images[index]) {
      const newImages = { ...images }
      delete newImages[index]
      setImages(newImages)

      if (images[index].preview) {
        URL.revokeObjectURL(images[index].preview)
      }
    }
  }

  const addStep = () => {
    setSteps([...steps, { description: '', image: '' }])
  }

  const removeStep = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index))
    if (images[index]) {
      removeImage(index)
    }
  }

  const updateStepDescription = (index: number, description: string) => {
    const newSteps = [...steps]
    newSteps[index] = {
      ...newSteps[index],
      description,
    }
    setSteps(newSteps)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (steps.length === 0 || !steps[0].description) {
      toast({
        title: 'Pasos requeridos',
        description: 'Debe tener al menos un paso de instalación',
        variant: 'destructive',
      })
      return
    }

    setIsSubmitting(true)

    try {
      const cutData = {
        cut_info: steps,
        notes: notes,
        updated_at: new Date().toISOString(),
      }

      const { error } = await supabase
        .from('cuts_vehicles')
        .update({ cut_info: cutData })
        .eq('id', cutInfo.id)

      if (error) throw error

      toast({
        title: 'Corte actualizado',
        description: 'Los cambios han sido guardados exitosamente.',
      })

      await checkIfCutExists(selectedVehicle.modelId!, selectedVehicle.year)
      onClose()
    } catch (error) {
      console.error('Error updating cut:', error)
      toast({
        title: 'Error al actualizar',
        description: 'Ha ocurrido un error. Por favor, intenta nuevamente.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="brand">Marca</Label>
          <Input id="brand" value={selectedVehicle.brand} disabled />
        </div>

        <div className="space-y-2">
          <Label htmlFor="model">Modelo</Label>
          <Input id="model" value={selectedVehicle.model} disabled />
        </div>

        <div className="space-y-2">
          <Label htmlFor="year">Año</Label>
          <Input id="year" value={selectedVehicle.year} disabled />
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Instrucciones de Instalación *</Label>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="group space-y-2 rounded-lg border p-4">
                <div className="flex items-start gap-2">
                  <div className="flex-1 space-y-2">
                    <Input
                      value={step.description}
                      onChange={(e) => updateStepDescription(index, e.target.value)}
                      placeholder={`Paso ${index + 1}`}
                    />

                    <div className="flex items-center gap-2">
                      <Label
                        htmlFor={`image-${index}`}
                        className="inline-flex cursor-pointer items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
                      >
                        <Upload className="h-4 w-4" />
                        <span>Actualizar imagen</span>
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

                      {images[index]?.uploading && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Subiendo...
                        </div>
                      )}

                      {(images[index]?.uploaded || step.image) && (
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            Imagen adjunta
                          </Badge>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="h-auto p-1 text-red-600 hover:text-red-700"
                            onClick={() => removeImage(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>

                    {(images[index]?.preview || step.image) && (
                      <div className="relative mt-2 inline-block">
                        <img
                          src={images[index]?.preview || step.image}
                          alt={`Paso ${index + 1}`}
                          className="max-h-32 rounded-lg"
                        />
                      </div>
                    )}
                  </div>

                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700"
                    onClick={() => removeStep(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <Button type="button" variant="outline" size="sm" className="mt-2" onClick={addStep}>
            <Plus className="mr-2 h-4 w-4" />
            Agregar paso
          </Button>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Notas Adicionales</Label>
          <Textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Consejos o precauciones importantes..."
            rows={3}
          />
        </div>
      </div>

      <DialogFooter>
        <Button type="button" variant="outline" onClick={onClose}>
          Cancelar
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting || steps.length === 0 || !steps[0].description}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Guardando...
            </>
          ) : (
            'Guardar Cambios'
          )}
        </Button>
      </DialogFooter>
    </form>
  )
}
