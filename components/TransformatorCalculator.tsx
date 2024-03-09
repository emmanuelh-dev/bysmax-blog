'use client'
import React, { useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/Input'
import { Button } from './ui/button'

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
    <div>
      <div className="mb-3">
        <Label htmlFor="voltageout">Voltaje de salida</Label>
        <Input type="number" onChange={handleChangeOut} placeholder="0" />
      </div>
      <div>
        <Label htmlFor="voltagein">Voltaje de entrada</Label>
        <Input type="number" onChange={handleChangeIn} placeholder="0" />
        <Button type="submit" value={'Calcular'}>
          Calcular
        </Button>
      </div>

      <h2 className="py-3 text-3xl font-bold">Subtitulo</h2>
      <h3>
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
      </h3>
      <h3>
        <span className="font-bold">
          Impedancia del bobinado secundario: <br />
        </span>
        {elevarVoltage(voltageIn, voltageOut)}
        <button
          className="px-2"
          onClick={() => copyToClipboard(elevarVoltage(voltageIn, voltageOut))}
        >
          <div className="hover:text-blue-600 dark:text-white" size={24} aria-label={'copy text'} />
        </button>
      </h3>
      <h3>
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
      </h3>
      <h3>
        <span className="font-bold">
          Factor de acoplamiento: <br />
        </span>
        {couplingFactor(voltageIn, voltageOut)}
      </h3>
    </div>
  )
}

export default TransformatorCalculator
