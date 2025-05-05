export default function GPSCutsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="mb-8">
        <nav className="breadcrumbs text-sm px-4">
          <ul className="flex items-center space-x-2 text-gray-500">
            <li>
              <a href="/" className="hover:text-gray-900">
                Inicio
              </a>
            </li>
            <li>•</li>
            <li>
              <a href="/gps" className="hover:text-gray-900">
                GPS
              </a>
            </li>
            <li>•</li>
            <li className="text-gray-900">Cortes GPS</li>
          </ul>
        </nav>
      </div>
      {children}
    </section>
  )
}
