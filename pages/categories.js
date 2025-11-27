// // pages/categories.js
// import { useState } from 'react'
// import MovieGrid from '../components/MovieGrid'
// import moviesData from '../data/data.json'
// import Head from 'next/head'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
// import { ChevronDown, ChevronUp, Grid, List } from 'lucide-react'

// export default function CategoriesPage() {
//   // Reverse the array to get latest entries first
//   const reversedMovies = [...moviesData].reverse()
  
//   const categories = Array.from(new Set(reversedMovies.map(movie => movie.category)))
//   const genres = Array.from(new Set(reversedMovies.flatMap(movie => movie.genre.split(', '))))
  
//   const [selectedCategory, setSelectedCategory] = useState(null)
//   const [selectedGenre, setSelectedGenre] = useState(null)
//   const [viewMode, setViewMode] = useState('grid')
//   const [sortBy, setSortBy] = useState('latest')

//   const canonicalUrl = 'https://movieondemand.vercel.app/categories'
//   const siteName = 'Movie On Demand'

//   // Filter movies based on selected category and genre
//   const filteredMovies = reversedMovies.filter(movie => {
//     const categoryMatch = !selectedCategory || movie.category === selectedCategory
//     const genreMatch = !selectedGenre || movie.genre.includes(selectedGenre)
//     return categoryMatch && genreMatch
//   })

//   // Sort movies based on selected sort option
//   const sortedMovies = [...filteredMovies].sort((a, b) => {
//     switch (sortBy) {
//       case 'latest':
//         return new Date(b.releaseYear || b.year) - new Date(a.releaseYear || a.year)
//       case 'title':
//         return a.title.localeCompare(b.title)
//       case 'rating':
//         return (b.rating || 0) - (a.rating || 0)
//       default:
//         return 0
//     }
//   })

//   const clearFilters = () => {
//     setSelectedCategory(null)
//     setSelectedGenre(null)
//   }

//   const hasActiveFilters = selectedCategory || selectedGenre

//   // Generate structured data for categories
//   const categoriesStructuredData = {
//     "@context": "https://schema.org",
//     "@type": "ItemList",
//     "name": "Movie Categories",
//     "description": "Browse all movie categories available on Movie On Demand",
//     "numberOfItems": categories.length,
//     "itemListElement": categories.map((category, index) => ({
//       "@type": "ListItem",
//       "position": index + 1,
//       "item": {
//         "@type": "CategoryCode",
//         "name": category,
//         "description": `Movies in ${category} category`,
//         "url": `${canonicalUrl}?category=${encodeURIComponent(category)}`,
//         "numberOfItems": reversedMovies.filter(m => m.category === category).length
//       }
//     }))
//   }

//   // Generate structured data for genres
//   const genresStructuredData = {
//     "@context": "https://schema.org",
//     "@type": "ItemList",
//     "name": "Movie Genres",
//     "description": "Browse all movie genres available on Movie On Demand",
//     "numberOfItems": genres.length,
//     "itemListElement": genres.map((genre, index) => ({
//       "@type": "ListItem",
//       "position": index + 1,
//       "item": {
//         "@type": "Genre",
//         "name": genre,
//         "description": `Movies in ${genre} genre`
//       }
//     }))
//   }

//   // Generate structured data for current movie collection
//   const movieCollectionStructuredData = {
//     "@context": "https://schema.org",
//     "@type": "ItemList",
//     "name": selectedCategory ? `${selectedCategory} Movies` : "All Movies Collection",
//     "description": selectedCategory 
//       ? `Collection of ${selectedCategory} movies available on demand`
//       : "Complete collection of movies available on demand",
//     "numberOfItems": sortedMovies.length,
//     "itemListElement": sortedMovies.slice(0, 50).map((movie, index) => ({
//       "@type": "ListItem",
//       "position": index + 1,
//       "item": {
//         "@type": "Movie",
//         "name": movie.title,
//         "description": movie.description,
//         "image": movie.thumbnail,
//         "dateCreated": movie.releaseYear || movie.year,
//         "genre": movie.genre,
//         "category": movie.category,
//         "duration": movie.duration,
//         "actor": movie.cast ? movie.cast.map(actor => ({ "@type": "Person", "name": actor })) : [],
//         "url": `${canonicalUrl}?movie=${movie.id}`
//       }
//     }))
//   }

