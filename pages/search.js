import { useState, useEffect, useMemo } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import MovieCard from '../components/MovieCard'
import { Search, Filter, X } from 'lucide-react'
import moviesData from '../data/data.json'
import Footer from '../components/Footer'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState({
    genre: '',
    year: '',
    category: '',
    rating: ''
  })
  const [showFilters, setShowFilters] = useState(false)

  const filterOptions = useMemo(() => {
    const genres = Array.from(new Set(moviesData.flatMap(movie => movie.genre.split(', '))))
    const years = Array.from(new Set(moviesData.map(movie => movie.releaseYear))).sort().reverse()
    const categories = Array.from(new Set(moviesData.map(movie => movie.category)))
    
    return { genres, years, categories }
  }, [])

  const filteredMovies = useMemo(() => {
    return moviesData.filter(movie => {
      const matchesSearch = query === '' || 
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.description.toLowerCase().includes(query.toLowerCase()) ||
        movie.cast.some(actor => actor.toLowerCase().includes(query.toLowerCase())) ||
        movie.genre.toLowerCase().includes(query.toLowerCase())

      const matchesGenre = filters.genre === '' || 
        movie.genre.includes(filters.genre)
      
      const matchesYear = filters.year === '' || 
        movie.releaseYear === filters.year
      
      const matchesCategory = filters.category === '' || 
        movie.category === filters.category

      return matchesSearch && matchesGenre && matchesYear && matchesCategory
    })
  }, [query, filters])

  const clearFilters = () => {
    setFilters({
      genre: '',
      year: '',
      category: '',
      rating: ''
    })
  }

  return (
    <>
      <Head>
        <title>Search Movies - Movie On Demand</title>
        <meta name="description" content="Search and filter movies by title, actor, genre, year, and category on Movie On Demand." />
        <meta name="keywords" content="search movies, filter movies, movie search, find movies" />
      </Head>
      
      <Header />
      <main className="min-h-screen bg-black text-white pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Search Movies</h1>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search movies by title, actor, genre..."
                className="w-full bg-gray-800 text-white px-12 py-4 rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none transition-colors"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
            </div>
          </div>

          {/* Filter Toggle */}
          <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <Filter className="mr-2" size={20} />
              Filters
              {(filters.genre || filters.year || filters.category) && (
                <span className="ml-2 bg-red-600 text-xs px-2 py-1 rounded-full">
                  Active
                </span>
              )}
            </button>

            {(filters.genre || filters.year || filters.category) && (
              <button
                onClick={clearFilters}
                className="flex items-center text-gray-400 hover:text-white transition"
              >
                <X className="mr-1" size={16} />
                Clear Filters
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

          {/* Results */}
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {query || Object.values(filters).some(f => f) ? 'Search Results' : 'All Movies'}
              </h2>
              <p className="text-gray-400">
                {filteredMovies.length} {filteredMovies.length === 1 ? 'movie' : 'movies'} found
              </p>
            </div>

            {filteredMovies.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {filteredMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
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
        </div>
           <Footer />
      </main>
    </>
  )
}