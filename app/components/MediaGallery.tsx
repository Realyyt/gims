'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { MediaItem, mediaItems ,} from '../constants';

// Add this CSS to your global styles or as a styled component
const gradientStyles = `
  @keyframes pulse {
    0% {
      background-position: 0% 50%;
      opacity: 0.8;
    }
    25% {
      opacity: 1;
    }
    50% {
      background-position: 100% 50%;
      opacity: 0.8;
    }
    75% {
      opacity: 1;
    }
    100% {
      background-position: 0% 50%;
      opacity: 0.8;
    }
  }

  .gradient-pulse {
    background: linear-gradient(-45deg, 
      #80bfff,
      #ffffff 10%,
      #80bfff 20%,
      #b3d9ff 40%,
      #ffffff 50%,
      #80bfff 60%,
      #b3d9ff 80%,
      #ffffff 90%,
      #80bfff
    );
    background-size: 400% 400%;
    animation: pulse 4s ease infinite;
  }
`;

export default function MediaGallery() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [visibleItems, setVisibleItems] = useState<MediaItem[]>([]);
  const [page, setPage] = useState(1);
  const [videoStates, setVideoStates] = useState<{[key: string]: 'loading' | 'error' | 'ready'}>({});
  const itemsPerPage = 6;

  // Implement lazy loading
  useEffect(() => {
    setVisibleItems(mediaItems.slice(0, page * itemsPerPage));
  }, [page]);

  // Check video states
  useEffect(() => {
    const checkVideos = async () => {
      const states: {[key: string]: 'loading' | 'error' | 'ready'} = {};
      for (const item of mediaItems) {
        if (item.type === 'video') {
          states[item.src] = 'loading';
          try {
            const response = await fetch(item.src);
            states[item.src] = response.ok ? 'ready' : 'error';
          } catch {
            states[item.src] = 'error';
          }
        }
      }
      setVideoStates(states);
    };
    checkVideos();
  }, []);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleItems.length < mediaItems.length) {
          setPage(prev => prev + 1);
        }
      },
      { threshold: 0.5 }
    );

    const sentinel = document.getElementById('scroll-sentinel');
    if (sentinel) observer.observe(sentinel);

    return () => observer.disconnect();
  }, [visibleItems.length]);

  return (
    <section className="py-20 ">
      <style>{gradientStyles}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-[#293241]"
        >
          EXPERIENCE THE PROCESS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer"
              onClick={() => setSelectedMedia(item)}
            >
              {/* Only show gradient for videos that are loading or errored */}
              {item.type === 'video' && 
               (videoStates[item.src] === 'loading' || videoStates[item.src] === 'error') && (
                <div className="absolute inset-0 gradient-pulse" />
              )}
              
              {item.type === 'video' && videoStates[item.src] === 'ready' && (
                <video
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}

              {item.type === 'image' && (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              )}

              {/* Always show play button for videos */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm
                    transition-all duration-300 group-hover:scale-110 z-10">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 
                group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold truncate">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infinite scroll sentinel */}
        {visibleItems.length < mediaItems.length && (
          <div id="scroll-sentinel" className="h-10" />
        )}

        {/* Fullscreen Modal */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            >
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="relative w-full max-w-[90vw] h-[90vh]">
                {selectedMedia.type === 'video' ? (
                  <video
                    key={selectedMedia.src}
                    controls
                    autoPlay
                    className="w-full h-full"
                  >
                    <source src={selectedMedia.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    fill
                    className="object-contain"
                    priority
                  />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 