//   // Website structured data
//   const websiteStructuredData = {
//     "@context": "https://schema.org",
//     "@type": "WebSite",
//     "name": siteName,
//     "url": "https://movieondemand.vercel.app",
//     "potentialAction": {
//       "@type": "SearchAction",
//       "target": "https://movieondemand.vercel.app/search?q={search_term_string}",
//       "query-input": "required name=search_term_string"
//     }
//   }

//   // Breadcrumb structured data
//   const breadcrumbStructuredData = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": "https://movieondemand.vercel.app"
//       },
//       {
//         "@type": "ListItem",
//         "position": 2,
//         "name": "Categories",
//         "item": canonicalUrl
//       }
//     ]
//   }

//   // Organization structured data
//   const organizationStructuredData = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     "name": siteName,
//     "url": "https://movieondemand.vercel.app",
//     "logo": "https://movieondemand.vercel.app/logo.png",
//     "description": "Movie On Demand Service - Request any movie via Telegram"
//   }

//   return (
//     <>
//       <Head>
//         <title>Movie Categories - Browse All Movie Categories | Movie On Demand</title>
//         <meta name="description" content="Browse all movie categories including Action, Comedy, Drama, Romance, Horror, Hindi Movies, Adult Movies and more. Filter by genre and find your favorite movies." />
//         <meta name="keywords" content="movie categories, browse movies, filter movies, genres, action movies, comedy movies, drama movies, romance movies, horror movies, hindi movies, adult movies" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
//         <link rel="canonical" href={canonicalUrl} />
        
//         {/* Open Graph */}
//         <meta property="og:title" content="Movie Categories - Browse All Movie Categories | Movie On Demand" />
//         <meta property="og:description" content="Browse all movie categories including Action, Comedy, Drama, Romance, Horror, Hindi Movies, Adult Movies and more." />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content={canonicalUrl} />
//         <meta property="og:image" content="https://movieondemand.vercel.app/og-image.jpg" />
//         <meta property="og:image:width" content="1200" />
//         <meta property="og:image:height" content="630" />
//         <meta property="og:image:alt" content="Movie Categories - Movie On Demand" />
//         <meta property="og:site_name" content={siteName} />
//         <meta property="og:locale" content="en_US" />
        
//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:site" content="@movieondemand" />
//         <meta name="twitter:creator" content="@movieondemand" />
//         <meta name="twitter:title" content="Movie Categories - Browse All Movie Categories | Movie On Demand" />
//         <meta name="twitter:description" content="Browse all movie categories including Action, Comedy, Drama, Romance, Horror, Hindi Movies, Adult Movies and more." />
//         <meta name="twitter:image" content="https://movieondemand.vercel.app/og-image.jpg" />
//         <meta name="twitter:image:alt" content="Movie Categories - Movie On Demand" />
        
//         {/* Additional Meta Tags */}
//         <meta name="author" content="Movie On Demand" />
//         <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
//         <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
//         <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
//         {/* Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(websiteStructuredData)
//           }}
//         />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(organizationStructuredData)
//           }}
//         />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(breadcrumbStructuredData)
//           }}
//         />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(categoriesStructuredData)
//           }}
//         />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(genresStructuredData)
//           }}
//         />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(movieCollectionStructuredData)
//           }}
//         />
//       </Head>
      
//       <Header />
//       <main className="min-h-screen bg-black pt-20 pb-8">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl font-bold text-white mb-2">Browse Movie Categories</h1>
//           <p className="text-gray-400 mb-8">Click on any category to view movies in that category</p>
          
