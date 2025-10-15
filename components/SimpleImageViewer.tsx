"use client";

import { useState } from 'react';

interface SimpleImageViewerProps {
  imagePath: string;
  alt: string;
  className?: string;
}

export function SimpleImageViewer({ imagePath, alt, className = "" }: SimpleImageViewerProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleLoad = () => {
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

      <div className={`${loading || error ? 'hidden' : 'block'}`}>
        <img
          src={`/assets/abilities/${imagePath}`}
          alt={alt}
          className="w-full h-auto"
          onLoad={handleLoad}
          onError={handleError}
          style={{ objectFit: 'contain', maxWidth: '100%' }}
        />
      </div>
    </div>
  );
}
