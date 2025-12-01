


// import Head from 'next/head'
// import Header from '../components/Header'
// import HeroSection from '../components/HeroSection'
// import MovieGrid from '../components/MovieGrid'
// import Footer from '../components/Footer'
// import moviesData from '../data/data.json'
// import { useState, useMemo } from 'react'
// import { Search, Filter, X } from 'lucide-react'

// export default function Home({ movies }) {
//   const heroMovies = movies.slice(0, 5)
//   const gridMovies = movies.slice(5)
//   const canonicalUrl = 'https://movieondemand.vercel.app'
//   const siteName = 'Movie On Demand'
//   const siteDescription = 'Movie On Demand Service - Request any movie via Telegram by sending movie name, year, and language. We add requested movies within 24 hours.'

//   // Search and filter states
//   const [searchQuery, setSearchQuery] = useState('')
//   const [filters, setFilters] = useState({
//     genre: '',
//     year: '',
//     category: '',
//     rating: ''
//   })
//   const [showFilters, setShowFilters] = useState(false)

//   // Filter options
//   const filterOptions = useMemo(() => {
//     const genres = Array.from(new Set(movies.flatMap(movie => movie.genre?.split(', ') || []))).filter(Boolean)
//     const years = Array.from(new Set(movies.map(movie => movie.releaseYear || movie.year))).sort((a, b) => b - a)
//     const categories = Array.from(new Set(movies.map(movie => movie.category))).filter(Boolean)
    
//     return { genres, years, categories }
//   }, [movies])

//   // Filtered movies based on search and filters
//   const filteredMovies = useMemo(() => {
//     return movies.filter(movie => {
//       const matchesSearch = searchQuery === '' || 
//         movie.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         movie.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         movie.cast?.some(actor => actor.toLowerCase().includes(searchQuery.toLowerCase())) ||
//         movie.genre?.toLowerCase().includes(searchQuery.toLowerCase())

//       const matchesGenre = filters.genre === '' || 
//         movie.genre?.includes(filters.genre)
      
//       const matchesYear = filters.year === '' || 
//         String(movie.releaseYear || movie.year) === filters.year
      
//       const matchesCategory = filters.category === '' || 
//         movie.category === filters.category

//       const matchesRating = filters.rating === '' || 
//         (movie.rating && parseFloat(movie.rating) >= parseFloat(filters.rating))

//       return matchesSearch && matchesGenre && matchesYear && matchesCategory && matchesRating
//     })
//   }, [searchQuery, filters, movies])

//   const clearFilters = () => {
//     setFilters({
//       genre: '',
//       year: '',
//       category: '',
//       rating: ''
//     })
//     setSearchQuery('')
//   }

//   const hasActiveSearch = searchQuery || Object.values(filters).some(f => f)

//   // Structured Data for Movie Collection
//   const movieCollectionStructuredData = {
//     "@context": "https://schema.org",
//     "@type": "ItemList",
//     "name": "Latest Movies Collection",
//     "description": "Collection of movies available on demand",
//     "numberOfItems": movies.length,
//     "itemListElement": movies.slice(0, 20).map((movie, index) => ({
//       "@type": "ListItem",
//       "position": index + 1,
//       "item": {
//         "@type": "Movie",
//         "name": movie.title,
//         "description": movie.description,
//         "image": movie.thumbnail,
//         "dateCreated": movie.releaseYear || movie.year,
//         "genre": movie.category,
//         "duration": movie.duration
//       }
//     }))
//   }

//   // Organization Structured Data
//   const organizationStructuredData = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     "name": siteName,
//     "description": siteDescription,
//     "url": canonicalUrl
//   }

//   // Breadcrumb Structured Data
//   const breadcrumbStructuredData = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": canonicalUrl
//       }
//     ]
//   }

//   return (
//     <div className="min-h-screen bg-black">
//       <Head>
//         <title>Movie On Demand - Request Any Movie via Telegram</title>
//         <meta name="description" content={siteDescription} />
//         <meta name="keywords" content="movie on demand, telegram movies, request movies, bollywood movies, hollywood movies, adult movies" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
//         <link rel="canonical" href={canonicalUrl} />
        
//         {/* Open Graph */}
//         <meta property="og:title" content="Movie On Demand - Request Any Movie via Telegram" />
//         <meta property="og:description" content={siteDescription} />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content={canonicalUrl} />
//         <meta property="og:image" content={`${canonicalUrl}/og-image.jpg`} />
//         <meta property="og:image:width" content="1200" />
//         <meta property="og:image:height" content="630" />
//         <meta property="og:image:alt" content="Movie On Demand - Request Any Movie via Telegram" />
//         <meta property="og:site_name" content={siteName} />
//         <meta property="og:locale" content="en_US" />
        
//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Movie On Demand - Request Any Movie via Telegram" />
//         <meta name="twitter:description" content={siteDescription} />
//         <meta name="twitter:image" content={`${canonicalUrl}/og-image.jpg`} />
//         <meta name="twitter:image:alt" content="Movie On Demand - Request Any Movie via Telegram" />
        
//         {/* Additional Meta Tags */}
//         <meta name="author" content="Movie On Demand" />
//         <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
//         <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
//         <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
//         {/* Favicon Links */}
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
//         <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
//         <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
//         <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

//         {/* Structured Data for Website */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "WebSite",
//               "name": siteName,
//               "description": siteDescription,
//               "url": canonicalUrl,
//               "potentialAction": {
//                 "@type": "SearchAction",
//                 "target": `${canonicalUrl}/search?q={search_term_string}`,
//                 "query-input": "required name=search_term_string"
//               }
//             })
//           }}
//         />

//         {/* Structured Data for Movie Collection */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(movieCollectionStructuredData)
//           }}
//         />

//         {/* Organization Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(organizationStructuredData)
//           }}
//         />

//         {/* Breadcrumb Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(breadcrumbStructuredData)
//           }}
//         />
//       </Head>

//       <Header />
//       <HeroSection movies={heroMovies} />
      
//       {/* Search and Filter Section */}
//       <div className="bg-black py-8">
//         <div className="container mx-auto px-4">
//           {/* Search Bar */}
//           <div className="max-w-2xl mx-auto mb-6">
//             <div className="relative">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search movies by title, actor, genre..."
//                 className="w-full bg-gray-800 text-white px-12 py-4 rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none transition-colors"
//               />
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
//             </div>
//           </div>

//           {/* Filter Controls */}
//           <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
//             <button
//               onClick={() => setShowFilters(!showFilters)}
//               className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
//             >
//               <Filter className="mr-2" size={20} />
//               Filters
//               {(filters.genre || filters.year || filters.category || filters.rating) && (
//                 <span className="ml-2 bg-red-600 text-xs px-2 py-1 rounded-full">
//                   Active
//                 </span>
//               )}
//             </button>

//             {(searchQuery || filters.genre || filters.year || filters.category || filters.rating) && (
//               <button
//                 onClick={clearFilters}
//                 className="flex items-center text-gray-400 hover:text-white transition"
//               >
//                 <X className="mr-1" size={16} />
//                 Clear All
//               </button>
//             )}
//           </div>