//           {/* Active Filters Bar */}
//           {hasActiveFilters && (
//             <div className="bg-gray-800 rounded-lg p-4 mb-6">
//               <div className="flex flex-wrap items-center justify-between">
//                 <div className="flex flex-wrap gap-2">
//                   {selectedCategory && (
//                     <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
//                       Category: {selectedCategory}
//                       <button 
//                         onClick={() => setSelectedCategory(null)}
//                         className="ml-2 hover:bg-red-700 rounded-full p-1"
//                       >
//                         ×
//                       </button>
//                     </span>
//                   )}
//                   {selectedGenre && (
//                     <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
//                       Genre: {selectedGenre}
//                       <button 
//                         onClick={() => setSelectedGenre(null)}
//                         className="ml-2 hover:bg-blue-700 rounded-full p-1"
//                       >
//                         ×
//                       </button>
//                     </span>
//                   )}
//                 </div>
//                 <button
//                   onClick={clearFilters}
//                   className="text-gray-400 hover:text-white text-sm flex items-center"
//                 >
//                   Clear All Filters
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Categories Section */}
//           <section className="mb-12">
//             <h2 className="text-2xl font-bold text-white mb-6">All Movie Categories</h2>
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//               {categories.map((category, index) => (
//                 <CategoryCard 
//                   key={index} 
//                   category={category} 
//                   movieCount={reversedMovies.filter(m => m.category === category).length}
//                   isSelected={selectedCategory === category}
//                   onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
//                 />
//               ))}
//             </div>
//           </section>

//           {/* Genres Section */}
//           <section className="mb-12">
//             <h2 className="text-2xl font-bold text-white mb-6">Movie Genres</h2>
//             <div className="flex flex-wrap gap-3">
//               {genres.map((genre, index) => (
//                 <GenreTag 
//                   key={index} 
//                   genre={genre} 
//                   isSelected={selectedGenre === genre}
//                   onClick={() => setSelectedGenre(selectedGenre === genre ? null : genre)}
//                 />
//               ))}
//             </div>
//           </section>

//           {/* Results Section */}
//           {(hasActiveFilters || selectedCategory) && (
//             <section className="mb-12">
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//                 <div>
//                   <h2 className="text-2xl font-bold text-white">
//                     {selectedCategory ? `${selectedCategory} Movies` : 'Filtered Movies'}
//                     {selectedGenre && ` - ${selectedGenre}`}
//                   </h2>
//                   <p className="text-gray-400 mt-1">
//                     {sortedMovies.length} {sortedMovies.length === 1 ? 'movie' : 'movies'} found
//                   </p>
//                 </div>
                
//                 {/* View Controls */}
//                 <div className="flex gap-4">
//                   {/* Sort Dropdown */}
//                   <select
//                     value={sortBy}
//                     onChange={(e) => setSortBy(e.target.value)}
//                     className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-600 focus:border-red-500 focus:outline-none"
//                   >
//                     <option value="latest">Latest First</option>
//                     <option value="title">A to Z</option>
//                     <option value="rating">Highest Rated</option>
//                   </select>
                  
