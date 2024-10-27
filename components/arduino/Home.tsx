import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
const events = [
  {
    name: 'Principiante',
    items: [
      {
        title: 'Enciende un LED',
        description: 'Aprende a encender y apagar un LED utilizando un pin digital de Arduino.',
        link: 'https://www.arduino.cc/en/Tutorial/BuiltInExamples/Blink',
      },
      {
        title: 'Control de Servomotor',
        description: 'Controla un servomotor utilizando una señal PWM de Arduino.',
        link: 'https://www.arduino.cc/en/Tutorial/LibraryExamples/Sweep',
      },
      {
        title: 'Sensor de temperatura',
        description:
          'Lee la temperatura ambiental utilizando un sensor LM35 y muestra el valor en el monitor serial.',
        link: 'https://www.arduino.cc/en/Tutorial/LibraryExamples/Temperature',
      },
      {
        title: 'Zumbador piezoeléctrico',
        description: 'Genera sonidos simples con un zumbador piezoeléctrico.',
        link: 'https://www.arduino.cc/en/Tutorial/BuiltInExamples/toneMelody',
      },
      {
        title: 'Pulsador y LED',
        description: 'Controla un LED con un pulsador: enciéndelo al presionar el botón.',
        link: 'https://www.arduino.cc/en/Tutorial/BuiltInExamples/Button',
      },
    ],
  },
  {
    name: 'Intermedio',
    items: [
      {
        title: 'Sensor de distancia ultrasónico',
        description:
          'Utiliza un sensor ultrasónico HC-SR04 para medir distancias y mostrarlas en el monitor serial.',
        link: 'https://www.arduino.cc/en/Tutorial/BuiltInExamples/Ping',
      },
      {
        title: 'Control de LED RGB',
        description: 'Controla un LED RGB para mostrar diferentes colores utilizando pines PWM.',
        link: 'https://www.arduino.cc/en/Tutorial/LibraryExamples/RGBLed',
      },
      {
        title: 'Pantalla LCD',
        description: 'Muestra texto en una pantalla LCD utilizando la biblioteca LiquidCrystal.',
        link: 'https://www.arduino.cc/en/Tutorial/LibraryExamples/HelloWorld',
      },
      {
        title: 'Medición de luz con un LDR',
        description:
          'Utiliza un LDR (resistor dependiente de la luz) para medir la intensidad de la luz ambiental.',
        link: 'https://www.arduino.cc/en/Tutorial/LibraryExamples/AnalogReadSerial',
      },
      {
        title: 'Control de motor DC',
        description: 'Controla un motor de corriente continua con un transistor y una señal PWM.',
        link: 'https://www.arduino.cc/en/Tutorial/LibraryExamples/DCMotorControl',
      },
    ],
  },
  {
    name: 'Avanzado',
    items: [
      {
        title: 'Control remoto IR',
        description:
          'Controla tu Arduino utilizando un control remoto infrarrojo y un receptor IR.',
        link: 'https://www.arduino.cc/en/Tutorial/LibraryExamples/IRremote',
      },
      {
        title: 'Robot seguidor de línea',
        description:
          'Construye un robot que siga una línea negra en el suelo utilizando sensores infrarrojos.',
        link: 'https://www.arduino.cc/en/Tutorial/LibraryExamples/LineFollower',
      },
      {
        title: 'Control de motor paso a paso',
        description: 'Controla un motor paso a paso utilizando la biblioteca Stepper.',
        link: 'https://www.arduino.cc/en/Tutorial/LibraryExamples/StepperOneRevolution',
      },
      {
        title: 'Sistema de alarma con sensor PIR',
        description: 'Construye un sistema de alarma utilizando un sensor de movimiento PIR.',
        link: 'https://www.arduino.cc/en/Tutorial/LibraryExamples/PIRsensor',
      },
      {
        title: 'Medición de humedad y temperatura',
        description:
          'Utiliza un sensor DHT11 para medir la humedad y la temperatura del ambiente y mostrarlas en un LCD.',
        link: 'https://www.arduino.cc/en/Tutorial/LibraryExamples/DHT11sensor',
      },
    ],
  },
]
export function Home() {
  return (
    <main>
      <section className="bg-muted py-12 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto  text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Curso Gratuito de Arduino desde Cero hasta Avanzado en español
            </h1>
            <p className="text-muted-foreground md: mt-4">
              Te guiará desde la configuración inicial de tu propio servidor Traccar de rastreo
              hasta la gestión avanzada de dispositivos y la personalización de la plataforma.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link className={buttonVariants({ variant: 'default' })} href="#course">
                Comenzar ahora
              </Link>
              <Link href="/contacto" className={buttonVariants({ variant: 'outline' })}>
                Necesito un servidor
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto">
          <div className="relative">
            <div className="absolute left-2 h-full border-r-2 border-neutral-500" />
            <ul className="m-0 list-none p-0">
              {events.map((event, index) => (
                <li key={index} className="mb-2">
                  <div className={`mb-1 flex items-center`}>
                    <div className="h-6 w-6 rounded-full bg-neutral-500" />
                    <div className={` ml-6 flex-1 font-medium`}>{event.name}</div>
                  </div>
                  {event.items.map((event) => (
                    <div className="ml-12" key={event.title}>
                      <div className="mb-4 rounded-md bg-neutral-200 p-4 shadow-lg dark:bg-neutral-800">
                        <h4 className="mb-4 text-lg font-bold">{event.title}</h4>
                        <p className="text-neutral-600 dark:text-neutral-400">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
