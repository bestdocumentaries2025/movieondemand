


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










































import Head from 'next/head'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import MovieGrid from '../components/MovieGrid'
import Footer from '../components/Footer'
import moviesData from '../data/data.json'
import { useState, useMemo } from 'react'
import { Search, Filter, X } from 'lucide-react'

const SITE_URL = 'https://movieondemand.vercel.app'

export default function Home({ movies }) {
  const heroMovies = movies.slice(0, 5)
  const gridMovies = movies.slice(5)
  const canonicalUrl = SITE_URL
  const siteName = 'Movie On Demand'
  const siteDescription = 'Movie On Demand Service - Request any movie via Telegram by sending movie name, year, and language. We add requested movies within 24 hours.'

  // Search and filter states
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    genre: '',
    year: '',
    category: '',
    rating: ''
  })
  const [showFilters, setShowFilters] = useState(false)

  // Load more states for different sections
  const [latestMoviesLimit, setLatestMoviesLimit] = useState(15)
  const [allMoviesLimit, setAllMoviesLimit] = useState(15)
  const [adultMoviesLimit, setAdultMoviesLimit] = useState(15)
  const [searchResultsLimit, setSearchResultsLimit] = useState(15)

  // Filter options
  const filterOptions = useMemo(() => {
    const genres = Array.from(new Set(movies.flatMap(movie => movie.genre?.split(', ') || []))).filter(Boolean)
    const years = Array.from(new Set(movies.map(movie => movie.releaseYear || movie.year))).sort((a, b) => b - a)
    const categories = Array.from(new Set(movies.map(movie => movie.category))).filter(Boolean)
    
    return { genres, years, categories }
  }, [movies])

  // Filtered movies based on search and filters
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

  // Sliced movies for different sections
  const displayedLatestMovies = gridMovies.slice(0, latestMoviesLimit)
  const displayedAllMovies = movies.slice(0, allMoviesLimit)
  const adultMovies = movies.filter(m => m.category === 'Adult')
  const displayedAdultMovies = adultMovies.slice(0, adultMoviesLimit)
  const displayedSearchResults = filteredMovies.slice(0, searchResultsLimit)

  const clearFilters = () => {
    setFilters({
      genre: '',
      year: '',
      category: '',
      rating: ''
    })
    setSearchQuery('')
    // Reset limits when clearing filters
    setLatestMoviesLimit(15)
    setAllMoviesLimit(15)
    setAdultMoviesLimit(15)
    setSearchResultsLimit(15)
  }

  const hasActiveSearch = searchQuery || Object.values(filters).some(f => f)

  // Load more functions
  const loadMoreLatest = () => {
    setLatestMoviesLimit(prev => prev + 15)
  }

  const loadMoreAll = () => {
    setAllMoviesLimit(prev => prev + 15)
  }

  const loadMoreAdult = () => {
    setAdultMoviesLimit(prev => prev + 15)
  }

  const loadMoreSearch = () => {
    setSearchResultsLimit(prev => prev + 15)
  }

  // Website Structured Data
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "description": siteDescription,
    "url": canonicalUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${canonicalUrl}/?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  // Organization Structured Data
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "description": siteDescription,
    "url": canonicalUrl,
    "logo": `${canonicalUrl}/logo.png`,
    "sameAs": []
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
        "item": canonicalUrl
      }
    ]
  }

  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Movie On Demand - Request Any Movie via Telegram</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content="movie on demand, telegram movies, request movies, bollywood movies, hollywood movies, latest movies" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Movie On Demand - Request Any Movie via Telegram" />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${canonicalUrl}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Movie On Demand - Request Any Movie via Telegram" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Movie On Demand - Request Any Movie via Telegram" />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={`${canonicalUrl}/og-image.jpg`} />
        <meta name="twitter:image:alt" content="Movie On Demand - Request Any Movie via Telegram" />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Movie On Demand" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* Structured Data for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData)
          }}
        />

        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData)
          }}
        />

        {/* Breadcrumb Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbStructuredData)
          }}
        />
      </Head>

      <Header />
      <HeroSection movies={heroMovies} />
      
      {/* Search and Filter Section */}
      <div className="bg-black py-8">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search movies by title, actor, genre..."
                className="w-full bg-gray-800 text-white px-12 py-4 rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none transition-colors"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
            </div>
          </div>

          {/* Filter Controls */}
          <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <Filter className="mr-2" size={20} />
              Filters
              {(filters.genre || filters.year || filters.category || filters.rating) && (
                <span className="ml-2 bg-red-600 text-xs px-2 py-1 rounded-full">
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

          {/* Filters Panel */}
          {showFilters && (
            <div className="max-w-6xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-gray-800 rounded-lg">
              {/* Genre Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Genre</label>
                <select
                  value={filters.genre}
                  onChange={(e) => setFilters(prev => ({ ...prev, genre: e.target.value }))}
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                >
                  <option value="">All Genres</option>
                  {filterOptions.genres.map(genre => (
                    <option key={genre} value={genre}>{genre}</option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Release Year</label>
                <select
                  value={filters.year}
                  onChange={(e) => setFilters(prev => ({ ...prev, year: e.target.value }))}
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                >
                  <option value="">All Years</option>
                  {filterOptions.years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                >
                  <option value="">All Categories</option>
                  {filterOptions.categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Minimum Rating</label>
                <select
                  value={filters.rating}
                  onChange={(e) => setFilters(prev => ({ ...prev, rating: e.target.value }))}
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                >
                  <option value="">Any Rating</option>
                  <option value="7">7+/10</option>
                  <option value="6">6+/10</option>
                  <option value="5">5+/10</option>
                </select>
              </div>
            </div>
          )}

          {/* Results Count */}
          {hasActiveSearch && (
            <div className="max-w-6xl mx-auto mb-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">
                  Search Results
                </h2>
                <p className="text-gray-400">
                  {filteredMovies.length} {filteredMovies.length === 1 ? 'movie' : 'movies'} found
                </p>
              </div>
            </div>
          )}

          {/* Content - Show search results or regular categories */}
          {hasActiveSearch ? (
            <div className="max-w-6xl mx-auto">
              {displayedSearchResults.length > 0 ? (
                <>
                  <MovieGrid movies={displayedSearchResults} title="" />
                  {searchResultsLimit < filteredMovies.length && (
                    <div className="text-center mt-8">
                      <button
                        onClick={loadMoreSearch}
                        className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Load More ({filteredMovies.length - displayedSearchResults.length} more movies)
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-16">
                  <Search className="mx-auto text-gray-400 mb-4" size={48} />
                  <h3 className="text-xl font-semibold mb-2 text-white">No movies found</h3>
                  <p className="text-gray-400">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Latest Movies Section */}
              <div className="max-w-6xl mx-auto mb-12">
                <MovieGrid movies={displayedLatestMovies} title="Latest Movies" />
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

              {/* All Movies Section */}
              <div className="max-w-6xl mx-auto mb-12">
                <MovieGrid movies={displayedAllMovies} title="All Movies" />
                {allMoviesLimit < movies.length && (
                  <div className="text-center mt-8">
                    <button
                      onClick={loadMoreAll}
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Load More All Movies ({movies.length - displayedAllMovies.length} more)
                    </button>
                  </div>
                )}
              </div>

              {/* Adult Movies Section */}
              {adultMovies.length > 0 && (
                <div className="max-w-6xl mx-auto mb-12">
                  <MovieGrid 
                    movies={displayedAdultMovies} 
                    title="Adult Movies" 
                  />
                  {adultMoviesLimit < adultMovies.length && (
                    <div className="text-center mt-8">
                      <button
                        onClick={loadMoreAdult}
                        className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Load More Adult Movies ({adultMovies.length - displayedAdultMovies.length} more)
                      </button>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  // Reverse to show latest first
  const reversedMovies = [...moviesData].reverse()
  
  return {
    props: {
      movies: reversedMovies,
    },
    revalidate: 3600, // Revalidate every hour
  }
}