//                   {/* View Mode Toggle */}
//                   <div className="flex bg-gray-800 rounded border border-gray-600">
//                     <button
//                       onClick={() => setViewMode('grid')}
//                       className={`p-2 ${viewMode === 'grid' ? 'bg-red-600 text-white' : 'text-gray-400'}`}
//                     >
//                       <Grid size={20} />
//                     </button>
//                     <button
//                       onClick={() => setViewMode('list')}
//                       className={`p-2 ${viewMode === 'list' ? 'bg-red-600 text-white' : 'text-gray-400'}`}
//                     >
//                       <List size={20} />
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {sortedMovies.length > 0 ? (
//                 <MovieGrid 
//                   movies={sortedMovies} 
//                   title=""
//                   viewMode={viewMode}
//                 />
//               ) : (
//                 <div className="text-center py-16 bg-gray-800 rounded-lg">
//                   <div className="text-gray-400 text-6xl mb-4">🎬</div>
//                   <h3 className="text-xl font-semibold mb-2 text-white">No movies found</h3>
//                   <p className="text-gray-400 mb-4">
//                     Try adjusting your category or genre filters
//                   </p>
//                   <button
//                     onClick={clearFilters}
//                     className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors"
//                   >
//                     Clear Filters
//                   </button>
//                 </div>
//               )}
//             </section>
//           )}

//           {/* All Categories Section (when no filters) */}
//           {!hasActiveFilters && (
//             <div className="space-y-12">
//               {categories.map((category) => (
//                 <section key={category} className="mb-12">
//                   <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-2xl font-bold text-white">{category} Movies</h2>
//                     <button
//                       onClick={() => setSelectedCategory(category)}
//                       className="text-red-500 hover:text-red-400 text-sm flex items-center"
//                     >
//                       View All
//                       <ChevronDown size={16} className="ml-1" />
//                     </button>
//                   </div>
//                   <MovieGrid 
//                     movies={reversedMovies.filter(movie => movie.category === category).slice(0, 8)} 
//                     title=""
//                   />
//                 </section>
//               ))}
//             </div>
//           )}
//         </div>
//         <Footer />
//       </main>
//     </>
//   )
// }

// function CategoryCard({ category, movieCount, isSelected, onClick }) {
//   return (
//     <div 
//       className={`category-card rounded-lg p-6 text-center transition-all duration-300 cursor-pointer border-2 ${
//         isSelected 
//           ? 'bg-red-600 border-red-600 transform scale-105' 
//           : 'bg-gray-800 border-gray-700 hover:bg-gray-700 hover:scale-105'
//       }`}
//       onClick={onClick}
//     >
//       <div className="category-card-image mb-3">
//         <h3 className="category-card-title text-white text-lg font-semibold">{category}</h3>
//       </div>
//       <div className={`category-card-count text-sm ${
//         isSelected ? 'text-white' : 'text-gray-400'
//       }`}>
//         {movieCount} {movieCount === 1 ? 'movie' : 'movies'}
//       </div>
//       {isSelected && (
//         <div className="mt-2">
//           <ChevronUp className="mx-auto text-white" size={20} />
//         </div>
//       )}
//     </div>
//   )
// }

// function GenreTag({ genre, isSelected, onClick }) {
//   return (
//     <span 
//       className={`genre-tag px-4 py-2 rounded-full text-sm transition-colors duration-300 cursor-pointer ${
//         isSelected 
//           ? 'bg-blue-600 text-white' 
//           : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
//       }`}
//       onClick={onClick}
//     >
//       {genre}
//     </span>
//   )
// }

















































// pages/categories.js
import { useState } from 'react'
import MovieGrid from '../components/MovieGrid'
import moviesData from '../data/data.json'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ChevronDown, ChevronUp, Grid, List } from 'lucide-react'

export default function CategoriesPage({ movies }) {
  // Use movies from props (already reversed in getStaticProps)
  const reversedMovies = movies
  
  const categories = Array.from(new Set(reversedMovies.map(movie => movie.category)))
  const genres = Array.from(new Set(reversedMovies.flatMap(movie => movie.genre.split(', '))))
  
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedGenre, setSelectedGenre] = useState(null)
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('latest')

  const canonicalUrl = 'https://movieondemand.vercel.app/categories'
  const siteName = 'Movie On Demand'

  // Filter movies based on selected category and genre
  const filteredMovies = reversedMovies.filter(movie => {
    const categoryMatch = !selectedCategory || movie.category === selectedCategory
    const genreMatch = !selectedGenre || movie.genre.includes(selectedGenre)
    return categoryMatch && genreMatch
  })

  // Sort movies based on selected sort option
  const sortedMovies = [...filteredMovies].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.releaseYear || b.year) - new Date(a.releaseYear || a.year)
      case 'title':
        return a.title.localeCompare(b.title)
      case 'rating':
        return (b.rating || 0) - (a.rating || 0)
      default:
        return 0
    }
  })

  const clearFilters = () => {
    setSelectedCategory(null)
    setSelectedGenre(null)
  }

  const hasActiveFilters = selectedCategory || selectedGenre

  // Generate structured data for categories
  const categoriesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Movie Categories",
    "description": "Browse all movie categories available on Movie On Demand",
    "numberOfItems": categories.length,
    "itemListElement": categories.map((category, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CategoryCode",
        "name": category,
        "description": `Movies in ${category} category`,
        "url": `${canonicalUrl}?category=${encodeURIComponent(category)}`,
        "numberOfItems": reversedMovies.filter(m => m.category === category).length
      }
    }))
  }

  // Generate structured data for genres
  const genresStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Movie Genres",
    "description": "Browse all movie genres available on Movie On Demand",
    "numberOfItems": genres.length,
    "itemListElement": genres.map((genre, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Genre",
        "name": genre,
        "description": `Movies in ${genre} genre`
      }
    }))
  }

  // Generate structured data for current movie collection
  const movieCollectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": selectedCategory ? `${selectedCategory} Movies` : "All Movies Collection",
    "description": selectedCategory 
      ? `Collection of ${selectedCategory} movies available on demand`
      : "Complete collection of movies available on demand",
    "numberOfItems": sortedMovies.length,
    "itemListElement": sortedMovies.slice(0, 50).map((movie, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Movie",
        "name": movie.title,
        "description": movie.description,
        "image": movie.thumbnail,
        "dateCreated": movie.releaseYear || movie.year,
        "genre": movie.genre,
        "category": movie.category,
        "duration": movie.duration,
        "actor": movie.cast ? movie.cast.map(actor => ({ "@type": "Person", "name": actor })) : [],
        "url": `${canonicalUrl}?movie=${movie.id}`
      }
    }))
  }

  // Website structured data
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "url": "https://movieondemand.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://movieondemand.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  // Breadcrumb structured data
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
        "name": "Categories",
        "item": canonicalUrl
      }
    ]
  }

  // Organization structured data
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
        <title>Movie Categories - Browse All Movie Categories | Movie On Demand</title>
        <meta name="description" content="Browse all movie categories including Action, Comedy, Drama, Romance, Horror, Hindi Movies, Adult Movies and more. Filter by genre and find your favorite movies." />
        <meta name="keywords" content="movie categories, browse movies, filter movies, genres, action movies, comedy movies, drama movies, romance movies, horror movies, hindi movies, adult movies" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Movie Categories - Browse All Movie Categories | Movie On Demand" />
        <meta property="og:description" content="Browse all movie categories including Action, Comedy, Drama, Romance, Horror, Hindi Movies, Adult Movies and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://movieondemand.vercel.app/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Movie Categories - Movie On Demand" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@movieondemand" />
        <meta name="twitter:creator" content="@movieondemand" />
        <meta name="twitter:title" content="Movie Categories - Browse All Movie Categories | Movie On Demand" />
        <meta name="twitter:description" content="Browse all movie categories including Action, Comedy, Drama, Romance, Horror, Hindi Movies, Adult Movies and more." />
        <meta name="twitter:image" content="https://movieondemand.vercel.app/og-image.jpg" />
        <meta name="twitter:image:alt" content="Movie Categories - Movie On Demand" />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Movie On Demand" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData)
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
            __html: JSON.stringify(categoriesStructuredData)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(genresStructuredData)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(movieCollectionStructuredData)
          }}
        />
      </Head>
      
      <Header />
      <main className="min-h-screen bg-black pt-20 pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-2">Browse Movie Categories</h1>
          <p className="text-gray-400 mb-8">Click on any category to view movies in that category</p>
          
          {/* Active Filters Bar */}
          {hasActiveFilters && (
            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {selectedCategory && (
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
                      Category: {selectedCategory}
                      <button 
                        onClick={() => setSelectedCategory(null)}
                        className="ml-2 hover:bg-red-700 rounded-full p-1"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {selectedGenre && (
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
                      Genre: {selectedGenre}
                      <button 
                        onClick={() => setSelectedGenre(null)}
                        className="ml-2 hover:bg-blue-700 rounded-full p-1"
                      >
                        ×
                      </button>
                    </span>
                  )}
                </div>
                <button
                  onClick={clearFilters}
                  className="text-gray-400 hover:text-white text-sm flex items-center"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}

          {/* Categories Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">All Movie Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {categories.map((category, index) => (
                <CategoryCard 
                  key={index} 
                  category={category} 
                  movieCount={reversedMovies.filter(m => m.category === category).length}
                  isSelected={selectedCategory === category}
                  onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                />
              ))}
            </div>
          </section>

          {/* Genres Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Movie Genres</h2>
            <div className="flex flex-wrap gap-3">
              {genres.map((genre, index) => (
                <GenreTag 
                  key={index} 
                  genre={genre} 
                  isSelected={selectedGenre === genre}
                  onClick={() => setSelectedGenre(selectedGenre === genre ? null : genre)}
                />
              ))}
            </div>
          </section>

          {/* Results Section */}
          {(hasActiveFilters || selectedCategory) && (
            <section className="mb-12">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {selectedCategory ? `${selectedCategory} Movies` : 'Filtered Movies'}
                    {selectedGenre && ` - ${selectedGenre}`}
                  </h2>
                  <p className="text-gray-400 mt-1">
                    {sortedMovies.length} {sortedMovies.length === 1 ? 'movie' : 'movies'} found
                  </p>
                </div>
                
                {/* View Controls */}
                <div className="flex gap-4">
                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-600 focus:border-red-500 focus:outline-none"
                  >
                    <option value="latest">Latest First</option>
                    <option value="title">A to Z</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  
                  {/* View Mode Toggle */}
                  <div className="flex bg-gray-800 rounded border border-gray-600">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-red-600 text-white' : 'text-gray-400'}`}
                    >
                      <Grid size={20} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-red-600 text-white' : 'text-gray-400'}`}
                    >
                      <List size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {sortedMovies.length > 0 ? (
                <MovieGrid 
                  movies={sortedMovies} 
                  title=""
                  viewMode={viewMode}
                />
              ) : (
                <div className="text-center py-16 bg-gray-800 rounded-lg">
                  <div className="text-gray-400 text-6xl mb-4">🎬</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">No movies found</h3>
                  <p className="text-gray-400 mb-4">
                    Try adjusting your category or genre filters
                  </p>
                  <button
                    onClick={clearFilters}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </section>
          )}

          {/* All Categories Section (when no filters) */}
          {!hasActiveFilters && (
            <div className="space-y-12">
              {categories.map((category) => (
                <section key={category} className="mb-12">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-white">{category} Movies</h2>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className="text-red-500 hover:text-red-400 text-sm flex items-center"
                    >
                      View All
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                  </div>
                  <MovieGrid 
                    movies={reversedMovies.filter(movie => movie.category === category).slice(0, 8)} 
                    title=""
                  />
                </section>
              ))}
            </div>
          )}
        </div>
        <Footer />
      </main>
    </>
  )
}

function CategoryCard({ category, movieCount, isSelected, onClick }) {
  return (
    <div 
      className={`category-card rounded-lg p-6 text-center transition-all duration-300 cursor-pointer border-2 ${
        isSelected 
          ? 'bg-red-600 border-red-600 transform scale-105' 
          : 'bg-gray-800 border-gray-700 hover:bg-gray-700 hover:scale-105'
      }`}
      onClick={onClick}
    >
      <div className="category-card-image mb-3">
        <h3 className="category-card-title text-white text-lg font-semibold">{category}</h3>
      </div>
      <div className={`category-card-count text-sm ${
        isSelected ? 'text-white' : 'text-gray-400'
      }`}>
        {movieCount} {movieCount === 1 ? 'movie' : 'movies'}
      </div>
      {isSelected && (
        <div className="mt-2">
          <ChevronUp className="mx-auto text-white" size={20} />
        </div>
      )}
    </div>
  )
}

function GenreTag({ genre, isSelected, onClick }) {
  return (
    <span 
      className={`genre-tag px-4 py-2 rounded-full text-sm transition-colors duration-300 cursor-pointer ${
        isSelected 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      }`}
      onClick={onClick}
    >
      {genre}
    </span>
  )
}

// SSG Implementation
export async function getStaticProps() {
  // Reverse to show latest first - done at build time
  const reversedMovies = [...moviesData].reverse()
  
  return {
    props: {
      movies: reversedMovies,
    },
    revalidate: 3600, // Revalidate every hour - Incremental Static Regeneration (ISR)
  }
}