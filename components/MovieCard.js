// components/MovieCard.js
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Play } from 'lucide-react'

export default function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/movie/${movie.slug}`}>
        <div className={`aspect-[2/3] rounded-lg overflow-hidden bg-gray-800 transition-all duration-300 ${
          isHovered ? 'scale-105 shadow-2xl' : ''
        }`}>
          <Image
            src={movie.thumbnail}
            alt={movie.title}
            width={300}
            height={450}
            quality={100}
            priority
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            style={{
                   filter: 'brightness(1.05) contrast(1.15) saturate(1.12) hue-rotate(1deg)'
                   }}         
         />
          
          {isHovered && (
            <>
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
              
              <div className="absolute top-2 left-2 right-2">
                <h3 className="text-white font-bold text-sm drop-shadow-2xl line-clamp-2">
                  {movie.title}
                </h3>
              </div>

              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="transform transition-all duration-300 group-hover:scale-110">
                 <a 
                  href="https://t.me/movieandtvshowondemand" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-md font-semibold transition-colors group text-sm whitespace-nowrap"
                >
                  💬 Request Movie
                </a>
                </div>
              </div> */}
               {/* Play Button - Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="transform transition-all duration-300 group-hover:scale-110">
                  <div className="bg-red-600 hover:bg-red-700 rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110">
                    <Play size={24} className="text-white" />
                  </div>
                  <p className="text-white text-sm font-semibold mt-2 text-center drop-shadow-2xl">
                    Play
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </Link>

      <div className="mt-2">
        <h3 className="text-white text-sm font-medium line-clamp-1">
          {movie.title}
        </h3>
        <p className="text-gray-400 text-xs mt-1">
          {movie.releaseYear} • {movie.genre.split(',')[0]}
        </p>
      </div>
    </div>
  )
}