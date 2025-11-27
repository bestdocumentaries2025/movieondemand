// import VideoCard from './VideoCard'

// export default function VideoGrid({ videos, showViewAll = true }) {
//   return (
//     <section id="videos" className="video-grid-section">
//       <div className="container">
//         {videos.length > 0 ? (
//           <>
//             <div className="video-grid">
//               {videos.map(video => (
//                 <VideoCard key={video.id} video={video} />
//               ))}
//             </div>
            
//             {showViewAll && (
//               <div className="view-all">
//                 <a href="/videos" className="cta-button secondary">
//                   View All Videos
//                 </a>
//               </div>
//             )}
//           </>
//         ) : (
//           <div className="no-videos">
//             <p>No videos available at the moment. Please check back later.</p>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }






// components/VideoGrid.js
import VideoCard from './VideoCard';
import Link from "next/link";


export default function VideoGrid({ videos, mediaType = 'movie', showViewAll = true }) {
  if (!videos || videos.length === 0) {
    return (
      <div className="no-videos">
        <p>No videos found. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="video-grid-container">
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard 
            key={video.id} 
            video={video} 
            mediaType={mediaType}
          />
        ))}
      </div>
      
      {/* {showViewAll && (
        <div className="view-all-container">
          <button className="view-all-button">
            View All
          </button>
        </div>
      )} */}

{showViewAll && (
  <div className="view-all-container">
    <Link href="/videos">
      <button className="view-all-button">
        View All
      </button>
    </Link>
  </div>
)}

      <style jsx>{`
        .video-grid-container {
          margin: 2rem 0;
        }
        
        .video-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .no-videos {
          text-align: center;
          padding: 3rem;
          color: #666;
        }
        
        .view-all-container {
          text-align: center;
          margin-top: 2rem;
        }
        
        .view-all-button {
          background: #e50914;
          color: white;
          border: none;
          padding: 0.8rem 2rem;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          transition: background 0.3s;
        }
        
        .view-all-button:hover {
          background: #f40612;
        }
        
        @media (max-width: 768px) {
          .video-grid {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}