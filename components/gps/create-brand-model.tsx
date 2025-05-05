"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DialogFooter } from "@/components/ui/dialog"
import { Loader2, Check } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { useToast } from 'components/ui/use-toast'

export function CreateBrandForm({ onSuccess, onCancel }) {
  const { toast } = useToast()
  const [brandName, setBrandName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!brandName.trim()) return

    setIsSubmitting(true)
    try {
      const { data, error } = await supabase.from("cuts_brands").insert({ name: brandName.trim() }).select().single()

      if (error) throw error

      toast({
        title: "Marca creada",
        description: `La marca "${brandName}" ha sido creada exitosamente.`,
        variant: "default",
      })

      onSuccess(data)
    } catch (error) {
      console.error("Error creating brand:", error)
      toast({
        title: "Error al crear la marca",
        description: "Ha ocurrido un error. Por favor, intenta nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="brandName">Nombre de la Marca</Label>
          <Input
            id="brandName"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            placeholder="Ingresa el nombre de la marca"
            required
          />
        </div>
      </div>

      <DialogFooter className="mt-6">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" disabled={isSubmitting || !brandName.trim()}>
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Creando...
            </>
          ) : (
            <>
              <Check className="h-4 w-4 mr-2" />
              Crear Marca
            </>
          )}
        </Button>
      </DialogFooter>
    </form>
  )
}

export function CreateModelForm({ brandId, onSuccess, onCancel }) {
  const { toast } = useToast()
  const [modelName, setModelName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!modelName.trim() || !brandId) return

    setIsSubmitting(true)
    try {
      const { data, error } = await supabase
        .from("cuts_models")
        .insert({
          name: modelName.trim(),
          brand_id: brandId,
        })
        .select()
        .single()

      if (error) throw error

      toast({
        title: "Modelo creado",
        description: `El modelo "${modelName}" ha sido creado exitosamente.`,
        variant: "default",
      })

      onSuccess(data)
    } catch (error) {
      console.error("Error creating model:", error)
      toast({
        title: "Error al crear el modelo",
        description: "Ha ocurrido un error. Por favor, intenta nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="modelName">Nombre del Modelo</Label>
          <Input
            id="modelName"
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
            placeholder="Ingresa el nombre del modelo"
            required
          />
        </div>
      </div>

      <DialogFooter className="mt-6">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" disabled={isSubmitting || !modelName.trim()}>
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Creando...
            </>
          ) : (
            <>
              <Check className="h-4 w-4 mr-2" />
              Crear Modelo
            </>
          )}
        </Button>
      </DialogFooter>
    </form>
  )
}
