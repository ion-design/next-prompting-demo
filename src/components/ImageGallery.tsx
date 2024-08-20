/* Design a responsive image gallery with a masonry layout. Include hover effects that show image details and a lightbox feature for full-screen viewing. */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MagnifyingGlass } from '@phosphor-icons/react';

interface Image {
  id: string;
  src: string;
  title: string;
  description: string;
}

const images: Image[] = [
  { id: '1', src: 'https://hips.hearstapps.com/hmg-prod/images/napa-valley-california-wine-country-vineyard-field-royalty-free-image-1699046053.jpg', title: 'Image 1', description: 'Description for Image 1' },
  { id: '2', src: 'https://afar.brightspotcdn.com/dims4/default/f0c9665/2147483647/strip/true/crop/1357x720+41+0/resize/1440x764!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F55%2F29%2F13909c464f0db5ce70949b5b0bd2%2Fnapa-essentials-guide-unsplash.jpg', title: 'Image 2', description: 'Description for Image 2' },
  { id: '3', src: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_671,q_65,w_640/v1/clients/napavalley-redesign/Auberge_Du_Soleil_overlook_24325854-f3c7-40db-baa4-599e18158881.jpg', title: 'Image 3', description: 'Description for Image 3' },
  { id: '4', src: 'https://publish.purewow.net/wp-content/uploads/sites/2/2023/09/downtown-napa-travel-guide-uni.jpg?resize=720%2C780', title: 'Image 4', description: 'Description for Image 4' },
  { id: '5', src: 'https://media.timeout.com/images/103674384/750/422/image.jpg', title: 'Image 5', description: 'Description for Image 5' },
  { id: '6', src: 'https://assets.goaaa.com/image/upload/w_auto,q_auto:best,f_auto/v1647564225/singularity-migrated-images/sunset-jamieson-ranch-vineyards-scenic-napa-valley-secrets-via-magazine.jpg.jpg', title: 'Image 6', description: 'Description for Image 6' },
];

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {images.map((image) => (
          <motion.div
            key={image.id}
            className="relative mb-4 break-inside-avoid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full rounded-md"
            />
            <motion.div
              className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent rounded-md opacity-0 hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <h3 className="text-white text-lg font-semibold">{image.title}</h3>
              <p className="text-white text-sm">{image.description}</p>
              <button
                onClick={() => setSelectedImage(image)}
                className="mt-2 text-white hover:text-blue-400 transition-colors"
              >
                <MagnifyingGlass size={24} />
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
                <p className="text-white text-sm mt-1">{selectedImage.description}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;
