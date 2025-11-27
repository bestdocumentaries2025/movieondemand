// import { useRouter } from 'next/router'
// import Head from 'next/head'
// import Image from 'next/image'
// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import Header from '../../components/Header'
// import Footer from '../../components/Footer'
// import ShortICUPlayer from '../../components/ShortICUPlayer'
// import DailymotionPlayer from '../../components/DailymotionPlayer'
// import YouTubePlayer from '../../components/YouTubePlayer'
// import { RelatedMoviesGrid } from '../../components/RelatedMovieCard'
// import moviesData from '../../data/data.json'

// const TELEGRAM_BOT_USERNAME = "onlyondemand_bot";
// const SITE_URL = "https://movieondemand.vercel.app";

// export default function MoviePage({ movie }) {
//   const router = useRouter()
  
//   const [isAgeVerified, setIsAgeVerified] = useState(false)
//   const [showNotification, setShowNotification] = useState(false)
//   const [showWarning, setShowWarning] = useState(false)
//   const [imageError, setImageError] = useState(false)

//   useEffect(() => {
//     if (movie?.category === 'Adult') {
//       setShowNotification(true)
//       document.body.style.overflow = 'hidden'
//     } else {
//       setIsAgeVerified(true)
//     }

//     return () => {
//       document.body.style.overflow = 'unset'
//     }
//   }, [movie])

//   useEffect(() => {
//     if (!showNotification) return

//     const handleKeyDown = (e) => {
//       if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
//         e.preventDefault()
//         setShowWarning(true)
//       }
//     }

//     const handleContextMenu = (e) => {
//       e.preventDefault()
//       setShowWarning(true)
//     }

//     document.addEventListener('keydown', handleKeyDown)
//     document.addEventListener('contextmenu', handleContextMenu)
    
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown)
//       document.removeEventListener('contextmenu', handleContextMenu)
//     }
//   }, [showNotification])

//   if (router.isFallback) {
//     return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>
//   }

