import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition ${
    isActive
      ? 'text-green-700'
      : 'text-gray-700 hover:text-green-700'
}`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        {/* Logo (link to home) */}
        <NavLink onClick={() => setOpen(false)} to="/" className="flex items-center gap-3">
          <img
            src="/logo/SHEF.jpg"
            alt="Shantytown Empowerment Foundation"
            className="h-35 w-auto object-contain" 
          />
        </NavLink>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/publications" className={navLinkClass}>
            Publications
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 text-sm">
          <ul>
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
