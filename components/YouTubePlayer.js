

// import { useEffect, useRef, useState } from 'react'

// export default function VideoPlayer({ videoId, title, autoplay = false, videoSource = 'youtube' }) {
//   const playerRef = useRef(null)
//   const playerInstanceRef = useRef(null)
//   const [playerReady, setPlayerReady] = useState(false)

  
//   // YouTube player implementation
//   useEffect(() => {
//     const initializePlayer = () => {
//       if (!videoId || !playerRef.current) return

//       if (playerInstanceRef.current) {
//         playerInstanceRef.current.destroy()
//       }

//       playerInstanceRef.current = new window.YT.Player(playerRef.current, {
//         height: '100%',
//         width: '100%',
//         videoId: videoId,
//         // ULTRA SHARP CINEMATIC FILTERS
//         filter: 'url(#ultraSharp) brightness(1.25) contrast(1.15) saturate(1.5) hue-rotate(5deg)',
//         transform: 'translateZ(0)',
//         imageRendering: 'pixelated',

//         playerVars: {
//           'playsinline': 1,
//           'rel': 0,
//           'modestbranding': 0,
//           'showinfo': 0,
//           'controls': 1,
//           'enablejsapi': 1,
//           'origin': typeof window !== 'undefined' ? window.location.origin : '',
//           'fs': 1,
//           'autoplay': autoplay ? 1 : 0,
//         },
//         events: {
//           'onReady': () => {
//             setPlayerReady(true)
//             console.log('YouTube Player Ready for video:', videoId)
//           },
//           'onStateChange': (event) => {
//             // Handle player state changes if needed
//           },
//           'onError': (event) => {
//             console.error('YouTube Player Error:', event.data)
//           }
//         }
//       })
//     }

//     // Check if YouTube API is ready
//     if (window.YT && window.YT.Player) {
//       initializePlayer()
//     } else {
//       // Load YouTube API if not already loaded
//       if (!window.YT) {
//         const tag = document.createElement('script')
//         tag.src = "https://www.youtube.com/iframe_api"
//         const firstScriptTag = document.getElementsByTagName('script')[0]
//         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

//         window.onYouTubeIframeAPIReady = initializePlayer
//       } else {
//         window.onYouTubeIframeAPIReady = initializePlayer
//       }
//     }

//     return () => {
//       if (playerInstanceRef.current) {
//         playerInstanceRef.current.destroy()
//       }
//       window.onYouTubeIframeAPIReady = null
//     }
//   }, [videoId, autoplay])

//   return (
//     <div className="video-player-container">
//       <div 
//         ref={playerRef}
//         className="youtube-player"
//         aria-label={`YouTube video player for ${title}`}
//         title={title}
//       ></div>
      
//       {!playerReady && (
//         <div className="player-loading">
//           <div className="loading-spinner"></div>
//           <p>Loading YouTube player...</p>
//         </div>
//       )}
//     </div>
//   )
// }



























//                                    OK CODE YT



// import { useEffect, useRef } from 'react'

// export default function YouTubePlayer({ videoId, title, autoplay = false }) {
//   const playerRef = useRef(null)
//   const playerInstanceRef = useRef(null)

//   useEffect(() => {
//     if (!videoId) {
//       console.error('YouTubePlayer: No videoId provided')
//       return
//     }

//     // Clean video ID - remove any URL parameters or invalid characters
//     const cleanVideoId = videoId.replace(/[^a-zA-Z0-9_-]/g, '').substring(0, 11)
    
//     if (!cleanVideoId) {
//       console.error('YouTubePlayer: Invalid videoId after cleaning:', videoId)
//       return
//     }

//     console.log('Loading YouTube video with ID:', cleanVideoId)

//     // Load the IFrame Player API code asynchronously
//     if (!window.YT) {
//       const tag = document.createElement('script')
//       tag.src = "https://www.youtube.com/player_api"
//       const firstScriptTag = document.getElementsByTagName('script')[0]
//       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
//     }

