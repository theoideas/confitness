import React from 'react';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  unoptimized?: boolean;
  className?: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  fill = false,
  priority = false,
  quality,
  sizes,
  unoptimized,
  className = '',
  width,
  height,
  style,
  ...props
}) => {
  // Clean URL if wrapped in markdown link syntax or brackets
  let cleanSrc = src.trim();
  if (cleanSrc.startsWith('[') && cleanSrc.includes('](')) {
    const match = cleanSrc.match(/\((.*?)\)/);
    if (match && match[1]) {
      cleanSrc = match[1];
    }
  } else if (cleanSrc.startsWith('[') && cleanSrc.endsWith(']')) {
    cleanSrc = cleanSrc.slice(1, -1);
  }

  // Optimize Unsplash images if parameters present
  if (cleanSrc.includes('unsplash.com') && quality) {
    cleanSrc = cleanSrc.replace(/q=\d+/, `q=${quality}`);
  }

  const baseStyle: React.CSSProperties = fill
    ? {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit: 'cover',
        ...style,
      }
    : { ...style };

  return (
    <img
      src={cleanSrc}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      className={className}
      style={baseStyle}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
};

export default Image;
