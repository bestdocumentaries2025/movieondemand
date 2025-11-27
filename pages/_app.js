import '../styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Load ad scripts after page load to prevent blocking
    const loadAdScripts = () => {
      // Load first ad script
      const adScript1 = document.createElement('script')
      adScript1.innerHTML = `(function(s){s.dataset.zone='10224003',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`
      document.head.appendChild(adScript1)

      // Load second ad script
      const adScript2 = document.createElement('script')
      adScript2.innerHTML = `(function(s){s.dataset.zone='10224004',s.src='https://groleegni.net/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`
      document.head.appendChild(adScript2)
    }

    // Load ads after page is fully loaded
    if (document.readyState === 'complete') {
      loadAdScripts()
    } else {
      window.addEventListener('load', loadAdScripts)
    }

    return () => {
      window.removeEventListener('load', loadAdScripts)
    }
  }, [])

  // Track page views for Google Analytics
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (window.gtag) {
        window.gtag('config', 'G-YWPL9LN3CG', {
          page_title: document.title,
          page_location: url
        })
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#e50914" />
        <link rel="canonical" href={`https://movieondemand.vercel.app${router.asPath}`} />
      </Head>
      <Component {...pageProps} />
    </> 
  )
}