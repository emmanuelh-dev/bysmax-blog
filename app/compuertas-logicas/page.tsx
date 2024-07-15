import Image from '@/components/Image'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Link from 'next/link'
import React from 'react'
import { LOGICGATES } from '@/data/logic-gates'
import Sidebar from './components/Sidebar'

export default function page() {
  return (
    <div>
      <Sidebar>
        <div>
          <h1 className="text-4xl font-bold">
            Guía Completa sobre las Compuertas Lógicas 7408, 7432, 7404, 7400 y 7486
          </h1>
          <Image
            src={'/static/images/compuertas.png'}
            width={1000}
            height={200}
            alt="Una Guía Completa sobre las Series 7408, 7432, 7404, 7400 y 7486"
          />
          {LOGICGATES.map((gate) => (
            <div key={gate.heading} className="space-y-4 pt-4">
              <h2 className="text-2xl font-bold">
                <Link href={`/compuertas-logicas/${gate.url}`}>{gate.heading}</Link>
              </h2>
              <p>{gate.description}</p>
              <p>{gate.configuration}</p>
              <div className="max-w-sm rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Entrada A</TableHead>
                      <TableHead>Entrada B</TableHead>
                      <TableHead>Salida</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {gate.truthTable.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row['Entrada A']}</TableCell>
                        <TableCell>{row['Entrada B']}</TableCell>
                        <TableCell>{row.salida}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          ))}
          <div className="prose dark:prose-invert">
            <h2>Cómo Funcionan las Compuertas Lógicas</h2>
            <h3>Activo Alto y Activo Bajo</h3>
            <p>
              Entender el concepto de <strong>activo alto y activo bajo</strong> es esencial para
              trabajar con compuertas lógicas. Un pin bajo activo debe conectarse a un nivel lógico
              bajo (0 voltios) para activarse, mientras que un pin alto activo debe conectarse a un
              nivel lógico alto (3 o 5 voltios).
            </p>

            <h3>Implementación en Circuitos Integrados (ICs)</h3>
            <p>
              Las compuertas lógicas se implementan en <strong>circuitos integrados</strong> para
              ahorrar espacio y aumentar la eficiencia. Por ejemplo, el IC 7408 contiene cuatro
              compuertas AND de dos entradas en un solo chip.
            </p>

            <h3>Operaciones Complejas</h3>
            <p>
              Combinando diferentes compuertas lógicas, se pueden realizar operaciones complejas.
              Por ejemplo, un flip-flop, que se utiliza para almacenar datos, puede construirse
              combinando compuertas NAND.
            </p>

            <h2>Aplicaciones de las Compuertas Lógicas</h2>

            <h3>Electrónica Digital</h3>
            <p>
              Las compuertas lógicas son la base de todos los dispositivos electrónicos digitales.
              Se utilizan en la creación de microprocesadores, memorias y dispositivos de
              almacenamiento.
            </p>

            <h3>Diseño de Circuitos</h3>
            <p>
              En el diseño de circuitos, las compuertas lógicas permiten la implementación de
              funciones booleanas y la creación de sistemas de control digital.
            </p>

            <h3>Ejemplos Prácticos</h3>
            <ul>
              <li>
                <strong>7408</strong>: Utilizado en sistemas de control donde se requiere una
                condición AND.
              </li>
              <li>
                <strong>7432</strong>: Común en circuitos donde se necesita una condición OR.
              </li>
              <li>
                <strong>7404</strong>: Usado para invertir señales en circuitos digitales.
              </li>
              <li>
                <strong>7400</strong>: Componente esencial en la creación de flip-flops y otros
                dispositivos de almacenamiento.
              </li>
              <li>
                <strong>7486</strong>: Implementado en sistemas que requieren comparación de
                señales.
              </li>
            </ul>

            <h2>Conclusión</h2>
            <p>
              Las <strong>compuertas lógicas</strong> son componentes fundamentales en la
              electrónica digital. Comprender cómo funcionan las compuertas 7408, 7432, 7404, 7400 y
              7486 es crucial para cualquier persona interesada en la electrónica. Estas compuertas
              permiten la creación de circuitos complejos y son esenciales en la mayoría de los
              dispositivos electrónicos que utilizamos hoy en día.
            </p>
            <p>
              Ahora que tienes una comprensión básica de las compuertas lógicas, puedes explorar más
              sobre cómo se utilizan en diferentes aplicaciones y experimentos prácticos en
              electrónica. ¡Adéntrate en el fascinante mundo de las compuertas lógicas y descubre
              cómo forman la base de la tecnología moderna!
            </p>
          </div>
        </div>
      </Sidebar>
    </div>
  )
}
