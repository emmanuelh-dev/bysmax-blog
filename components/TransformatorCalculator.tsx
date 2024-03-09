'use client'
import React, { useState } from 'react'
import { Label } from '../components/ui/label'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'

const TransformatorCalculator = () => {
  const [voltageIn, setVoltageIn] = useState(220)
  const [voltageOut, setVoltageOut] = useState(12)

  const handleChangeIn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVoltageIn(Number(e.target.value))
  }
  const handleChangeOut = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVoltageOut(Number(e.target.value))
  }

  function copyToClipboard(text: any) {
    const textToCopy = text.toString()
    navigator.clipboard.writeText(textToCopy)
  }
  function reducirVoltage(voltageIn: number, voltageOut: number) {
    return Math.pow(voltageIn / voltageOut, 2)
  }
  function elevarVoltage(voltageIn: number, voltageOut: number) {
    return Math.pow(voltageOut / voltageIn, 2)
  }
  function couplingFactorSimple(voltageIn: number, voltageOut: number) {
    return voltageOut / voltageIn
  }
  function couplingFactor(voltageIn: number, voltageOut: number) {
    return voltageOut / efectiveVoltage(voltageIn)
  }
  function secondaryInductance(voltageIn: number, voltageOut: number) {
    return voltageOut / efectiveVoltage(voltageIn)
  }
  function efectiveVoltage(efective: number) {
    return Math.sqrt(2) * efective
  }
  return (
    <div className="flex gap-4 max-sm:flex-col">
      <div>
        <Card>
          <CardContent>
            <CardTitle>Calculadora</CardTitle>
            <Input type="number" onChange={handleChangeOut} placeholder="0" />
            <Label htmlFor="voltageout">Voltaje de salida</Label>

            <Label htmlFor="voltagein">
              Voltaje de entrada
              <Input type="number" onChange={handleChangeIn} placeholder="0" />
            </Label>
          </CardContent>
          <CardFooter>
            <Button type="submit" value="Calcular" className="w-full">
              Calcular
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardContent>
          <CardTitle>Resultados</CardTitle>
          <span className="font-bold">
            Impedancia del bobinado primario: <br />
          </span>
          {reducirVoltage(voltageIn, voltageOut)}
          <Button
            className="px-2"
            onClick={() => copyToClipboard(reducirVoltage(voltageIn, voltageOut))}
          >
            <div className="hover:text-blue-600 dark:text-white" aria-label={'copy text'} />
          </Button>
          <span className="font-bold">
            Impedancia del bobinado secundario: <br />
          </span>
          {elevarVoltage(voltageIn, voltageOut)}
          <button
            className="px-2"
            onClick={() => copyToClipboard(elevarVoltage(voltageIn, voltageOut))}
          >
            <div
              className="hover:text-blue-600 dark:text-white"
              size={24}
              aria-label={'copy text'}
            />
          </button>
          <span className="font-bold">
            Factor de acoplamiento sencillo: <br />
          </span>
          {couplingFactorSimple(voltageIn, voltageOut)}
          <button
            className="px-2"
            onClick={() => copyToClipboard(couplingFactorSimple(voltageIn, voltageOut))}
          >
            <div className="hover:text-blue-600 dark:text-white" aria-label={'copy text'}>
              copu
            </div>
          </button>
          ={' '}
          <h3>
            <span className="font-bold">
              Factor de acoplamiento: <br />
            </span>
            {couplingFactor(voltageIn, voltageOut)}
          </h3>
        </CardContent>
      </Card>
    </div>
  )
}

export default TransformatorCalculator
