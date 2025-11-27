// components/ImagePreloader.js
import { useEffect } from 'react'

export default function ImagePreloader({ images }) {
  useEffect(() => {
    if (!images || !Array.isArray(images)) return

    images.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [images])

  return null
}