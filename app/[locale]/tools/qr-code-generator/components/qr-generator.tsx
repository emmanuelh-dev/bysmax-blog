'use client'

import { useState, useRef, useEffect } from 'react'
import QRCodeStyling from 'qr-code-styling'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { HexColorPicker } from 'react-colorful'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function QRGenerator() {
  const [qrType, setQRType] = useState('url')
  const [qrData, setQRData] = useState({
    url: '',
    phone: '',
    contact: { name: '', phone: '', email: '' },
    email: '',
    sms: { number: '', message: '' },
    wifi: { ssid: '', password: '', encryption: 'WPA' },
  })
  const [downloadFormat, setDownloadFormat] = useState('png')
  const [downloadSize, setDownloadSize] = useState('200')
  const [qrColor, setQRColor] = useState('#000000')
  const [qrBackgroundColor, setQRBackgroundColor] = useState('#ffffff')
  const [qrShape, setQRShape] = useState('square')
  const [qrFrame, setQrFrame] = useState('none')
  const qrRef = useRef<HTMLDivElement>(null)
  const [qrCode, setQrCode] = useState<QRCodeStyling | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const newQrCode = new QRCodeStyling({
        width: 200,
        height: 200,
        type: 'svg',
        data: generateQRCode(),
        dotsOptions: {
          color: qrColor,
          type: qrShape as any,
        },
        backgroundOptions: {
          color: qrBackgroundColor,
        },
      })
      setQrCode(newQrCode)
      if (qrRef.current) {
        qrRef.current.innerHTML = ''
        newQrCode.append(qrRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (qrCode) {
      qrCode.update({
        data: generateQRCode(),
        dotsOptions: {
          color: qrColor,
          type: qrShape as any,
        },
        backgroundOptions: {
          color: qrBackgroundColor,
        },
      })
    }
  }, [qrCode, qrColor, qrBackgroundColor, qrShape, qrData, qrType])

  const generateQRCode = () => {
    switch (qrType) {
      case 'url':
        return qrData.url
      case 'phone':
        return `tel:${qrData.phone}`
      case 'contact':
        return `BEGIN:VCARD\nVERSION:3.0\nN:${qrData.contact.name}\nTEL:${qrData.contact.phone}\nEMAIL:${qrData.contact.email}\nEND:VCARD`
      case 'email':
        return `mailto:${qrData.email}`
      case 'sms':
        return `SMSTO:${qrData.sms.number}:${qrData.sms.message}`
      case 'wifi':
        return `WIFI:T:${qrData.wifi.encryption};S:${qrData.wifi.ssid};P:${qrData.wifi.password};;`
      default:
        return ''
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    nestedKey: string | null = null
  ) => {
    const { name, value } = e.target
    setQRData((prev) => {
      if (nestedKey) {
        const nestedObject = prev[nestedKey as keyof typeof prev]
        if (typeof nestedObject === 'object' && nestedObject !== null) {
          return { ...prev, [nestedKey]: { ...nestedObject, [name]: value } }
        }
      }
      return { ...prev, [name]: value }
    })
  }
  const downloadQRCode = () => {
    if (qrCode) {
      qrCode.download({
        extension: downloadFormat as any,
        name: 'qr-code',
      })
    }
  }

  const renderInputs = () => {
    switch (qrType) {
      case 'url':
        return (
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="url">URL</Label>
            <Input
              type="url"
              id="url"
              name="url"
              value={qrData.url}
              onChange={handleInputChange}
              placeholder="https://example.com"
            />
          </div>
        )
      case 'phone':
        return (
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="phone">Número de teléfono</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={qrData.phone}
              onChange={handleInputChange}
              placeholder="+1234567890"
            />
          </div>
        )
      case 'contact':
        return (
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="name">Nombre</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={qrData.contact.name}
              onChange={(e) => handleInputChange(e, 'contact')}
              placeholder="John Doe"
            />
            <Label htmlFor="contactPhone">Teléfono</Label>
            <Input
              type="tel"
              id="contactPhone"
              name="phone"
              value={qrData.contact.phone}
              onChange={(e) => handleInputChange(e, 'contact')}
              placeholder="+1234567890"
            />
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={qrData.contact.email}
              onChange={(e) => handleInputChange(e, 'contact')}
              placeholder="john@example.com"
            />
          </div>
        )
      case 'email':
        return (
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="email">Dirección de email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={qrData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
            />
          </div>
        )
      case 'sms':
        return (
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="smsNumber">Número</Label>
            <Input
              type="tel"
              id="smsNumber"
              name="number"
              value={qrData.sms.number}
              onChange={(e) => handleInputChange(e, 'sms')}
              placeholder="+1234567890"
            />
            <Label htmlFor="smsMessage">Mensaje</Label>
            <Input
              type="text"
              id="smsMessage"
              name="message"
              value={qrData.sms.message}
              onChange={(e) => handleInputChange(e, 'sms')}
              placeholder="Tu mensaje aquí"
            />
          </div>
        )
      case 'wifi':
        return (
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="ssid">Nombre de la red (SSID)</Label>
            <Input
              type="text"
              id="ssid"
              name="ssid"
              value={qrData.wifi.ssid}
              onChange={(e) => handleInputChange(e, 'wifi')}
              placeholder="Mi WiFi"
            />
            <Label htmlFor="password">Contraseña</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={qrData.wifi.password}
              onChange={(e) => handleInputChange(e, 'wifi')}
              placeholder="Contraseña"
            />
            <Label htmlFor="encryption">Encriptación</Label>
            <Select
              name="encryption"
              value={qrData.wifi.encryption}
              onValueChange={(value) =>
                setQRData((prev) => ({ ...prev, wifi: { ...prev.wifi, encryption: value } }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecciona el tipo de encriptación" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="WPA">WPA/WPA2</SelectItem>
                <SelectItem value="WEP">WEP</SelectItem>
                <SelectItem value="nopass">Sin contraseña</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Card className="mx-auto w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Generador de Código QR Avanzado</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <div className="mb-4 grid w-full items-center gap-4">
              <Label htmlFor="qrType">Tipo de QR</Label>
              <Select value={qrType} onValueChange={setQRType}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona el tipo de QR" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="url">URL</SelectItem>
                  <SelectItem value="phone">Teléfono</SelectItem>
                  <SelectItem value="contact">Contacto</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="sms">SMS</SelectItem>
                  <SelectItem value="wifi">WiFi</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {renderInputs()}
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="mb-4 grid w-full grid-cols-2 gap-4">
              <div>
                <Label htmlFor="qrColor">Color del QR</Label>
                <div className="flex flex-col items-center gap-2">
                  <HexColorPicker color={qrColor} onChange={setQRColor} />
                  <Input
                    id="qrColor"
                    type="text"
                    value={qrColor}
                    onChange={(e) => setQRColor(e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="qrBackgroundColor">Color de fondo</Label>
                <div className="flex flex-col items-center gap-2">
                  <HexColorPicker color={qrBackgroundColor} onChange={setQRBackgroundColor} />
                  <Input
                    id="qrBackgroundColor"
                    type="text"
                    value={qrBackgroundColor}
                    onChange={(e) => setQRBackgroundColor(e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="qrShape">Forma del QR</Label>
              <RadioGroup
                id="qrShape"
                value={qrShape}
                onValueChange={setQRShape}
                className="mt-2 flex space-x-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="square" id="square" />
                  <Label htmlFor="square">Cuadrado</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dots" id="dots" />
                  <Label htmlFor="dots">Puntos</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="rounded" id="rounded" />
                  <Label htmlFor="rounded">Redondeado</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="mt-4">
              <Label htmlFor="qrFrame">Marco del QR</Label>
              <Select value={qrFrame} onValueChange={setQrFrame}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona el marco" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Sin marco</SelectItem>
                  <SelectItem value="simple">Marco simple</SelectItem>
                  <SelectItem value="rounded">Marco redondeado</SelectItem>
                  <SelectItem value="fancy">Marco decorativo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div
              ref={qrRef}
              className={`mt-4 ${qrFrame !== 'none' ? 'p-4' : ''}`}
              style={{
                borderRadius: qrFrame === 'rounded' ? '16px' : qrFrame === 'fancy' ? '8px' : '0',
                border: qrFrame !== 'none' ? `4px solid ${qrColor}` : 'none',
                boxShadow:
                  qrFrame === 'fancy'
                    ? `0 0 0 4px ${qrColor}, 0 0 0 8px ${qrBackgroundColor}`
                    : 'none',
              }}
            />
            <p className="mt-2 text-center">SCAN ME</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Opciones de descarga</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Formato</h4>
                <Select value={downloadFormat} onValueChange={setDownloadFormat}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el formato" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="png">PNG</SelectItem>
                    <SelectItem value="jpeg">JPEG</SelectItem>
                    <SelectItem value="svg">SVG</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Tamaño</h4>
                <Select value={downloadSize} onValueChange={setDownloadSize}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el tamaño" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="200">200x200</SelectItem>
                    <SelectItem value="300">300x300</SelectItem>
                    <SelectItem value="400">400x400</SelectItem>
                    <SelectItem value="500">500x500</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <Button onClick={downloadQRCode}>Descargar QR</Button>
      </CardFooter>
    </Card>
  )
}
