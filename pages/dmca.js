// import Head from 'next/head'
// import Header from '../components/Header'
// import Link from 'next/link'
// import Footer from '../components/Footer'


// export default function DMCAPage() {
//   return (
//     <>
//       <Head>
//         <title>DMCA Policy - Movie On Demand</title>
//         <meta name="description" content="Digital Millennium Copyright Act Compliance Policy for Movie On Demand" />
//         <meta name="keywords" content="dmca, copyright, policy, movie on demand" />
//       </Head>
      
//       <Header />
//       <main className="min-h-screen bg-black text-white pt-20 py-8">
//         <div className="container mx-auto px-4 max-w-4xl">
//           <div className="bg-gray-900 rounded-lg shadow-lg p-6 md:p-8">
//             {/* Header */}
//             <div className="text-center mb-8">
//               <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
//                 DMCA Policy
//               </h1>
//               <p className="text-gray-400 text-lg">
//                 Digital Millennium Copyright Act Compliance
//               </p>
//             </div>

//             {/* Introduction */}
//             <div className="mb-8">
//               <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
//               <p className="text-gray-300 mb-4">
//                 Movie On Demand ("we," "our," or "us") respects the intellectual property rights of others 
//                 and expects our users to do the same. We comply with the Digital Millennium Copyright Act ("DMCA") 
//                 and other applicable copyright laws.
//               </p>
//               <p className="text-gray-300">
//                 This policy outlines the procedures for submitting copyright infringement notifications 
//                 and how we respond to such claims.
//               </p>
//             </div>

//             {/* Reporting Copyright Infringement */}
//             <div className="mb-8">
//               <h2 className="text-2xl font-semibold text-white mb-4">
//                 Reporting Copyright Infringement
//               </h2>
//               <p className="text-gray-300 mb-4">
//                 If you believe that your copyrighted work has been copied in a way that constitutes 
//                 copyright infringement and is accessible through our service, you may notify our 
//                 designated copyright agent as set forth in the DMCA.
//               </p>
              
//               <div className="bg-gray-800 p-6 rounded-lg mb-4">
//                 <h3 className="text-xl font-semibold text-red-500 mb-3">
//                   To file a valid DMCA notice, your notification must include:
//                 </h3>
//                 <ol className="list-decimal list-inside space-y-2 text-gray-300">
//                   <li className="ml-4">
//                     <strong>Physical or electronic signature</strong> of a person authorized to act on behalf of the copyright owner
//                   </li>
//                   <li className="ml-4">
//                     <strong>Identification</strong> of the copyrighted work claimed to have been infringed
//                   </li>
//                   <li className="ml-4">
//                     <strong>Identification</strong> of the infringing material and information reasonably sufficient 
//                     to permit us to locate the material (please provide specific URLs)
//                   </li>
//                   <li className="ml-4">
//                     <strong>Contact information</strong> including your address, telephone number, and email address
//                   </li>
//                   <li className="ml-4">
//                     A statement that you have a <strong>good faith belief</strong> that use of the material 
//                     in the manner complained of is not authorized by the copyright owner, its agent, or the law
//                   </li>
//                   <li className="ml-4">
//                     A statement that the information in the notification is <strong>accurate</strong>, and under penalty of perjury, 
//                     that you are authorized to act on behalf of the copyright owner
//                   </li>
//                 </ol>
//               </div>
//             </div>

//             {/* Designated Copyright Agent */}
//             <div className="mb-8">
//               <h2 className="text-2xl font-semibold text-white mb-4">
//                 Designated Copyright Agent
//               </h2>
//               <div className="bg-gray-800 p-6 rounded-lg">
//                 <p className="text-gray-300 mb-4">
//                   Please send all DMCA notices to our designated copyright agent:
//                 </p>
//                 <div className="space-y-2 text-gray-300">
//                   <p><strong>Email:</strong> dmca@movieandtvshowat.netlify.app</p>
//                   <p><strong>Subject:</strong> DMCA Takedown Request</p>
//                   <p className="text-sm text-gray-400 mt-4">
//                     Note: Only copyright infringement notices should be sent to this email address. 
//                     Other inquiries may not receive a response.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Counter-Notification */}
//             <div className="mb-8">
//               <h2 className="text-2xl font-semibold text-white mb-4">
//                 Counter-Notification
//               </h2>
//               <p className="text-gray-300 mb-4">
//                 If you believe that your content was removed in error, you may submit a counter-notification.
//               </p>
              
