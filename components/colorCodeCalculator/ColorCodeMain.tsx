import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'

const ColorCodeMain = () => {
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
              <label className="text-nowrap text-sm" htmlFor="band1">
                Banda 1
              </label>
              <Select>
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
              <label className="text-nowrap text-sm" htmlFor="band2">
                Banda 2
              </label>
              <Select>
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
              <label className="text-nowrap text-sm" htmlFor="band3">
                Banda 3
              </label>
              <Select>
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
              <label className="text-nowrap text-sm" htmlFor="band3">
                Banda 4
              </label>
              <Select value="1">
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
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <label className="text-nowrap text-sm" htmlFor="bandQuantity">
                Cantidad de Bandas
              </label>
              <Select defaultValue="4">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                  <SelectItem value="7">7</SelectItem>
                  <SelectItem value="8">8</SelectItem>
                  <SelectItem value="9">9</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button size="sm">Calcular</Button>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>Aqui va una resistencia con el resultado</CardHeader>
        <CardContent>Aqui</CardContent>
      </Card>
    </div>
  )
}

export default ColorCodeMain