//   if (!movie) {
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold mb-4">Movie Not Found</h1>
//           <Link href="/" className="text-red-500 hover:underline">
//             Return to Home
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   const handleAgeVerification = () => {
//     setIsAgeVerified(true)
//     setShowNotification(false)
//     document.body.style.overflow = 'unset'
//   }

//   const handleExit = () => {
//     window.location.href = '/'
//   }

//   const handleExitAttempt = () => {
//     setShowWarning(true)
//   }

//   const handleImageError = () => {
//     setImageError(true)
//   }

//   // Generate absolute thumbnail URL
//   const getAbsoluteThumbnailUrl = (thumbnail) => {
//     if (!thumbnail) return `${SITE_URL}/fallback-image.jpg`;
    
//     if (thumbnail.startsWith('http')) {
//       return thumbnail;
//     }
    
//     if (thumbnail.startsWith('/')) {
//       return `${SITE_URL}${thumbnail}`;
//     }
    
//     return `${SITE_URL}/${thumbnail}`;
//   }

//   const absoluteThumbnail = getAbsoluteThumbnailUrl(movie.thumbnail);
//   const currentUrl = `${SITE_URL}/movie/${movie.slug}`;
//   const shareTitle = `${movie.title} - Watch Online Free`;
//   const shareDescription = movie.description;

//   // Generate article schema
//   const articleSchema = {
//     "@context": "https://schema.org",
//     "@type": "Article",
//     "headline": shareTitle,
//     "description": shareDescription,
//     "image": absoluteThumbnail,
//     "author": {
//       "@type": "Organization",
//       "name": "Movie On Demand"
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "Movie On Demand",
//       "logo": {
//         "@type": "ImageObject",
//         "url": `${SITE_URL}/logo.png`
//       }
//     },
//     "datePublished": new Date(movie.releaseYear, 0, 1).toISOString(),
//     "dateModified": new Date().toISOString(),
//     "mainEntityOfPage": {
//       "@type": "WebPage",
//       "@id": currentUrl
//     },
//     "genre": movie.genre,
//     "contentRating": movie.rating,
//     "duration": formatDurationForSchema(movie.duration)
//   }

//   // Generate movie schema
//   const movieSchema = {
//     "@context": "https://schema.org",
//     "@type": "Movie",
//     "name": movie.title,
//     "description": movie.description,
//     "image": absoluteThumbnail,
//     "dateCreated": movie.releaseYear,
//     "director": {
//       "@type": "Person",
//       "name": movie.director
//     },
//     "actor": movie.cast ? movie.cast.map(actor => ({
//       "@type": "Person",
//       "name": actor
//     })) : [],
//     "genre": movie.genre,
//     "duration": formatDurationForSchema(movie.duration),
//     "contentRating": movie.rating,
//     "countryOfOrigin": movie.country
//   }

//   // Social Sharing Functions
//   const shareOnFacebook = () => {
//     const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
//     window.open(shareUrl, '_blank', 'width=600,height=400');
//   }

//   const shareOnTwitter = () => {
//     const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareTitle)}`;
//     window.open(shareUrl, '_blank', 'width=600,height=400');
//   }

//   const shareOnLinkedIn = () => {
//     const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
//     window.open(shareUrl, '_blank', 'width=600,height=400');
//   }

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(currentUrl).then(() => {
//       alert('Link copied to clipboard!');
//     }).catch(err => {
//       console.error('Failed to copy: ', err);
//     });
//   }

//   // Render video player based on source - ONLY if videoSource exists and is not "-"
//   const renderVideoPlayer = () => {
//     // Check if videoSource is missing, empty, or equals "-"
//     if (!movie.videoSource || movie.videoSource === "-" || movie.videoSource === "" || !movie.videoId) {
//       return (
//         <div className="w-full aspect-video bg-gray-900 flex items-center justify-center rounded-lg">
//           <div className="text-center text-white p-8">
//             <div className="text-6xl mb-4">🎬</div>
//             <h3 className="text-xl font-bold mb-2">Video Not Available</h3>
//             <p className="text-gray-400">This movie is currently not available for streaming.</p>
//             <p className="text-gray-400 text-sm mt-2">Please check back later or try another movie.</p>
//           </div>
//         </div>
//       )
//     }

//     // If videoSource exists and is valid, render the appropriate player
//     if (movie.videoSource === 'dailymotion') {
//       return <DailymotionPlayer videoId={movie.videoId} title={movie.title} autoplay={false} />
//     } else if (movie.videoSource === 'youtube') {
//       return <YouTubePlayer videoId={movie.videoId} title={movie.title} autoplay={false} />
//     } else {
//       return <ShortICUPlayer videoId={movie.videoId} title={movie.title} />
//     }
//   }

//   // Check if video player should be displayed
//   const shouldShowVideoPlayer = movie.videoSource && movie.videoSource !== "-" && movie.videoSource !== "" && movie.videoId;

//   if (showNotification && movie.category === 'Adult') {
//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 backdrop-blur-sm">
//         <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-red-600 rounded-xl p-8 max-w-2xl w-11/12 max-h-[90vh] overflow-y-auto relative shadow-2xl">
//           <button 
//             className="absolute top-4 right-4 bg-red-600 bg-opacity-20 border border-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl hover:bg-red-600 hover:bg-opacity-40 transition-all"
//             onClick={handleExitAttempt}
//           >
//             ×
//           </button>
          
//           <div className="text-center">
//             <h2 className="text-red-500 text-3xl font-bold mb-6 uppercase tracking-wider">ADULTS ONLY NOTICE</h2>
            
//             {showWarning && (
//               <div className="bg-yellow-500 bg-opacity-20 border-2 border-yellow-500 p-4 rounded-lg mb-6 animate-pulse">
//                 <p className="text-yellow-300 font-bold">⚠️ You cannot bypass this warning!</p>
//                 <p className="text-yellow-200">You must either confirm you are 18+ to enter or close your browser.</p>
//               </div>
//             )}
            
//             <div className="bg-red-600 bg-opacity-20 border-l-4 border-red-600 p-4 mb-6 text-left">
//               <p className="text-white font-bold text-lg">🚫 This is adults only!</p>
//               <p className="text-gray-300">The content available may contain Adult materials.</p>
//             </div>

//             <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg mb-6 text-left">
//               <p className="text-gray-300 mb-2">Access is strictly limited to those over 18 or of legal age in your jurisdiction, whichever is greater.</p>
//               <p className="text-gray-300 mb-2">One of our core goals is to help parents restrict access to minors, so we have ensured that it's 18+.</p>
//               <p className="text-gray-300">To enter you must be 18 or older. By Doing so you acknowledged your 18+ of Age.</p>
//             </div>

//             <div className="bg-red-700 bg-opacity-30 border-2 border-red-600 p-4 rounded-lg mb-6">
//               <p className="text-red-300 font-bold">You cannot bypass this age verification.</p>
//               <p className="text-red-200">The only way to access the site is to confirm you are 18+.</p>
//               <p className="text-red-200">If you are not 18+, please EXIT the Page now.</p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button 
//                 className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl min-w-[280px]"
//                 onClick={handleAgeVerification}
//               >
//                 I AM 18 OR OLDER - ENTER 
//               </button>
//               <button 
//                 className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl min-w-[280px] border-2 border-red-600"
//                 onClick={handleExit}
//               >
//                 I AM NOT 18 - EXIT 
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   if (!isAgeVerified && movie.category === 'Adult') {
//     return null
//   }

//   return (
//     <div className="min-h-screen bg-black">
//       <Head>
//         <title>{shareTitle}</title>
//         <meta name="description" content={shareDescription} />
        
//         {/* Open Graph / Facebook */}
//         <meta property="og:type" content="article" />
//         <meta property="og:url" content={currentUrl} />
//         <meta property="og:title" content={shareTitle} />
//         <meta property="og:description" content={shareDescription} />
//         <meta property="og:image" content={absoluteThumbnail} />
//         <meta property="og:image:width" content="800" />
//         <meta property="og:image:height" content="1200" />
//         <meta property="og:site_name" content="Movie On Demand" />
//         <meta property="og:locale" content="en_US" />
        
//         {/* Twitter */}
//         <meta property="twitter:card" content="summary_large_image" />
//         <meta property="twitter:url" content={currentUrl} />
//         <meta property="twitter:title" content={shareTitle} />
//         <meta property="twitter:description" content={shareDescription} />
//         <meta property="twitter:image" content={absoluteThumbnail} />
        
//         {/* Additional Meta Tags */}
//         <meta name="keywords" content={`${movie.title}, ${movie.genre}, ${movie.releaseYear}, watch online, free streaming`} />
//         <link rel="canonical" href={currentUrl} />
//       </Head>

//       {/* JSON-LD Structured Data */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(movieSchema) }}
//       />

//       <Header />
      
//       <main className="pt-20 min-h-screen">
//         <div className="container mx-auto px-4 py-8">
//           {/* Video Player Section - ONLY show if shouldShowVideoPlayer is true */}
//           {shouldShowVideoPlayer && (
//             <section className="mb-8" aria-labelledby="player-heading">
//               <h2 id="player-heading" className="sr-only">
//                 Video Player for {movie.title}
//               </h2>
//               <div className="aspect-video w-full max-w-6xl mx-auto bg-black rounded-lg overflow-hidden shadow-2xl">
//                 {renderVideoPlayer()}
//               </div>
//             </section>
//           )}

//           {/* Social Sharing Buttons */}
//           <section className="mb-6">
//             <div className="flex flex-wrap gap-3 justify-center md:justify-start">
//               <button
//                 onClick={shareOnFacebook}
//                 className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                 </svg>
//                 Share
//               </button>
              
//               <button
//                 onClick={shareOnTwitter}
//                 className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//                 </svg>
//                 Tweet
//               </button>
              
//               <button
//                 onClick={shareOnLinkedIn}
//                 className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg transition-colors"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                 </svg>
//                 Share
//               </button>
              
//               <button
//                 onClick={copyToClipboard}
//                 className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
//                 </svg>
//                 Copy Link
//               </button>
//             </div>
//           </section>

//           {/* Telegram Link Section */}
//           <section className="mb-8">
//             <div className="flex flex-col items-center justify-center space-y-4">
//               {TELEGRAM_BOT_USERNAME && (
//                 <div className="w-full max-w-md">
//                   <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
//                     <h3 className="text-xl font-bold mb-3 text-white text-center">Get Link via Telegram Full Complete Movie or TvShow.</h3>
//                     <div className="space-y-4">
//                       <p className="text-sm text-gray-300 text-center">
//                         Click below to get this movie link via Telegram
//                       </p>
//                       <a
//                         href={`https://t.me/${TELEGRAM_BOT_USERNAME}?start=${movie.slug}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-lg transition-all duration-300 hover:scale-105 w-full"
//                       >
//                         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.191c-.153.001-.491.236-.491.236l-2.557 1.386-1.007 3.232s-.146.669.432.669c.578 0 1.396-.506 1.396-.506l3.232-2.072.832-.249c.91-.273.91-.691.91-.691s.063-.51-.699-.405zm-3.504 4.185l-1.105 3.644s-.082.405-.405.236c-.324-.167-2.43-1.558-2.43-1.558l-3.314-2.072s-.405-.273.083-.649c.487-.375 3.562-2.311 5.153-3.316.785-.499.578-.457.785.167.207.624.833 2.311.833 2.311l.399 1.447zm-2.97 4.462c-.167 0-.236-.124-.472-.291-.235-.167-1.852-1.213-1.852-1.213l-2.229-1.423s-.291-.188.062-.432c.354-.244 2.103-1.365 3.785-2.349.602-.354.602-.236.732.354.13.59.602 2.433.602 2.433l.354 1.301c.021.089-.021.188-.104.244-.062.041-.143.063-.226.063l-.65.114z"/>
//                         </svg>
//                         <span className="font-semibold">Get Link on Telegram</span>
//                       </a>
//                       <p className="text-xs text-gray-400 text-center">
//                         You'll need to subscribe to our channel to get the link
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </section>

//           {/* Movie Details Grid */}
//           <section className="grid lg:grid-cols-3 gap-8 mb-12">
//             <div className="lg:col-span-2">
//               <header className="mb-6">
//                 <h1 className="text-4xl font-bold mb-2 text-white">
//                   {movie.title}
//                 </h1>
//                 <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
//                   <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
//                     {movie.rating}
//                   </span>
//                   <span>{movie.releaseYear}</span>
//                   <span>{formatDuration(movie.duration)}</span>
//                   <span className="border border-gray-400 px-2 py-1 rounded text-xs">
//                     {movie.quality}
//                   </span>
//                   <span>{movie.language}</span>
//                 </div>
//                 <p className="text-lg text-gray-200 leading-relaxed">
//                   {movie.description}
//                 </p>
//               </header>

//               <div className="space-y-8">
//                 <section>
//                   <h2 className="text-2xl font-bold mb-4 text-white">Plot Summary</h2>
//                   <div dangerouslySetInnerHTML={{ __html: generatePlotExpansion(movie) }} />
//                 </section>

//                 <section>
//                   <h2 className="text-2xl font-bold mb-4 text-white">Character Analysis</h2>
//                   <div dangerouslySetInnerHTML={{ __html: generateCharacterAnalysis(movie) }} />
//                 </section>

//                 <section>
//                   <h2 className="text-2xl font-bold mb-4 text-white">Production Insights</h2>
//                   <div dangerouslySetInnerHTML={{ __html: generateProductionInsights(movie) }} />
//                 </section>

//                 <section>
//                   <h2 className="text-2xl font-bold mb-4 text-white">Why You Should Watch</h2>
//                   <div dangerouslySetInnerHTML={{ __html: generateViewerRecommendation(movie) }} />
//                 </section>
//               </div>
//             </div>

//             <div className="space-y-6">
//               <div className="bg-gray-800 rounded-lg p-4 text-center">
//                 <Link href={absoluteThumbnail} target="_blank">
//                   <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-4">
//                     {!imageError ? (
//                       <Image
//                         src={movie.thumbnail}
//                         alt={`Official poster for ${movie.title}`}
//                         fill
//                         sizes="(max-width: 768px) 100vw, 400px"
//                         className="object-cover hover:scale-105 transition-transform duration-300"
//                         priority
//                         onError={handleImageError}
//                       />
//                     ) : (
//                       <div className="w-full h-full bg-gray-800 flex items-center justify-center">
//                         <span className="text-gray-400">Image not available</span>
//                       </div>
//                     )}
//                   </div>
//                 </Link>
//                 <p className="text-sm text-gray-400">
//                   Click to view full-size poster
//                 </p>
//               </div>

//               <div className="bg-gray-800 rounded-lg p-6">
//                 <h3 className="text-xl font-bold mb-4 text-white">Movie Details</h3>
//                 <div className="space-y-3">
//                   <DetailItem label="Release Year" value={movie.releaseYear} />
//                   <DetailItem label="Genre" value={movie.genre} />
//                   <DetailItem label="Rating" value={movie.rating} />
//                   <DetailItem label="Quality" value={movie.quality} />
//                   <DetailItem label="Duration" value={formatDuration(movie.duration)} />
//                   <DetailItem label="Language" value={movie.language} />
//                   <DetailItem label="Director" value={movie.director} />
//                   <DetailItem label="Country" value={movie.country} />
//                   <DetailItem label="File Size" value={movie.size} />
//                 </div>
//               </div>

//               <div className="bg-gray-800 rounded-lg p-6">
//                 <h3 className="text-xl font-bold mb-4 text-white">Cast</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {movie.cast && movie.cast.map((actor, index) => (
//                     <span key={index} className="bg-black px-3 py-1 rounded text-sm hover:bg-red-600 transition cursor-pointer">
//                       {actor}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-gray-800 rounded-lg p-6">
//                 <h3 className="text-xl font-bold mb-4 text-white">Tags</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {movie.tags && movie.tags.map((tag, index) => (
//                     <Link 
//                       key={index}
//                       href={`/search?query=${encodeURIComponent(tag)}`}
//                       className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm transition-colors"
//                     >
//                       {tag}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>

//           <RelatedMoviesGrid
//             movies={moviesData}
//             currentMovieId={movie.id}
//             title="More Movies You'll Love"
//             autoRotate={true}
//           />

//           <RelatedMoviesGrid
//             movies={moviesData.filter(m => m.category === movie.category)}
//             currentMovieId={movie.id}
//             title={`More ${movie.category} Movies`}
//           />

//           <RelatedMoviesGrid
//             movies={moviesData.filter(m => 
//               m.genre && movie.genre && m.genre.split(', ').some(g => movie.genre.includes(g))
//             )}
//             currentMovieId={movie.id}
//             title={`Similar ${movie.genre ? movie.genre.split(',')[0] : 'Movies'}`}
//           />
//         </div>
//       </main>

//       <Footer />
//     </div>
//   )
// }

// function DetailItem({ label, value }) {
//   return (
//     <div className="flex justify-between py-2 border-b border-gray-700 last:border-b-0">
//       <span className="text-gray-300">{label}:</span>
//       <span className="text-white">{value || 'N/A'}</span>
//     </div>
//   )
// }

// function formatDuration(duration) {
//   if (!duration) return 'N/A'
//   return duration.replace('PT', '').replace('H', 'h ').replace('M', 'm').replace('S', 's')
// }

// function formatDurationForSchema(duration) {
//   if (!duration) return 'PT0H0M'
//   return duration
// }

// function generatePlotExpansion(movie) {
//   const genres = movie.genre ? movie.genre.toLowerCase().split(', ') : []
//   const isAction = genres.includes('action')
//   const isDrama = genres.includes('drama')
//   const isThriller = genres.includes('thriller')
//   const isRomance = genres.includes('romance')

//   let plot = `<p class="text-gray-300 leading-relaxed mb-4">${movie.description}</p>`
  
//   if (isAction && isThriller) {
//     plot += `
//       <p class="text-gray-300 leading-relaxed mb-4">
//         The film masterfully blends heart-pounding action sequences with psychological tension, 
//         keeping viewers on the edge of their seats throughout the narrative. As the story unfolds, 
//         unexpected twists and revelations challenge both the characters and the audience's perceptions.
//       </p>
//       <p class="text-gray-300 leading-relaxed">
//         The climax delivers a satisfying resolution while leaving room for contemplation about 
//         the deeper themes explored throughout the movie, making it more than just a typical 
//         action thriller.
//       </p>
//     `
//   } else if (isDrama && isRomance) {
//     plot += `
//       <p class="text-gray-300 leading-relaxed mb-4">
//         This emotional journey explores the complexities of human relationships with remarkable 
//         depth and sensitivity. The characters' struggles and triumphs are portrayed with such 
//         authenticity that viewers can't help but become emotionally invested in their stories.
//       </p>
//       <p class="text-gray-300 leading-relaxed">
//         The narrative beautifully captures the nuances of love and connection, making it a 
//         profoundly moving experience that resonates long after the credits roll.
//       </p>
//     `
//   } else {
//     plot += `
//       <p class="text-gray-300 leading-relaxed mb-4">
//         The narrative unfolds with meticulous pacing, allowing each story beat to land with 
//         maximum impact. Director ${movie.director} demonstrates a keen understanding of 
//         visual storytelling, using cinematography and editing to enhance the emotional 
//         weight of each scene.
//       </p>
//       <p class="text-gray-300 leading-relaxed">
//         As the plot progresses, layers of complexity are revealed, transforming what might 
//         have been a straightforward story into a rich, multi-faceted exploration of its 
//         central themes and character motivations.
//       </p>
//     `
//   }

//   return plot
// }

// function generateCharacterAnalysis(movie) {
//   const mainCast = movie.cast ? movie.cast.slice(0, 3) : []
  
//   return `
//     <div class="space-y-4">
//       <p class="text-gray-300 leading-relaxed">
//         The ensemble cast delivers powerful performances that bring depth and authenticity to their characters. 
//         Each actor embodies their role with such conviction that the characters feel genuinely lived-in and real.
//       </p>
//       <div class="bg-gray-800 p-4 rounded-lg">
//         <h3 class="text-lg font-semibold mb-2 text-white">Key Performances:</h3>
//         <ul class="list-disc list-inside space-y-1 text-gray-300">
//           ${mainCast.map(actor => `
//             <li><strong>${actor}</strong> delivers a standout performance that anchors the emotional core of the film</li>
//           `).join('')}
//         </ul>
//       </div>
//       <p class="text-gray-300 leading-relaxed">
//         The character development throughout the film is particularly noteworthy, with each main character 
//         undergoing significant growth and transformation that feels earned and authentic to their journey.
//       </p>
//     </div>
//   `
// }

// function generateProductionInsights(movie) {
//   return `
//     <div class="space-y-4">
//       <p class="text-gray-300 leading-relaxed">
//         Directed by <strong>${movie.director}</strong>, this ${movie.releaseYear} production showcases 
//         exceptional craftsmanship across all technical departments. The film's visual language is 
//         carefully constructed to support the narrative and enhance the emotional impact of each scene.
//       </p>
//       <p class="text-gray-300 leading-relaxed">
//         The ${movie.quality} presentation ensures that viewers can appreciate the meticulous attention 
//         to detail in every frame, from the carefully composed shots to the nuanced production design 
//         that creates a fully immersive viewing experience.
//       </p>
//       <div class="grid grid-cols-2 gap-4 text-sm">
//         <div class="bg-gray-800 p-3 rounded">
//           <strong class="text-white">Runtime:</strong> ${formatDuration(movie.duration)}
//         </div>
//         <div class="bg-gray-800 p-3 rounded">
//           <strong class="text-white">Quality:</strong> ${movie.quality}
//         </div>
//       </div>
//     </div>
//   `
// }

// function generateViewerRecommendation(movie) {
//   const genres = movie.genre ? movie.genre.toLowerCase() : ''
  
//   return `
//     <div class="space-y-4">
//       <p class="text-gray-300 leading-relaxed">
//         <strong>"${movie.title}"</strong> is essential viewing for fans of ${movie.genre} cinema. 
//         The film offers a perfect blend of entertainment and substance, making it equally suitable 
//         for casual viewers and cinephiles looking for depth and meaning in their movie experiences.
//       </p>
//       <div class="bg-gray-800 p-4 rounded-lg">
//         <h3 class="text-lg font-semibold mb-2 text-white">Perfect for viewers who enjoy:</h3>
//         <ul class="list-disc list-inside space-y-1 text-gray-300">
//           <li>Compelling character-driven narratives</li>
//           <li>${genres.includes('action') ? 'Well-choreographed action sequences' : 'Thought-provoking storytelling'}</li>
//           <li>Emotional depth and authentic performances</li>
//           <li>Movies that stay with you long after viewing</li>
//         </ul>
//       </div>
//       <p class="text-gray-300 leading-relaxed">
//         Whether you're looking for an engaging story, powerful performances, or simply quality 
//         entertainment, this film delivers on all fronts and represents some of the best that 
//         ${movie.releaseYear} cinema has to offer.
//       </p>
//     </div>
//   `
// }

// export async function getStaticPaths() {
//   const paths = moviesData.map(movie => ({
//     params: { slug: movie.slug }
//   }))

//   return {
//     paths,
//     fallback: false
//   }
// }

// export async function getStaticProps({ params }) {
//   const movie = moviesData.find(m => m.slug === params.slug)

//   if (!movie) {
//     return {
//       notFound: true
//     }
//   }

//   return {
//     props: {
//       movie
//     },
//     revalidate: 3600
//   }
// }








import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ShortICUPlayer from '../../components/ShortICUPlayer'
import DailymotionPlayer from '../../components/DailymotionPlayer'
import YouTubePlayer from '../../components/YouTubePlayer'
import { RelatedMoviesGrid } from '../../components/RelatedMovieCard'
import moviesData from '../../data/data.json'

const TELEGRAM_BOT_USERNAME = "onlyondemand_bot";
const SITE_URL = "https://movieondemand.vercel.app";

export default function MoviePage({ movie }) {
  const router = useRouter()
  
  const [isAgeVerified, setIsAgeVerified] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [showWarning, setShowWarning] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    if (movie?.category === 'Adult') {
      setShowNotification(true)
      document.body.style.overflow = 'hidden'
    } else {
      setIsAgeVerified(true)
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [movie])

  useEffect(() => {
    if (!showNotification) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
        e.preventDefault()
        setShowWarning(true)
      }
    }

    const handleContextMenu = (e) => {
      e.preventDefault()
      setShowWarning(true)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('contextmenu', handleContextMenu)
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('contextmenu', handleContextMenu)
    }
  }, [showNotification])

  if (router.isFallback) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Movie Not Found</h1>
          <Link href="/" className="text-red-500 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  const handleAgeVerification = () => {
    setIsAgeVerified(true)
    setShowNotification(false)
    document.body.style.overflow = 'unset'
  }

  const handleExit = () => {
    window.location.href = '/'
  }

  const handleExitAttempt = () => {
    setShowWarning(true)
  }

  const handleImageError = () => {
    setImageError(true)
  }

  const getAbsoluteThumbnailUrl = (thumbnail) => {
    if (!thumbnail) return `${SITE_URL}/fallback-image.jpg`;
    
    if (thumbnail.startsWith('http')) {
      return thumbnail;
    }
    
    if (thumbnail.startsWith('/')) {
      return `${SITE_URL}${thumbnail}`;
    }
    
    return `${SITE_URL}/${thumbnail}`;
  }

  const absoluteThumbnail = getAbsoluteThumbnailUrl(movie.thumbnail);
  const currentUrl = `${SITE_URL}/movie/${movie.slug}`;
  const shareTitle = `${movie.title} - Watch Online Free`;
  const shareDescription = movie.description || `Watch ${movie.title} online for free in ${movie.quality} quality`;

  const generateStructuredData = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "Movie",
      "name": movie.title,
      "description": movie.description || `Watch ${movie.title} online for free`,
      "url": currentUrl,
    }

    if (absoluteThumbnail && !absoluteThumbnail.includes('fallback-image.jpg')) {
      baseSchema.image = absoluteThumbnail;
    }

    if (movie.releaseYear) {
      baseSchema.dateCreated = movie.releaseYear.toString();
    }

    if (movie.director && movie.director !== 'N/A') {
      baseSchema.director = {
        "@type": "Person",
        "name": movie.director
      };
    }

    if (movie.cast && Array.isArray(movie.cast) && movie.cast.length > 0) {
      baseSchema.actor = movie.cast.slice(0, 5).map(actor => ({
        "@type": "Person",
        "name": actor
      }));
    }

    if (movie.genre) {
      baseSchema.genre = movie.genre;
    }

    if (movie.duration && movie.duration !== 'N/A') {
      baseSchema.duration = formatDurationForSchema(movie.duration);
    }

    if (movie.rating && movie.rating !== 'N/A') {
      baseSchema.contentRating = movie.rating;
    }

    if (movie.country) {
      baseSchema.countryOfOrigin = {
        "@type": "Country",
        "name": movie.country
      };
    }

    return baseSchema;
  }

  const shareOnFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }

  const shareOnTwitter = () => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareTitle)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }

  const shareOnLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert('Link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

  const renderVideoPlayer = () => {
    if (!movie.videoSource || movie.videoSource === "-" || movie.videoSource === "" || !movie.videoId) {
      return (
        <div className="w-full aspect-video bg-gray-900 flex items-center justify-center rounded-lg">
          <div className="text-center text-white p-8">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-xl font-bold mb-2">Video Not Available</h3>
            <p className="text-gray-400">This movie is currently not available for streaming.</p>
            <p className="text-gray-400 text-sm mt-2">Please check back later or try another movie.</p>
          </div>
        </div>
      )
    }

    if (movie.videoSource === 'dailymotion') {
      return <DailymotionPlayer videoId={movie.videoId} title={movie.title} autoplay={false} />
    } else if (movie.videoSource === 'youtube') {
      return <YouTubePlayer videoId={movie.videoId} title={movie.title} autoplay={false} />
    } else {
      return <ShortICUPlayer videoId={movie.videoId} title={movie.title} />
    }
  }

  const shouldShowVideoPlayer = movie.videoSource && movie.videoSource !== "-" && movie.videoSource !== "" && movie.videoId;

  if (showNotification && movie.category === 'Adult') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 backdrop-blur-sm">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-red-600 rounded-xl p-8 max-w-2xl w-11/12 max-h-[90vh] overflow-y-auto relative shadow-2xl">
          <button 
            className="absolute top-4 right-4 bg-red-600 bg-opacity-20 border border-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl hover:bg-red-600 hover:bg-opacity-40 transition-all"
            onClick={handleExitAttempt}
          >
            ×
          </button>
          
          <div className="text-center">
            <h2 className="text-red-500 text-3xl font-bold mb-6 uppercase tracking-wider">ADULTS ONLY NOTICE</h2>
            
            {showWarning && (
              <div className="bg-yellow-500 bg-opacity-20 border-2 border-yellow-500 p-4 rounded-lg mb-6 animate-pulse">
                <p className="text-yellow-300 font-bold">⚠️ You cannot bypass this warning!</p>
                <p className="text-yellow-200">You must either confirm you are 18+ to enter or close your browser.</p>
              </div>
            )}
            
            <div className="bg-red-600 bg-opacity-20 border-l-4 border-red-600 p-4 mb-6 text-left">
              <p className="text-white font-bold text-lg">🚫 This is adults only!</p>
              <p className="text-gray-300">The content available may contain Adult materials.</p>
            </div>

            <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg mb-6 text-left">
              <p className="text-gray-300 mb-2">Access is strictly limited to those over 18 or of legal age in your jurisdiction, whichever is greater.</p>
              <p className="text-gray-300 mb-2">One of our core goals is to help parents restrict access to minors, so we have ensured that it's 18+.</p>
              <p className="text-gray-300">To enter you must be 18 or older. By Doing so you acknowledged your 18+ of Age.</p>
            </div>

            <div className="bg-red-700 bg-opacity-30 border-2 border-red-600 p-4 rounded-lg mb-6">
              <p className="text-red-300 font-bold">You cannot bypass this age verification.</p>
              <p className="text-red-200">The only way to access the site is to confirm you are 18+.</p>
              <p className="text-red-200">If you are not 18+, please EXIT the Page now.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl min-w-[280px]"
                onClick={handleAgeVerification}
              >
                I AM 18 OR OLDER - ENTER 
              </button>
              <button 
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl min-w-[280px] border-2 border-red-600"
                onClick={handleExit}
              >
                I AM NOT 18 - EXIT 
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!isAgeVerified && movie.category === 'Adult') {
    return null
  }

  const structuredData = generateStructuredData();

  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>{shareTitle}</title>
        <meta name="description" content={shareDescription} />
        
        <meta property="og:type" content="video.movie" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={shareTitle} />
        <meta property="og:description" content={shareDescription} />
        <meta property="og:image" content={absoluteThumbnail} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:site_name" content="Movie On Demand" />
        <meta property="og:locale" content="en_US" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={currentUrl} />
        <meta property="twitter:title" content={shareTitle} />
        <meta property="twitter:description" content={shareDescription} />
        <meta property="twitter:image" content={absoluteThumbnail} />
        
        <meta name="keywords" content={`${movie.title}, ${movie.genre}, ${movie.releaseYear}, watch online, free streaming`} />
        <link rel="canonical" href={currentUrl} />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />
      
      <main className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {shouldShowVideoPlayer && (
            <section className="mb-8" aria-labelledby="player-heading">
              <h2 id="player-heading" className="sr-only">
                Video Player for {movie.title}
              </h2>
              <div className="aspect-video w-full max-w-6xl mx-auto bg-black rounded-lg overflow-hidden shadow-2xl">
                {renderVideoPlayer()}
              </div>
            </section>
          )}

          <section className="mb-6">
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <button
                onClick={shareOnFacebook}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Share
              </button>
              
              <button
                onClick={shareOnTwitter}
                className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Tweet
              </button>
              
              <button
                onClick={shareOnLinkedIn}
                className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Share
              </button>
              
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
                Copy Link
              </button>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              {TELEGRAM_BOT_USERNAME && (
                <div className="w-full max-w-md">
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <h3 className="text-xl font-bold mb-3 text-white text-center">Get Link via Telegram Full Complete Movie or TvShow.</h3>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-300 text-center">
                        Click below to get this movie link via Telegram
                      </p>
                      <a
                        href={`https://t.me/${TELEGRAM_BOT_USERNAME}?start=${movie.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-lg transition-all duration-300 hover:scale-105 w-full"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.191c-.153.001-.491.236-.491.236l-2.557 1.386-1.007 3.232s-.146.669.432.669c.578 0 1.396-.506 1.396-.506l3.232-2.072.832-.249c.91-.273.91-.691.91-.691s.063-.51-.699-.405zm-3.504 4.185l-1.105 3.644s-.082.405-.405.236c-.324-.167-2.43-1.558-2.43-1.558l-3.314-2.072s-.405-.273.083-.649c.487-.375 3.562-2.311 5.153-3.316.785-.499.578-.457.785.167.207.624.833 2.311.833 2.311l.399 1.447zm-2.97 4.462c-.167 0-.236-.124-.472-.291-.235-.167-1.852-1.213-1.852-1.213l-2.229-1.423s-.291-.188.062-.432c.354-.244 2.103-1.365 3.785-2.349.602-.354.602-.236.732.354.13.59.602 2.433.602 2.433l.354 1.301c.021.089-.021.188-.104.244-.062.041-.143.063-.226.063l-.65.114z"/>
                        </svg>
                        <span className="font-semibold">Get Link on Telegram</span>
                      </a>
                      <p className="text-xs text-gray-400 text-center">
                        You'll need to subscribe to our channel to get the link
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          <section className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <header className="mb-6">
                <h1 className="text-4xl font-bold mb-2 text-white">
                  {movie.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
                  {movie.rating && movie.rating !== 'N/A' && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      {movie.rating}
                    </span>
                  )}
                  {movie.releaseYear && (
                    <span>{movie.releaseYear}</span>
                  )}
                  {movie.duration && movie.duration !== 'N/A' && (
                    <span>{formatDuration(movie.duration)}</span>
                  )}
                  {movie.quality && (
                    <span className="border border-gray-400 px-2 py-1 rounded text-xs">
                      {movie.quality}
                    </span>
                  )}
                  {movie.language && (
                    <span>{movie.language}</span>
                  )}
                </div>
                {movie.description && (
                  <p className="text-lg text-gray-200 leading-relaxed">
                    {movie.description}
                  </p>
                )}
              </header>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">Plot Summary</h2>
                  <div dangerouslySetInnerHTML={{ __html: generatePlotExpansion(movie) }} />
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">Character Analysis</h2>
                  <div dangerouslySetInnerHTML={{ __html: generateCharacterAnalysis(movie) }} />
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">Production Insights</h2>
                  <div dangerouslySetInnerHTML={{ __html: generateProductionInsights(movie) }} />
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">Why You Should Watch</h2>
                  <div dangerouslySetInnerHTML={{ __html: generateViewerRecommendation(movie) }} />
                </section>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <Link href={absoluteThumbnail} target="_blank">
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-4">
                    {!imageError ? (
                      <Image
                        src={movie.thumbnail || '/fallback-image.jpg'}
                        alt={`Official poster for ${movie.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        priority
                        onError={handleImageError}
                        style={{
                            filter: 'brightness(1.05) contrast(1.15) saturate(1.12) hue-rotate(1deg)'
                             }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                        <span className="text-gray-400">Image not available</span>
                      </div>
                    )}
                  </div>
                </Link>
                <p className="text-sm text-gray-400">
                  Click to view full-size poster
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Movie Details</h3>
                <div className="space-y-3">
                  <DetailItem label="Release Year" value={movie.releaseYear} />
                  <DetailItem label="Genre" value={movie.genre} />
                  <DetailItem label="Rating" value={movie.rating} />
                  <DetailItem label="Quality" value={movie.quality} />
                  <DetailItem label="Duration" value={formatDuration(movie.duration)} />
                  <DetailItem label="Language" value={movie.language} />
                  <DetailItem label="Director" value={movie.director} />
                  <DetailItem label="Country" value={movie.country} />
                  <DetailItem label="File Size" value={movie.size} />
                </div>
              </div>

              {movie.cast && movie.cast.length > 0 && (
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">Cast</h3>
                  <div className="flex flex-wrap gap-2">
                    {movie.cast.map((actor, index) => (
                      <span key={index} className="bg-black px-3 py-1 rounded text-sm hover:bg-red-600 transition cursor-pointer">
                        {actor}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {movie.tags && movie.tags.length > 0 && (
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {movie.tags.map((tag, index) => (
                      <Link 
                        key={index}
                        href={`/search?query=${encodeURIComponent(tag)}`}
                        className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          <RelatedMoviesGrid
            movies={moviesData}
            currentMovieId={movie.id}
            title="More Movies You'll Love"
            autoRotate={true}
          />

          {movie.category && (
            <RelatedMoviesGrid
              movies={moviesData.filter(m => m.category === movie.category)}
              currentMovieId={movie.id}
              title={`More ${movie.category} Movies`}
            />
          )}

          {movie.genre && (
            <RelatedMoviesGrid
              movies={moviesData.filter(m => 
                m.genre && movie.genre && m.genre.split(', ').some(g => movie.genre.includes(g))
              )}
              currentMovieId={movie.id}
              title={`Similar ${movie.genre ? movie.genre.split(',')[0] : 'Movies'}`}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

function DetailItem({ label, value }) {
  return (
    <div className="flex justify-between py-2 border-b border-gray-700 last:border-b-0">
      <span className="text-gray-300">{label}:</span>
      <span className="text-white">{value || 'N/A'}</span>
    </div>
  )
}

function formatDuration(duration) {
  if (!duration || duration === 'N/A') return 'N/A'
  return duration.replace('PT', '').replace('H', 'h ').replace('M', 'm').replace('S', 's')
}

function formatDurationForSchema(duration) {
  if (!duration || duration === 'N/A') return undefined
  return duration
}

function generatePlotExpansion(movie) {
  const genres = movie.genre ? movie.genre.toLowerCase().split(', ') : []
  const isAction = genres.includes('action')
  const isDrama = genres.includes('drama')
  const isThriller = genres.includes('thriller')
  const isRomance = genres.includes('romance')

  let plot = movie.description ? `<p class="text-gray-300 leading-relaxed mb-4">${movie.description}</p>` : '<p class="text-gray-300 leading-relaxed mb-4">No plot summary available.</p>'
  
  if (isAction && isThriller) {
    plot += `
      <p class="text-gray-300 leading-relaxed mb-4">
        The film masterfully blends heart-pounding action sequences with psychological tension, 
        keeping viewers on the edge of their seats throughout the narrative. As the story unfolds, 
        unexpected twists and revelations challenge both the characters and the audience's perceptions.
      </p>
      <p class="text-gray-300 leading-relaxed">
        The climax delivers a satisfying resolution while leaving room for contemplation about 
        the deeper themes explored throughout the movie, making it more than just a typical 
        action thriller.
      </p>
    `
  } else if (isDrama && isRomance) {
    plot += `
      <p class="text-gray-300 leading-relaxed mb-4">
        This emotional journey explores the complexities of human relationships with remarkable 
        depth and sensitivity. The characters' struggles and triumphs are portrayed with such 
        authenticity that viewers can't help but become emotionally invested in their stories.
      </p>
      <p class="text-gray-300 leading-relaxed">
        The narrative beautifully captures the nuances of love and connection, making it a 
        profoundly moving experience that resonates long after the credits roll.
      </p>
    `
  } else {
    plot += `
      <p class="text-gray-300 leading-relaxed mb-4">
        The narrative unfolds with meticulous pacing, allowing each story beat to land with 
        maximum impact. ${movie.director ? `Director ${movie.director}` : 'The director'} demonstrates a keen understanding of 
        visual storytelling, using cinematography and editing to enhance the emotional 
        weight of each scene.
      </p>
      <p class="text-gray-300 leading-relaxed">
        As the plot progresses, layers of complexity are revealed, transforming what might 
        have been a straightforward story into a rich, multi-faceted exploration of its 
        central themes and character motivations.
      </p>
    `
  }

  return plot
}

function generateCharacterAnalysis(movie) {
  const mainCast = movie.cast ? movie.cast.slice(0, 3) : []
  
  let analysis = `
    <div class="space-y-4">
      <p class="text-gray-300 leading-relaxed">
        The ensemble cast delivers powerful performances that bring depth and authenticity to their characters. 
        Each actor embodies their role with such conviction that the characters feel genuinely lived-in and real.
      </p>
  `

  if (mainCast.length > 0) {
    analysis += `
      <div class="bg-gray-800 p-4 rounded-lg">
        <h3 class="text-lg font-semibold mb-2 text-white">Key Performances:</h3>
        <ul class="list-disc list-inside space-y-1 text-gray-300">
          ${mainCast.map(actor => `
            <li><strong>${actor}</strong> delivers a standout performance that anchors the emotional core of the film</li>
          `).join('')}
        </ul>
      </div>
    `
  }

  analysis += `
      <p class="text-gray-300 leading-relaxed">
        The character development throughout the film is particularly noteworthy, with each main character 
        undergoing significant growth and transformation that feels earned and authentic to their journey.
      </p>
    </div>
  `

  return analysis
}

function generateProductionInsights(movie) {
  return `
    <div class="space-y-4">
      <p class="text-gray-300 leading-relaxed">
        ${movie.director ? `Directed by <strong>${movie.director}</strong>, this` : 'This'} ${movie.releaseYear ? `${movie.releaseYear} production` : 'production'} showcases 
        exceptional craftsmanship across all technical departments. The film's visual language is 
        carefully constructed to support the narrative and enhance the emotional impact of each scene.
      </p>
      <p class="text-gray-300 leading-relaxed">
        ${movie.quality ? `The ${movie.quality} presentation ensures that viewers can appreciate the meticulous attention 
        to detail in every frame, from the carefully composed shots to the nuanced production design 
        that creates a fully immersive viewing experience.` : 'The presentation ensures viewers can appreciate the meticulous attention to detail in every frame.'}
      </p>
      <div class="grid grid-cols-2 gap-4 text-sm">
        <div class="bg-gray-800 p-3 rounded">
          <strong class="text-white">Runtime:</strong> ${formatDuration(movie.duration)}
        </div>
        <div class="bg-gray-800 p-3 rounded">
          <strong class="text-white">Quality:</strong> ${movie.quality || 'N/A'}
        </div>
      </div>
    </div>
  `
}

function generateViewerRecommendation(movie) {
  const genres = movie.genre ? movie.genre.toLowerCase() : ''
  
  return `
    <div class="space-y-4">
      <p class="text-gray-300 leading-relaxed">
        <strong>"${movie.title}"</strong> is essential viewing for fans of ${movie.genre || 'quality'} cinema. 
        The film offers a perfect blend of entertainment and substance, making it equally suitable 
        for casual viewers and cinephiles looking for depth and meaning in their movie experiences.
      </p>
      <div class="bg-gray-800 p-4 rounded-lg">
        <h3 class="text-lg font-semibold mb-2 text-white">Perfect for viewers who enjoy:</h3>
        <ul class="list-disc list-inside space-y-1 text-gray-300">
          <li>Compelling character-driven narratives</li>
          <li>${genres.includes('action') ? 'Well-choreographed action sequences' : 'Thought-provoking storytelling'}</li>
          <li>Emotional depth and authentic performances</li>
          <li>Movies that stay with you long after viewing</li>
        </ul>
      </div>
      <p class="text-gray-300 leading-relaxed">
        Whether you're looking for an engaging story, powerful performances, or simply quality 
        entertainment, this film delivers on all fronts ${movie.releaseYear ? `and represents some of the best that 
        ${movie.releaseYear} cinema has to offer.` : 'and represents quality cinema.'}
      </p>
    </div>
  `
}

export async function getStaticPaths() {
  const paths = moviesData.map(movie => ({
    params: { slug: movie.slug }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const movie = moviesData.find(m => m.slug === params.slug)

  if (!movie) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      movie
    },
    revalidate: 3600
  }
}