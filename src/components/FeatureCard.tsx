import React from 'react';
import { FeatureCardProps } from '../types';

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  onClick,
  href,
}) => {
  const CardContent = () => (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 rounded-full bg-gray-100 p-3 transition-colors duration-300 group-hover:bg-gray-200">
          <Icon className="h-8 w-8 text-gray-700" />
        </div>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );

  return onClick ? (
    <button onClick={onClick} className="w-full focus:outline-none">
      <CardContent />
    </button>
  ) : (
    <a href={href} className="block w-full" target="_blank" rel="noreferrer">
      <CardContent />
    </a>
  );
};

export default FeatureCard;