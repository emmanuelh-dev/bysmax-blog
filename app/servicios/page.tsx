import React from 'react'

function ServicesPage() {
  return (
    <div>
      <div className="pb-6 pt-6">
        <h1 className="text-5xl font-bold">Servicios</h1>
        <p className="text-gray-400">
          En nuestra empresa ofrecemos una amplia gama de servicios diseñados para cubrir tus
          necesidades:
        </p>
        <ul className="mt-4 list-inside list-disc text-gray-400">
          <li>Venta de materiales de calidad para tus proyectos.</li>
          <li>
            Servicios completos de mantenimiento para garantizar el óptimo funcionamiento de tus
            equipos y sistemas.
          </li>
          <li>
            Desarrollo de proyectos a medida, adaptados específicamente a tus requisitos y
            objetivos.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ServicesPage
