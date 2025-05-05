'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import {
  Brand,
  Model,
  fetchBrands,
  fetchModelsByBrand,
  fetchYearsByModel,
  checkCutExists,
  createModel,
  createBrand,
} from '@/app/[locale]/(gps)/gps-cuts/cuts-endpoints'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import {
  Car,
  Calendar,
  Tag,
  CheckCircle,
  Loader2,
  RefreshCw,
  Plus,
  Share2,
  Copy,
  Check,
  AlertCircle,
  Pencil,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { CreateCutForm } from './create-cut-form'
import { EditCutForm } from './edit-cut-form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { StepConnector, StepIndicator } from './utils'
import { supabase } from '@/lib/supabase'
import { toast } from '@/components/ui/use-toast'

interface SelectedVehicle {
  brand: string
  model: string
  year: string
  brandId?: string
  modelId?: string
}

interface YearData {
  id: string
  year: string
}

interface CutInfo {
  cut_info: {
    notes: string
    cut_info: Array<{
      image: string
      description: string
    }>
    created_at: string
  }
  id: string
  model_id: string
  year: number
  created_at: string
  updated_at: string
}

export const VehicleSelector = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [newBrandName, setNewBrandName] = useState('')
  const [newModelName, setNewModelName] = useState('')
  const [brands, setBrands] = useState<Brand[]>([])
  const [models, setModels] = useState<Model[]>([])
  const [years, setYears] = useState<YearData[]>([])
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedModel, setSelectedModel] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [generatedYears, setGeneratedYears] = useState<YearData[]>([])
  const [selectedVehicle, setSelectedVehicle] = useState<SelectedVehicle | null>(null)
  const [showCreateBrandDialog, setShowCreateBrandDialog] = useState(false)
  const [showCreateModelDialog, setShowCreateModelDialog] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [loading, setLoading] = useState({
    brands: true,
    models: false,
    years: false,
    cutCheck: false,
  })
  const [cutFound, setCutFound] = useState(true)
  const [showCreateCutDialog, setShowCreateCutDialog] = useState(false)
  const [showEditCutDialog, setShowEditCutDialog] = useState(false)
  const [cutInfo, setCutInfo] = useState<CutInfo | null>(null)
  const [totalCuts, setTotalCuts] = useState(0)
  const [copied, setCopied] = useState(false)

  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const yearsList: YearData[] = []
    for (let year = 1990; year <= currentYear; year++) {
      yearsList.push({ id: year.toString(), year: year.toString() })
    }
    setGeneratedYears(yearsList)
  }, [currentYear])

  useEffect(() => {
    loadBrands()
  }, [])

  useEffect(() => {
    const initializeFromUrl = async () => {
      const brandId = searchParams.get('brand')
      const modelId = searchParams.get('model')
      const year = searchParams.get('year')

      if (brandId && brands.length > 0) {
        setSelectedBrand(brandId)

        if (modelId) {
          const modelsData = await fetchModelsByBrand(brandId)
          setModels(modelsData)
          setSelectedModel(modelId)

          if (year) {
            setSelectedYear(year)
            const { data } = await supabase
              .from('cuts_vehicles')
              .select('*')
              .eq('model_id', modelId)
              .eq('year', parseInt(year))
              .single()

            if (data) {
              setCutFound(true)
              setCutInfo(data)
            }
          }
        }
      }
    }

    initializeFromUrl()
  }, [searchParams, brands])

  useEffect(() => {
    if (selectedBrand && selectedModel && selectedYear) {
      const brandName = brands.find((brand) => brand.id === selectedBrand)?.name || ''
      const modelName = models.find((model) => model.id === selectedModel)?.name || ''

      setSelectedVehicle({
        brand: brandName,
        model: modelName,
        year: selectedYear,
        brandId: selectedBrand,
        modelId: selectedModel,
      })
      setIsComplete(true)

      checkIfCutExists(selectedModel, selectedYear)
    } else {
      setIsComplete(false)
      setSelectedVehicle(null)
      setCutFound(true)
    }
  }, [selectedBrand, selectedModel, selectedYear, brands, models])

  useEffect(() => {
    fetchTotalCuts()
  }, [])

  const checkIfCutExists = async (modelId: string, year: string) => {
    setLoading((prev) => ({ ...prev, cutCheck: true }))
    try {
      const { data, error } = await supabase
        .from('cuts_vehicles')
        .select('*')
        .eq('model_id', modelId)
        .eq('year', parseInt(year))
        .single()

      if (error) {
        setCutFound(false)
        setCutInfo(null)
      } else {
        setCutFound(true)
        setCutInfo(data)
      }
    } catch (error) {
      console.error('Error checking if cut exists:', error)
      setCutFound(false)
      setCutInfo(null)
    } finally {
      setLoading((prev) => ({ ...prev, cutCheck: false }))
    }
  }

  const fetchTotalCuts = async () => {
    try {
      const { count, error } = await supabase
        .from('cuts_vehicles')
        .select('*', { count: 'exact', head: true })

      if (error) throw error
      setTotalCuts(count || 0)
    } catch (error) {
      console.error('Error fetching total cuts:', error)
    }
  }

  const loadBrands = async () => {
    setLoading((prev) => ({ ...prev, brands: true }))
    try {
      const data = await fetchBrands()
      setBrands(data)
    } catch (error) {
      console.error('Error loading brands:', error)
    } finally {
      setLoading((prev) => ({ ...prev, brands: false }))
    }
  }

  const loadModels = async (brandId: string) => {
    if (!brandId) return

    setLoading((prev) => ({ ...prev, models: true }))
    try {
      const data = await fetchModelsByBrand(brandId)
      setModels(data)
      setSelectedModel('')
      setSelectedYear('')
      setIsComplete(false)
    } catch (error) {
      console.error('Error loading models:', error)
    } finally {
      setLoading((prev) => ({ ...prev, models: false }))
    }
  }

  const loadYears = async (modelId: string) => {
    if (!modelId) return

    setLoading((prev) => ({ ...prev, years: true }))
    try {
      const data = await fetchYearsByModel(modelId)
      const yearsData: YearData[] = data.map((item) => ({
        id: item.id.toString(),
        year: item.year.toString(),
      }))
      setYears(yearsData)
    } catch (error) {
      console.error('Error loading years:', error)
    } finally {
      setLoading((prev) => ({ ...prev, years: false }))
    }
  }

  const updateUrl = (updates: { brand?: string; model?: string; year?: string }) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()))

    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        current.set(key, value)
      } else {
        current.delete(key)
      }
    })

    const search = current.toString()
    const query = search ? `?${search}` : ''
    router.push(`${window.location.pathname}${query}`, { scroll: false })
  }

  const handleBrandChange = async (value: string) => {
    setSelectedBrand(value)
    updateUrl({ brand: value, model: '', year: '' })
    await loadModels(value)
  }

  const handleModelChange = async (value: string) => {
    setSelectedModel(value)
    updateUrl({ ...Object.fromEntries(searchParams), model: value, year: '' })
    await loadYears(value)
  }

  const handleYearChange = (value: string) => {
    setSelectedYear(value)
    updateUrl({ ...Object.fromEntries(searchParams), year: value })
  }

  const resetSelection = () => {
    setSelectedBrand('')
    setSelectedModel('')
    setSelectedYear('')
    setModels([])
    setYears([])
    setIsComplete(false)
    setSelectedVehicle(null)
    setCutFound(true)
    router.push(window.location.pathname)
  }

  const getStepStatus = (step: number) => {
    if (step === 1) {
      return selectedBrand ? 'complete' : 'current'
    } else if (step === 2) {
      if (!selectedBrand) return 'disabled'
      return selectedModel ? 'complete' : 'current'
    } else if (step === 3) {
      if (!selectedModel) return 'disabled'
      return selectedYear ? 'complete' : 'current'
    }
    return 'disabled'
  }

  const handleCreateCut = () => {
    setShowCreateCutDialog(true)
  }

  const handleCreateBrand = async () => {
    setLoading((prev) => ({ ...prev, brands: true }))
    try {
      const response = await createBrand(newBrandName)
      setShowCreateBrandDialog(false)
      setNewBrandName('')
      await loadBrands()
    } catch (error) {
      console.error('Error creando marca:', error)
    } finally {
      setLoading((prev) => ({ ...prev, brands: false }))
    }
  }

  const handleCreateModel = async () => {
    setLoading((prev) => ({ ...prev, models: true }))
    try {
      const response = await createModel({
        name: newModelName,
        brandId: selectedBrand,
      })
      setShowCreateModelDialog(false)
      setNewModelName('')
      await loadModels(selectedBrand)
    } catch (error) {
      await loadModels(selectedBrand)
      console.error('Error creando modelo:', error)
    } finally {
      setLoading((prev) => ({ ...prev, models: false }))
    }
  }

  const generateShareableLink = () => {
    if (!selectedVehicle) return

    const params = new URLSearchParams()
    if (selectedVehicle.brandId) params.set('brand', selectedVehicle.brandId)
    if (selectedVehicle.modelId) params.set('model', selectedVehicle.modelId)
    if (selectedVehicle.year) params.set('year', selectedVehicle.year)

    return `${window.location.origin}${window.location.pathname}?${params.toString()}`
  }

  const handleShare = async () => {
    const url = generateShareableLink()
    if (!url) return

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Corte GPS',
          text: `Corte GPS para ${selectedVehicle?.brand} ${selectedVehicle?.model} ${selectedVehicle?.year}`,
          url,
        })
      } catch (err) {
        copyToClipboard(url)
      }
    } else {
      copyToClipboard(url)
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      toast({
        title: '¡Enlace copiado!',
        description: 'El enlace ha sido copiado al portapapeles',
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast({
        title: 'Error al copiar',
        description: 'No se pudo copiar el enlace',
        variant: 'destructive',
      })
    }
  }

  return (
    <>
      <div className="mb-4 text-center">
        <Badge
          variant="outline"
          className="bg-emerald-50 px-3 py-1 text-lg font-medium text-black dark:text-black"
        >
          + de {totalCuts} cortes disponibles
        </Badge>
      </div>

      <div className="mb-6">
        <div className="mb-8 flex items-center justify-between">
          <StepIndicator
            step={1}
            label="Marca"
            icon={<Tag size={18} />}
            status={getStepStatus(1)}
          />
          <StepConnector active={!!selectedBrand} />
          <StepIndicator
            step={2}
            label="Modelo"
            icon={<Car size={18} />}
            status={getStepStatus(2)}
          />
          <StepConnector active={!!selectedModel} />
          <StepIndicator
            step={3}
            label="Año"
            icon={<Calendar size={18} />}
            status={getStepStatus(3)}
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Marca del Vehículo</label>
              <Select
                value={selectedBrand}
                onValueChange={handleBrandChange}
                disabled={loading.brands}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona una marca" />
                </SelectTrigger>
                <SelectContent>
                  {loading.brands ? (
                    <div className="flex items-center justify-center py-2">
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      <span>Cargando marcas...</span>
                    </div>
                  ) : (
                    <>
                      {brands.map((brand) => (
                        <SelectItem key={brand.id} value={brand.id}>
                          {brand.name}
                        </SelectItem>
                      ))}
                    </>
                  )}
                </SelectContent>
              </Select>
              <Separator className="my-2" />
              <div>
                <Button
                  variant="ghost"
                  className="w-full justify-start font-normal text-emerald-600"
                  onClick={() => setShowCreateBrandDialog(true)}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Añadir nueva marca
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Modelo</label>
              <Select
                value={selectedModel}
                onValueChange={handleModelChange}
                disabled={!selectedBrand || loading.models}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un modelo" />
                </SelectTrigger>
                <SelectContent>
                  {loading.models ? (
                    <div className="flex items-center justify-center py-2">
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      <span>Cargando modelos...</span>
                    </div>
                  ) : (
                    <>
                      {models.map((model) => (
                        <SelectItem key={model.id} value={model.id}>
                          {model.name}
                        </SelectItem>
                      ))}
                    </>
                  )}
                </SelectContent>
              </Select>
              <Separator className="my-2" />
              <div>
                <Button
                  variant="ghost"
                  className="w-full justify-start font-normal text-emerald-600"
                  onClick={() => setShowCreateModelDialog(true)}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Añadir nuevo modelo
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Año</label>
              <Select
                value={selectedYear}
                onValueChange={handleYearChange}
                disabled={!selectedModel}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un año" />
                </SelectTrigger>
                <SelectContent>
                  {generatedYears.map((year) => (
                    <SelectItem key={year.year} value={year.year}>
                      {year.year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {isComplete && selectedVehicle && (
        <div className="rounded-lg bg-emerald-50 p-6 dark:bg-emerald-900">
          <div className="w-full">
            <div className="mb-3 flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-emerald-600" />
              <h3 className="text-lg font-medium text-emerald-800 dark:text-white">
                Vehículo Seleccionado
              </h3>
            </div>

            <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <div className="mb-1 text-xs text-gray-500">Marca</div>
                <div className="flex items-center">
                  <Tag className="mr-2 h-4 w-4 text-emerald-600" />
                  <span className="font-medium text-emerald-700">{selectedVehicle.brand}</span>
                </div>
              </div>

              <div className="rounded-lg bg-white p-3 shadow-sm">
                <div className="mb-1 text-xs text-gray-500">Modelo</div>
                <div className="flex items-center">
                  <Car className="mr-2 h-4 w-4 text-emerald-600" />
                  <span className="font-medium text-emerald-700">{selectedVehicle.model}</span>
                </div>
              </div>

              <div className="rounded-lg bg-white p-3 shadow-sm">
                <div className="mb-1 text-xs text-gray-500">Año</div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-emerald-600" />
                  <span className="font-medium text-emerald-700">{selectedVehicle.year}</span>
                </div>
              </div>
            </div>

            {cutFound && cutInfo && (
              <div className="mt-6 space-y-4">
                <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-emerald-800">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-lg font-medium text-emerald-800 dark:text-white">
                      Información del Corte GPS
                    </h4>
                    <Button variant="outline" size="sm" onClick={() => setShowEditCutDialog(true)}>
                      <Pencil className="mr-2 h-4 w-4" />
                      Editar Corte
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {cutInfo.cut_info?.cut_info &&
                      cutInfo.cut_info.cut_info.map((step, index) => (
                        <div
                          key={index}
                          className="rounded-lg border border-emerald-100 p-4 dark:border-emerald-700"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-sm font-medium text-emerald-800">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-700 dark:text-gray-200">{step.description}</p>
                              {step.image && (
                                <img
                                  src={step.image}
                                  alt={`Paso ${index + 1}`}
                                  className="mt-2 w-full rounded-lg object-cover"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}

                    {cutInfo.cut_info?.notes && (
                      <div className="rounded-lg bg-emerald-50 p-4 dark:bg-emerald-900/50">
                        <h5 className="mb-2 font-medium text-emerald-800 dark:text-emerald-100">
                          Notas Adicionales
                        </h5>
                        <p className="text-emerald-700 dark:text-emerald-200">
                          {cutInfo.cut_info.notes}
                        </p>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Creado: {new Date(cutInfo.created_at).toLocaleDateString()}</span>
                      <span>
                        Última actualización: {new Date(cutInfo.updated_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!cutFound && (
              <Alert
                variant="destructive"
                className="mb-4 border-amber-300 bg-amber-50 text-amber-800"
              >
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Corte no encontrado</AlertTitle>
                <AlertDescription>
                  No tenemos información sobre el corte GPS para este vehículo. ¿Quieres añadir esta
                  información?
                </AlertDescription>
                <Button
                  variant="outline"
                  className="mt-2 border-amber-300 bg-amber-100 text-amber-800 hover:bg-amber-200 hover:text-amber-900 dark:text-white"
                  onClick={handleCreateCut}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Crear nuevo corte
                </Button>
              </Alert>
            )}

            <div className="mt-4 flex items-center justify-between">
              {cutFound ? (
                <Badge
                  variant="outline"
                  className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                >
                  Listo para consultar
                </Badge>
              ) : (
                <Badge
                  variant="outline"
                  className="bg-amber-100 text-amber-800 hover:bg-amber-200 dark:text-amber-800 "
                >
                  Corte no disponible
                </Badge>
              )}
              <div className="flex gap-2">
                <Button variant="outline" onClick={resetSelection}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Reiniciar Selección
                </Button>
                <Button variant="outline" onClick={handleShare}>
                  {copied ? (
                    <Check className="mr-2 h-4 w-4" />
                  ) : (
                    <Share2 className="mr-2 h-4 w-4" />
                  )}
                  Compartir
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Dialog open={showCreateCutDialog} onOpenChange={setShowCreateCutDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Crear nuevo corte GPS</DialogTitle>
            <DialogDescription>
              Añade información sobre el corte GPS para ayudar a otros instaladores.
            </DialogDescription>
          </DialogHeader>

          {selectedVehicle && (
            <CreateCutForm
              selectedVehicle={selectedVehicle}
              onClose={() => setShowCreateCutDialog(false)}
              checkIfCutExists={checkIfCutExists}
            />
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={showEditCutDialog} onOpenChange={setShowEditCutDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Editar corte GPS</DialogTitle>
            <DialogDescription>
              Modifica la información del corte GPS para este vehículo.
            </DialogDescription>
          </DialogHeader>

          {selectedVehicle && cutInfo && (
            <EditCutForm
              cutInfo={cutInfo}
              selectedVehicle={{
                ...selectedVehicle,
                year: selectedVehicle.year,
              }}
              onClose={() => setShowEditCutDialog(false)}
              checkIfCutExists={checkIfCutExists}
            />
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={showCreateBrandDialog} onOpenChange={setShowCreateBrandDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Nueva Marca</DialogTitle>
            <DialogDescription>Agrega una nueva marca de vehículo al sistema</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="brandName">Nombre de la marca</Label>
              <Input
                id="brandName"
                value={newBrandName}
                onChange={(e) => setNewBrandName(e.target.value)}
                placeholder="Ej: Toyota"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={handleCreateBrand}>
              Crear Marca
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showCreateModelDialog} onOpenChange={setShowCreateModelDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Nuevo Modelo</DialogTitle>
            <DialogDescription>Agrega un nuevo modelo para esta marca</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="modelName">Nombre del modelo</Label>
              <Input
                id="modelName"
                value={newModelName}
                onChange={(e) => setNewModelName(e.target.value)}
                placeholder="Ej: Corolla"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={handleCreateModel}>
              Crear Modelo
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
