// import Head from 'next/head'
// import Header from '../components/Header'
// import { Send } from 'lucide-react'
// import Footer from '../components/Footer'

// export default function RequestPage() {
//   return (
//     <>
//       <Head>
//         <title>Request a Movie - Movie On Demand</title>
//         <meta name="description" content="Request any movie you want to watch. We'll add it within 24 hours via Telegram." />
//       </Head>
//       <Header />
//       <main className="pt-20 min-h-screen bg-black">
//         <div className="container mx-auto px-4 py-16">
//           <div className="max-w-2xl mx-auto text-center">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
//               Request a Movie
//             </h1>
//             <p className="text-xl text-gray-300 mb-8">
//               Can't find the movie you're looking for? Request it through Telegram and we'll add it within 24 hours!
//             </p>
            
//             <div className="bg-gray-800 p-8 rounded-lg mb-8">
//               <p className="text-lg mb-6 text-white">
//                 <strong>Requested movies will be uploaded within 24 hours.</strong>
//               </p>
              
//               <a
//                 href="https://t.me/onlyondemand"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition text-lg font-semibold"
//               >
//                 <Send className="mr-3" size={24} />
//                 Request via Telegram
//               </a>
//             </div>

//             <div className="text-gray-400">
//               <p className="mb-2">📱 Send your movie request through our Telegram bot</p>
//               <p className="mb-2">⏰ We process requests within 24 hours</p>
//               <p>🎬 New movies added daily to our library</p>
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
import { Send, Clock, CheckCircle, Film } from 'lucide-react'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function RequestPage() {
  const canonicalUrl = 'https://movieondemand.vercel.app/request'
  const siteName = 'Movie On Demand'

  // Structured Data for Request Page
  const requestPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Request Movies - Get Any Movie Added Within 24 Hours",
    "description": "Request any movie you want to watch on Movie On Demand. We add requested movies within 24 hours via Telegram. Free movie requests for Bollywood, Hollywood, Tamil, Telugu movies.",
    "url": canonicalUrl,
    "mainEntity": {
      "@type": "Service",
      "name": "Movie Request Service",
      "description": "24-hour movie request fulfillment service",
      "provider": {
        "@type": "Organization",
        "name": siteName
      },
      "areaServed": "Worldwide",
      "serviceAudience": "Movie enthusiasts",
      "serviceType": "Digital content delivery"
    }
  }

  // HowItWorks Structured Data
  const howItWorksStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Request Movies on Movie On Demand",
    "description": "Step-by-step guide to request any movie and get it added within 24 hours",
    "totalTime": "PT5M",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Telegram app"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Smartphone or Computer"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Click Request via Telegram",
        "text": "Click the Request via Telegram button to open our Telegram bot",
        "url": canonicalUrl
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Send movie details",
        "text": "Send the movie title, release year, and language to our Telegram bot"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Wait for confirmation",
        "text": "Receive confirmation and wait for your movie to be added within 24 hours"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Watch your movie",
        "text": "Once added, you can watch your requested movie for free on our platform"
      }
    ]
  }

  // FAQ Structured Data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take to add a requested movie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We add requested movies within 24 hours. Most movies are available within 12 hours."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a limit to how many movies I can request?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, you can request unlimited movies. We process all requests as quickly as possible."
        }
      },
      {
        "@type": "Question",
        "name": "What information should I include in my request?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Include movie title, release year, language, and any specific quality preferences."
        }
      },
      {
        "@type": "Question",
        "name": "Are movie requests really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all movie requests are completely free. We don't charge for requesting or watching movies."
        }
      }
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
        "name": "Request Movies",
        "item": canonicalUrl
      }
    ]
  }

  return (
    <>
      <Head>
        <title>Request Movies - Get Any Movie Added in 24 Hours | Movie On Demand</title>
        <meta name="description" content="Request any movie you want to watch. We add Bollywood, Hollywood, Tamil, Telugu movies within 24 hours via Telegram. Free movie requests with fast delivery." />
        <meta name="keywords" content="request movies, movie request, add movies, Bollywood movies request, Hollywood movies, Tamil movies, Telugu movies, free movie requests, 24 hour movie delivery" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Request Movies - Get Any Movie Added in 24 Hours | Movie On Demand" />
        <meta property="og:description" content="Request any movie you want to watch. We add Bollywood, Hollywood, Tamil, Telugu movies within 24 hours via Telegram. Free movie requests with fast delivery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://movieondemand.vercel.app/og-request.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Request Movies - Movie On Demand" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Request Movies - Get Any Movie Added in 24 Hours | Movie On Demand" />
        <meta name="twitter:description" content="Request any movie you want to watch. We add Bollywood, Hollywood, Tamil, Telugu movies within 24 hours via Telegram." />
        <meta name="twitter:image" content="https://movieondemand.vercel.app/og-request.jpg" />
        <meta name="twitter:image:alt" content="Request Movies - Movie On Demand" />
        
        {/* Additional Meta Tags for SEO */}
        <meta name="author" content="Movie On Demand" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(requestPageStructuredData)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(howItWorksStructuredData)
          }}
        />
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
      </Head>
      
      <Header />
      <main className="pt-20 min-h-screen bg-black">
        <div className="container mx-auto px-4 py-16">
          {/* Breadcrumb */}
          <nav className="mb-8 max-w-4xl mx-auto">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-300">Request Movies</li>
            </ol>
          </nav>

          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Request Any Movie
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Can't find your favorite movie? Request it through Telegram and we'll add it to our library within <span className="text-red-500 font-bold">24 hours</span>!
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <Clock className="mx-auto mb-3 text-red-500" size={32} />
                <div className="text-2xl font-bold text-white mb-1">24 Hours</div>
                <div className="text-gray-400 text-sm">Delivery Time</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <CheckCircle className="mx-auto mb-3 text-green-500" size={32} />
                <div className="text-2xl font-bold text-white mb-1">100% Free</div>
                <div className="text-gray-400 text-sm">No Charges</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <Film className="mx-auto mb-3 text-blue-500" size={32} />
                <div className="text-2xl font-bold text-white mb-1">Unlimited</div>
                <div className="text-gray-400 text-sm">Requests</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <Send className="mx-auto mb-3 text-purple-500" size={32} />
                <div className="text-2xl font-bold text-white mb-1">Fast</div>
                <div className="text-gray-400 text-sm">Processing</div>
              </div>
            </div>

            {/* Main CTA Section */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl mb-16 text-center border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Ready to Request Your Movie?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Click the button below to open Telegram and send us your movie request. We'll confirm and add it within 24 hours.
              </p>
              
              <a
                href="https://t.me/onlyondemand"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-5 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all text-xl font-bold shadow-2xl hover:scale-105 transform duration-300"
              >
                <Send className="mr-3" size={28} />
                Request via Telegram
              </a>

              <p className="text-gray-400 mt-6 text-sm">
                You'll need Telegram installed on your device
              </p>
            </div>

            {/* How It Works Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-white text-center">How It Works</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">1</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Click Request</h3>
                  <p className="text-gray-300">Click the Request button to open Telegram</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">2</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Send Details</h3>
                  <p className="text-gray-300">Send movie title, year, and language</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">3</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Wait</h3>
                  <p className="text-gray-300">We process and add your movie</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">4</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Watch</h3>
                  <p className="text-gray-300">Enjoy your movie in HD quality</p>
                </div>
              </div>
            </div>

            {/* Supported Languages */}
            <div className="bg-gray-800 p-8 rounded-2xl mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white text-center">Supported Languages</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <div className="text-white font-semibold">Hindi</div>
                  <div className="text-gray-400 text-sm">Bollywood Movies</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <div className="text-white font-semibold">English</div>
                  <div className="text-gray-400 text-sm">Hollywood Movies</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <div className="text-white font-semibold">Tamil</div>
                  <div className="text-gray-400 text-sm">Kollywood Movies</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <div className="text-white font-semibold">Telugu</div>
                  <div className="text-gray-400 text-sm">Tollywood Movies</div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-white text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white">How long does it take to add a requested movie?</h3>
                  <p className="text-gray-300">We add requested movies within 24 hours. Most movies are available within 12 hours.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white">Is there a limit to how many movies I can request?</h3>
                  <p className="text-gray-300">No, you can request unlimited movies. We process all requests as quickly as possible.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white">What information should I include in my request?</h3>
                  <p className="text-gray-300">Include movie title, release year, language, and any specific quality preferences.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white">Are movie requests really free?</h3>
                  <p className="text-gray-300">Yes, all movie requests are completely free. We don't charge for requesting or watching movies.</p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">What Movie Do You Want to Watch?</h2>
              <p className="text-xl text-gray-300 mb-8">Request it now and watch it tomorrow!</p>
              <a
                href="https://t.me/onlyondemand"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-600 text-white px-12 py-4 rounded-lg hover:bg-red-700 transition text-lg font-semibold"
              >
                <Send className="mr-3" size={24} />
                Request Your Movie Now
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
      // No specific props needed for request page
    },
    revalidate: 3600, // Revalidate every hour - Incremental Static Regeneration (ISR)
  }
}