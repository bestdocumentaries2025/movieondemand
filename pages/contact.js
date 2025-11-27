// import Head from 'next/head'
// import Header from '../components/Header'
// import Link from 'next/link'
// import Footer from '../components/Footer'

// export default function ContactPage() {
//   return (
//     <>
//       <Head>
//         <title>Contact Us - Movie On Demand</title>
//         <meta name="description" content="Get in touch with Movie On Demand support team via Telegram for any questions or issues." />
//         <meta name="keywords" content="contact Movie On Demand, support, help, telegram support" />
//       </Head>
      
//       <Header />
//       <main className="min-h-screen bg-black text-white pt-20">
//         <div className="container mx-auto px-4 py-12">
//           {/* Breadcrumb */}
//           <nav className="mb-8">
//             <ol className="flex items-center space-x-2 text-sm">
//               <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
//               <li className="text-gray-500">/</li>
//               <li className="text-gray-300">Contact Us</li>
//             </ol>
//           </nav>

//           {/* Header */}
//           <div className="text-center mb-12">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               Need help? Our support team is here for you 24/7 via Telegram
//             </p>
//           </div>

//           {/* Contact Methods */}
//           <div className="max-w-4xl mx-auto">
//             <div className="grid md:grid-cols-2 gap-8 mb-12">
//               {/* Telegram Support */}
//               <div className="bg-gray-900 rounded-lg p-8 text-center">
//                 <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.78 5.42-.9 6.8-.06.67-.36.89-.89.56-2.45-1.83-3.57-2.98-5.79-4.78-.54-.45-.92-.68-.9-1.07.03-.37.46-.54.9-.39 1.55.67 4.18 2.06 4.9 2.45.54.3 1.06.14 1.22-.51.34-1.39 1.06-4.73 1.46-6.27.08-.38.22-.54.55-.54.33 0 .89.16.87.62-.02.45-.23 2.07-.45 3.63z"/>
//                   </svg>
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4">Telegram Support</h3>
//                 <p className="text-gray-300 mb-6">
//                   Get instant help from our support team via Telegram. We're available 24/7 to assist you with any issues,
//                   And For Business Inquiries
//                 </p>
//                 <a
//                   href="https://t.me/onlyondemand"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
//                 >
//                   <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.78 5.42-.9 6.8-.06.67-.36.89-.89.56-2.45-1.83-3.57-2.98-5.79-4.78-.54-.45-.92-.68-.9-1.07.03-.37.46-.54.9-.39 1.55.67 4.18 2.06 4.9 2.45.54.3 1.06.14 1.22-.51.34-1.39 1.06-4.73 1.46-6.27.08-.38.22-.54.55-.54.33 0 .89.16.87.62-.02.45-.23 2.07-.45 3.63z"/>
//                   </svg>
//                   Message Us on Telegram
//                 </a>
//               </div>

//               {/* Quick Help */}
//               <div className="bg-gray-900 rounded-lg p-8">
//                 <h3 className="text-2xl font-bold mb-4">Quick Help</h3>
//                 <div className="space-y-4">
//                   <div>
//                     <h4 className="font-semibold text-white mb-2">Common Issues</h4>
//                     <ul className="text-gray-300 space-y-1 text-sm">
//                       <li>• Video not playing</li>
//                       <li>• Buffering issues</li>
//                       <li>• Quality problems</li>
//                       <li>• Account questions</li>
//                     </ul>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-white mb-2">Response Time</h4>
//                     <p className="text-gray-300 text-sm">
//                       We typically respond within 5-15 minutes during normal hours.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* FAQ Preview */}
//             <div className="bg-gray-900 rounded-lg p-8">
//               <h3 className="text-2xl font-bold mb-4">Before Contacting Us</h3>
//               <p className="text-gray-300 mb-4">
//                 Check our FAQ page for quick answers to common questions:
//               </p>
//               <Link 
//                 href="/faq"
//                 className="inline-flex items-center text-red-500 hover:text-red-400 font-semibold"
//               >
//                 Visit FAQ Page
//                 <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </Link>
//             </div>
//           </div>
//         </div>
//          <Footer />
//       </main>
//     </>
//   )
// }











