import { TiSocialYoutube, TiSocialInstagram } from 'react-icons/ti'
import { FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'

const LINKS = [
  {
    link: 'https://api.whatsapp.com/send/?phone=8126565700',
    nombre: 'Contacto Material',
    icon: <FaWhatsapp />,
    color: 'bg-[#00e676]',
  },
  {
    link: 'https://chat.whatsapp.com/FiwJR2D70w17JPUOoJvdKY',
    nombre: 'Grupo de WhatsApp',
    icon: <FaWhatsapp />,
    color: 'bg-[#00e676]',
  },
  {
    link: 'https://api.whatsapp.com/send/?phone=8111913676',
    nombre: 'Contacto',
    icon: <FaWhatsapp />,
    color: 'bg-[#00e676]',
  },
  {
    link: '/',
    nombre: 'Blog',
    icon: <AiFillGithub />,
    color: 'border-white border bg-black',
  },
]
function Page() {
  return (
    <div>
      <div className="mx-auto max-w-lg p-6 text-white">
        {/* <div className="flex items-center justify-between py-4"></div>
        <div className="flex items-center justify-between py-4">
          <div>
            <h1 className="text-4xl font-bold"></h1>
          </div>
        </div> */}
        <div className="flex flex-col gap-4">
          {LINKS.map((link, index) => (
            <a
              href={link.link}
              key={index}
              target="_blank"
              className={`flex items-center gap-2 rounded px-2 py-2 text-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ${link.color}`}
            >
              {link.icon}
              {link.nombre}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