//           {/* Filters Panel */}
//           {showFilters && (
//             <div className="max-w-6xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-gray-800 rounded-lg">
//               {/* Genre Filter */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Genre</label>
//                 <select
//                   value={filters.genre}
//                   onChange={(e) => setFilters(prev => ({ ...prev, genre: e.target.value }))}
//                   className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
//                 >
//                   <option value="">All Genres</option>
//                   {filterOptions.genres.map(genre => (
//                     <option key={genre} value={genre}>{genre}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Year Filter */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Release Year</label>
//                 <select
//                   value={filters.year}
//                   onChange={(e) => setFilters(prev => ({ ...prev, year: e.target.value }))}
//                   className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
//                 >
//                   <option value="">All Years</option>
//                   {filterOptions.years.map(year => (
//                     <option key={year} value={year}>{year}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Category Filter */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
//                 <select
//                   value={filters.category}
//                   onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
//                   className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
//                 >
//                   <option value="">All Categories</option>
//                   {filterOptions.categories.map(category => (
//                     <option key={category} value={category}>{category}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Rating Filter */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Minimum Rating</label>
//                 <select
//                   value={filters.rating}
//                   onChange={(e) => setFilters(prev => ({ ...prev, rating: e.target.value }))}
//                   className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
//                 >
//                   <option value="">Any Rating</option>
//                   <option value="7">7+/10</option>
//                   <option value="6">6+/10</option>
//                   <option value="5">5+/10</option>
//                 </select>
//               </div>
//             </div>
//           )}

//           {/* Results Count */}
//           {hasActiveSearch && (
//             <div className="max-w-6xl mx-auto mb-6">
//               <div className="flex justify-between items-center">
//                 <h2 className="text-2xl font-bold text-white">
//                   Search Results
//                 </h2>
//                 <p className="text-gray-400">
//                   {filteredMovies.length} {filteredMovies.length === 1 ? 'movie' : 'movies'} found
//                 </p>
//               </div>
//             </div>
//           )}

//           {/* Content - Show search results or regular categories */}
//           {hasActiveSearch ? (
//             <div className="max-w-6xl mx-auto">
//               {filteredMovies.length > 0 ? (
//                 <MovieGrid movies={filteredMovies} title="" />
//               ) : (
//                 <div className="text-center py-16">
//                   <Search className="mx-auto text-gray-400 mb-4" size={48} />
//                   <h3 className="text-xl font-semibold mb-2 text-white">No movies found</h3>
//                   <p className="text-gray-400">
//                     Try adjusting your search terms or filters to find what you're looking for.
//                   </p>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <>
             
//               <MovieGrid movies={gridMovies}  title="Latest Movies" />
//               <MovieGrid movies={movies} title="All Movies" />
//               <MovieGrid 
//                 movies={movies.filter(m => m.category === 'Adult')} 
//                 title="Adult Movies" 
//               />
//             </>
//           )}
//         </div>
//       </div>
      
//       <Footer />
//     </div>
//   )
// }

// export async function getStaticProps() {
//   // Reverse to show latest first
//   const reversedMovies = [...moviesData].reverse()
  
//   return {
//     props: {
//       movies: reversedMovies,
//     },
//     revalidate: 3600, // Revalidate every hour
//   }
// }
























// import Head from 'next/head'
// import Header from '../components/Header'
// import HeroSection from '../components/HeroSection'
// import MovieGrid from '../components/MovieGrid'
// import Footer from '../components/Footer'
// import moviesData from '../data/data.json'
// import { useState, useMemo } from 'react'
// import { Search, Filter, X } from 'lucide-react'

// export default function Home({ movies }) {
//   const heroMovies = movies.slice(0, 5)
//   const gridMovies = movies.slice(5)
//   const canonicalUrl = 'https://movieondemand.vercel.app'
//   const siteName = 'Movie On Demand'
//   const siteDescription = 'Movie On Demand Service - Request any movie via Telegram by sending movie name, year, and language. We add requested movies within 24 hours.'

//   // Search and filter states
//   const [searchQuery, setSearchQuery] = useState('')
//   const [filters, setFilters] = useState({
//     genre: '',
//     year: '',
//     category: '',
//     rating: ''
//   })
//   const [showFilters, setShowFilters] = useState(false)

//   // Load more states for different sections
//   const [latestMoviesLimit, setLatestMoviesLimit] = useState(15)
//   const [allMoviesLimit, setAllMoviesLimit] = useState(15)
//   const [adultMoviesLimit, setAdultMoviesLimit] = useState(15)
//   const [searchResultsLimit, setSearchResultsLimit] = useState(15)

//   // Filter options
//   const filterOptions = useMemo(() => {
//     const genres = Array.from(new Set(movies.flatMap(movie => movie.genre?.split(', ') || []))).filter(Boolean)
//     const years = Array.from(new Set(movies.map(movie => movie.releaseYear || movie.year))).sort((a, b) => b - a)
//     const categories = Array.from(new Set(movies.map(movie => movie.category))).filter(Boolean)
    
//     return { genres, years, categories }
//   }, [movies])

//   // Filtered movies based on search and filters
//   const filteredMovies = useMemo(() => {
//     return movies.filter(movie => {
//       const matchesSearch = searchQuery === '' || 
//         movie.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         movie.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         movie.cast?.some(actor => actor.toLowerCase().includes(searchQuery.toLowerCase())) ||
//         movie.genre?.toLowerCase().includes(searchQuery.toLowerCase())

//       const matchesGenre = filters.genre === '' || 
//         movie.genre?.includes(filters.genre)
      
//       const matchesYear = filters.year === '' || 
//         String(movie.releaseYear || movie.year) === filters.year
      
//       const matchesCategory = filters.category === '' || 
//         movie.category === filters.category

//       const matchesRating = filters.rating === '' || 
//         (movie.rating && parseFloat(movie.rating) >= parseFloat(filters.rating))

//       return matchesSearch && matchesGenre && matchesYear && matchesCategory && matchesRating
//     })
//   }, [searchQuery, filters, movies])

//   // Sliced movies for different sections
//   const displayedLatestMovies = gridMovies.slice(0, latestMoviesLimit)
//   const displayedAllMovies = movies.slice(0, allMoviesLimit)
//   const displayedAdultMovies = movies.filter(m => m.category === 'Adult').slice(0, adultMoviesLimit)
//   const displayedSearchResults = filteredMovies.slice(0, searchResultsLimit)

//   const clearFilters = () => {
//     setFilters({
//       genre: '',
//       year: '',
//       category: '',
//       rating: ''
//     })
//     setSearchQuery('')
//     // Reset limits when clearing filters
//     setLatestMoviesLimit(15)
//     setAllMoviesLimit(15)
//     setAdultMoviesLimit(15)
//     setSearchResultsLimit(15)
//   }

//   const hasActiveSearch = searchQuery || Object.values(filters).some(f => f)

//   // Load more functions
//   const loadMoreLatest = () => {
//     setLatestMoviesLimit(prev => prev + 15)
//   }

