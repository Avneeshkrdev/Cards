// Card.js
import React from 'react';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 min-w-full min-h-full">
      <div className="max-w-xs md:max-w-md rounded overflow-hidden shadow-lg">
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
