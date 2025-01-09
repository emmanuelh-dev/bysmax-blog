import React from 'react'
import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import SectionContainer from './SectionContainer'
import { nav } from '@/data/headerNavLinks'

const Footer = async () => {
  const footerLinks = [...nav]

  return (
    <div className='container mx-auto'>
      <footer className="py-20">
        {/* <div className="flex flex-col py-6 lg:flex-row lg:justify-between">
          <div>
            <h2 className="mb-4 text-xl font-extrabold">{siteMetadata.title}</h2>
            <p className="text-sm ">{siteMetadata.description}</p>
          </div>
          {siteMetadata.newsletter?.provider && (
            <div>
              <NewsletterForm />
            </div>
          )}
        </div> */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {footerLinks.map((section, index) => (
            <div key={index} className="col-span-1 md:col-span-1">
              <h3 className="mb-4 text-xl font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="hover:font-bold hover:text-black dark:hover:text-white"
                  >
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
    </div>
  )
}

export default Footer
