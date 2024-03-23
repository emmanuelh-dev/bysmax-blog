'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'

const ColorCodeMain = () => {
  // Use state for each band
  const [first, setfirst] = useState<string | null>(null)
  const [second, setsecond] = useState<string | null>(null)
  const [third, setthird] = useState<string | null>(null)
  const [fourth, setfourth] = useState<string | null>(null)
  const [fifth, setfifth] = useState<string | null>(null)
  const [sixt, setsixt] = useState<string | null>(null)

  // Use state for the quantity of bands
  const [bands, setBands] = useState('3')
  const [resistance, setResistance] = useState<number | null>(null)

  // Use effect to calculate the resistance
  useEffect(() => {
    console.log(first, second, third, fourth, fifth)
    if (bands === '3') {
      if (first && second && third) {
        const resistance = (+first + +second) * Math.pow(10, +third)
        setResistance(resistance)
        return
      }
    } else if (bands == '4') {
      if (first && second && third && fourth) {
        const resistance = (+first + +second) * Math.pow(10, +third)
        setResistance(resistance)
        return
      }
    } else if (bands == '5') {
      if (first && second && third && fourth && fifth) {
        const resistance = (+first + +second) * Math.pow(10, +third)
        setResistance(resistance)
        return
      }
    }
    setResistance(0)
    return
  }, [first, second, third, fourth, fifth])
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
                  <SelectValue placeholder="Select" />
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
                  <SelectValue placeholder="Select" />
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
              <Select onValueChange={(value) => setthird(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
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
            {(bands == '4' || bands == '5' || bands == '6') && (
              <>
                <div className="flex items-center space-x-2">
                  <Select onValueChange={(value) => setfourth(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
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
              </>
            )}
            {(bands == '5' || bands == '6') && (
              <>
                <div className="flex items-center space-x-2">
                  <Select onValueChange={(value) => setfifth(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
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
              </>
            )}
            {bands == '6' && (
              <>
                <div className="flex items-center space-x-2">
                  <Select onValueChange={(value) => setsixt(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
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
              </>
            )}
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <label className="text-nowrap text-sm" htmlFor="bandQuantity">
                Cantidad de Bandas
              </label>
              <Select value={bands} onValueChange={(value) => setBands(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button size="sm">Calcular</Button>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Resultado</CardTitle>
          <CardDescription>Esta calculadora esta en beta</CardDescription>
        </CardHeader>
        <CardContent>{resistance} Ω</CardContent>
      </Card>
    </div>
  )
}

export default ColorCodeMain
