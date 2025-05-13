import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Welcome to raidenprjkts
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Your central hub for innovative mobile tweaks, tools and custom ROMs. Discover our projects and join our community.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            Explore Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-white text-black border border-gray-300 font-medium rounded-full hover:bg-gray-50 transition-colors duration-300"
          >
            Join Community
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;