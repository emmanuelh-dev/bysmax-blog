'use client'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import * as dayjs from 'dayjs'
import { Label } from './ui/label'
import { Checkbox } from './ui/checkbox'

const HeaderGenerator = () => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'))
  const [tags, setTags] = useState('')
  const [draft, setDraft] = useState(false)
  const [authors, setAuthors] = useState('')
  const [summary, setSummary] = useState('')
  const [fileName, setFileName] = useState('')

  useEffect(() => {
    setFileName(title.toLowerCase().replace(/ /g, '-') + '.mdx')
  }, [title])

  const generateResult = () => {
    return `
---
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
summary: '${summary}'
---
    `
  }

  const handleCopyToClipboard = () => {
    const text = generateResult()
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="flex flex-col gap-4">
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
        <Checkbox checked={draft} onCheckedChange={(checked) => setDraft(checked)} />
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
        <Button className="w-full" onClick={handleCopyToClipboard}>
          Copiar
        </Button>
      </div>
    </div>
  )
}

export default HeaderGenerator
