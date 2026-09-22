import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  style?: React.CSSProperties;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading,
  priority = false,
  style,
}) => {
  const loadingMode = loading || (priority ? 'eager' : 'lazy');

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loadingMode}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      className={className}
      style={style}
    />
  );
};