//     // Replace the player element with an iframe and YouTube player
//     window.onYouTubePlayerAPIReady = function() {
//       if (!playerRef.current) return
      
//       try {
//         playerInstanceRef.current = new YT.Player(playerRef.current, {
//           height: '100%',
//           width: '100%',
//           filter: 'url(#ultraSharp) brightness(1.25) contrast(1.15) saturate(1.5) hue-rotate(5deg)',
//           transform: 'translateZ(0)',
//           imageRendering: 'pixelated',
//           videoId: cleanVideoId,
//           playerVars: {
//             // 'autoplay': autoplay ? 1 : 0,
//             'autoplay': 1,
//             'controls': 1,
//             'rel': 0,
//             'showinfo': 0,
//             'modestbranding': 1,
//             'playsinline': 1
//           },
//           events: {
//             'onReady': function(event) {
//               console.log('YouTube Player Ready for video:', cleanVideoId)
//             },
//             'onStateChange': function(event) {
//               // Handle state changes if needed
//             },
//             'onError': function(event) {
//               console.error('YouTube Player Error:', event.data)
//             }
//           }
//         })
//       } catch (error) {
//         console.error('Failed to initialize YouTube player:', error)
//       }
//     }

//     // If API is already loaded, initialize immediately
//     if (window.YT && window.YT.Player) {
//       window.onYouTubePlayerAPIReady()
//     }

//     return () => {
//       // Cleanup
//       if (playerInstanceRef.current && playerInstanceRef.current.destroy) {
//         playerInstanceRef.current.destroy()
//       }
//       window.onYouTubePlayerAPIReady = null
//     }
//   }, [videoId, autoplay])

//   if (!videoId) {
//     return (
//       <div className="w-full h-full bg-black flex items-center justify-center text-white rounded-lg">
//         <div className="text-center">
//           <p>No video ID provided</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div 
//       ref={playerRef}
//       id="ytplayer"
//       className="w-full h-full bg-black rounded-lg overflow-hidden"
//       style={{ minHeight: '400px' }}
//     >
//       <div className="w-full h-full flex items-center justify-center text-white">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
//           <p>Loading YouTube Player...</p>
//           <p className="text-sm text-gray-400 mt-2">Video ID: {videoId}</p>
//         </div>
//       </div>
//     </div>
//   )
// }
















// import { useEffect, useRef } from 'react'

// export default function YouTubePlayer({ videoId, title, autoplay = false }) {
//   const playerRef = useRef(null)
//   const playerInstanceRef = useRef(null)

//   useEffect(() => {
//     if (!videoId) {
//       console.error('YouTubePlayer: No videoId provided')
//       return
//     }

//     // Clean video ID - remove any URL parameters or invalid characters
//     const cleanVideoId = videoId.replace(/[^a-zA-Z0-9_-]/g, '').substring(0, 11)
    
//     if (!cleanVideoId) {
//       console.error('YouTubePlayer: Invalid videoId after cleaning:', videoId)
//       return
//     }

//     console.log('Loading YouTube video with ID:', cleanVideoId)

//     // Load the IFrame Player API code asynchronously
//     if (!window.YT) {
//       const tag = document.createElement('script')
//       tag.src = "https://www.youtube.com/player_api"
//       const firstScriptTag = document.getElementsByTagName('script')[0]
//       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
//     }

//     // Replace the player element with an iframe and YouTube player
//     window.onYouTubePlayerAPIReady = function() {
//       if (!playerRef.current) return
      