//   const loadMoreAll = () => {
//     setAllMoviesLimit(prev => prev + 15)
//   }

//   const loadMoreAdult = () => {
//     setAdultMoviesLimit(prev => prev + 15)
//   }

//   const loadMoreSearch = () => {
//     setSearchResultsLimit(prev => prev + 15)
//   }

//   // Structured Data for Movie Collection
//   const movieCollectionStructuredData = {
//     "@context": "https://schema.org",
//     "@type": "ItemList",
//     "name": "Latest Movies Collection",
//     "description": "Collection of movies available on demand",
//     "numberOfItems": movies.length,
//     "itemListElement": movies.slice(0, 20).map((movie, index) => ({
//       "@type": "ListItem",
//       "position": index + 1,
//       "item": {
//         "@type": "Movie",
//         "name": movie.title,
//         "description": movie.description,
//         "image": movie.thumbnail,
//         "dateCreated": movie.releaseYear || movie.year,
//         "genre": movie.category,
//         "duration": movie.duration
//       }
//     }))
//   }

//   // Organization Structured Data
//   const organizationStructuredData = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     "name": siteName,
//     "description": siteDescription,
//     "url": canonicalUrl
//   }

//   // Breadcrumb Structured Data
//   const breadcrumbStructuredData = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": canonicalUrl
//       }
//     ]
//   }

//   return (
//     <div className="min-h-screen bg-black">
//       <Head>
//         <title>Movie On Demand - Request Any Movie via Telegram</title>
//         <meta name="description" content={siteDescription} />
//         <meta name="keywords" content="movie on demand, telegram movies, request movies, bollywood movies, hollywood movies, adult movies" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
//         <link rel="canonical" href={canonicalUrl} />
        
//         {/* Open Graph */}
//         <meta property="og:title" content="Movie On Demand - Request Any Movie via Telegram" />
//         <meta property="og:description" content={siteDescription} />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content={canonicalUrl} />
//         <meta property="og:image" content={`${canonicalUrl}/og-image.jpg`} />
//         <meta property="og:image:width" content="1200" />
//         <meta property="og:image:height" content="630" />
//         <meta property="og:image:alt" content="Movie On Demand - Request Any Movie via Telegram" />
//         <meta property="og:site_name" content={siteName} />
//         <meta property="og:locale" content="en_US" />
        
//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Movie On Demand - Request Any Movie via Telegram" />
//         <meta name="twitter:description" content={siteDescription} />
//         <meta name="twitter:image" content={`${canonicalUrl}/og-image.jpg`} />
//         <meta name="twitter:image:alt" content="Movie On Demand - Request Any Movie via Telegram" />
        
//         {/* Additional Meta Tags */}
//         <meta name="author" content="Movie On Demand" />
//         <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
//         <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
//         <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
//         {/* Favicon Links */}
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
//         <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
//         <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
//         <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

//         {/* Structured Data for Website */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "WebSite",
//               "name": siteName,
//               "description": siteDescription,
//               "url": canonicalUrl,
//               "potentialAction": {
//                 "@type": "SearchAction",
//                 "target": `${canonicalUrl}/search?q={search_term_string}`,
//                 "query-input": "required name=search_term_string"
//               }
//             })
//           }}
//         />

//         {/* Structured Data for Movie Collection */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(movieCollectionStructuredData)
//           }}
//         />

//         {/* Organization Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(organizationStructuredData)
//           }}
//         />

//         {/* Breadcrumb Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(breadcrumbStructuredData)
//           }}
//         />
//       </Head>

//       <Header />
//       <HeroSection movies={heroMovies} />
      
//       {/* Search and Filter Section */}
//       <div className="bg-black py-8">
//         <div className="container mx-auto px-4">
//           {/* Search Bar */}
//           <div className="max-w-2xl mx-auto mb-6">
//             <div className="relative">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search movies by title, actor, genre..."
//                 className="w-full bg-gray-800 text-white px-12 py-4 rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none transition-colors"
//               />
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
//             </div>
//           </div>

//           {/* Filter Controls */}
//           <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
//             <button
//               onClick={() => setShowFilters(!showFilters)}
//               className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
//             >
//               <Filter className="mr-2" size={20} />
//               Filters
//               {(filters.genre || filters.year || filters.category || filters.rating) && (
//                 <span className="ml-2 bg-red-600 text-xs px-2 py-1 rounded-full">
//                   Active
//                 </span>
//               )}
//             </button>

//             {(searchQuery || filters.genre || filters.year || filters.category || filters.rating) && (
//               <button
//                 onClick={clearFilters}
//                 className="flex items-center text-gray-400 hover:text-white transition"
//               >
//                 <X className="mr-1" size={16} />
//                 Clear All
//               </button>
//             )}
//           </div>

//           {/* Filters Panel */}
//           {showFilters && (
//             <div className="max-w-6xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-gray-800 rounded-lg">
//               {/* Genre Filter */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Genre</label>
//                 <select
//                   value={filters.genre}
//                   onChange={(e) => setFilters(prev => ({ ...prev, genre: e.target.value }))}
//                   className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
//                 >
//                   <option value="">All Genres</option>
//                   {filterOptions.genres.map(genre => (
//                     <option key={genre} value={genre}>{genre}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Year Filter */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Release Year</label>
//                 <select
//                   value={filters.year}
//                   onChange={(e) => setFilters(prev => ({ ...prev, year: e.target.value }))}
//                   className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
//                 >
//                   <option value="">All Years</option>
//                   {filterOptions.years.map(year => (
//                     <option key={year} value={year}>{year}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Category Filter */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
//                 <select
//                   value={filters.category}
//                   onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
//                   className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
//                 >
//                   <option value="">All Categories</option>
//                   {filterOptions.categories.map(category => (
//                     <option key={category} value={category}>{category}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Rating Filter */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Minimum Rating</label>
//                 <select
//                   value={filters.rating}
//                   onChange={(e) => setFilters(prev => ({ ...prev, rating: e.target.value }))}
//                   className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
//                 >
//                   <option value="">Any Rating</option>
//                   <option value="7">7+/10</option>
//                   <option value="6">6+/10</option>
//                   <option value="5">5+/10</option>
//                 </select>
//               </div>
//             </div>
//           )}

//           {/* Results Count */}
//           {hasActiveSearch && (
//             <div className="max-w-6xl mx-auto mb-6">
//               <div className="flex justify-between items-center">
//                 <h2 className="text-2xl font-bold text-white">
//                   Search Results
//                 </h2>
//                 <p className="text-gray-400">
//                   {filteredMovies.length} {filteredMovies.length === 1 ? 'movie' : 'movies'} found
//                 </p>
//               </div>
//             </div>
//           )}

