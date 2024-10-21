import Link from 'next/link'
import { ChevronRightIcon } from 'lucide-react'

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header>
        <h1 className="mb-6 text-center text-4xl font-bold">Curso de Python desde Cero</h1>
      </header>
      <main>
        <section className="mb-8">
          <p className="text-muted-foreground text-center text-lg">
            Aprende Python desde cero y conviértete en un experto en programación. Este curso está
            diseñado para principiantes y te guiará paso a paso en tu viaje de aprendizaje.
          </p>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Estructura del Curso</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courseStructure.map((module, index) => (
              <div key={index} className="rounded-3xl border p-4 transition-shadow hover:shadow-md">
                <h3 className="mb-2 text-xl font-medium">{module.title}</h3>
                <ul className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex}>
                      <Link
                        href={topic.link}
                        className="text-primary flex items-center hover:underline"
                        prefetch={false}
                      >
                        <ChevronRightIcon className="mr-1 h-4 w-4" />
                        {topic.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

const courseStructure = [
  {
    title: '1. Introducción a Python',
    topics: [
      { name: '¿Qué es Python y por qué usarlo?', link: '/introduccion/que-es-python' },
      { name: 'Historia y evolución de Python', link: '/introduccion/historia-python' },
      {
        name: 'Instalación de Python y configuración del entorno',
        link: '/introduccion/instalacion-python',
      },
      { name: 'Tu primer programa en Python', link: '/introduccion/primer-programa' },
      { name: 'Manejo de errores y depuración básica', link: '/introduccion/manejo-errores' },
    ],
  },
  {
    title: '2. Fundamentos del Lenguaje Python',
    topics: [
      { name: 'Sintaxis y estructura básica', link: '/fundamentos/sintaxis-estructura' },
      { name: 'Variables, constantes y tipos de datos', link: '/fundamentos/variables-tipos' },
      { name: 'Operadores y expresiones', link: '/fundamentos/operadores-expresiones' },
      {
        name: 'Estructuras de control de flujo: Condicionales',
        link: '/fundamentos/estructuras-control',
      },
      { name: 'Bucles: For y While', link: '/blog/introduccion-a-los-bucles-en-python' },
      { name: 'Manejo de entradas y salidas', link: '/fundamentos/entrada-salida' },
    ],
  },
  {
    title: '3. Estructuras de Datos en Python',
    topics: [
      { name: 'Listas: Creación, manipulación y comprensión', link: '/estructuras-datos/listas' },
      { name: 'Tuplas: Usos y diferencias con las listas', link: '/estructuras-datos/tuplas' },
      {
        name: 'Diccionarios: Almacenamiento y acceso a datos clave-valor',
        link: '/estructuras-datos/diccionarios',
      },
      { name: 'Conjuntos: Operaciones y aplicaciones', link: '/estructuras-datos/conjuntos' },
      { name: 'Comprensión de listas y diccionarios', link: '/estructuras-datos/comprension' },
    ],
  },
  {
    title: '4. Funciones y Modularidad en Python',
    topics: [
      { name: 'Definición y uso de funciones', link: '/funciones/definicion' },
      {
        name: 'Argumentos, parámetros y alcance de las variables',
        link: '/funciones/argumentos-parametros',
      },
      { name: 'Funciones Lambda: Uso y beneficios', link: '/funciones/lambda' },
      { name: 'Decoradores y funciones de orden superior', link: '/funciones/decoradores' },
      { name: 'Manejo de excepciones en funciones', link: '/funciones/excepciones' },
    ],
  },
  {
    title: '5. Programación Orientada a Objetos (POO)',
    topics: [
      { name: 'Conceptos básicos de POO: Clases y objetos', link: '/poo/clases-objetos' },
      {
        name: 'Encapsulamiento, herencia y polimorfismo',
        link: '/poo/encapsulamiento-herencia-polimorfismo',
      },
      { name: 'Métodos especiales y sobrecarga de operadores', link: '/poo/metodos-especiales' },
      { name: 'Abstracción e interfaces en Python', link: '/poo/abstraccion' },
      { name: 'Aplicaciones prácticas de POO', link: '/poo/aplicaciones' },
    ],
  },
  {
    title: '6. Manejo de Archivos y Módulos',
    topics: [
      { name: 'Lectura y escritura de archivos', link: '/archivos/lectura-escritura' },
      { name: 'Manejo de archivos CSV, JSON y XML', link: '/archivos/formatos' },
      { name: 'Uso de módulos estándar y creación de módulos', link: '/modulos/uso-creacion' },
      { name: 'Paquetes y distribución de proyectos Python', link: '/modulos/paquetes' },
      { name: 'Documentación y buenas prácticas en módulos', link: '/modulos/buenas-practicas' },
    ],
  },
  {
    title: '7. Python Avanzado y Buenas Prácticas',
    topics: [
      { name: 'Programación funcional en Python', link: '/avanzado/programacion-funcional' },
      { name: 'Generadores y corrutinas', link: '/avanzado/generadores-corrutinas' },
      { name: 'Manejo avanzado de excepciones', link: '/avanzado/excepciones' },
      { name: 'Optimización de código y profiling', link: '/avanzado/optimizacion' },
      { name: 'Seguridad y manejo de contraseñas', link: '/avanzado/seguridad' },
    ],
  },
  {
    title: '8. Introducción a Frameworks y Librerías Populares',
    topics: [
      {
        name: 'Automatización de tareas con Python (Ej: Selenium)',
        link: '/frameworks/automatizacion',
      },
      {
        name: 'Introducción a Django y Flask para desarrollo web',
        link: '/frameworks/django-flask',
      },
      { name: 'Análisis de datos con Pandas y NumPy', link: '/frameworks/pandas-numpy' },
      {
        name: 'Visualización de datos con Matplotlib y Seaborn',
        link: '/frameworks/matplotlib-seaborn',
      },
      { name: 'Machine Learning básico con Scikit-learn', link: '/frameworks/machine-learning' },
    ],
  },
]