//       try {
//         playerInstanceRef.current = new YT.Player(playerRef.current, {
//           height: '100%',
//           width: '100%',
//           filter: 'url(#ultraSharp) brightness(1.25) contrast(1.15) saturate(1.5) hue-rotate(5deg)',
//           transform: 'translateZ(0)',
//           imageRendering: 'pixelated',
//           videoId: cleanVideoId,
//           playerVars: {
//             'autoplay': 1,
//             'controls': 1,
//             'rel': 0,
//             'showinfo': 0,
//             'modestbranding': 1,
//             'playsinline': 1,
//             'loop': 1, // Enable looping
//             'playlist': cleanVideoId // Required for loop to work with single video
//           },
//           events: {
//             'onReady': function(event) {
//               console.log('YouTube Player Ready for video:', cleanVideoId)
//               // Ensure looping is enabled
//               event.target.setLoop(true);
//             },
//             'onStateChange': function(event) {
//               // Handle state changes if needed
//               if (event.data === YT.PlayerState.ENDED) {
//                 // Restart the video when it ends
//                 event.target.playVideo();
//               }
//             },
//             'onError': function(event) {
//               console.error('YouTube Player Error:', event.data)
//             }
//           }
//         })
//       } catch (error) {
//         console.error('Failed to initialize YouTube player:', error)
//       }
//     }

//     // If API is already loaded, initialize immediately
//     if (window.YT && window.YT.Player) {
//       window.onYouTubePlayerAPIReady()
//     }

//     return () => {
//       // Cleanup
//       if (playerInstanceRef.current && playerInstanceRef.current.destroy) {
//         playerInstanceRef.current.destroy()
//       }
//       window.onYouTubePlayerAPIReady = null
//     }
//   }, [videoId, autoplay])

//   if (!videoId) {
//     return (
//       <div className="w-full h-full bg-black flex items-center justify-center text-white rounded-lg">
//         <div className="text-center">
//           <p>No video ID provided</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div 
//       ref={playerRef}
//       id="ytplayer"
//       className="w-full h-full bg-black rounded-lg overflow-hidden"
//       style={{ minHeight: '400px' }}
//     >
//       <div className="w-full h-full flex items-center justify-center text-white">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
//           <p>Loading YouTube Player...</p>
//           <p className="text-sm text-gray-400 mt-2">Video ID: {videoId}</p>
//         </div>
//       </div>
//     </div>
//   )
// }





import { useEffect, useRef } from 'react'

export default function YouTubePlayer({ videoId, title, autoplay = false }) {
  const playerRef = useRef(null)
  const playerInstanceRef = useRef(null)

  useEffect(() => {
    if (!videoId) {
      console.error('YouTubePlayer: No videoId provided')
      return
    }

    // Clean video ID - remove any URL parameters or invalid characters
    const cleanVideoId = videoId.replace(/[^a-zA-Z0-9_-]/g, '').substring(0, 11)
    
    if (!cleanVideoId) {
      console.error('YouTubePlayer: Invalid videoId after cleaning:', videoId)
      return
    }

    console.log('Loading YouTube video with ID:', cleanVideoId)

    // Load the IFrame Player API code asynchronously
    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = "https://www.youtube.com/player_api"
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    }

    // Replace the player element with an iframe and YouTube player
    window.onYouTubePlayerAPIReady = function() {
      if (!playerRef.current) return
      
      try {
        playerInstanceRef.current = new YT.Player(playerRef.current, {
          height: '100%',
          width: '100%',
          filter: 'url(#ultraSharp) brightness(1.25) contrast(1.15) saturate(1.5) hue-rotate(5deg)',
          transform: 'translateZ(0)',
          imageRendering: 'pixelated',
          videoId: cleanVideoId,
          playerVars: {
            'autoplay': 1,
            'controls': 1,
            'rel': 0,
            'showinfo': 0,
            'modestbranding': 1,
            'playsinline': 1,
            'loop': 1, // Enable looping
            'playlist': cleanVideoId // Required for loop to work with single video
          },
          events: {
            'onReady': function(event) {
              console.log('YouTube Player Ready for video:', cleanVideoId)
              // Ensure looping is enabled
              event.target.setLoop(true);
            },
            'onStateChange': function(event) {
              // Handle state changes if needed
              if (event.data === YT.PlayerState.ENDED) {
                // Restart the video when it ends
                event.target.playVideo();
              }
            },
            'onError': function(event) {
              console.error('YouTube Player Error:', event.data)
            }
          }
        })
      } catch (error) {
        console.error('Failed to initialize YouTube player:', error)
      }
    }

    // If API is already loaded, initialize immediately
    if (window.YT && window.YT.Player) {
      window.onYouTubePlayerAPIReady()
    }

    return () => {
      // Cleanup
      if (playerInstanceRef.current && playerInstanceRef.current.destroy) {
        playerInstanceRef.current.destroy()
      }
      window.onYouTubePlayerAPIReady = null
    }
  }, [videoId, autoplay])

  if (!videoId) {
    return (
      <div className="w-full h-full bg-black flex items-center justify-center text-white rounded-lg">
        <div className="text-center">
          <p>No video ID provided</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
      <div 
        ref={playerRef}
        id="ytplayer"
        className="w-full h-full"
      >
        <div className="w-full h-full flex items-center justify-center text-white">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
            <p>Loading YouTube Player...</p>
            <p className="text-sm text-gray-400 mt-2">Video ID: {videoId}</p>
          </div>
        </div>
      </div>
    </div>
  )
}











































































































