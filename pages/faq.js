// import { useState } from 'react'
// import Head from 'next/head'
// import Header from '../components/Header'
// import Link from 'next/link'
// import Footer from '../components/Footer'

// export default function FAQPage() {
//   const [openItems, setOpenItems] = useState([])

//   const toggleItem = (index) => {
//     setOpenItems(prev =>
//       prev.includes(index)
//         ? prev.filter(item => item !== index)
//         : [...prev, index]
//     )
//   }

//   const faqItems = [
//     {
//       question: "Is Movie On Demand completely free?",
//       answer: "Yes, Movie On Demand is completely free to use. We don't require any subscriptions or payments."
//     },
//     {
//       question: "Do I need to create an account to watch movies?",
//       answer: "No, you don't need to create an account. All movies are available for instant streaming without registration."
//     },
//     {
//       question: "Why is the video buffering or not playing?",
//       answer: "Buffering can be caused by slow internet connection. Try refreshing the page, lowering video quality, or check your internet speed. If problems persist, contact us on Telegram."
//     },
//     {
//       question: "What video qualities are available?",
//       answer: "We offer multiple quality options including 480p, 720p, and 1080p. The available quality depends on your internet speed and the specific movie."
//     },
//     {
//       question: "Are subtitles available?",
//       answer: "Subtitles are available for most movies. You can enable them in the video player controls if they are available for that particular movie."
//     },
//     {
//       question: "Can I download movies to watch offline?",
//       answer: "No, we currently only support streaming. Movies cannot be downloaded for offline viewing."
//     },
//     {
//       question: "Is Movie On Demand available on mobile devices?",
//       answer: "Yes, Movie On Demand works on all devices including smartphones, tablets, and computers through your web browser."
//     },
//     {
//       question: "How often is new content added?",
//       answer: "We regularly update our library with new movies and content. Check back frequently for the latest additions."
//     },
//     {
//       question: "Why am I seeing ads?",
//       answer: "We show minimal ads to support the free service. These ads help us maintain the platform and continue providing free content."
//     },
//     {
//       question: "How can I report a problem with a movie?",
//       answer: "If you encounter any issues with a movie (broken link, wrong content, etc.), please contact us directly on Telegram and we'll fix it as soon as possible."
//     }
//   ]

//   return (
//     <>
//       <Head>
//         <title>FAQ - Movie On Demand</title>
//         <meta name="description" content="Frequently asked questions about Movie On Demand. Get answers about streaming, video quality, accounts, and more." />
//         <meta name="keywords" content="movie on demand faq, streaming questions, movie help, support" />
//       </Head>
      
//       <Header />
//       <main className="min-h-screen bg-black text-white pt-20">
//         <div className="container mx-auto px-4 py-12">
//           {/* Breadcrumb */}
//           <nav className="mb-8">
//             <ol className="flex items-center space-x-2 text-sm">
//               <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
//               <li className="text-gray-500">/</li>
//               <li className="text-gray-300">FAQ</li>
//             </ol>
//           </nav>

//           {/* Header */}
//           <div className="text-center mb-12">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               Find quick answers to common questions about Movie On Demand
//             </p>
//           </div>

//           {/* FAQ Items */}
//           <div className="max-w-4xl mx-auto">
//             <div className="bg-gray-900 rounded-lg overflow-hidden mb-8">
//               {faqItems.map((item, index) => (
//                 <div key={index} className="border-b border-gray-700 last:border-b-0">
//                   <button
//                     onClick={() => toggleItem(index)}
//                     className="w-full px-6 py-4 text-left hover:bg-gray-800 transition-colors"
//                   >
//                     <div className="flex justify-between items-center">
//                       <h3 className="text-lg font-semibold pr-4">{item.question}</h3>
//                       <svg
//                         className={`w-5 h-5 transform transition-transform ${
//                           openItems.includes(index) ? 'rotate-180' : ''
//                         }`}
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </div>
//                   </button>
//                   {openItems.includes(index) && (
//                     <div className="px-6 pb-4">
//                       <p className="text-gray-300">{item.answer}</p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Contact CTA */}
//             <div className="bg-gray-900 rounded-lg p-8 text-center">
//               <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
//               <p className="text-gray-300 mb-6">
//                 Can't find the answer you're looking for? Our support team is here to help you 24/7.
//               </p>
//               <Link 
//                 href="/contact"
//                 className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
//               >
//                 Contact Support
//               </Link>
//             </div>
//           </div>
//         </div>
//           <Footer />
//       </main>
//     </>
//   )
// }









