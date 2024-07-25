'use client'
import React from 'react'
import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { allServicios, allCursos } from 'contentlayer/generated'

const Footer = () => {
  const footerLinks = [
    {
      title: 'Mantente actualizado',
      links: [
        ...headerNavLinks,
        {
          href: '/wordpress',
          title: 'Crear en wordpress',
        },
      ],
    },
    {
      title: 'Servicios',
      links: allServicios.map((s) => ({
        href: `/servicios/${s.slug}`,
        title: s.title,
      })),
    },
    {
      title: 'Cursos',
      links: [
        ...allCursos.map((c) => ({
          href: `/cursos/${c.slug}`,
          title: c.title,
        })),
        {
          title: 'Curso Gratis de Traccar',
          href: '/traccar',
        },
        {
          title: 'Curso Gratis de Arduino',
          href: '/arduino',
        },
      ],
    },
  ]

  return (
    <footer className="py-20">
      <div className="flex flex-col py-6 lg:flex-row lg:justify-between">
        <div>
          <h3 className="mb-4 text-xl font-semibold">{siteMetadata.title}</h3>
          <p className="text-sm ">{siteMetadata.description}</p>
        </div>
        {siteMetadata.newsletter?.provider && (
          <div>
            <NewsletterForm />
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {footerLinks.map((section, index) => (
          <div key={index} className="col-span-1 md:col-span-1">
            <h3 className="mb-4 text-xl font-semibold">{section.title}</h3>
            <ul className="ml-4 space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link href={link.href} className="text-sm ">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
