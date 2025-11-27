import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    const baseUrl = 'https://movieondemand.vercel.app'

  return (
        <Html lang="en" itemScope itemType="https://schema.org/WebPage">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#e50914" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
                {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
 
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
  
        {/* SEO */}
        <meta name="description" content="Movie On Demand Service - Request any movie via Telegram by sending movie name, year, and language. We add requested movies within 24 hours." />
        <meta name="keywords" content="movie on demand, request movies, free movies, tvshows, telegram movie request, watch movies online, movie streaming" />
        <meta name="google-site-verification" content="f0ytofPk6osR1lyJdPSVjfoEpyQd5lgrUt9totCHxzM" />
        <meta name="author" content="Movie On Demand" />
        {/* Open Graph Meta Tags */}
        <meta property="og:site_name" content="Movie On Demand - Movie within 24 hours." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Movie On Demand - Movie within 24 hours." />
        <meta property="og:description" content="Request any movie via Telegram by sending movie name, year, and language. We add requested movies within 24 hours." />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Movie On Demand - Movie within 24 hours." />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@cmovieondemand" />
        <meta name="twitter:site" content="@cmovieondemand" />
        <meta name="twitter:title" content="Movie On Demand - Movie within 24 hours." />
        <meta name="twitter:description" content="Request any movie via Telegram by sending movie name, year, and language. We add requested movies within 24 hours." />
        <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />
        <meta name="twitter:image:alt" content="Movie On Demand - Movie within 24 hours." />
                {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YWPL9LN3CG"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YWPL9LN3CG', {
                page_title: document.title,
                page_location: window.location.href,
                anonymize_ip: true
              });
            `
          }}
        />
        
        {/* Global Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Movie On Demand",
              "description": "We add requested movies within 24 hours.",
              "url": baseUrl,
              "logo": `${baseUrl}/icon-512.png`,
              "sameAs": [
                "https://www.youtube.com/channel/UCS7Ahfb_tr9uUz_XuiNJtGg",
                ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "contact@cmovieondemand.com",
                "contactType": "customer service"
              }
            })
          }}
        />

      </Head>
      <body className="bg-black text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}