//           {/* Content - Show search results or regular categories */}
//           {hasActiveSearch ? (
//             <div className="max-w-6xl mx-auto">
//               {displayedSearchResults.length > 0 ? (
//                 <>
//                   <MovieGrid movies={displayedSearchResults} title="" />
//                   {searchResultsLimit < filteredMovies.length && (
//                     <div className="text-center mt-8">
//                       <button
//                         onClick={loadMoreSearch}
//                         className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
//                       >
//                         Load More ({filteredMovies.length - displayedSearchResults.length} more movies)
//                       </button>
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <div className="text-center py-16">
//                   <Search className="mx-auto text-gray-400 mb-4" size={48} />
//                   <h3 className="text-xl font-semibold mb-2 text-white">No movies found</h3>
//                   <p className="text-gray-400">
//                     Try adjusting your search terms or filters to find what you're looking for.
//                   </p>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <>
//               {/* Latest Movies Section */}
//               <div className="max-w-6xl mx-auto">
//                 <MovieGrid movies={displayedLatestMovies} title="Latest Movies" />
//                 {latestMoviesLimit < gridMovies.length && (
//                   <div className="text-center mt-8">
//                     <button
//                       onClick={loadMoreLatest}
//                       className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
//                     >
//                       Load More Latest Movies ({gridMovies.length - displayedLatestMovies.length} more)
//                     </button>
//                   </div>
//                 )}
//               </div>

//               {/* All Movies Section */}
//               <div className="max-w-6xl mx-auto mt-12">
//                 <MovieGrid movies={displayedAllMovies} title="All Movies" />
//                 {allMoviesLimit < movies.length && (
//                   <div className="text-center mt-8">
//                     <button
//                       onClick={loadMoreAll}
//                       className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
//                     >
//                       Load More All Movies ({movies.length - displayedAllMovies.length} more)
//                     </button>
//                   </div>
//                 )}
//               </div>

//               {/* Adult Movies Section */}
//               <div className="max-w-6xl mx-auto mt-12">
//                 <MovieGrid 
//                   movies={displayedAdultMovies} 
//                   title="Adult Movies" 
//                 />
//                 {adultMoviesLimit < movies.filter(m => m.category === 'Adult').length && (
//                   <div className="text-center mt-8">
//                     <button
//                       onClick={loadMoreAdult}
//                       className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
//                     >
//                       Load More Adult Movies ({movies.filter(m => m.category === 'Adult').length - displayedAdultMovies.length} more)
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </>
//           )}
//         </div>
//       </div>
      
//       <Footer />
//     </div>
//   )
// }

// export async function getStaticProps() {
//   // Reverse to show latest first
//   const reversedMovies = [...moviesData].reverse()
  
//   return {
//     props: {
//       movies: reversedMovies,
//     },
//     revalidate: 3600, // Revalidate every hour
//   }
// }










































// import Head from 'next/head'
// import Header from '../components/Header'
// import HeroSection from '../components/HeroSection'
// import MovieGrid from '../components/MovieGrid'
// import Footer from '../components/Footer'
// import moviesData from '../data/data.json'
// import { useState, useMemo } from 'react'
// import { Search, Filter, X } from 'lucide-react'

// const SITE_URL = 'https://movieondemand.vercel.app'

// export default function Home({ movies }) {
//   const heroMovies = movies.slice(0, 5)
//   const gridMovies = movies.slice(5)
//   const canonicalUrl = SITE_URL
//   const siteName = 'Movie On Demand'
//   const siteDescription = 'Movie On Demand Service - Request any movie via Telegram by sending movie name, year, and language. We add requested movies within 24 hours.'

//   // Search and filter states
//   const [searchQuery, setSearchQuery] = useState('')
//   const [filters, setFilters] = useState({
//     genre: '',
//     year: '',
//     category: '',
//     rating: ''
//   })
//   const [showFilters, setShowFilters] = useState(false)

//   // Load more states for different sections
//   const [latestMoviesLimit, setLatestMoviesLimit] = useState(15)
//   const [allMoviesLimit, setAllMoviesLimit] = useState(15)
//   const [adultMoviesLimit, setAdultMoviesLimit] = useState(15)
//   const [searchResultsLimit, setSearchResultsLimit] = useState(15)

//   // Filter options
//   const filterOptions = useMemo(() => {
//     const genres = Array.from(new Set(movies.flatMap(movie => movie.genre?.split(', ') || []))).filter(Boolean)
//     const years = Array.from(new Set(movies.map(movie => movie.releaseYear || movie.year))).sort((a, b) => b - a)
//     const categories = Array.from(new Set(movies.map(movie => movie.category))).filter(Boolean)
    
//     return { genres, years, categories }
//   }, [movies])

//   // Filtered movies based on search and filters
//   const filteredMovies = useMemo(() => {
//     return movies.filter(movie => {
//       const matchesSearch = searchQuery === '' || 
//         movie.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         movie.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         movie.cast?.some(actor => actor.toLowerCase().includes(searchQuery.toLowerCase())) ||
//         movie.genre?.toLowerCase().includes(searchQuery.toLowerCase())

//       const matchesGenre = filters.genre === '' || 
//         movie.genre?.includes(filters.genre)
      
//       const matchesYear = filters.year === '' || 
//         String(movie.releaseYear || movie.year) === filters.year
      
//       const matchesCategory = filters.category === '' || 
//         movie.category === filters.category

//       const matchesRating = filters.rating === '' || 
//         (movie.rating && parseFloat(movie.rating) >= parseFloat(filters.rating))

//       return matchesSearch && matchesGenre && matchesYear && matchesCategory && matchesRating
//     })
//   }, [searchQuery, filters, movies])

//   // Sliced movies for different sections
//   const displayedLatestMovies = gridMovies.slice(0, latestMoviesLimit)
//   const displayedAllMovies = movies.slice(0, allMoviesLimit)
//   const adultMovies = movies.filter(m => m.category === 'Adult')
//   const displayedAdultMovies = adultMovies.slice(0, adultMoviesLimit)
//   const displayedSearchResults = filteredMovies.slice(0, searchResultsLimit)

//   const clearFilters = () => {
//     setFilters({
//       genre: '',
//       year: '',
//       category: '',
//       rating: ''
//     })
//     setSearchQuery('')
//     // Reset limits when clearing filters
//     setLatestMoviesLimit(15)
//     setAllMoviesLimit(15)
//     setAdultMoviesLimit(15)
//     setSearchResultsLimit(15)
//   }

//   const hasActiveSearch = searchQuery || Object.values(filters).some(f => f)

//   // Load more functions
//   const loadMoreLatest = () => {
//     setLatestMoviesLimit(prev => prev + 15)
//   }

//   const loadMoreAll = () => {
//     setAllMoviesLimit(prev => prev + 15)
//   }

//   const loadMoreAdult = () => {
//     setAdultMoviesLimit(prev => prev + 15)
//   }

//   const loadMoreSearch = () => {
//     setSearchResultsLimit(prev => prev + 15)
//   }

//   // Website Structured Data
//   const websiteStructuredData = {
//     "@context": "https://schema.org",
//     "@type": "WebSite",
//     "name": siteName,
//     "description": siteDescription,
//     "url": canonicalUrl,
//     "potentialAction": {
//       "@type": "SearchAction",
//       "target": `${canonicalUrl}/?search={search_term_string}`,
//       "query-input": "required name=search_term_string"
//     }
//   }

