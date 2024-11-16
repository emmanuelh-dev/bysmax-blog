"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { ZapIcon, GaugeIcon, ActivityIcon, BoltIcon } from 'lucide-react'

export default function CalculadoraLeyOhm() {
  const [isAdvanced, setIsAdvanced] = useState(false)
  const [voltage, setVoltage] = useState<number | "">("")
  const [current, setCurrent] = useState<number | "">("")
  const [resistance, setResistance] = useState<number | "">("")
  const [power, setPower] = useState<number | "">("")
  const [calculate, setCalculate] = useState<"voltage" | "current" | "resistance" | "power">("voltage")
  const [result, setResult] = useState<number | null>(null)

  useEffect(() => {
    handleCalculate()
  }, [voltage, current, resistance, power, calculate, isAdvanced])

  const handleCalculate = () => {
    if (isAdvanced) {
      switch (calculate) {
        case "voltage":
          if (current !== "" && resistance !== "") {
            setResult(Number(current) * Number(resistance))
          } else if (power !== "" && current !== "") {
            setResult(Number(power) / Number(current))
          } else if (power !== "" && resistance !== "") {
            setResult(Math.sqrt(Number(power) * Number(resistance)))
          } else {
            setResult(null)
          }
          break
        case "current":
          if (voltage !== "" && resistance !== "") {
            setResult(Number(voltage) / Number(resistance))
          } else if (power !== "" && voltage !== "") {
            setResult(Number(power) / Number(voltage))
          } else if (power !== "" && resistance !== "") {
            setResult(Math.sqrt(Number(power) / Number(resistance)))
          } else {
            setResult(null)
          }
          break
        case "resistance":
          if (voltage !== "" && current !== "") {
            setResult(Number(voltage) / Number(current))
          } else if (voltage !== "" && power !== "") {
            setResult(Math.pow(Number(voltage), 2) / Number(power))
          } else if (power !== "" && current !== "") {
            setResult(Number(power) / Math.pow(Number(current), 2))
          } else {
            setResult(null)
          }
          break
        case "power":
          if (voltage !== "" && current !== "") {
            setResult(Number(voltage) * Number(current))
          } else if (voltage !== "" && resistance !== "") {
            setResult(Math.pow(Number(voltage), 2) / Number(resistance))
          } else if (current !== "" && resistance !== "") {
            setResult(Math.pow(Number(current), 2) * Number(resistance))
          } else {
            setResult(null)
          }
          break
      }
    } else {
      switch (calculate) {
        case "voltage":
          if (current !== "" && resistance !== "") {
            setResult(Number(current) * Number(resistance))
          } else {
            setResult(null)
          }
          break
        case "current":
          if (voltage !== "" && resistance !== "") {
            setResult(Number(voltage) / Number(resistance))
          } else {
            setResult(null)
          }
          break
        case "resistance":
          if (voltage !== "" && current !== "") {
            setResult(Number(voltage) / Number(current))
          } else {
            setResult(null)
          }
          break
      }
    }
  }

  const renderFormula = () => {
    if (isAdvanced) {
      switch (calculate) {
        case "voltage":
          return "V = I × R, V = P ÷ I, V = √(P × R)"
        case "current":
          return "I = V ÷ R, I = P ÷ V, I = √(P ÷ R)"
        case "resistance":
          return "R = V ÷ I, R = V² ÷ P, R = P ÷ I²"
        case "power":
          return "P = V × I, P = V² ÷ R, P = I² × R"
      }
    } else {
      switch (calculate) {
        case "voltage":
          return "V = I × R"
        case "current":
          return "I = V ÷ R"
        case "resistance":
          return "R = V ÷ I"
      }
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Calculadora de la Ley de Ohm</CardTitle>
        <CardDescription>Calcula voltaje, corriente, resistencia y potencia</CardDescription>
        <div className="flex items-center space-x-2">
          <Switch
            id="advanced-mode"
            checked={isAdvanced}
            onCheckedChange={setIsAdvanced}
          />
          <Label htmlFor="advanced-mode">Modo Avanzado</Label>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="voltage">Voltaje (V)</Label>
            <div className="flex items-center space-x-2">
              <ZapIcon className="text-yellow-500" />
              <Input
                id="voltage"
                type="number"
                placeholder="Voltaje"
                value={voltage}
                onChange={(e) => setVoltage(e.target.value ? Number(e.target.value) : "")}
                disabled={calculate === "voltage"}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="current">Corriente (A)</Label>
            <div className="flex items-center space-x-2">
              <ActivityIcon className="text-blue-500" />
              <Input
                id="current"
                type="number"
                placeholder="Corriente"
                value={current}
                onChange={(e) => setCurrent(e.target.value ? Number(e.target.value) : "")}
                disabled={calculate === "current"}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="resistance">Resistencia (Ω)</Label>
            <div className="flex items-center space-x-2">
              <GaugeIcon className="text-red-500" />
              <Input
                id="resistance"
                type="number"
                placeholder="Resistencia"
                value={resistance}
                onChange={(e) => setResistance(e.target.value ? Number(e.target.value) : "")}
                disabled={calculate === "resistance"}
              />
            </div>
          </div>
          {isAdvanced && (
            <div className="space-y-2">
              <Label htmlFor="power">Potencia (W)</Label>
              <div className="flex items-center space-x-2">
                <BoltIcon className="text-green-500" />
                <Input
                  id="power"
                  type="number"
                  placeholder="Potencia"
                  value={power}
                  onChange={(e) => setPower(e.target.value ? Number(e.target.value) : "")}
                  disabled={calculate === "power"}
                />
              </div>
            </div>
          )}
          <RadioGroup 
            value={calculate} 
            onValueChange={(value: "voltage" | "current" | "resistance" | "power") => setCalculate(value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="voltage" id="calc-voltage" />
              <Label htmlFor="calc-voltage">Calcular Voltaje</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="current" id="calc-current" />
              <Label htmlFor="calc-current">Calcular Corriente</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="resistance" id="calc-resistance" />
              <Label htmlFor="calc-resistance">Calcular Resistencia</Label>
            </div>
            {isAdvanced && (
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="power" id="calc-power" />
                <Label htmlFor="calc-power">Calcular Potencia</Label>
              </div>
            )}
          </RadioGroup>
        </form>
        {result !== null && (
          <div className="mt-4 p-4 bg-secondary rounded-md">
            <p className="text-lg font-semibold">Resultado:</p>
            <p className="text-2xl font-bold">
              {result.toFixed(2)} {calculate === "voltage" ? "V" : calculate === "current" ? "A" : calculate === "resistance" ? "Ω" : "W"}
            </p>
          </div>
        )}
        <div className="mt-4 p-4 bg-muted rounded-md">
          <p className="text-sm font-medium">Fórmulas utilizadas:</p>
          <p className="text-lg font-semibold">{renderFormula()}</p>
        </div>
      </CardContent>
    </Card>
  )
}