import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function ContactPage() {
  const canonicalUrl = 'https://movieondemand.vercel.app/contact'
  const siteName = 'Movie On Demand'

  // Structured Data for Contact Page
  const contactPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us - Movie On Demand",
    "description": "Get in touch with Movie On Demand support team via Telegram for any questions or issues.",
    "url": canonicalUrl,
    "mainEntity": {
      "@type": "Organization",
      "name": siteName,
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "English",
        "url": "https://t.me/onlyondemand"
      }
    }
  }

  // Organization Structured Data
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": "https://movieondemand.vercel.app",
    "logo": "https://movieondemand.vercel.app/logo.png",
    "description": "Movie On Demand Service - Request any movie via Telegram",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English",
      "url": "https://t.me/onlyondemand"
    },
    "sameAs": [
      "https://t.me/onlyondemand"
    ]
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
        "name": "Contact Us",
        "item": canonicalUrl
      }
    ]
  }

  return (
    <>
      <Head>
        <title>Contact Us - Movie On Demand | 24/7 Telegram Support</title>
        <meta name="description" content="Get in touch with Movie On Demand support team via Telegram for any questions or issues. 24/7 customer support available." />
        <meta name="keywords" content="contact Movie On Demand, support, help, telegram support, customer service, movie streaming help" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Us - Movie On Demand | 24/7 Telegram Support" />
        <meta property="og:description" content="Get in touch with Movie On Demand support team via Telegram for any questions or issues. 24/7 customer support available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://movieondemand.vercel.app/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Contact Movie On Demand Support" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Movie On Demand | 24/7 Telegram Support" />
        <meta name="twitter:description" content="Get in touch with Movie On Demand support team via Telegram for any questions or issues. 24/7 customer support available." />
        <meta name="twitter:image" content="https://movieondemand.vercel.app/og-image.jpg" />
        <meta name="twitter:image:alt" content="Contact Movie On Demand Support" />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Movie On Demand" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(contactPageStructuredData)
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
      <main className="min-h-screen bg-black text-white pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-300">Contact Us</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Need help? Our support team is here for you 24/7 via Telegram
            </p>
          </div>

          {/* Contact Methods */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Telegram Support */}
              <div className="bg-gray-900 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.78 5.42-.9 6.8-.06.67-.36.89-.89.56-2.45-1.83-3.57-2.98-5.79-4.78-.54-.45-.92-.68-.9-1.07.03-.37.46-.54.9-.39 1.55.67 4.18 2.06 4.9 2.45.54.3 1.06.14 1.22-.51.34-1.39 1.06-4.73 1.46-6.27.08-.38.22-.54.55-.54.33 0 .89.16.87.62-.02.45-.23 2.07-.45 3.63z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Telegram Support</h3>
                <p className="text-gray-300 mb-6">
                  Get instant help from our support team via Telegram. We're available 24/7 to assist you with any issues,
                  And For Business Inquiries
                </p>
                <a
                  href="https://t.me/onlyondemand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.78 5.42-.9 6.8-.06.67-.36.89-.89.56-2.45-1.83-3.57-2.98-5.79-4.78-.54-.45-.92-.68-.9-1.07.03-.37.46-.54.9-.39 1.55.67 4.18 2.06 4.9 2.45.54.3 1.06.14 1.22-.51.34-1.39 1.06-4.73 1.46-6.27.08-.38.22-.54.55-.54.33 0 .89.16.87.62-.02.45-.23 2.07-.45 3.63z"/>
                  </svg>
                  Message Us on Telegram
                </a>
              </div>

              {/* Quick Help */}
              <div className="bg-gray-900 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Quick Help</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Common Issues</h4>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Video not playing</li>
                      <li>• Buffering issues</li>
                      <li>• Quality problems</li>
                      <li>• Account questions</li>
                      <li>• Movie requests</li>
                      <li>• Technical support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Response Time</h4>
                    <p className="text-gray-300 text-sm">
                      We typically respond within 5-15 minutes during normal hours. 24/7 support available.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Business Hours</h4>
                    <p className="text-gray-300 text-sm">
                      24/7 Customer Support<br />
                      Telegram: @onlyondemand
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Support Information */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Support Details */}
              <div className="bg-gray-900 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Support Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">What to Include</h4>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Your username (if applicable)</li>
                      <li>• Detailed description of the issue</li>
                      <li>• Movie title (if related to specific content)</li>
                      <li>• Screenshots (if helpful)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Support Languages</h4>
                    <p className="text-gray-300 text-sm">
                      English, Hindi - We support multiple languages for your convenience.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="bg-gray-900 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Before Contacting Us</h3>
                <p className="text-gray-300 mb-4">
                  Check our FAQ page for quick answers to common questions. Many issues can be resolved instantly without waiting for support.
                </p>
                <Link 
                  href="/faq"
                  className="inline-flex items-center text-red-500 hover:text-red-400 font-semibold"
                >
                  Visit FAQ Page
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-900 bg-opacity-20 border border-red-800 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2 text-white">Urgent Issues</h3>
              <p className="text-gray-300 mb-4">
                For urgent technical issues preventing you from accessing content, please message us directly on Telegram with "URGENT" in your message.
              </p>
              <a
                href="https://t.me/onlyondemand"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.78 5.42-.9 6.8-.06.67-.36.89-.89.56-2.45-1.83-3.57-2.98-5.79-4.78-.54-.45-.92-.68-.9-1.07.03-.37.46-.54.9-.39 1.55.67 4.18 2.06 4.9 2.45.54.3 1.06.14 1.22-.51.34-1.39 1.06-4.73 1.46-6.27.08-.38.22-.54.55-.54.33 0 .89.16.87.62-.02.45-.23 2.07-.45 3.63z"/>
                </svg>
                Contact for Urgent Issues
              </a>
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
      // No specific props needed for contact page
    },
    revalidate: 3600, // Revalidate every hour - Incremental Static Regeneration (ISR)
  }
}