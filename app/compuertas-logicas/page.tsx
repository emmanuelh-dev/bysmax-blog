import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import React from 'react'

const LOGICGATES = [
  {
    heading: 'Compuerta AND (7408)',
    description:
      'La **compuerta 7408** es una compuerta AND de 2 entradas. Para que la salida de esta compuerta sea alta (1), ambas entradas deben ser altas (1).',
    configuration: '2 entradas y 1 salida',
    truthTable: [
      { 'Entrada A': 0, 'Entrada B': 0, salida: 0 },
      { 'Entrada A': 0, 'Entrada B': 1, salida: 0 },
      { 'Entrada A': 1, 'Entrada B': 0, salida: 0 },
      { 'Entrada A': 1, 'Entrada B': 1, salida: 1 },
    ],
  },
  {
    heading: 'Compuerta OR (7432)',
    description:
      'La **compuerta 7432** es una compuerta OR de 2 entradas. La salida será alta (1) si al menos una de las entradas es alta (1).',
    configuration: '2 entradas y 1 salida',
    truthTable: [
      { 'Entrada A': 0, 'Entrada B': 0, salida: 0 },
      { 'Entrada A': 0, 'Entrada B': 1, salida: 1 },
      { 'Entrada A': 1, 'Entrada B': 0, salida: 1 },
      { 'Entrada A': 1, 'Entrada B': 1, salida: 1 },
    ],
  },
  {
    heading: 'Compuerta NOT (7404)',
    description:
      'La **compuerta 7404** es una compuerta NOT, también conocida como inversor. Tiene una sola entrada y una salida, invirtiendo el estado lógico de la entrada.',
    configuration: '1 entrada y 1 salida',
    truthTable: [
      { 'Entrada A': 0, 'Entrada B': 0, salida: 1 },
      { 'Entrada A': 0, 'Entrada B': 1, salida: 0 },
    ],
  },
  {
    heading: 'Compuerta NAND (7400)',
    description:
      'La **compuerta 7400** es una compuerta NAND de 2 entradas. Es una combinación de las compuertas AND y NOT. La salida será baja (0) solo cuando ambas entradas sean altas (1).',
    configuration: '2 entradas y 1 salida',
    truthTable: [
      { 'Entrada A': 0, 'Entrada B': 0, salida: 1 },
      { 'Entrada A': 0, 'Entrada B': 1, salida: 1 },
      { 'Entrada A': 1, 'Entrada B': 0, salida: 1 },
      { 'Entrada A': 1, 'Entrada B': 1, salida: 0 },
    ],
  },
  {
    heading: 'Compuerta XOR (7486)',
    description:
      'La **compuerta 7486** es una compuerta XOR de 2 entradas. La salida será alta (1) si solo una de las entradas es alta (1).',
    configuration: '2 entradas y 1 salida',
    truthTable: [
      { 'Entrada A': 0, 'Entrada B': 0, salida: 0 },
      { 'Entrada A': 0, 'Entrada B': 1, salida: 1 },
      { 'Entrada A': 1, 'Entrada B': 0, salida: 1 },
      { 'Entrada A': 1, 'Entrada B': 1, salida: 0 },
    ],
  },
]

export default function page() {
  return (
    <div>
      <h1 className="text-4xl font-bold">
        Guía Completa sobre las Compuertas Lógicas 7408, 7432, 7404, 7400 y 7486
      </h1>
      {LOGICGATES.map((gate) => (
        <div key={gate.heading} className="space-y-4 pt-4">
          <h2 className="text-2xl font-bold">{gate.heading}</h2>
          <p>{gate.description}</p>
          <p>{gate.configuration}</p>
          <div className="max-w-sm rounded-md border">
            <Table>
              <TableHead>
                <TableRow>
                  <TableHead>Entrada A</TableHead>
                  <TableHead>Entrada B</TableHead>
                  <TableHead>Salida</TableHead>
                </TableRow>
              </TableHead>
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
    </div>
  )
}
