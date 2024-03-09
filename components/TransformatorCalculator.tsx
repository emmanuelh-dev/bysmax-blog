'use client'
import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

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
            <Label htmlFor="voltageout" >
              Voltaje de salida
              <Input type="number" onChange={handleChangeOut} placeholder="0" value={voltageOut}/>
            </Label>

            <Label htmlFor="voltagein">
              Voltaje de entrada
              <Input type="number" onChange={handleChangeIn} placeholder="0" value={voltageIn}/>
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
          <div className="font-bold">Impedancia del bobinado primario:</div>
          {reducirVoltage(voltageIn, voltageOut)}
          <div className="font-bold">Impedancia del bobinado secundario:</div>
          {elevarVoltage(voltageIn, voltageOut)}
          <div className="font-bold">Factor de acoplamiento sencillo:</div>
          {couplingFactorSimple(voltageIn, voltageOut)}
          <div className="font-bold">Factor de acoplamiento:</div>
          {couplingFactor(voltageIn, voltageOut)}
        </CardContent>
      </Card>
    </div>
  )
}

export default TransformatorCalculator
