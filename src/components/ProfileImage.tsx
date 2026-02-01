import React from 'react';

interface PrfileImageProps {
  imageUrl: string;
}

const PrfileImage: React.FC<PrfileImageProps> = ({ imageUrl }) => {
  return (
    <div className='flex justify-center'>
        <div className="w-48 h-48 md:w-64 md:h-64">
          <img src={imageUrl} alt="Image of Natalia Smiling" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
    </div>
  );
};

export default PrfileImage;