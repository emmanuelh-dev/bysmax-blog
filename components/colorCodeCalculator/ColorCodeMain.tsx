'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'

const ColorCodeMain = () => {
  // Use state for each band
  const [first, setfirst] = useState<string | null>(null)
  const [second, setsecond] = useState<string | null>(null)
  const [multiplier, setMultiplier] = useState<string | null>(null)
  const [tolerance, setTolerance] = useState<string | null>(null)
  const [temperature, setTemperature] = useState<string | null>(null)
  // Use state for the quantity of bands
  const [bands, setBands] = useState('3')
  const [resistance, setResistance] = useState<number | null>(null)

  function handleBands(value: string) {
    setfirst(null)
    setsecond(null)
    setMultiplier(null)
    setTolerance(null)
    setTemperature(null)
    setBands(value)
  }
  // Use effect to calculate the resistance
  useEffect(() => {
    console.log(first, second, multiplier, tolerance, temperature)
    if (first && second && multiplier) {
      const resistance = +(+first + second) * +multiplier
      setResistance(resistance)
      return
    }
    setResistance(0)
    return
  }, [first, second, multiplier, tolerance, temperature])
  return (
    <div className="flex gap-4 max-sm:flex-col">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Calculadora de código de colores de resistencias</CardTitle>
          <CardDescription>Ingrese los colores de las bandas de la resistencia</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <Select onValueChange={(value) => setfirst(value)}>
                <SelectTrigger className="w-full" id="first-band">
                  <SelectValue placeholder="Primera" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="0" className="bg-black text-white">
                    Negro
                  </SelectItem>
                  <SelectItem value="1" className="bg-amber-950 text-white">
                    Marrón
                  </SelectItem>
                  <SelectItem value="2" className="bg-red-500 text-white">
                    Rojo
                  </SelectItem>
                  <SelectItem value="3" className="bg-orange-500 text-white">
                    Naranja
                  </SelectItem>
                  <SelectItem value="4" className="bg-yellow-500 text-white">
                    Amarillo
                  </SelectItem>
                  <SelectItem value="5" className="bg-green-500 text-white">
                    Verde
                  </SelectItem>
                  <SelectItem value="6" className="bg-blue-500 text-white">
                    Azul
                  </SelectItem>
                  <SelectItem value="7" className="bg-violet-500 text-white">
                    Violeta
                  </SelectItem>
                  <SelectItem value="8" className="bg-gray-500 text-white">
                    Gris
                  </SelectItem>
                  <SelectItem value="9" className="bg-white text-black">
                    Blanco
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Select onValueChange={(value) => setsecond(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Segunda" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0" className="bg-black text-white">
                    Negro
                  </SelectItem>
                  <SelectItem value="1" className="bg-amber-950 text-white">
                    Marrón
                  </SelectItem>
                  <SelectItem value="2" className="bg-red-500 text-white">
                    Rojo
                  </SelectItem>
                  <SelectItem value="3" className="bg-orange-500 text-white">
                    Naranja
                  </SelectItem>
                  <SelectItem value="4" className="bg-yellow-500 text-white">
                    Amarillo
                  </SelectItem>
                  <SelectItem value="5" className="bg-green-500 text-white">
                    Verde
                  </SelectItem>
                  <SelectItem value="6" className="bg-blue-500 text-white">
                    Azul
                  </SelectItem>
                  <SelectItem value="7" className="bg-violet-500 text-white">
                    Violeta
                  </SelectItem>
                  <SelectItem value="8" className="bg-gray-500 text-white">
                    Gris
                  </SelectItem>
                  <SelectItem value="9" className="bg-white text-black">
                    Blanco
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Select onValueChange={(value) => setMultiplier(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Miltiplicador" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1" className="bg-black text-white">
                    Negro
                  </SelectItem>
                  <SelectItem value="10" className="bg-amber-950 text-white">
                    Marrón
                  </SelectItem>
                  <SelectItem value="100" className="bg-red-500 text-white">
                    Rojo
                  </SelectItem>
                  <SelectItem value="1000" className="bg-orange-500 text-white">
                    Naranja
                  </SelectItem>
                  <SelectItem value="10000" className="bg-yellow-500 text-white">
                    Amarillo
                  </SelectItem>
                  <SelectItem value="100000" className="bg-green-500 text-white">
                    Verde
                  </SelectItem>
                  <SelectItem value="1000000" className="bg-blue-500 text-white">
                    Azul
                  </SelectItem>
                  <SelectItem value="10000000" className="bg-violet-500 text-white">
                    Violeta
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            {(bands == '4' || bands == '5' || bands == '6') && (
              <>
                <div className="flex items-center space-x-2">
                  <Select onValueChange={(value) => setTolerance(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Tolerancia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1" className="bg-amber-950 text-white">
                        Marrón
                      </SelectItem>
                      <SelectItem value="2" className="bg-red-500 text-white">
                        Rojo
                      </SelectItem>
                      <SelectItem value="0.5" className="bg-green-500 text-white">
                        Verde
                      </SelectItem>
                      <SelectItem value="0.25" className="bg-blue-500 text-white">
                        Azul
                      </SelectItem>
                      <SelectItem value="0.10" className="bg-violet-500 text-white">
                        Violeta
                      </SelectItem>
                      <SelectItem value="0.05" className="bg-gray-500 text-white">
                        Gris
                      </SelectItem>
                      <SelectItem
                        value="10"
                        className="bg-gradient-to-r from-neutral-600 via-neutral-100 to-neutral-600"
                      >
                        Plateado
                      </SelectItem>
                      <SelectItem
                        value="5"
                        className="bg-gradient-to-r from-amber-700 via-neutral-100 to-yellow-400"
                      >
                        Dorado
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}
            {bands == '5' && (
              <>
                <div className="flex items-center space-x-2">
                  <Select onValueChange={(value) => setTemperature(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100" className="bg-amber-950 text-white">
                        Marrón
                      </SelectItem>
                      <SelectItem value="50" className="bg-red-500 text-white">
                        Rojo
                      </SelectItem>
                      <SelectItem value="15" className="bg-orange-500 text-white">
                        Naranja
                      </SelectItem>
                      <SelectItem value="25" className="bg-yellow-500 text-white">
                        Amarillo
                      </SelectItem>
                      <SelectItem value="10" className="bg-blue-500 text-white">
                        Azul
                      </SelectItem>
                      <SelectItem value="5" className="bg-violet-500 text-white">
                        Violeta
                      </SelectItem>
                      <SelectItem value="1" className="bg-gray-500 text-white">
                        Gris
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <label className="text-nowrap text-sm" htmlFor="bandQuantity">
                Cantidad de Bandas
              </label>
              <Select value={bands} onValueChange={(value) => handleBands(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Resultado</CardTitle>
          <CardDescription>Esta calculadora esta en beta</CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <p>
              {resistance} Ω {tolerance && <span>{tolerance} -+</span>}{' '}
              {temperature && <span>{temperature} ppm/°C</span>}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ColorCodeMain
