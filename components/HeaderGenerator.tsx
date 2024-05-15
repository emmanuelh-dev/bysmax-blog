'use client'
import { useEffect, useState } from 'react'
import { Button, buttonVariants } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import dayjs from 'dayjs' // Cambiada la importación aquí
import { Label } from './ui/label'
import { Checkbox } from './ui/checkbox'
import siteMetadata from '@/data/siteMetadata'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const HeaderGenerator = () => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'))
  const [tags, setTags] = useState('')
  const [draft, setDraft] = useState(false)
  const [authors, setAuthors] = useState('')
  const [summary, setSummary] = useState('')
  const [fileName, setFileName] = useState('')
  const [siteRepo, setSiteRepo] = useState(siteMetadata.siteRepo)

  const newFileUrl = (path) => {
    const content = encodeURIComponent(generateResult())
    return `${siteRepo}/new/main/data/blog?filename=${path}&value=${content}`
  }
  useEffect(() => {
    const normalizedTitle = title
      .trim()
      // Eliminar acentos
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      // Reemplazar símbolos y caracteres especiales por guiones
      .replace(/[^\w\s-]/g, '')
      // Reemplazar espacios por guiones
      .replace(/\s+/g, '-')
      // Convertir todo a minúsculas
      .toLowerCase()

    const fileName = normalizedTitle + '.mdx'

    setFileName(fileName)
  }, [title])

  const generateResult = () => {
    return `---
title: ${title}
date: ${date}
tags: [${tags
      .split(',')
      .map((tag) => `'${tag.trim()}'`)
      .join(', ')}]
draft: ${draft}
authors: [${authors
      .split(',')
      .map((author) => `'${author.trim()}'`)
      .join(', ')}]
summary: ${summary.replace(/:/g, '').trim()}
---`
  }

  const handleCopyToClipboard = ($text = '') => {
    const text = $text.length > 0 ? $text : generateResult()
    navigator.clipboard.writeText(text)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generador de Cabeceras</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Label>
          Ingresa el link de tu Repo y te generara el link para crear un nuevo archivo.
          <Input value={siteRepo} onChange={(e) => setSiteRepo(e.target.value)} />
        </Label>
        <Label>
          Titulo
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </Label>
        <Label>
          Nombre Del archivo (Este se generará automáticamente con base al titulo)
          <div className="flex gap-4">
            <Input value={fileName} disabled />
            <Button onClick={() => handleCopyToClipboard(fileName)}>Copiar</Button>
          </div>
        </Label>
        <Label>
          Fecha
          <Input value={date} type="date" onChange={(e) => setDate(e.target.value)} />
        </Label>
        <Label>
          Tags (separados por comas)
          <Input value={tags} onChange={(e) => setTags(e.target.value)} />
        </Label>
        <Label className="itesm-center flex gap-4">
          Borrador
          <Checkbox
            checked={draft}
            onCheckedChange={(checked) => (checked === 'indeterminate' ? null : setDraft(checked))}
          />
        </Label>
        <Label>
          Resumen
          <Input value={summary} onChange={(e) => setSummary(e.target.value)} />
        </Label>
        <Label>
          Autores (separados por comas)
          <Input value={authors} onChange={(e) => setAuthors(e.target.value)} />
        </Label>
        <div className="space-y-4">
          <Textarea rows={10} value={generateResult()} />
          <div className="flex gap-4">
            <Button className="w-full" onClick={() => handleCopyToClipboard(generateResult())}>
              Copiar
            </Button>
            <a
              href={newFileUrl(fileName)}
              className={`w-full ${buttonVariants({ variant: 'default' })}`}
              onClick={() => handleCopyToClipboard(generateResult())}
            >
              Crear
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default HeaderGenerator
