// import Head from 'next/head'
// import Header from '../components/Header'
// import Footer from '../components/Footer'


// export default function PrivacyPage() {
//   return (
//     <>
//       <Head>
//         <title>Privacy Policy - Movie On Demand</title>
//         <meta name="description" content="Movie On Demand privacy policy and data protection information." />
//         <meta name="keywords" content="privacy policy, data protection, movie on demand" />
//       </Head>
      
//       <Header />
//       <main className="pt-20 min-h-screen bg-black text-white">
//         <div className="container mx-auto px-4 py-8 max-w-4xl">
//           <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
//           <div className="space-y-6 text-gray-300">
//             <p className="text-lg">Last updated: {new Date().getFullYear()}</p>

//             <div className="bg-gray-900 p-6 rounded-lg">
//               <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
//               <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.</p>
//             </div>

//             <div className="bg-gray-900 p-6 rounded-lg">
//               <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
//               <p>We use the information we collect to provide, maintain, and improve our services, to develop new services, and to protect our company and our users.</p>
//             </div>

//             <div className="bg-gray-900 p-6 rounded-lg">
//               <h2 className="text-2xl font-semibold mb-4 text-white">Sharing of Information</h2>
//               <p>We do not share your personal information with third parties except as described in this policy.</p>
//             </div>

//             <div className="bg-gray-900 p-6 rounded-lg">
//               <h2 className="text-2xl font-semibold mb-4 text-white">Security</h2>
//               <p>We take reasonable measures to help protect personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
//             </div>

//             <div className="bg-gray-900 p-6 rounded-lg">
//               <h2 className="text-2xl font-semibold mb-4 text-white">Changes to This Policy</h2>
//               <p>We may change this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.</p>
//             </div>

//             <div className="bg-gray-900 p-6 rounded-lg">
//               <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
//               <p>If you have any questions about this Privacy Policy, please contact us at: privacy@movieondemand.com</p>
//             </div>
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
import Link from 'next/link'

export default function PrivacyPage() {
  const canonicalUrl = 'https://movieondemand.vercel.app/privacy'
  const siteName = 'Movie On Demand'
  const currentYear = new Date().getFullYear()

  // Privacy Policy Structured Data
  const privacyPolicyStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Movie On Demand",
    "description": "Movie On Demand privacy policy detailing data collection, usage, security measures, and user rights for our streaming service.",
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
        "name": "Privacy Policy",
        "item": canonicalUrl
      }
    ]
  }

  return (
    <>
      <Head>
        <title>Privacy Policy - Movie On Demand | Data Protection & Privacy</title>
        <meta name="description" content="Movie On Demand privacy policy. Learn about our data collection, usage, security measures, cookies, and user rights for our free movie streaming service." />
        <meta name="keywords" content="privacy policy, data protection, movie streaming privacy, data collection, cookies policy, user rights, GDPR, CCPA, privacy compliance" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy - Movie On Demand | Data Protection & Privacy" />
        <meta property="og:description" content="Movie On Demand privacy policy. Learn about our data collection, usage, security measures, cookies, and user rights for our free movie streaming service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://movieondemand.vercel.app/og-privacy.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Privacy Policy - Movie On Demand" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - Movie On Demand | Data Protection & Privacy" />
        <meta name="twitter:description" content="Movie On Demand privacy policy. Learn about our data collection, usage, security measures, cookies, and user rights for our free movie streaming service." />
        <meta name="twitter:image" content="https://movieondemand.vercel.app/og-privacy.jpg" />
        <meta name="twitter:image:alt" content="Privacy Policy - Movie On Demand" />
        
        {/* Additional Meta Tags for SEO */}
        <meta name="author" content="Movie On Demand" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(privacyPolicyStructuredData)
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
              <li className="text-gray-300">Privacy Policy</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="mb-8 p-6 bg-gray-900 rounded-lg">
            <p className="text-lg text-gray-300">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-gray-400 mt-2">
              This Privacy Policy describes how Movie On Demand collects, uses, and protects your information when you use our streaming service.
            </p>
          </div>

          <div className="space-y-8 text-gray-300">
            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-white">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Email address (if provided for notifications)</li>
                  <li>Telegram username (if you contact us via Telegram)</li>
                  <li>IP address and browser information for analytics</li>
                </ul>
                
                <h3 className="text-xl font-medium text-white mt-4">Usage Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Movies watched and search queries</li>
                  <li>Device type and browser information</li>
                  <li>Viewing preferences and watch history</li>
                </ul>
              </div>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and improve our streaming services</li>
                <li>Personalize your movie recommendations</li>
                <li>Respond to your requests and provide customer support</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Send important service updates (if subscribed)</li>
                <li>Prevent fraud and ensure platform security</li>
              </ul>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Data Sharing and Disclosure</h2>
              <div className="space-y-4">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> With trusted third parties who assist in operating our website</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger or acquisition</li>
                </ul>
              </div>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Cookies and Tracking Technologies</h2>
              <div className="space-y-3">
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze site traffic and usage patterns</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Improve overall user experience</li>
                </ul>
                <p className="mt-3">You can control cookie settings through your browser preferences.</p>
              </div>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>SSL encryption for data transmission</li>
                <li>Regular security assessments and monitoring</li>
                <li>Limited access to personal information</li>
                <li>Secure server infrastructure</li>
              </ul>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Your Rights and Choices</h2>
              <div className="space-y-3">
                <p>Depending on your location, you may have the following rights:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Opt-out:</strong> Opt-out of marketing communications</li>
                  <li><strong>Data Portability:</strong> Request transfer of your data</li>
                </ul>
                <p className="mt-3">To exercise these rights, please contact us using the information below.</p>
              </div>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Third-Party Links and Services</h2>
              <p>Our service may contain links to third-party websites or services. This Privacy Policy does not apply to those third-party sites. We recommend reviewing their privacy policies before providing any personal information.</p>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">8. International Data Transfers</h2>
              <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.</p>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Children's Privacy</h2>
              <p>Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.</p>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.</p>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">11. Contact Us</h2>
              <div className="space-y-3">
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <ul className="space-y-2">
                  <li><strong>Email:</strong> privacy@movieondemand.com</li>
                  <li><strong>Telegram:</strong> <a href="https://t.me/onlyondemand" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">@onlyondemand</a></li>
                  <li><strong>Website:</strong> <Link href="/contact" className="text-blue-400 hover:text-blue-300">Contact Form</Link></li>
                </ul>
                <p className="mt-3">We typically respond to privacy-related inquiries within 24-48 hours.</p>
              </div>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">12. Governing Law</h2>
              <p>This Privacy Policy is governed by and construed in accordance with the laws of the jurisdiction in which Movie On Demand operates, without regard to its conflict of law principles.</p>
            </section>
          </div>

          {/* Quick Links */}
          <div className="mt-12 p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Related Policies</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/terms" className="text-blue-400 hover:text-blue-300">
                Terms of Service
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
      // No specific props needed for privacy page
    },
    revalidate: 86400, // Revalidate every 24 hours - Incremental Static Regeneration (ISR)
  }
}