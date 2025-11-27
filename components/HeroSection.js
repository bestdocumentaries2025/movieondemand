// components/HeroSection.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection({ movies }) {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [loadedImages, setLoadedImages] = useState(new Set())

  // Get LATEST 5 movies (last 5 movies from the array for rotation)
  const featuredMovies = movies.slice(-5)

  // Preload all hero images - FIXED: Use window.Image instead of Image
  useEffect(() => {
    featuredMovies.forEach((movie) => {
      const img = new window.Image()
      img.src = movie.thumbnail
      img.onload = () => {
        setLoadedImages(prev => new Set(prev.add(movie.thumbnail)))
      }
    })
  }, [featuredMovies])

  // Auto-rotate movies every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextMovie()
    }, 8000)

    return () => clearInterval(interval)
  }, [currentMovieIndex])

  const nextMovie = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentMovieIndex((prev) => 
        prev === featuredMovies.length - 1 ? 0 : prev + 1
      )
      setIsTransitioning(false)
    }, 500)
  }

  const prevMovie = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentMovieIndex((prev) => 
        prev === 0 ? featuredMovies.length - 1 : prev - 1
      )
      setIsTransitioning(false)
    }, 500)
  }

  const currentMovie = featuredMovies[currentMovieIndex]

  if (!currentMovie) return null

  return (
    <section className="relative h-screen bg-cover bg-center overflow-hidden">
      {/* Background Image with Transition and Optimized Loading */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}>
        <Image
          src={currentMovie.thumbnail}
          alt={currentMovie.title}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
          style={{
            objectPosition: 'center',
            transition: 'opacity 0.5s ease-in-out',
            filter: 'brightness(1.05) contrast(1.15) saturate(1.12) hue-rotate(1deg)'
          }}
        />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent" />
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevMovie}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 md:p-3 transition-all backdrop-blur-sm"
        aria-label="Previous movie"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextMovie}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 md:p-3 transition-all backdrop-blur-sm"
        aria-label="Next movie"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Content */}
      <div className={`relative z-10 h-full flex items-center transition-transform duration-500 ${
        isTransitioning ? 'translate-x-4' : 'translate-x-0'
      }`}>
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-4 text-white drop-shadow-2xl">
              {currentMovie.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 md:mb-6 text-gray-200 line-clamp-2 md:line-clamp-3 drop-shadow-2xl">
              {currentMovie.description}
            </p>
            
            {/* Movie Info */}
            <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-4 md:mb-6 text-xs md:text-sm lg:text-base">
              <span className="text-green-500 font-semibold drop-shadow-2xl">{currentMovie.rating}</span>
              <span className="text-white drop-shadow-2xl">{currentMovie.releaseYear}</span>
              <span className="text-white drop-shadow-2xl">{currentMovie.duration?.replace('PT', '').replace('H', 'h ').replace('M', 'm')}</span>
              <span className="border border-gray-400 px-1 md:px-2 py-0.5 md:py-1 text-xs rounded text-white drop-shadow-2xl">{currentMovie.quality}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4 mb-4 md:mb-6">
              <div className="grid grid-cols-2 gap-2 sm:hidden">
                <Link 
                  href={`/movie/${currentMovie.slug}`}
                  className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md font-semibold transition-colors group text-sm"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Play
                </Link>
                <button className="flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-md font-semibold transition-colors group text-sm">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Info
                </button>
                <a 
                  href="https://t.me/onlyondemand" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="col-span-2 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md font-semibold transition-colors group text-sm"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.78 5.42-.9 6.8-.06.67-.36.89-.89.56-2.45-1.83-3.57-2.98-5.79-4.78-.51-.36-.87-.55-.84-1.05.03-.5.57-.73 1.01-.54 2.49 1.18 4.18 2.12 6.73 3.38.38.17.67.16.92-.05.33-.28.23-.78.16-1.2z"/>
                  </svg>
                  Request Movie
                </a>
              </div>

              <div className="hidden sm:flex flex-col md:flex-row gap-2 md:gap-4 w-full">
                <Link 
                  href={`/movie/${currentMovie.slug}`}
                  className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-md font-semibold transition-colors group text-sm md:text-base"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Play Now
                </Link>
                <button className="flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-md font-semibold transition-colors group text-sm md:text-base">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  More Info
                </button>
                <a 
                  href="https://t.me/onlyondemand" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-md font-semibold transition-colors group text-sm md:text-base"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.78 5.42-.9 6.8-.06.67-.36.89-.89.56-2.45-1.83-3.57-2.98-5.79-4.78-.51-.36-.87-.55-.84-1.05.03-.5.57-.73 1.01-.54 2.49 1.18 4.18 2.12 6.73 3.38.38.17.67.16.92-.05.33-.28.23-.78.16-1.2z"/>
                  </svg>
                  Request Movie
                </a>
              </div>
            </div>

            {/* Service Description Banner */}
            <div className="p-3 md:p-4 bg-black bg-opacity-70 rounded-lg border-l-4 border-red-600 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 md:gap-4 mb-2 md:mb-3">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-0">
                  🎬 On Demand & Request Any Movie 
                </h2>
                <a 
                  href="https://t.me/onlyondemand" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-md font-semibold transition-colors group text-sm whitespace-nowrap w-full sm:w-auto"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.78 5.42-.9 6.8-.06.67-.36.89-.89.56-2.45-1.83-3.57-2.98-5.79-4.78-.51-.36-.87-.55-.84-1.05.03-.5.57-.73 1.01-.54 2.49 1.18 4.18 2.12 6.73 3.38.38.17.67.16.92-.05.33-.28.23-.78.16-1.2z"/>
                  </svg>
                  Request Movie
                </a>
              </div>
              <p className="text-gray-200 text-xs md:text-sm lg:text-base">
                Can't find your movie? Request any movie via Telegram! 
                Send: <span className="text-yellow-400 font-semibold">Movie Name + Year + Language</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-1 md:gap-2">
        {featuredMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true)
              setTimeout(() => {  
                setCurrentMovieIndex(index)
                setIsTransitioning(false)
              }, 500)
            }}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentMovieIndex 
                ? 'bg-white scale-125' 
                : 'bg-gray-500 hover:bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}