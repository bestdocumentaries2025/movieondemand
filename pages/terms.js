// // app/terms/page.js
// import Header from '../components/Header'
// import Footer from '../components/Footer'

// export const metadata = {
//   title: 'Terms of Service - Movie On Demand',
//   description: 'Movie On Demand terms of service and user agreement.',
// }

// export default function TermsPage() {
//   return (
//     <>
//       <Header />
//       <main className="pt-20 min-h-screen bg-netflix-black">
//         <div className="container mx-auto px-4 py-8 max-w-4xl">
//           <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
//           <div className="prose prose-invert max-w-none">
//             <p>Last updated: {new Date().getFullYear()}</p>

//             <h2>1. Acceptance of Terms</h2>
//             <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

//             <h2>2. Use License</h2>
//             <p>Permission is granted to temporarily view the materials on this website for personal, non-commercial transitory viewing only.</p>

//             <h2>3. Disclaimer</h2>
//             <p>The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

//             <h2>4. Limitations</h2>
//             <p>In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.</p>

//             <h2>5. Revisions and Errata</h2>
//             <p>The materials appearing on this website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current.</p>

//             <h2>6. Links</h2>
//             <p>We have not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.</p>

//             <h2>7. Modifications</h2>
//             <p>We may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>

//             <h2>8. Governing Law</h2>
//             <p>Any claim relating to this website shall be governed by the laws of the State of California without regard to its conflict of law provisions.</p>
//           </div>
//         </div>
//            <Footer />
//       </main>
//     </>
//   )
// }

















































import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Link from 'next/link'