//               <div className="bg-gray-800 p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold text-red-500 mb-3">
//                   A valid counter-notification must include:
//                 </h3>
//                 <ol className="list-decimal list-inside space-y-2 text-gray-300">
//                   <li className="ml-4">Your physical or electronic signature</li>
//                   <li className="ml-4">Identification of the material that was removed and its location before removal</li>
//                   <li className="ml-4">
//                     A statement under penalty of perjury that you have a good faith belief 
//                     the material was removed by mistake or misidentification
//                   </li>
//                   <li className="ml-4">
//                     Your name, address, telephone number, and a statement consenting to the jurisdiction 
//                     of your local Federal District Court, or if outside the US, to the jurisdiction of 
//                     any judicial district in which the service provider may be found
//                   </li>
//                 </ol>
//               </div>
//             </div>

//             {/* Repeat Infringers */}
//             <div className="mb-8">
//               <h2 className="text-2xl font-semibold text-white mb-4">
//                 Repeat Infringers
//               </h2>
//               <p className="text-gray-300">
//                 In accordance with the DMCA and other applicable laws, we have adopted a policy of terminating, 
//                 in appropriate circumstances and at our sole discretion, users who are deemed to be repeat infringers. 
//                 We may also, at our sole discretion, limit access to the service and/or terminate the accounts of 
//                 any users who infringe any intellectual property rights of others, whether or not there is any repeat infringement.
//               </p>
//             </div>

//             {/* Disclaimer */}
//             <div className="mb-8">
//               <h2 className="text-2xl font-semibold text-white mb-4">
//                 Disclaimer
//               </h2>
//               <p className="text-gray-300 mb-4">
//                 This DMCA policy is provided for informational purposes only and does not constitute legal advice. 
//                 If you are unsure whether material infringes your copyright, you should contact an attorney.
//               </p>
//               <p className="text-gray-300">
//                 We reserve the right to modify this DMCA policy at any time. Changes will be effective immediately 
//                 upon posting to the website.
//               </p>
//             </div>

//             {/* Last Updated */}
//             <div className="text-center border-t border-gray-700 pt-6">
//               <p className="text-gray-400 text-sm">
//                 Last updated: {new Date().toLocaleDateString('en-US', { 
//                   year: 'numeric', 
//                   month: 'long', 
//                   day: 'numeric' 
//                 })}
//               </p>
//             </div>
//           </div>

//           {/* Additional Information */}
//           <div className="mt-8 text-center">
//             <div className="bg-gray-900 rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-white mb-4">
//                 Need More Information?
//               </h3>
//               <p className="text-gray-300 mb-4">
//                 For more information about the DMCA, please visit the 
//                 <a 
//                   href="https://www.copyright.gov/dmca/" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-red-500 hover:text-red-400 ml-1"
//                 >
//                   official U.S. Copyright Office website
//                 </a>.
//               </p>
//               <p className="text-gray-400 text-sm">
//                 This page is designed to help copyright owners and users understand our DMCA compliance procedures.
//               </p>
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
import Link from 'next/link'
import Footer from '../components/Footer'

