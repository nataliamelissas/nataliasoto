import React from 'react';

interface PrfileImageProps {
  imageUrl: string;
  alt: string;
}

const PrfileImage: React.FC<PrfileImageProps> = ({ imageUrl, alt }) => {
  return (
    <div className='flex justify-center pb-10'>
      <img src={imageUrl} alt={alt} className="xs:w-full lg:w-1/2 flex-shrink-0" />
    </div>
  );
};

export default PrfileImage;