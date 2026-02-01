import React from 'react';

interface PrfileImageProps {
  imageUrl: string;
  alt: string;
}

const PrfileImage: React.FC<PrfileImageProps> = ({ imageUrl, alt }) => {
  return (
    <div className='flex items-center justify-center'>
      <img src={imageUrl} alt={alt} className="w-12 h-12 object-contain" />
    </div>
  );
};

export default PrfileImage;