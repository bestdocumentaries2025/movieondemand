// components/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link href="/" className="footer-brand">
              Movie On Demand 
            </Link>
            <p className="text-gray-400 text-sm">
              Watch your favorite movies and TV shows anytime, anywhere.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="footer-links">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/categories" className="footer-link">Categories</Link></li>
              <li><Link href="/search" className="footer-link">Search</Link></li>
              <li><Link href="/request" className="footer-link">Request Movie</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="footer-links">
              <li><Link href="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link href="/terms" className="footer-link">Terms of Service</Link></li>
              <li><Link href="/dmca" className="footer-link">DMCA</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="footer-links">
              <li><Link href="/help" className="footer-link">Help Center</Link></li>
              <li><Link href="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link href="/faq" className="footer-link">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Movie On Demand . All rights reserved. This site does not store any files on its server.
          </p>
        </div>
      </div>
    </footer>
  )
}