//   // Organization Structured Data
//   const organizationStructuredData = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     "name": siteName,
//     "description": siteDescription,
//     "url": canonicalUrl,
//     "logo": `${canonicalUrl}/logo.png`,
//     "sameAs": []
//   }

//   // Breadcrumb Structured Data
//   const breadcrumbStructuredData = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": canonicalUrl
//       }
//     ]
//   }

//   return (
//     <div className="min-h-screen bg-black">
//       <Head>
//         <title>Movie On Demand - Request Any Movie via Telegram</title>
//         <meta name="description" content={siteDescription} />
//         <meta name="keywords" content="movie on demand, telegram movies, request movies, bollywood movies, hollywood movies, latest movies" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
//         <link rel="canonical" href={canonicalUrl} />
        
//         {/* Open Graph */}
//         <meta property="og:title" content="Movie On Demand - Request Any Movie via Telegram" />
//         <meta property="og:description" content={siteDescription} />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content={canonicalUrl} />
//         <meta property="og:image" content={`${canonicalUrl}/og-image.jpg`} />
//         <meta property="og:image:width" content="1200" />
//         <meta property="og:image:height" content="630" />
//         <meta property="og:image:alt" content="Movie On Demand - Request Any Movie via Telegram" />
//         <meta property="og:site_name" content={siteName} />
//         <meta property="og:locale" content="en_US" />
        
//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Movie On Demand - Request Any Movie via Telegram" />
//         <meta name="twitter:description" content={siteDescription} />
//         <meta name="twitter:image" content={`${canonicalUrl}/og-image.jpg`} />
//         <meta name="twitter:image:alt" content="Movie On Demand - Request Any Movie via Telegram" />
        
//         {/* Additional Meta Tags */}
//         <meta name="author" content="Movie On Demand" />
//         <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
//         <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
//         <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
//         {/* Favicon Links */}
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
//         <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
//         <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
//         <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

//         {/* Structured Data for Website */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(websiteStructuredData)
//           }}
//         />

//         {/* Organization Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(organizationStructuredData)
//           }}
//         />

//         {/* Breadcrumb Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(breadcrumbStructuredData)
//           }}
//         />
//       </Head>

//       <Header />
//       <HeroSection movies={heroMovies} />
      
//       {/* Search and Filter Section */}
//       <div className="bg-black py-8">
//         <div className="container mx-auto px-4">
//           {/* Search Bar */}
//           <div className="max-w-2xl mx-auto mb-6">
//             <div className="relative">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search movies by title, actor, genre..."
//                 className="w-full bg-gray-800 text-white px-12 py-4 rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none transition-colors"
//               />
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
//             </div>
//           </div>

//           {/* Filter Controls */}
//           <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
//             <button
//               onClick={() => setShowFilters(!showFilters)}
//               className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
//             >
//               <Filter className="mr-2" size={20} />
//               Filters
//               {(filters.genre || filters.year || filters.category || filters.rating) && (
//                 <span className="ml-2 bg-red-600 text-xs px-2 py-1 rounded-full">
//                   Active
//                 </span>
//               )}
//             </button>

//             {(searchQuery || filters.genre || filters.year || filters.category || filters.rating) && (
//               <button
//                 onClick={clearFilters}
//                 className="flex items-center text-gray-400 hover:text-white transition"
//               >
//                 <X className="mr-1" size={16} />
//                 Clear All
//               </button>
//             )}
//           </div>

//           {/* Filters Panel */}
//           {showFilters && (
//             <div className="max-w-6xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-gray-800 rounded-lg">
//               {/* Genre Filter */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Genre</label>
//                 <select
//                   value={filters.genre}
//                   onChange={(e) => setFilters(prev => ({ ...prev, genre: e.target.value }))}
//                   className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
//                 >
//                   <option value="">All Genres</option>
//                   {filterOptions.genres.map(genre => (
//                     <option key={genre} value={genre}>{genre}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Year Filter */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Release Year</label>
//                 <select
//                   value={filters.year}
//                   onChange={(e) => setFilters(prev => ({ ...prev, year: e.target.value }))}
//                   className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
//                 >
//                   <option value="">All Years</option>
//                   {filterOptions.years.map(year => (
//                     <option key={year} value={year}>{year}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Category Filter */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
//                 <select
//                   value={filters.category}
//                   onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
//                   className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
//                 >
//                   <option value="">All Categories</option>
//                   {filterOptions.categories.map(category => (
//                     <option key={category} value={category}>{category}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Rating Filter */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Minimum Rating</label>
//                 <select
//                   value={filters.rating}
//                   onChange={(e) => setFilters(prev => ({ ...prev, rating: e.target.value }))}
//                   className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
//                 >
//                   <option value="">Any Rating</option>
//                   <option value="7">7+/10</option>
//                   <option value="6">6+/10</option>
//                   <option value="5">5+/10</option>
//                 </select>
//               </div>
//             </div>
//           )}

//           {/* Results Count */}
//           {hasActiveSearch && (
//             <div className="max-w-6xl mx-auto mb-6">
//               <div className="flex justify-between items-center">
//                 <h2 className="text-2xl font-bold text-white">
//                   Search Results
//                 </h2>
//                 <p className="text-gray-400">
//                   {filteredMovies.length} {filteredMovies.length === 1 ? 'movie' : 'movies'} found
//                 </p>
//               </div>
//             </div>
//           )}

//           {/* Content - Show search results or regular categories */}
//           {hasActiveSearch ? (
//             <div className="max-w-6xl mx-auto">
//               {displayedSearchResults.length > 0 ? (
//                 <>
//                   <MovieGrid movies={displayedSearchResults} title="" />
//                   {searchResultsLimit < filteredMovies.length && (
//                     <div className="text-center mt-8">
//                       <button
//                         onClick={loadMoreSearch}
//                         className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
//                       >
//                         Load More ({filteredMovies.length - displayedSearchResults.length} more movies)
//                       </button>
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <div className="text-center py-16">
//                   <Search className="mx-auto text-gray-400 mb-4" size={48} />
//                   <h3 className="text-xl font-semibold mb-2 text-white">No movies found</h3>
//                   <p className="text-gray-400">
//                     Try adjusting your search terms or filters to find what you're looking for.
//                   </p>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <>
//               {/* Latest Movies Section */}
//               <div className="max-w-6xl mx-auto mb-12">
//                 <MovieGrid movies={displayedLatestMovies} title="Latest Movies" />
//                 {/* {latestMoviesLimit < gridMovies.length && (
//                   <div className="text-center mt-8">
//                     <button
//                       onClick={loadMoreLatest}
//                       className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
//                     >
//                       Load More Latest Movies ({gridMovies.length - displayedLatestMovies.length} more)
//                     </button>
//                   </div>
//                 )} */}
//               </div>

//               {/* All Movies Section */}
//               <div className="max-w-6xl mx-auto mb-12">
//                 <MovieGrid movies={displayedAllMovies} title="All Movies" />
//                 {allMoviesLimit < movies.length && (
//                   <div className="text-center mt-8">
//                     <button
//                       onClick={loadMoreAll}
//                       className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
//                     >
//                       Load More All Movies ({movies.length - displayedAllMovies.length} more)
//                     </button>
//                   </div>
//                 )}
//               </div>