export default function TermsPage() {
  const canonicalUrl = 'https://movieondemand.vercel.app/terms'
  const siteName = 'Movie On Demand'
  const currentYear = new Date().getFullYear()

  // Terms of Service Structured Data
  const termsStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - Movie On Demand",
    "description": "Movie On Demand terms of service and user agreement. Learn about your rights, responsibilities, and our service policies.",
    "url": canonicalUrl,
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "url": "https://movieondemand.vercel.app"
    }
  }

  // Organization Structured Data
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": "https://movieondemand.vercel.app",
    "logo": "https://movieondemand.vercel.app/logo.png",
    "description": "Movie On Demand Service - Request any movie via Telegram"
  }

  // Breadcrumb Structured Data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://movieondemand.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Terms of Service",
        "item": canonicalUrl
      }
    ]
  }

  return (
    <>
      <Head>
        <title>Terms of Service - Movie On Demand | User Agreement & Policies</title>
        <meta name="description" content="Movie On Demand terms of service and user agreement. Learn about acceptable use, content policies, user responsibilities, and service terms for our streaming platform." />
        <meta name="keywords" content="terms of service, user agreement, movie streaming terms, acceptable use policy, content policies, legal terms, service agreement" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Terms of Service - Movie On Demand | User Agreement & Policies" />
        <meta property="og:description" content="Movie On Demand terms of service and user agreement. Learn about acceptable use, content policies, user responsibilities, and service terms for our streaming platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://movieondemand.vercel.app/og-terms.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Terms of Service - Movie On Demand" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service - Movie On Demand | User Agreement & Policies" />
        <meta name="twitter:description" content="Movie On Demand terms of service and user agreement. Learn about acceptable use, content policies, user responsibilities, and service terms for our streaming platform." />
        <meta name="twitter:image" content="https://movieondemand.vercel.app/og-terms.jpg" />
        <meta name="twitter:image:alt" content="Terms of Service - Movie On Demand" />
        
        {/* Additional Meta Tags for SEO */}
        <meta name="author" content="Movie On Demand" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(termsStructuredData)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbStructuredData)
          }}
        />
      </Head>
      
      <Header />
      
      <main className="pt-20 min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-300">Terms of Service</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
          
          <div className="mb-8 p-6 bg-gray-900 rounded-lg">
            <p className="text-lg text-gray-300">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-gray-400 mt-2">
              Please read these Terms of Service carefully before using Movie On Demand. By accessing or using our service, you agree to be bound by these terms.
            </p>
          </div>

          <div className="space-y-8 text-gray-300">
            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
              <p>By accessing and using Movie On Demand ("the Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our Service.</p>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Service Description</h2>
              <p>Movie On Demand provides a streaming platform for movies and entertainment content. We offer both pre-existing content and the ability to request specific movies through our Telegram integration.</p>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">3. User Accounts and Registration</h2>
              <div className="space-y-3">
                <p>While registration is not required to access most content, certain features may require account creation:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You must provide accurate and complete registration information</li>
                  <li>You are responsible for maintaining the confidentiality of your account</li>
                  <li>You must notify us immediately of any unauthorized use of your account</li>
                  <li>We reserve the right to disable user accounts at our discretion</li>
                </ul>
              </div>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Acceptable Use</h2>
              <div className="space-y-4">
                <p>You agree not to use the Service:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>For any unlawful purpose or to solicit others to perform illegal acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, or intimidate others</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other malicious code</li>
                  <li>To collect or track personal information of others</li>
                  <li>For any obscene or immoral purpose</li>
                  <li>To interfere with or circumvent security features of the Service</li>
                </ul>
              </div>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Content Policy</h2>
              <div className="space-y-3">
                <p>Movie On Demand provides access to various types of content:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We strive to ensure all content is properly licensed or available for distribution</li>
                  <li>Users may request specific movies through our Telegram service</li>
                  <li>We aim to fulfill requests within 24 hours when possible</li>
                  <li>Content availability may vary by region and licensing restrictions</li>
                  <li>We reserve the right to remove content at any time without notice</li>
                </ul>
              </div>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Intellectual Property</h2>
              <p>The Service and its original content, features, and functionality are owned by Movie On Demand and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, create derivative works, publicly display, or exploit any content without express written permission.</p>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">7. User-Generated Content</h2>
              <div className="space-y-3">
                <p>Users may submit content through our request system:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You retain all ownership rights to content you submit</li>
                  <li>By submitting content, you grant us a worldwide, non-exclusive license to use and display it</li>
                  <li>You are solely responsible for content you submit</li>
                  <li>We reserve the right to remove any user-generated content at our discretion</li>
                </ul>
              </div>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Disclaimer of Warranties</h2>
              <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Movie On Demand makes no representations or warranties of any kind, express or implied, as to the operation of the Service, or the information, content, materials, or products included. You expressly agree that your use of the Service is at your sole risk.</p>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Limitation of Liability</h2>
              <p>In no event shall Movie On Demand, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Indemnification</h2>
              <p>You agree to defend, indemnify, and hold harmless Movie On Demand and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses, resulting from or arising out of your use and access of the Service, or a breach of these Terms.</p>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">11. Service Modifications</h2>
              <p>We reserve the right to withdraw or amend our Service, and any service or material we provide via the Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Service is unavailable at any time or for any period.</p>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">12. Termination</h2>
              <p>We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">13. Governing Law</h2>
              <p>These Terms shall be governed and construed in accordance with the laws of the jurisdiction where Movie On Demand operates, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">14. Changes to Terms</h2>
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">15. Contact Information</h2>
              <div className="space-y-3">
                <p>If you have any questions about these Terms, please contact us:</p>
                <ul className="space-y-2">
                  <li><strong>Email:</strong> legal@movieondemand.com</li>
                  <li><strong>Telegram:</strong> <a href="https://t.me/onlyondemand" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">@onlyondemand</a></li>
                  <li><strong>Website:</strong> <Link href="/contact" className="text-blue-400 hover:text-blue-300">Contact Form</Link></li>
                </ul>
              </div>
            </section>
          </div>

          {/* Quick Links */}
          <div className="mt-12 p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Related Policies</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300">
                Contact Us
              </Link>
              <Link href="/" className="text-blue-400 hover:text-blue-300">
                Home
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

// SSG Implementation
export async function getStaticProps() {
  return {
    props: {
      // No specific props needed for terms page
    },
    revalidate: 86400, // Revalidate every 24 hours - Incremental Static Regeneration (ISR)
  }
}