import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function FAQPage() {
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (index) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const faqItems = [
    {
      question: "Is Movie On Demand completely free?",
      answer: "Yes, Movie On Demand is completely free to use. We don't require any subscriptions or payments."
    },
    {
      question: "Do I need to create an account to watch movies?",
      answer: "No, you don't need to create an account. All movies are available for instant streaming without registration."
    },
    {
      question: "Why is the video buffering or not playing?",
      answer: "Buffering can be caused by slow internet connection. Try refreshing the page, lowering video quality, or check your internet speed. If problems persist, contact us on Telegram."
    },
    {
      question: "What video qualities are available?",
      answer: "We offer multiple quality options including 480p, 720p, and 1080p. The available quality depends on your internet speed and the specific movie."
    },
    {
      question: "Are subtitles available?",
      answer: "Subtitles are available for most movies. You can enable them in the video player controls if they are available for that particular movie."
    },
    {
      question: "Can I download movies to watch offline?",
      answer: "No, we currently only support streaming. Movies cannot be downloaded for offline viewing."
    },
    {
      question: "Is Movie On Demand available on mobile devices?",
      answer: "Yes, Movie On Demand works on all devices including smartphones, tablets, and computers through your web browser."
    },
    {
      question: "How often is new content added?",
      answer: "We regularly update our library with new movies and content. Check back frequently for the latest additions."
    },
    {
      question: "Why am I seeing ads?",
      answer: "We show minimal ads to support the free service. These ads help us maintain the platform and continue providing free content."
    },
    {
      question: "How can I report a problem with a movie?",
      answer: "If you encounter any issues with a movie (broken link, wrong content, etc.), please contact us directly on Telegram and we'll fix it as soon as possible."
    }
  ]

  const canonicalUrl = 'https://movieondemand.vercel.app/faq'
  const siteName = 'Movie On Demand'

  // FAQ Structured Data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item, index) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
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
        "name": "FAQ",
        "item": canonicalUrl
      }
    ]
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

  return (
    <>
      <Head>
        <title>FAQ - Frequently Asked Questions | Movie On Demand</title>
        <meta name="description" content="Frequently asked questions about Movie On Demand. Get answers about streaming, video quality, accounts, technical issues and more." />
        <meta name="keywords" content="movie on demand faq, streaming questions, movie help, support, technical issues, video quality, free streaming" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content="FAQ - Frequently Asked Questions | Movie On Demand" />
        <meta property="og:description" content="Frequently asked questions about Movie On Demand. Get answers about streaming, video quality, accounts, technical issues and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://movieondemand.vercel.app/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="FAQ - Movie On Demand" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ - Frequently Asked Questions | Movie On Demand" />
        <meta name="twitter:description" content="Frequently asked questions about Movie On Demand. Get answers about streaming, video quality, accounts, technical issues and more." />
        <meta name="twitter:image" content="https://movieondemand.vercel.app/og-image.jpg" />
        <meta name="twitter:image:alt" content="FAQ - Movie On Demand" />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Movie On Demand" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData)
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
            __html: JSON.stringify(organizationStructuredData)
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
              <li className="text-gray-300">FAQ</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find quick answers to common questions about Movie On Demand
            </p>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-lg overflow-hidden mb-8">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-700 last:border-b-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold pr-4">{item.question}</h3>
                      <svg
                        className={`w-5 h-5 transform transition-transform ${
                          openItems.includes(index) ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-red-500 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support Available</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-red-500 mb-2">{faqItems.length}+</div>
                <div className="text-gray-300 text-sm">Questions Answered</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-red-500 mb-2">5-15 min</div>
                <div className="text-gray-300 text-sm">Average Response Time</div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
              <p className="text-gray-300 mb-6">
                Can't find the answer you're looking for? Our support team is here to help you 24/7 via Telegram.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Contact Support
                </Link>
                <a
                  href="https://t.me/onlyondemand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.78 5.42-.9 6.8-.06.67-.36.89-.89.56-2.45-1.83-3.57-2.98-5.79-4.78-.54-.45-.92-.68-.9-1.07.03-.37.46-.54.9-.39 1.55.67 4.18 2.06 4.9 2.45.54.3 1.06.14 1.22-.51.34-1.39 1.06-4.73 1.46-6.27.08-.38.22-.54.55-.54.33 0 .89.16.87.62-.02.45-.23 2.07-.45 3.63z"/>
                  </svg>
                  Telegram Support
                </a>
              </div>
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
      // No specific props needed for FAQ page
    },
    revalidate: 3600, // Revalidate every hour - Incremental Static Regeneration (ISR)
  }
}