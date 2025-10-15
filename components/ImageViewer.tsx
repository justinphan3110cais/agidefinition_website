"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ImageViewerProps {
  imagePath: string;
  alt: string;
  className?: string;
}

export function ImageViewer({ imagePath, alt, className = "" }: ImageViewerProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleLoadingComplete = () => {
    setLoading(false);
    setError(null);
  };

  const handleError = () => {
    setError(`Failed to load image: ${imagePath}`);
    setLoading(false);
  };

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="flex items-center justify-center p-8 bg-gray-100 rounded-lg animate-pulse">
          <div className="text-gray-600" style={{fontFamily: 'Arial, sans-serif'}}>
            Loading image...
          </div>
        </div>
      )}
      
      {error && (
        <div className="flex items-center justify-center p-8 bg-gray-100 rounded-lg">
          <div className="text-red-600 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>
            {error}
          </div>
        </div>
      )}

      <div className={`${loading || error ? 'hidden' : 'block'} rounded-lg border border-gray-200 bg-white overflow-hidden`}>
        <Image
          src={`/assets/abilities/${imagePath}`}
          alt={alt}
          width={800}
          height={600}
          className="w-full h-auto"
          onLoadingComplete={handleLoadingComplete}
          onError={handleError}
          style={{ objectFit: 'contain' }}
          unoptimized
        />
      </div>
    </div>
  );
}
