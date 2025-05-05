'use client'

import { useState, useEffect } from 'react'
import {
  Brand,
  Model,
  fetchBrands,
  fetchModelsByBrand,
  fetchYearsByModel,
  checkCutExists,
  createModel,
} from '@/app/[locale]/(gps)/gps-cuts/cuts-endpoints'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
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
  Search,
  AlertCircle,
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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

// Define the interface for the selected vehicle
interface SelectedVehicle {
  brand: string
  model: string
  year: string
  brandId?: string
  modelId?: string
}

// Define the interface for the years data
interface YearData {
  id: string
  year: string
}

export const VehicleSelector = () => {
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

  const currentYear = new Date().getFullYear()

  useEffect(() => {
    loadBrands()
  }, [])

  useEffect(() => {
    if (selectedModel) {
      const yearsList: YearData[] = []
      for (let year = 1990; year <= currentYear; year++) {
        yearsList.push({ id: year.toString(), year: year.toString() })
      }
      setGeneratedYears(yearsList)
    }
  }, [selectedModel, currentYear])

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

  const checkIfCutExists = async (modelId: string, year: string) => {
    setLoading((prev) => ({ ...prev, cutCheck: true }))
    try {
      const exists = await checkCutExists(modelId, parseInt(year))
      setCutFound(exists)
    } catch (error) {
      console.error('Error checking if cut exists:', error)
      setCutFound(false)
    } finally {
      setLoading((prev) => ({ ...prev, cutCheck: false }))
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
      setYears([])
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
      // Convert Vehicle[] to YearData[]
      const yearsData: YearData[] = data.map((item) => ({
        id: item.id.toString(),
        year: item.year.toString(),
      }))
      setYears(yearsData)
    } catch (error) {
      console.error('Error loading years:', error)
      // Fallback to generated years if API fails
    } finally {
      setLoading((prev) => ({ ...prev, years: false }))
    }
  }

  const handleBrandChange = (value: string) => {
    setSelectedBrand(value)
    loadModels(value)
  }

  const handleModelChange = (value: string) => {
    setSelectedModel(value)
    loadYears(value)
  }

  const handleYearChange = (value: string) => {
    setSelectedYear(value)
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

  // Mover funciones handlers dentro del componente
  const handleCreateBrand = async () => {
    setLoading((prev) => ({ ...prev, brands: true }))
    try {
      const response = await fetch('/api/cuts/brands', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newBrandName }),
      })

      if (!response.ok) throw new Error('Error en la respuesta')

      await loadBrands()
      setShowCreateBrandDialog(false)
      setNewBrandName('')
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
      await loadModels(selectedBrand)
      setShowCreateModelDialog(false)
      setNewModelName('')
    } catch (error) {
      console.error('Error creando modelo:', error)
    } finally {
      setLoading((prev) => ({ ...prev, models: false }))
    }
  }

  return (
    <>
      <Card className="mx-auto w-full max-w-2xl shadow-lg">
        <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
          <CardTitle className="text-2xl font-bold">Buscador de Cortes GPS</CardTitle>
          <CardDescription className="text-white">
            <span className="text-white">
              Selecciona tu vehículo para encontrar información de instalación GPS
            </span>
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="mb-8 flex items-center justify-between px-2">
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

          <div className="mt-6 space-y-6">
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
                      </>
                    )}
                  </SelectContent>
                </Select>
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
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Año</label>
                <Select
                  value={selectedYear}
                  onValueChange={handleYearChange}
                  disabled={!selectedModel || loading.years}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona un año" />
                  </SelectTrigger>
                  <SelectContent>
                    {loading.years ? (
                      <div className="flex items-center justify-center py-2">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        <span>Cargando años...</span>
                      </div>
                    ) : (
                      (years.length > 0 ? years : generatedYears).map((year) => (
                        <SelectItem key={year.id} value={year.id}>
                          {year.year}
                        </SelectItem>
                      ))
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>

        {isComplete && selectedVehicle && (
          <>
            <Separator />
            <CardFooter className="flex flex-col bg-emerald-50 p-6 dark:bg-emerald-900">
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

                {!cutFound && (
                  <Alert
                    variant="destructive"
                    className="mb-4 border-amber-300 bg-amber-50 text-amber-800"
                  >
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Corte no encontrado</AlertTitle>
                    <AlertDescription>
                      No tenemos información sobre el corte GPS para este vehículo. ¿Quieres añadir
                      esta información?
                    </AlertDescription>
                    <Button
                      variant="outline"
                      className="mt-2 border-amber-300 bg-amber-100 text-amber-800 hover:bg-amber-200 hover:text-amber-900"
                      onClick={handleCreateCut}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Crear nuevo corte
                    </Button>
                  </Alert>
                )}

                <div className="flex items-center justify-between">
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
                  <Button variant="outline" onClick={resetSelection} className="flex items-center">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Reiniciar Selección
                  </Button>
                </div>
              </div>
            </CardFooter>
          </>
        )}
      </Card>

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

      <Dialog open={showCreateBrandDialog} onOpenChange={setShowCreateBrandDialog}>
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

interface StepIndicatorProps {
  step: number
  label: string
  icon: React.ReactNode
  status: string
}

const StepIndicator = ({ step, label, icon, status }: StepIndicatorProps) => {
  const getStatusClasses = () => {
    switch (status) {
      case 'complete':
        return 'bg-emerald-600 text-white border-emerald-600'
      case 'current':
        return 'bg-white text-emerald-600 border-emerald-600'
      case 'disabled':
      default:
        return 'bg-gray-100 text-gray-400 border-gray-300'
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${getStatusClasses()}`}
      >
        {icon}
      </div>
      <span
        className={`mt-2 text-xs font-medium dark:text-white ${status === 'disabled' ? 'text-gray-400' : 'text-gray-700'}`}
      >
        {label}
      </span>
    </div>
  )
}

interface StepConnectorProps {
  active: boolean
}

const StepConnector = ({ active }: StepConnectorProps) => {
  return (
    <div className="mx-2 h-1 flex-1">
      <div className={`h-full ${active ? 'bg-emerald-600' : 'bg-gray-200'} rounded`}></div>
    </div>
  )
}