//               {/* Adult Movies Section */}
//               {adultMovies.length > 0 && (
//                 <div className="max-w-6xl mx-auto mb-12">
//                   <MovieGrid 
//                     movies={displayedAdultMovies} 
//                     title="Adult Movies" 
//                   />
//                   {adultMoviesLimit < adultMovies.length && (
//                     <div className="text-center mt-8">
//                       <button
//                         onClick={loadMoreAdult}
//                         className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
//                       >
//                         Load More Adult Movies ({adultMovies.length - displayedAdultMovies.length} more)
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </div>
      
//       <Footer />
//     </div>
//   )
// }

// export async function getStaticProps() {
//   // Reverse to show latest first
//   const reversedMovies = [...moviesData].reverse()
  
//   return {
//     props: {
//       movies: reversedMovies,
//     },
//     revalidate: 3600, // Revalidate every hour
//   }
// }












import Head from 'next/head'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import MovieGrid from '../components/MovieGrid'
import Footer from '../components/Footer'
import moviesData from '../data/data.json'
import { useState, useMemo, useEffect } from 'react'
import { Search, Filter, X, Star, Calendar, Video, Users, Play, Download, Film } from 'lucide-react'

const SITE_URL = 'https://movieondemand.vercel.app'
const TELEGRAM_LINK = 'https://t.me/onlyondemand'

// Generate LSI Keywords for a specific movie
const generateLSIKeywordsForMovie = (movie) => {
  if (!movie || !movie.title) return ''
  
  const base = [
    `${movie.title} full movie`,
    `watch ${movie.title} online free`,
    `${movie.title} ${movie.releaseYear || movie.year || ''}`,
    `${movie.title} streaming`,
    `${movie.title} download`,
    `${movie.title} free online`,
    `${movie.title} hd`,
    `${movie.title} movie online`,
    `${movie.title} watch free`,
    `${movie.title} ${movie.quality || ''}`,
    `${movie.title} with english subtitles`,
    `${movie.title} without ads`,
    `${movie.title} no registration`,
    `${movie.title} free streaming`,
    `${movie.title} complete film`,
    `${movie.title} online movie`,
    `${movie.title} free hd`,
    `${movie.title} 1080p`,
    `${movie.title} 720p`,
    `${movie.title} bluray`,
    `${movie.title} dvdrip`,
    `${movie.title} torrent`,
    `${movie.title} direct link`,
    `${movie.title} putlocker`,
    `${movie.title} fmovies`,
    `${movie.title} 123movies`,
    `${movie.title} gomovies`,
    `${movie.title} solarmovie`,
    `${movie.title} yesmovies`,
    `${movie.title} xmovies8`,
    `${movie.title} movie4k`,
    `${movie.title} stream online`,
    `${movie.title} free movie site`,
    `${movie.title} online free hd`,
    `${movie.title} watch full movie`,
    `${movie.title} free watch online`,
    `${movie.title} movie free online`
  ]
  
  const lsi = [
    'free movies online', 'watch movies free', 'streaming movies', 'hd movies online',
    'full movies online', 'movies online free', 'watch free movies', 'online movie streaming',
    'free hd movies', 'movie streaming sites', 'free movie websites', 'watch movies online free',
    'online movies free', 'free streaming movies', 'watch full movies', 'movie sites free',
    'free online movies', 'stream movies free', 'hd movies free', 'full hd movies online',
    'free movie streaming', 'online free movies', 'watch hd movies free', 'movies streaming free',
    'free movies streaming', 'watch online movies', 'stream free movies', 'hd movies online free',
    'full movies free', 'online movie free', 'free movie sites', 'movies online streaming',
    'watch free hd movies', 'streaming movies free', 'online movies streaming', 'free full movies',
    'movies free online', 'watch movies online hd', 'free movies hd', 'online hd movies',
    'stream movies online', 'free movies to watch', 'watch full hd movies', 'movies stream free',
    'free online movie', 'hd movies streaming', 'full movies online free', 'movie streaming free'
  ]
  
  return [...base, ...lsi].join(', ')
}

// Generate LSI Keywords for the entire site
const generateSiteLSIKeywords = (topMovies, topGenres) => {
  const base = [
    'movie on demand',
    'telegram movies',
    'request movies',
    'latest movies',
    'free movies online',
    'movie streaming',
    'watch movies online',
    'hd movies',
    'bollywood movies',
    'hollywood movies',
    'adult movies',
    'south indian movies',
    'movie download',
    'free streaming',
    'online movie collection',
    'watch free movies',
    'full movies online',
    'hd movies online',
    'free hd movies',
    'movie streaming sites',
    'free movie websites',
    'watch movies online free',
    'online movies free',
    'free streaming movies',
    'watch full movies',
    'movie sites free',
    'free online movies',
    'stream movies free',
    'hd movies free',
    'full hd movies online',
    'free movie streaming',
    'online free movies',
    'watch hd movies free',
    'movies streaming free',
    'free movies streaming',
    'watch online movies',
    'stream free movies',
    'hd movies online free',
    'full movies free',
    'online movie free',
    'free movie sites',
    'movies online streaming',
    'watch free hd movies',
    'streaming movies free',
    'online movies streaming',
    'free full movies',
    'movies free online',
    'watch movies online hd',
    'free movies hd',
    'online hd movies',
    'stream movies online',
    'free movies to watch',
    'watch full hd movies',
    'movies stream free',
    'free online movie',
    'hd movies streaming',
    'full movies online free',
    'movie streaming free'
  ]

  const movieKeywords = topMovies.slice(0, 5).flatMap(movie => [
    `${movie.title} full movie`,
    `watch ${movie.title} online free`,
    `${movie.title} ${movie.releaseYear || movie.year || ''}`,
    `${movie.title} streaming`,
    `${movie.title} download`
  ])

  const genreKeywords = topGenres.slice(0, 5).flatMap(genre => [
    `watch ${genre} movies online free`,
    `${genre} movies full free`,
    `latest ${genre} movies`,
    `${genre} movies 2024`,
    `${genre} movies hd`,
    `free ${genre} movies online`,
    `${genre} movies online free`,
    `stream ${genre} movies`,
    `${genre} movies download`
  ])

  return [...base, ...movieKeywords, ...genreKeywords].join(', ')
}

