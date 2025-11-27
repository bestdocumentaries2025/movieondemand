// //   // next.config.js
// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   // experimental: {
// //   //   appDir: true,
// //   // },
// //     images: {
// //     domains: ['i.ibb.co', 'imgbb.com', 'short.icu'],
// //     unoptimized: true
// //   }
  
// // } 

// // module.exports = nextConfig
// // next.config.js
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     unoptimized: true,
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//   },
//   //   unoptimized: true, 
//   //   deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//   //   imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//   // },
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           {
//             key: 'X-Content-Type-Options',
//             value: 'nosniff'
//           },
//           {
//             key: 'X-Frame-Options',
//             value: 'DENY'
//           },
//           {
//             key: 'X-XSS-Protection',
//             value: '1; mode=block'
//           },
//           {
//             key: 'Referrer-Policy',
//             value: 'origin-when-cross-origin'
//           },
//           {
//             key: 'Strict-Transport-Security',
//             value: 'max-age=31536000; includeSubDomains'
//           }
//         ],
//       },
//     ]
//   },
//   compress: true,
//   poweredByHeader: false,
//   generateEtags: false,
//   // trailingSlash: true,
// }

// module.exports = nextConfig



































// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          }
        ],
      },
      // Add caching headers for static assets
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/(.*).(jpg|jpeg|png|gif|ico|webp|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate'
          }
        ]
      },
      {
        source: '/(.*).(css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate'
          }
        ]
      }
    ]
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
}

module.exports = nextConfig