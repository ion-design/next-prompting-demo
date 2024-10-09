/* A card that allows you to upload or drag & drop an image, and then crop the image to your desired size. maintain 1:1 aspect ratio. */
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Cropper from 'react-easy-crop';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ion/Button';
import { CloudArrowUp, Crop, X } from '@phosphor-icons/react/dist/ssr';

const ImageUploadAndCrop = () => {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false,
  });

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const saveCroppedImage = useCallback(() => {
    if (croppedAreaPixels && image) {
      console.log('Cropped area', croppedAreaPixels);
      alert('Image cropped! Check console for cropped area details.');
    }
  }, [croppedAreaPixels, image]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-background w-full max-w-md mx-auto p-6 rounded-radius-md shadow-medium"
    >
      <h2 className="text-2xl font-semibold text-foreground mb-4">Upload and Crop Image</h2>
      <AnimatePresence mode="wait">
        {!image ? (
          <motion.div
            key="dropzone"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              {...getRootProps()}
              className={`border-2 border-dashed border-stroke p-8 rounded-radius-sm text-center cursor-pointer transition-colors ${
                isDragActive ? 'border-primary bg-primary-accent' : 'hover:border-primary-hover'
              }`}
            >
              <input {...getInputProps()} />
              <CloudArrowUp size={48} className="mx-auto mb-4 text-secondary" />
              <p className="text-secondary">Drag & drop an image here, or click to select one</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="cropper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative h-64 mb-4">
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <label htmlFor="zoom" className="text-secondary">
                  Zoom:
                </label>
                <input
                  id="zoom"
                  type="range"
                  min={1}
                  max={3}
                  step={0.1}
                  value={zoom}
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="w-2/3"
                />
              </div>
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  color="neutral"
                  size="md"
                  onClick={() => setImage(null)}
                  iconLeading={<X size={16} />}
                >
                  Cancel
                </Button>
                <Button
                  variant="filled"
                  color="primary"
                  size="md"
                  onClick={saveCroppedImage}
                  iconLeading={<Crop size={16} />}
                >
                  Save Cropped Image
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ImageUploadAndCrop;

// Animated with AI!