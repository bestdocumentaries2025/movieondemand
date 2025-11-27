// components/Header.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/categories', label: 'Categories' },
    { href: '/search', label: 'Search' },
    { href: '/request', label: 'Request Movie' },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 p-4 transition-all duration-300 ${
      isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black to-transparent'
    }`}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-red-600">
          Movie On Demand 
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const isActive = router.pathname === item.href
            return (
              <Link 
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded transition ${
                  isActive ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <Link href="/search" className="p-2 hover:bg-gray-800 rounded transition">
            🔍
          </Link>
          
          <button className="p-2 hover:bg-gray-800 rounded transition">
            🔔
          </button>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-800 rounded transition"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-black border-t border-gray-800 py-4">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 hover:bg-gray-800 rounded transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}