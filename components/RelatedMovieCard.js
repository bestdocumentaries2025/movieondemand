// components/RelatedMovieCard.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function RelatedMovieCard({ 
  movie, 
  currentMovieId,
  autoRotate = false,
  rotationInterval = 5000 
}) {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [relatedMovies, setRelatedMovies] = useState([movie])

  useEffect(() => {
    const loadAllMovies = async () => {
      try {
        const response = await fetch('/api/movies')
        const allMovies = await response.json()
        
        const filteredMovies = allMovies
          .filter((m) => m.id !== currentMovieId)
          .sort(() => Math.random() - 0.5)
          .slice(0, 12)
        
        setRelatedMovies([movie, ...filteredMovies])
      } catch (error) {
        console.error('Failed to load movies:', error)
        setRelatedMovies([movie])
      }
    }

    if (autoRotate) {
      loadAllMovies()
    }
  }, [movie, currentMovieId, autoRotate])

  useEffect(() => {
    if (!autoRotate || relatedMovies.length <= 1) return

    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentMovieIndex(prev => 
          prev === relatedMovies.length - 1 ? 0 : prev + 1
        )
      }
    }, rotationInterval)

    return () => clearInterval(interval)
  }, [autoRotate, relatedMovies.length, isHovered, rotationInterval])

  const currentMovie = relatedMovies[currentMovieIndex]

  if (!currentMovie) return null

  return (
    <div 
      className="group cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link 
        href={`/movie/${currentMovie.slug}`}
        className="block relative"
      >
        <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-gray-800 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
          <Image
            src={currentMovie.thumbnail}
            alt={currentMovie.title}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority={currentMovieIndex === 0}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
            <div className="bg-red-600 hover:bg-red-700 rounded-full p-4 shadow-2xl border-2 border-white transition-all duration-300 hover:scale-110">
              ▶
            </div>
          </div>

          <div className="absolute top-0 left-0 right-0 p-2 bg-gradient-to-b from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center justify-between text-xs text-white">
              <span className="font-semibold truncate">{currentMovie.title}</span>
              <span className="bg-black/80 px-1 rounded">{currentMovie.quality}</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/90 to-transparent">
            <div className="flex items-center justify-between text-xs text-white">
              <div className="flex items-center space-x-1">
                ⭐
                <span>{currentMovie.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                ⏱️
                <span>{formatDuration(currentMovie.duration)}</span>
              </div>
            </div>
          </div>

          {autoRotate && relatedMovies.length > 1 && (
            <div className="absolute top-2 left-2 flex space-x-1">
              {relatedMovies.map((_, index) => (
                <div
                  key={index}
                  className={`w-1 h-1 rounded-full transition-all duration-300 ${
                    index === currentMovieIndex 
                      ? 'bg-red-500 scale-125' 
                      : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </Link>

      <div className="mt-3 px-1">
        <Link 
          href={`/movie/${currentMovie.slug}`}
          className="block group"
        >
          <h3 className="text-white text-sm font-semibold line-clamp-1 group-hover:text-red-400 transition-colors duration-200">
            {currentMovie.title}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
          <span>{currentMovie.releaseYear}</span>
          <div className="flex items-center space-x-1">
            <span className="text-green-500 font-semibold">{currentMovie.rating}</span>
            <span>•</span>
            <span className="truncate max-w-[80px]">{currentMovie.genre.split(',')[0]}</span>
          </div>
        </div>

        <div className="mt-2">
          <p className="text-xs text-gray-500 line-clamp-1">
            Starring: {currentMovie.cast.slice(0, 2).join(', ')}
            {currentMovie.cast.length > 2 && '...'}
          </p>
        </div>
      </div>

      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        <div className="flex space-x-2 bg-black/90 backdrop-blur-sm rounded-full px-3 py-2 border border-gray-700">
          <Link
            href={`/movie/${currentMovie.slug}`}
            className="text-xs text-white hover:text-red-400 transition-colors font-medium"
          >
            Watch Now
          </Link>
          <span className="text-gray-600">|</span>
          <button 
            onClick={(e) => {
              e.preventDefault()
              console.log('Add to watchlist:', currentMovie.title)
            }}
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

function formatDuration(duration) {
  if (!duration) return 'N/A'
  
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  if (!match) return duration
  
  const hours = match[1] ? `${match[1]}h` : ''
  const minutes = match[2] ? `${match[2]}m` : ''
  
  return `${hours} ${minutes}`.trim() || 'N/A'
}

export function RelatedMoviesGrid({ 
  movies, 
  currentMovieId,
  title = "You May Also Like",
  autoRotate = false 
}) {
  const filteredMovies = movies
    .filter(movie => movie.id !== currentMovieId)
    .slice(0, 6)

  if (filteredMovies.length === 0) return null

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">
        {title}
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {filteredMovies.map((movie) => (
          <RelatedMovieCard
            key={movie.id}
            movie={movie}
            currentMovieId={currentMovieId}
            autoRotate={autoRotate}
          />
        ))}
      </div>
    </section>
  )
}