// Clean and validate data for JSON-LD
const cleanForJSONLD = (value) => {
  if (!value) return ''
  return String(value).replace(/[\\"']/g, '\\$&').replace(/\n/g, ' ')
}

export default function Home({ movies }) {
  const heroMovies = movies.slice(0, 5)
  const gridMovies = movies.slice(5)
  const canonicalUrl = SITE_URL
  const siteName = 'Movie On Demand'
  const siteDescription = 'Movie On Demand Service - Request any movie via Telegram by sending movie name, year, and language. We add requested movies within 24 hours.'
  
  const topGenres = useMemo(() => {
    const allGenres = movies.flatMap(m => m.genre?.split(', ') || [])
    const counts = {}
    allGenres.forEach(genre => {
      counts[genre] = (counts[genre] || 0) + 1
    })
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([genre]) => genre)
  }, [movies])

  const currentYear = new Date().getFullYear()
  const siteLSIKeywords = generateSiteLSIKeywords(movies.slice(0, 5), topGenres)
  
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    genre: '',
    year: '',
    category: '',
    rating: ''
  })
  const [showFilters, setShowFilters] = useState(false)

  // Load more states
  const [latestMoviesLimit, setLatestMoviesLimit] = useState(15)
  const [allMoviesLimit, setAllMoviesLimit] = useState(30)
  const [adultMoviesLimit, setAdultMoviesLimit] = useState(15)
  const [searchResultsLimit, setSearchResultsLimit] = useState(30)

  // Filter options
  const filterOptions = useMemo(() => {
    const genres = Array.from(new Set(movies.flatMap(movie => movie.genre?.split(', ') || []))).filter(Boolean)
    const years = Array.from(new Set(movies.map(movie => movie.releaseYear || movie.year))).sort((a, b) => b - a)
    const categories = Array.from(new Set(movies.map(movie => movie.category))).filter(Boolean)
    
    return { genres, years, categories }
  }, [movies])

  // Filtered movies
  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {
      const matchesSearch = searchQuery === '' || 
        movie.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.cast?.some(actor => actor.toLowerCase().includes(searchQuery.toLowerCase())) ||
        movie.genre?.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesGenre = filters.genre === '' || 
        movie.genre?.includes(filters.genre)
      
      const matchesYear = filters.year === '' || 
        String(movie.releaseYear || movie.year) === filters.year
      
      const matchesCategory = filters.category === '' || 
        movie.category === filters.category

      const matchesRating = filters.rating === '' || 
        (movie.rating && parseFloat(movie.rating) >= parseFloat(filters.rating))

      return matchesSearch && matchesGenre && matchesYear && matchesCategory && matchesRating
    })
  }, [searchQuery, filters, movies])

  // Displayed movies
  const displayedLatestMovies = gridMovies.slice(0, latestMoviesLimit)
  const displayedAllMovies = movies.slice(0, allMoviesLimit)
  const adultMovies = movies.filter(m => m.category === 'Adult')
  const displayedAdultMovies = adultMovies.slice(0, adultMoviesLimit)
  const displayedSearchResults = filteredMovies.slice(0, searchResultsLimit)

  const clearFilters = () => {
    setFilters({ genre: '', year: '', category: '', rating: '' })
    setSearchQuery('')
    setLatestMoviesLimit(15)
    setAllMoviesLimit(30)
    setAdultMoviesLimit(15)
    setSearchResultsLimit(30)
  }

  const hasActiveSearch = searchQuery || Object.values(filters).some(f => f)

  // Load more functions
  const loadMoreLatest = () => setLatestMoviesLimit(prev => prev + 15)
  const loadMoreAll = () => setAllMoviesLimit(prev => prev + 30)
  const loadMoreAdult = () => setAdultMoviesLimit(prev => prev + 15)
  const loadMoreSearch = () => setSearchResultsLimit(prev => prev + 30)

  // ============ FIXED STRUCTURED DATA (GSC VALIDATED) ============
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": cleanForJSONLD(siteName),
    "description": cleanForJSONLD(siteDescription),
    "url": canonicalUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${canonicalUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": cleanForJSONLD(siteName),
    "description": cleanForJSONLD(siteDescription),
    "url": canonicalUrl,
    "logo": `${canonicalUrl}/logo.png`,
    "sameAs": [TELEGRAM_LINK]
  }

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": canonicalUrl
      }
    ]
  }

  // FIXED: Simple Movie Collection without invalid properties
  const movieCollectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Latest Movies Collection",
    "description": "Collection of movies available on demand",
    "url": canonicalUrl,
    "numberOfItems": Math.min(movies.length, 20),
    "itemListElement": movies.slice(0, 20).map((movie, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Movie",
        "name": cleanForJSONLD(movie.title),
        "description": cleanForJSONLD(movie.description),
        "image": movie.thumbnail,
        "dateCreated": movie.releaseYear || movie.year,
        "genre": movie.genre ? movie.genre.split(', ')[0] : "Movie"
      }
    }))
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to request a movie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Send movie name, release year, and language to our Telegram channel. We add requested movies within 24 hours for free streaming."
        }
      },
      {
        "@type": "Question",
        "name": "Is this service free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all movies are available for free streaming. No subscription, registration, or payment required."
        }
      },
      {
        "@type": "Question",
        "name": "What movie categories are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We have Hollywood movies, Bollywood movies, South Indian movies, Adult movies, and movies from various languages and genres."
        }
      }
    ]
  }

  const enhancedDescription = `${siteDescription} Watch latest Hollywood, Bollywood, and ${topGenres.slice(0, 3).join(', ')} movies in HD quality. Free streaming, no registration required.`

  // Check for duplicate structured data
  const allStructuredData = [
    websiteStructuredData,
    organizationStructuredData,
    breadcrumbStructuredData,
    movieCollectionStructuredData,
    faqStructuredData
  ]

  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Movie On Demand - Watch & Request Any Movie via Telegram | HD Movies Free Streaming</title>
        <meta name="description" content={enhancedDescription} />
        <meta name="keywords" content={siteLSIKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph - SIMPLIFIED */}
        <meta property="og:title" content="Movie On Demand - Watch & Request Any Movie via Telegram" />
        <meta property="og:description" content={enhancedDescription.substring(0, 155)} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${canonicalUrl}/og-image.jpg`} />
        <meta property="og:site_name" content={siteName} />
        
        {/* Twitter Card - SIMPLIFIED */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Movie On Demand - Watch & Request Any Movie via Telegram" />
        <meta name="twitter:description" content={enhancedDescription.substring(0, 155)} />
        <meta name="twitter:image" content={`${canonicalUrl}/og-image.jpg`} />
        
        {/* Basic Meta Tags */}
        <meta name="author" content="Movie On Demand" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* FIXED: Single structured data script to avoid GSC errors */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                websiteStructuredData,
                organizationStructuredData,
                breadcrumbStructuredData,
                movieCollectionStructuredData,
                faqStructuredData
              ]
            })
          }}
        />
      </Head>

      <Header />
      <HeroSection movies={heroMovies} />
      
      <div className="bg-gradient-to-b from-gray-900 to-black py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Movie On Demand - Watch Latest Movies Free in HD Quality
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Stream {movies.length}+ latest Hollywood, Bollywood, and international movies for free. 
              Request any movie via Telegram and get it added within 24 hours.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="bg-gray-800 p-6 rounded-lg">
                <Film className="mx-auto text-red-500 mb-2" size={32} />
                <div className="text-3xl font-bold text-white">{movies.length}+</div>
                <div className="text-gray-400">Movies</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Play className="mx-auto text-red-500 mb-2" size={32} />
                <div className="text-3xl font-bold text-white">HD</div>
                <div className="text-gray-400">Quality</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Download className="mx-auto text-red-500 mb-2" size={32} />
                <div className="text-3xl font-bold text-white">24h</div>
                <div className="text-gray-400">Request Time</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Star className="mx-auto text-red-500 mb-2" size={32} />
                <div className="text-3xl font-bold text-white">Free</div>
                <div className="text-gray-400">No Subscription</div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search movies by title, actor, genre..."
                className="w-full bg-gray-800 text-white px-14 py-5 rounded-xl border-2 border-gray-700 focus:border-red-500 focus:outline-none transition-colors text-lg"
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={28} />
              <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                {filteredMovies.length} results
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-6 justify-center">
              <button 
                onClick={() => setFilters({...filters, year: currentYear.toString()})}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                {currentYear} Movies
              </button>
              {topGenres.slice(0, 5).map(genre => (
                <button 
                  key={genre}
                  onClick={() => setFilters({...filters, genre})}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Filter className="mr-2" size={20} />
              Filters
              {(filters.genre || filters.year || filters.category || filters.rating) && (
                <span className="ml-2 bg-white text-red-600 text-xs px-2 py-1 rounded-full">
                  Active
                </span>
              )}
            </button>

            {(searchQuery || filters.genre || filters.year || filters.category || filters.rating) && (
              <button
                onClick={clearFilters}
                className="flex items-center text-gray-400 hover:text-white transition"
              >
                <X className="mr-1" size={16} />
                Clear All
              </button>
            )}
          </div>

          {showFilters && (
            <div className="max-w-6xl mx-auto mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-gray-800 rounded-xl">
              {[
                { label: "Genre", value: filters.genre, options: filterOptions.genres, key: "genre" },
                { label: "Release Year", value: filters.year, options: filterOptions.years, key: "year" },
                { label: "Category", value: filters.category, options: filterOptions.categories, key: "category" },
                { label: "Minimum Rating", value: filters.rating, 
                  options: ["", "7", "6", "5"], 
                  labels: ["Any Rating", "7+/10", "6+/10", "5+/10"], 
                  key: "rating" 
                }
              ].map(({ label, value, options, labels, key }) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
                  <select
                    value={value}
                    onChange={(e) => setFilters(prev => ({ ...prev, [key]: e.target.value }))}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-red-500 focus:outline-none"
                  >
                    {options.map((option, index) => (
                      <option key={option || index} value={option}>
                        {labels ? labels[index] : option || `All ${label}s`}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          )}

          {hasActiveSearch && (
            <div className="max-w-6xl mx-auto mb-8">
              <div className="flex justify-between items-center bg-gray-800 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-white">
                  Search Results for "{searchQuery || "Filters"}"
                </h2>
                <p className="text-gray-400 text-lg">
                  Found <span className="text-red-500 font-bold">{filteredMovies.length}</span> movies
                </p>
              </div>
            </div>
          )}

          {hasActiveSearch ? (
            <div className="max-w-6xl mx-auto">
              {displayedSearchResults.length > 0 ? (
                <>
                  <MovieGrid 
                    movies={displayedSearchResults} 
                    title={searchQuery ? `Results for "${searchQuery}"` : "Filtered Movies"} 
                  />
                  {searchResultsLimit < filteredMovies.length && (
                    <div className="text-center mt-12">
                      <button
                        onClick={loadMoreSearch}
                        className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors"
                      >
                        Load More Movies ({filteredMovies.length - displayedSearchResults.length} more)
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-16 bg-gray-800 rounded-xl">
                  <Search className="mx-auto text-gray-400 mb-6" size={64} />
                  <h3 className="text-2xl font-bold mb-4 text-white">No Movies Found</h3>
                  <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                    We couldn't find any movies matching your search. Try different keywords or request this movie via Telegram.
                  </p>
                  <a 
                    href={TELEGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                  >
                    Request Movie on Telegram
                  </a>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="max-w-6xl mx-auto mb-16">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-white">
                    Latest Added Movies
                  </h2>
                  <span className="text-gray-400">
                    Updated daily • {gridMovies.length} movies
                  </span>
                </div>
                <MovieGrid movies={displayedLatestMovies} title="" />
                {/* {latestMoviesLimit < gridMovies.length && (
                  <div className="text-center mt-8">
                    <button
                      onClick={loadMoreLatest}
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Load More Latest Movies ({gridMovies.length - displayedLatestMovies.length} more)
                    </button>
                  </div>
                )} */}
              </div>

              <div className="max-w-6xl mx-auto mb-16">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-white">
                    Complete Movie Collection
                  </h2>
                  <span className="text-gray-400">
                    {movies.length} total movies • All genres
                  </span>
                </div>
                <MovieGrid movies={displayedAllMovies} title="" />
                {allMoviesLimit < movies.length && (
                  <div className="text-center mt-12">
                    <button
                      onClick={loadMoreAll}
                      className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors"
                    >
                      Load More Movies ({movies.length - displayedAllMovies.length} more)
                    </button>
                  </div>
                )}
              </div>

              {adultMovies.length > 0 && (
                <div className="max-w-6xl mx-auto mb-16">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-white">
                      Adult Movies Collection
                    </h2>
                    <span className="text-gray-400">
                      {adultMovies.length} movies • 18+ Only
                    </span>
                  </div>
                  <MovieGrid movies={displayedAdultMovies} title="" />
                  {adultMoviesLimit < adultMovies.length && (
                    <div className="text-center mt-12">
                      <button
                        onClick={loadMoreAdult}
                        className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors"
                      >
                        Load More Adult Movies ({adultMovies.length - displayedAdultMovies.length} more)
                      </button>
                    </div>
                  )}
                </div>
              )}

              <div className="max-w-6xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-white mb-10 text-center">Browse by Genre</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {topGenres.map(genre => {
                    const genreMovies = movies.filter(m => m.genre?.includes(genre)).length
                    return (
                      <button
                        key={genre}
                        onClick={() => {
                          setFilters({...filters, genre})
                          window.scrollTo({ top: 500, behavior: 'smooth' })
                        }}
                        className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg text-center transition-colors"
                      >
                        <div className="text-white font-semibold">{genre}</div>
                        <div className="text-gray-400 text-sm mt-1">{genreMovies} movies</div>
                      </button>
                    )
                  })}
                </div>
              </div>
            </>
          )}

          <div className="max-w-6xl mx-auto mt-16 p-8 bg-gray-800 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Movie On Demand - Free Movie Streaming</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                <strong>Movie On Demand</strong> offers thousands of movies across all genres. 
                Watch latest Hollywood, Bollywood, and international movies in HD quality for free.
              </p>
              <p>
                <strong>Features:</strong> HD streaming, no registration, daily updates, and request movies via Telegram.
              </p>
              <p>
                <strong>Popular:</strong> Latest movies {currentYear}, Hollywood movies, Bollywood movies, 
                South Indian movies, action, comedy, thriller, horror, romance, and adult movies.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const reversedMovies = [...moviesData].reverse()
  
  return {
    props: {
      movies: reversedMovies,
    },
    revalidate: 1800,
  }
}