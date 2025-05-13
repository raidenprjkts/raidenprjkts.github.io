import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import Modal from './components/Modal';
import Footer from './components/Footer';
import { Github, ExternalLink, MessageCircle, Zap, Sliders } from 'lucide-react';

function App() {
  const [isSourcesModalOpen, setIsSourcesModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Projects Section */}
        <section id="projects" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="raidenTweaks"
                description="An advanced kernel management solution offering customized performance profiles. Designed to enhance your mobile experience through intelligent system optimization."
                icon={Zap}
                onClick={() => {
                    setTimeout(() => {
                        window.open('https://www.pling.com/p/1597979', '_blank');
                    }, 800);
                }}
              />
              <FeatureCard
                title="iKCAL"
                description="A sophisticated Magisk module for display calibration, offering carefully curated presets and custom options to achieve your perfect visual experience."
                icon={Sliders}
                onClick={() => {
                    setTimeout(() => {
                        window.open('https://www.pling.com/p/1996119', '_blank');
                    }, 800);
                }}
              />
              <FeatureCard
                title="Sources"
                description="Access our source code repositories and contribute to our projects."
                icon={Github}
                onClick={() => setIsSourcesModalOpen(true)}
              />
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">About raidenprjkts</h2>
              <p className="text-lg text-gray-600 mb-8">
                raidenprjkts is a central hub for innovative mobile tweaks and tools. 
                Our mission is to enhance the mobile experience through carefully crafted 
                modifications and utilities that push the boundaries of what's possible.
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Our Philosophy</h3>
                <p className="text-gray-600">
                  We believe in creating beautiful, functional tools that respect user privacy and 
                  enhance the mobile experience. Every project is built with attention to detail, 
                  performance, and user experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Connect with us and other members of the community to stay updated, 
              share ideas, and get support for our projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://t.me/raidenprjkts" 
                className="px-8 py-3 bg-[#0088cc] text-white font-medium rounded-full hover:bg-[#0077b5] transition-colors duration-300 flex items-center justify-center"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Telegram Channel
              </a>
              <a 
                href="https://t.me/raidenprjktsgroup" 
                className="px-8 py-3 bg-white text-[#0088cc] border border-[#0088cc] font-medium rounded-full hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Telegram Group
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Sources Modal */}
      <Modal
        isOpen={isSourcesModalOpen}
        onClose={() => setIsSourcesModalOpen(false)}
        title="Source Repositories"
      >
        <div className="space-y-4">
          <p className="text-gray-600 mb-4">
            Access our project source code on GitHub:
          </p>
          <a
            href="https://github.com/raidenkk/raidenTweaks"
            className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="w-6 h-6 mr-3 text-black" />
            <div>
              <h4 className="text-lg font-medium">raidenTweaks</h4>
              <p className="text-sm text-gray-500">
                Mobile tweaks and modifications repository
              </p>
            </div>
          </a>
          <a
            href="https://github.com/raidenkk/iKCAL"
            className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="w-6 h-6 mr-3 text-black" />
            <div>
              <h4 className="text-lg font-medium">iKCAL</h4>
              <p className="text-sm text-gray-500">
                Advanced display calibration Magisk module
              </p>
            </div>
          </a>
        </div>
      </Modal>
    </div>
  );
}

export default App;