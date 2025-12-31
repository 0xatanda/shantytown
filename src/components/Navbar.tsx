import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `block text-base font-medium transition ${
    isActive
      ? 'text-green-700'
      : 'text-gray-700 hover:text-green-700'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between flex-nowrap">
        
        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center"
        >
          <img
            src="/logo/SHEF.jpg"
            alt="Shantytown Empowerment Foundation"
            className="
              h-12
              sm:h-14
              lg:h-16
              w-auto
              object-contain
            "
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 whitespace-nowrap">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/publications" className={navLinkClass}>Publications</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="
            lg:hidden
            flex items-center justify-center
            h-12 w-12
            rounded-md
            text-3xl
            text-gray-700
            hover:bg-gray-100
            transition
          "
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <ul className="px-6 py-6 space-y-6">
            <li>
              <NavLink onClick={() => setOpen(false)} to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setOpen(false)} to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setOpen(false)} to="/projects" className={navLinkClass}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setOpen(false)} to="/publications" className={navLinkClass}>
                Publications
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setOpen(false)} to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
