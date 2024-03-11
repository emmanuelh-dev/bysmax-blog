'use client'
import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { FaCopy } from 'react-icons/fa'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
export function CopyCard({ text, value }) {
  function copyToClipboard(text: any) {
    const textToCopy = text.toString()
    navigator.clipboard.writeText(textToCopy)
  }

  return (
    <div>
      <div className="font-bold">{text}</div>
      <span>{value}</span>
      <Button variant="outline" size="icon" onClick={() => copyToClipboard(value)}>
        <FaCopy className="h-4 w-4" />
      </Button>
    </div>
  )
}

const TransformatorCalculator = () => {
  const [voltageIn, setVoltageIn] = useState(220)
  const [voltageOut, setVoltageOut] = useState(12)
  const handleChangeIn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVoltageIn(Number(e.target.value))
  }
  const handleChangeOut = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVoltageOut(Number(e.target.value))
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
      <div className="min-w-[20rem]">
        <Card>
          <CardContent>
            <CardTitle>Calculadora</CardTitle>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona el tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Selecciona el tipo de transformador</SelectLabel>
                  <SelectItem value="sencillo">Sencillo</SelectItem>
                  <SelectItem value="doble">Doble</SelectItem>
                  <SelectItem value="Triple">Triple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Label htmlFor="voltageout">
              Voltaje de salida
              <Input type="number" onChange={handleChangeOut} placeholder="0" value={voltageOut} />
            </Label>
            <Label htmlFor="voltagein">
              Voltaje de entrada
              <Input type="number" onChange={handleChangeIn} placeholder="0" value={voltageIn} />
            </Label>
          </CardContent>
        </Card>
      </div>

      <Card className="w-full">
        <CardContent>
          <CardTitle>Resultados</CardTitle>
          <CopyCard
            value={reducirVoltage(voltageIn, voltageOut)}
            text={'Impedancia del bobinado primario:'}
          />
          <CopyCard
            value={elevarVoltage(voltageIn, voltageOut)}
            text={'Impedancia del bobinado secundario:'}
          />
          <CopyCard
            value={couplingFactorSimple(voltageIn, voltageOut)}
            text={'Factor de acoplamiento sencillo:'}
          />
          <CopyCard
            value={couplingFactor(voltageIn, voltageOut)}
            text={'Factor de acoplamiento:'}
          />
        </CardContent>
      </Card>
    </div>
  )
}

export default TransformatorCalculator
