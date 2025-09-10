import React from 'react';

interface PrfileImageProps {
  imageUrl: string;
}

const PrfileImage: React.FC<PrfileImageProps> = ({ imageUrl }) => {
  return (
    <div className='flex justify-left pb-10'>
        <div className="w-1/5">
          <img src={imageUrl} alt="Image of Natalia Smiling" className="w-full h-full" />
        </div>
    </div>
  );
};

export default PrfileImage;