// import { useEffect, useRef, useState } from "react";

// export default function VideoPlayer({
//   videoId,
//   title,
//   autoplay = false,
//   videoSource = "youtube",
// }) {
//   const playerRef = useRef(null);
//   const playerInstanceRef = useRef(null);
//   const [playerReady, setPlayerReady] = useState(false);

//   // Clean videoId (fixes "Invalid video id" error)
//   const extractVideoId = (input) => {
//     if (!input) return "";
//     // If full YouTube URL passed → extract ID
//     const match = input.match(
//       /(?:v=|youtu\.be\/|youtube\.com\/embed\/)([^?&"'>]+)/
//     );
//     return match ? match[1] : input;
//   };

//   const cleanVideoId = extractVideoId(videoId);

//   useEffect(() => {
//     if (!cleanVideoId) return;

//     const initializePlayer = () => {
//       if (!playerRef.current) return;

//       if (playerInstanceRef.current) {
//         playerInstanceRef.current.destroy();
//       }

//       playerInstanceRef.current = new window.YT.Player(playerRef.current, {
//         height: "100%",
//         width: "100%",
//         videoId: cleanVideoId,

//         playerVars: {
//           playsinline: 1,
//           rel: 0,
//           modestbranding: 1,
//           controls: 1,
//           enablejsapi: 1,
//           fs: 1,
//           autoplay: autoplay ? 1 : 0,
//           origin: window.location.origin,
//         },

//         events: {
//           onReady: () => {
//             setPlayerReady(true);
//             console.log("YouTube player loaded:", cleanVideoId);
//           },
//           onError: (event) => {
//             console.error("YouTube Player Error:", event.data);
//           },
//         },
//       });
//     };

//     // Load API safely
//     const loadYouTubeAPI = () => {
//       if (window.YT && window.YT.Player) {
//         initializePlayer();
//         return;
//       }

//       const existingScript = document.getElementById("youtube-iframe-api");
//       if (existingScript) return;

//       const tag = document.createElement("script");
//       tag.id = "youtube-iframe-api";
//       tag.src = "https://www.youtube.com/iframe_api";
//       document.body.appendChild(tag);

//       window.onYouTubeIframeAPIReady = () => {
//         initializePlayer();
//       };
//     };

//     loadYouTubeAPI();

//     return () => {
//       if (playerInstanceRef.current) {
//         playerInstanceRef.current.destroy();
//       }
//       window.onYouTubeIframeAPIReady = null;
//     };
//   }, [cleanVideoId, autoplay]);

//   return (
//     <div className="video-player-container">
//       <div
//         ref={playerRef}
//         className="youtube-player"
//         aria-label={`YouTube video player for ${title}`}
//         title={title}
//       ></div>

//       {!playerReady && (
//         <div className="player-loading">
//           <div className="loading-spinner"></div>
//           <p>Loading YouTube player...</p>
//         </div>
//       )}
//     </div>
//   );
// }


