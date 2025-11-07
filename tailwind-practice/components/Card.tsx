import React from 'react';

interface CardProps {
  title: string;
  imageUrl?: string; 
  children: React.ReactNode;
  header?: React.ReactNode; 
}

export const Card: React.FC<CardProps> = ({ title, imageUrl, children }) => {
  return (

    <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Image Section */}
      {imageUrl && (
        <img 
          className="w-full h-48 object-cover" 
          src={imageUrl} 
          alt={title} 
        />
      )}

      {/* Content Area */}
      <div className="p-6">
        
        <div className="font-bold text-lg text-gray-900 mb-2">{title}</div>
        
                <div className="text-gray-600 text-sm">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;