export default function DMCAPage({ lastUpdated }) {
  const canonicalUrl = 'https://movieondemand.vercel.app/dmca'
  const siteName = 'Movie On Demand'

  // LegalPage Structured Data
  const legalPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "DMCA Policy - Movie On Demand",
    "description": "Digital Millennium Copyright Act Compliance Policy for Movie On Demand. Copyright infringement reporting and takedown procedures.",
    "url": canonicalUrl,
    "provider": {
      "@type": "Organization",
      "name": siteName,
      "url": "https://movieondemand.vercel.app"
    },
    "areaServed": "Worldwide",
    "serviceType": "DMCA Compliance"
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
        "name": "DMCA Policy",
        "item": canonicalUrl
      }
    ]
  }

  // ContactPoint Structured Data
  const contactPointStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "contactType": "DMCA copyright agent",
    "email": "dmca@movieandtvshowat.netlify.app",
    "availableLanguage": "English",
    "areaServed": "Worldwide"
  }

  return (
    <>
      <Head>
        <title>DMCA Policy - Movie On Demand | Copyright Compliance & Takedown Requests</title>
        <meta name="description" content="Digital Millennium Copyright Act Compliance Policy for Movie On Demand. Learn how to submit copyright infringement notices and counter-notifications." />
        <meta name="keywords" content="dmca, copyright policy, copyright infringement, takedown request, digital millennium copyright act, movie on demand dmca, copyright compliance" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content="DMCA Policy - Movie On Demand | Copyright Compliance & Takedown Requests" />
        <meta property="og:description" content="Digital Millennium Copyright Act Compliance Policy for Movie On Demand. Learn how to submit copyright infringement notices and counter-notifications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://movieondemand.vercel.app/og-dmca.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="DMCA Policy - Movie On Demand" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DMCA Policy - Movie On Demand | Copyright Compliance & Takedown Requests" />
        <meta name="twitter:description" content="Digital Millennium Copyright Act Compliance Policy for Movie On Demand. Learn how to submit copyright infringement notices and counter-notifications." />
        <meta name="twitter:image" content="https://movieondemand.vercel.app/og-dmca.jpg" />
        <meta name="twitter:image:alt" content="DMCA Policy - Movie On Demand" />
        
        {/* Additional Meta Tags for SEO */}
        <meta name="author" content="Movie On Demand" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(legalPageStructuredData)
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(contactPointStructuredData)
          }}
        />
      </Head>
      
      <Header />
      <main className="min-h-screen bg-black text-white pt-20 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-300">DMCA Policy</li>
            </ol>
          </nav>

          <div className="bg-gray-900 rounded-lg shadow-lg p-6 md:p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                DMCA Policy
              </h1>
              <p className="text-gray-400 text-lg">
                Digital Millennium Copyright Act Compliance
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 mb-4">
                Movie On Demand ("we," "our," or "us") respects the intellectual property rights of others 
                and expects our users to do the same. We comply with the Digital Millennium Copyright Act ("DMCA") 
                and other applicable copyright laws.
              </p>
              <p className="text-gray-300">
                This policy outlines the procedures for submitting copyright infringement notifications 
                and how we respond to such claims.
              </p>
            </div>

            {/* Reporting Copyright Infringement */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Reporting Copyright Infringement
              </h2>
              <p className="text-gray-300 mb-4">
                If you believe that your copyrighted work has been copied in a way that constitutes 
                copyright infringement and is accessible through our service, you may notify our 
                designated copyright agent as set forth in the DMCA.
              </p>
              
              <div className="bg-gray-800 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-red-500 mb-3">
                  To file a valid DMCA notice, your notification must include:
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li className="ml-4">
                    <strong>Physical or electronic signature</strong> of a person authorized to act on behalf of the copyright owner
                  </li>
                  <li className="ml-4">
                    <strong>Identification</strong> of the copyrighted work claimed to have been infringed
                  </li>
                  <li className="ml-4">
                    <strong>Identification</strong> of the infringing material and information reasonably sufficient 
                    to permit us to locate the material (please provide specific URLs)
                  </li>
                  <li className="ml-4">
                    <strong>Contact information</strong> including your address, telephone number, and email address
                  </li>
                  <li className="ml-4">
                    A statement that you have a <strong>good faith belief</strong> that use of the material 
                    in the manner complained of is not authorized by the copyright owner, its agent, or the law
                  </li>
                  <li className="ml-4">
                    A statement that the information in the notification is <strong>accurate</strong>, and under penalty of perjury, 
                    that you are authorized to act on behalf of the copyright owner
                  </li>
                </ol>
              </div>
            </div>

            {/* Designated Copyright Agent */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Designated Copyright Agent
              </h2>
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="text-gray-300 mb-4">
                  Please send all DMCA notices to our designated copyright agent:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Email:</strong> dmca@movieandtvshowat.netlify.app</p>
                  <p><strong>Subject:</strong> DMCA Takedown Request</p>
                  <p className="text-sm text-gray-400 mt-4">
                    Note: Only copyright infringement notices should be sent to this email address. 
                    Other inquiries may not receive a response.
                  </p>
                </div>
              </div>
            </div>

            {/* Counter-Notification */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Counter-Notification
              </h2>
              <p className="text-gray-300 mb-4">
                If you believe that your content was removed in error, you may submit a counter-notification.
              </p>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-500 mb-3">
                  A valid counter-notification must include:
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li className="ml-4">Your physical or electronic signature</li>
                  <li className="ml-4">Identification of the material that was removed and its location before removal</li>
                  <li className="ml-4">
                    A statement under penalty of perjury that you have a good faith belief 
                    the material was removed by mistake or misidentification
                  </li>
                  <li className="ml-4">
                    Your name, address, telephone number, and a statement consenting to the jurisdiction 
                    of your local Federal District Court, or if outside the US, to the jurisdiction of 
                    any judicial district in which the service provider may be found
                  </li>
                </ol>
              </div>
            </div>

            {/* Repeat Infringers */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Repeat Infringers
              </h2>
              <p className="text-gray-300">
                In accordance with the DMCA and other applicable laws, we have adopted a policy of terminating, 
                in appropriate circumstances and at our sole discretion, users who are deemed to be repeat infringers. 
                We may also, at our sole discretion, limit access to the service and/or terminate the accounts of 
                any users who infringe any intellectual property rights of others, whether or not there is any repeat infringement.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Disclaimer
              </h2>
              <p className="text-gray-300 mb-4">
                This DMCA policy is provided for informational purposes only and does not constitute legal advice. 
                If you are unsure whether material infringes your copyright, you should contact an attorney.
              </p>
              <p className="text-gray-300">
                We reserve the right to modify this DMCA policy at any time. Changes will be effective immediately 
                upon posting to the website.
              </p>
            </div>

            {/* Last Updated */}
            <div className="text-center border-t border-gray-700 pt-6">
              <p className="text-gray-400 text-sm">
                Last updated: {new Date(lastUpdated).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 text-center">
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Need More Information?
              </h3>
              <p className="text-gray-300 mb-4">
                For more information about the DMCA, please visit the 
                <a 
                  href="https://www.copyright.gov/dmca/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 ml-1"
                >
                  official U.S. Copyright Office website
                </a>.
              </p>
              <p className="text-gray-400 text-sm">
                This page is designed to help copyright owners and users understand our DMCA compliance procedures.
              </p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <Link href="/privacy" className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg text-center transition-colors">
              <h4 className="font-semibold text-white mb-2">Privacy Policy</h4>
              <p className="text-gray-400 text-sm">Learn about our data protection practices</p>
            </Link>
            <Link href="/terms" className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg text-center transition-colors">
              <h4 className="font-semibold text-white mb-2">Terms of Service</h4>
              <p className="text-gray-400 text-sm">Read our terms and conditions</p>
            </Link>
            <Link href="/contact" className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg text-center transition-colors">
              <h4 className="font-semibold text-white mb-2">Contact Us</h4>
              <p className="text-gray-400 text-sm">Get in touch with our team</p>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

// SSG Implementation
export async function getStaticProps() {
  // This function runs at build time on the server
  // Data is generated during build and passed as props to the component
  
  const lastUpdated = new Date().toISOString()

  return {
    props: {
      lastUpdated
    },
    // Enable Incremental Static Regeneration (ISR)
    // Page will be regenerated every 24 hours if there are requests
    revalidate: 86400 // 24 hours in seconds
  }
}