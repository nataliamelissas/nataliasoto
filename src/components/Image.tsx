import React from 'react';

interface PrfileImageProps {
  imageUrl: string;
  alt: string;
}

const PrfileImage: React.FC<PrfileImageProps> = ({ imageUrl, alt }) => {
  return (
    <div className='flex justify-center pb-10'>
      <img src={imageUrl} alt={alt} className="w-1/2 h-1/2" />
    </div>
  );
};

export default PrfileImage;