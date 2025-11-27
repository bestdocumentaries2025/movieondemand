

// import { useEffect, useRef, useState } from 'react'

// export default function DailymotionPlayer({ videoId, title, autoplay = false }) {
//   const [playerReady, setPlayerReady] = useState(false)

//   useEffect(() => {
//     console.log('🎬 DailymotionPlayer mounted with:', { videoId, title, autoplay })
//     setPlayerReady(true)
//   }, [videoId, title, autoplay])

//   if (!videoId) {
//     return (
//       <div className="video-player-error" style={{
//         padding: '20px',
//         background: '#ff0000',
//         color: 'white',
//         textAlign: 'center'
//       }}>
//         <h3>❌ MISSING VIDEO ID</h3>
//         <p>Dailymotion player requires a videoId</p>
//       </div>
//     )
//   }

//   return (
//     <div className="video-player-container" >
//       <div style={{
//         position: 'relative',
//         paddingBottom: '56.25%', // 16:9 aspect ratio
//         height: 0,
//         overflow: 'hidden',
//         width: '100%'
//       }}>
//         <iframe 
//           src={`https://www.dailymotion.com/embed/video/${videoId}?autoplay=${autoplay ? 1 : 0}&mute=${autoplay ? 1 : 0}`}
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             border: 'none'
//           }}
//           allowFullScreen
//           title={`Dailymotion video: ${title}`}
//           allow="autoplay; fullscreen; picture-in-picture"
//           onLoad={() => {
//             console.log('✅ Dailymotion iframe loaded - Video should be playing!')
//             setPlayerReady(true)
//           }}
//           onError={(e) => {
//             console.error('❌ Dailymotion iframe error:', e)
//             setPlayerReady(true)
//           }}
//         />
//       </div>
      
//       {!playerReady && (
//         <div style={{
        
//         }}>
//           <div className="loading-spinner"></div>
//           <p>Loading Dailymotion Player...</p>
//           <p><strong>Video:</strong> {title}</p>
//           <p><strong>ID:</strong> {videoId}</p>
//         </div>
//       )}
//     </div>
//   )
// }




























// import { useState } from 'react'

// export default function DailymotionPlayer({ videoId, title, autoplay = false }) {
//   const [playerReady, setPlayerReady] = useState(false)

//   if (!videoId) {
//     return (
//       <div className="video-player-error">
//         <h3>MISSING VIDEO ID</h3>
//         <p>Dailymotion player requires a videoId</p>
//       </div>
//     )
//   }

//   return (
//     <div className="video-player-container">
//       <div style={{
//         position: 'relative',
//         paddingBottom: '56.25%',
//         height: 0,
//         overflow: 'hidden',
//         width: '100%'
//       }}>
//         <iframe 
//           src={`https://www.dailymotion.com/embed/video/${videoId}?autoplay=${autoplay ? 1 : 0}&mute=${autoplay ? 1 : 0}&controls=1&queue-enable=0&sharing-enable=0&ui-logo=0&ui-start-screen-info=0`}
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             border: 'none'
//           }}
//           allowFullScreen
//           title={`Dailymotion video: ${title}`}
//           allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
//           onLoad={() => {
//             console.log('Dailymotion iframe loaded with fullscreen')
//             setPlayerReady(true)
//           }}
//           onError={(e) => {
//             console.error('Dailymotion iframe error:', e)
//             setPlayerReady(true)
//           }}
//         />
//       </div>
      
//       {!playerReady && (
//         <div className="player-loading">
//           <div className="loading-spinner"></div>
//           <p>Loading Dailymotion Player...</p>
//         </div>
//       )}
//     </div>
//   )
// }


























































// was ok 


// import { useState } from 'react'

// export default function DailymotionPlayer({ videoId, title, autoplay = false }) {
//   const [playerReady, setPlayerReady] = useState(false)

//   if (!videoId) {
//     return (
//       <div className="video-player-error">
//         <h3>MISSING VIDEO ID</h3>
//         <p>Dailymotion player requires a videoId</p>
//       </div>
//     )
//   }

//   return (
//     <div className="video-player-container" >
//       <div style={{
//         position: 'relative',
//         paddingBottom: '56.25%',
//         height: 0,
//         overflow: 'hidden',
//         width: '100%'
//       }}>
//         <iframe 
//           src={`https://geo.dailymotion.com/player.html?video=${videoId}`}
//           style={{
//             position: 'absolute',
//             width: '100%',
//             height: '100%',
//             filter: 'url(#ultraSharp) brightness(1.25) contrast(1.15) saturate(1.5) hue-rotate(5deg)',
//             transform: 'translateZ(0)',
//             }}
//           allowFullScreen
//           title={`Dailymotion video: ${title}`}
//           allow="autoplay; fullscreen; picture-in-picture"
//           onLoad={() => {
//             console.log('Dailymotion geo player loaded with fullscreen')
//             setPlayerReady(true)
//           }}
//         />
//       </div>
      
//       {!playerReady && (
//         <div className="player-loading">
//           <div className="loading-spinner"></div>
//           <p>Loading Dailymotion Player...</p>
//         </div>
//       )}
//     </div>
//   )
// }





import { useState } from 'react'

export default function DailymotionPlayer({ videoId, title, autoplay = false }) {
  const [playerReady, setPlayerReady] = useState(false)

  if (!videoId) {
    return (
      <div className="video-player-error">
        <h3>MISSING VIDEO ID</h3>
        <p>Dailymotion player requires a videoId</p>
      </div>
    )
  }

  return (
    <div className="video-player-container">
      <div style={{
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
        overflow: 'hidden',
        width: '100%'
      }}>
        <iframe 
          src={`https://geo.dailymotion.com/player.html?video=${videoId}&api=postMessage`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            filter: 'url(#ultraSharp) brightness(1.25) contrast(1.15) saturate(1.5) hue-rotate(5deg)',
            transform: 'translateZ(0)',
            border: 'none'
          }}
          allowFullScreen
          title={`Dailymotion video: ${title}`}
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          onLoad={() => {
            console.log('Dailymotion geo player loaded with fullscreen')
            setPlayerReady(true)
          }}
        />
      </div>
      
      {!playerReady && (
        <div className="player-loading">
          <div className="loading-spinner"></div>
          <p>Loading Dailymotion Player...</p>
        </div>
      )}
    </div>
  )
}










