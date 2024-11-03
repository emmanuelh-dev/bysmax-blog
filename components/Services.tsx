'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Navigation, PenTool, Laptop, Globe, Search, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { buttonVariants } from '@/components/ui/button'

const services = [
  {
    category: 'logistica',
    title: 'Soluciones',
    services: [
      {
        title: 'Plataforma de rastreo GPS',
        Icon: Navigation,
        description: 'Datos precisos y en tiempo real, que te ayuda a alcanzar tus objetivos.',
        action: 'Ver más',
        link: '/servicios/plataforma-de-rastreo-gps',
      },
    ],
  },
  {
    category: 'software',
    title: 'Consultoría',
    services: [
      {
        title: 'Consultoría',
        Icon: PenTool,
        description: 'Genera flujos que automaticen tus operaciones.',
        action: 'Agendar cita',
      },
      {
        title: 'Desarrollo a la Medida',
        Icon: Laptop,
        description:
          'Creamos software personalizado que se adapta a las necesidades específicas de tu negocio.',
        action: 'Solicitar cotización',
      },
      {
        title: 'Desarrollo Web',
        Icon: Globe,
        description: 'Creamos sitios web atractivos y funcionales que generan negocio.',
        action: 'Solicitar cotización',
      },
      {
        title: 'Optimización SEO',
        Icon: Search,
        description:
          'Mejoramos tu presencia en línea con estrategias SEO efectivas que aumentan tu visibilidad.',
        action: 'Solicitar análisis',
      },
    ],
  },
]

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="flex items-center justify-between">
          <h2 className="mb-4 text-3xl font-bold tracking-tighter md:text-4xl/tight">Servicios</h2>{' '}
          <Link className={buttonVariants({ variant: 'link' })} href="/servicios">
            Ver mas...
          </Link>
        </div>
        <Tabs defaultValue="logistica" className="w-full">
          <TabsList className="mb-8">
            {services.map((category) => (
              <TabsTrigger key={category.category} value={category.category} className="text-lg">
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {services.map((category) => (
            <TabsContent key={category.category} value={category.category}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
                      <CardContent className="flex h-full flex-col p-6">
                        <div className="mb-4 flex items-center">
                          <div className="bg-primary text-primary-foreground mr-4 rounded-full p-3">
                            <service.Icon className="h-6 w-6" />
                          </div>
                          <h3 className="text-xl font-semibold">{service.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-4 flex-grow">
                          {service.description}
                        </p>
                        <Link
                          href={service.link || '#'}
                          className={`${buttonVariants({ variant: 'outline' })} group w-full justify-between`}
                        >
                          {service.action}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </section>
  )
}
