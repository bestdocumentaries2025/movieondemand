// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');

// Import your movie data
const movieData = require('../data/data.json');

function generateSitemap() {
  const baseUrl = 'https://movieondemand.vercel.app';
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Start building the sitemap
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/categories</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/request</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/search</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>

  <url>
    <loc>${baseUrl}/privacy-policy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>

  <url>
    <loc>${baseUrl}/terms</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>

  <url>
    <loc>${baseUrl}/dmca</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>

  <url>
    <loc>${baseUrl}/faq</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>`;

  // Add movie URLs
  movieData.forEach(function(movie) {
    const movieLastMod = movie.uploadDate ? new Date(movie.uploadDate).toISOString().split('T')[0] : currentDate;
    
    sitemap += `
  <url>
    <loc>${baseUrl}/movie/${movie.slug}</loc>
    <lastmod>${movieLastMod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  // Close the sitemap
  sitemap += '\n</urlset>';

  const publicDir = path.join(__dirname, '../public');
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  
  console.log('✅ Sitemap generated successfully!');
  console.log(`📊 Total URLs: ${movieData.length + 9}`);
  console.log('🎯 Sitemap ready for search engines');
}

generateSitemap();