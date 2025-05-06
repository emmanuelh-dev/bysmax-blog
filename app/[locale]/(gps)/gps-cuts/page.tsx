import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { VehicleSelector } from './VehicleSelector'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Buscador de Cortes GPS | Guía Profesional de Instalación',
  description:
    'Herramienta profesional para encontrar información precisa sobre cortes GPS en vehículos. Incluye diagramas e instrucciones paso a paso para instaladores.',
  keywords:
    'cortes GPS, instalación GPS, vehículos, diagrama eléctrico, guía instalación, corte ignición',
}

const GPSCutsPage = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-6 lg:p-4">
      <Card className="shadow-lg">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white">
          <h1 className="text-2xl font-bold">Buscador de Cortes GPS</h1>
          <p className="text-emerald-50">
            Selecciona tu vehículo para encontrar información detallada sobre el corte GPS
          </p>
          <p className="mt-3 text-sm text-white">
            ¿Tienes experiencia instalando cortes GPS? ¡Comparte tus conocimientos! Ayuda a otros
            instaladores agregando nuevos cortes o mejorando los existentes. Juntos hacemos crecer
            la comunidad.
          </p>
        </div>
        <div>
          <VehicleSelector />
        </div>
      </Card>

      <div className="mt-12 space-y-8">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Herramienta Profesional</AlertTitle>
          <AlertDescription>
            Esta herramienta está diseñada para profesionales en la instalación de dispositivos GPS.
            Proporciona información técnica precisa sobre los puntos de corte en diferentes modelos
            de vehículos.
          </AlertDescription>
        </Alert>

        <div className="prose max-w-none dark:prose-invert max-sm:p-4">
          <h2>¿Por qué es importante un corte GPS profesional?</h2>
          <p>
            Un corte GPS profesional requiere conocimiento específico del sistema eléctrico de cada
            vehículo. Un corte inadecuado puede causar problemas en el funcionamiento del vehículo o
            hacer que el sistema GPS no opere correctamente.
          </p>

          <h3>Métodos de Instalación Recomendados</h3>
          <ul>
            <li>Uso de diagramas eléctricos específicos del vehículo</li>
            <li>Identificación precisa de cables de ignición</li>
            <li>Procedimientos de instalación paso a paso</li>
            <li>Consideraciones de seguridad importantes</li>
          </ul>

          <div className="mt-8">
            <h3>Consideraciones Importantes</h3>
            <ul>
              <li>Siempre utiliza diagramas eléctricos oficiales</li>
              <li>Verifica el voltaje antes de realizar cualquier corte</li>
              <li>Documenta todos los cambios realizados</li>
              <li>Utiliza herramientas profesionales y certificadas</li>
            </ul>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <p>
              Esta herramienta es solo una guía. Siempre consulta con un profesional certificado
              para la instalación de dispositivos GPS en vehículos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GPSCutsPage
