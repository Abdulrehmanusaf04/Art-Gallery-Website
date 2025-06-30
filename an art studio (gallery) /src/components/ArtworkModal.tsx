import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Palette, ShoppingCart, Zap } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const ArtworkModal: React.FC = () => {
  const { selectedArtwork, isModalOpen, closeModal } = usePortfolio();

  return (
    <AnimatePresence>
      {isModalOpen && selectedArtwork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-gray-800/90 rounded-full hover:bg-gray-700 transition-colors border border-gray-600"
              >
                <X className="h-6 w-6 text-gray-300" />
              </button>
              
              <div className="aspect-video overflow-hidden rounded-t-2xl">
                <img
                  src={selectedArtwork.imageUrl}
                  alt={selectedArtwork.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium border border-purple-600/30">
                      {selectedArtwork.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {selectedArtwork.year}
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-4">
                    {selectedArtwork.title}
                  </h2>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {selectedArtwork.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Palette className="h-5 w-5 mr-2" />
                      Tools Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedArtwork.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:w-80">
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-white">
                        {selectedArtwork.isNFT ? `${selectedArtwork.price} ETH` : `$${selectedArtwork.price}`}
                      </div>
                      <div className="text-sm text-gray-400">
                        {selectedArtwork.isNFT ? 'NFT Price' : 'Commission Price'}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {selectedArtwork.isNFT ? (
                        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center hover:scale-105 transition-transform">
                          <Zap className="h-5 w-5 mr-2" />
                          Buy NFT
                        </button>
                      ) : (
                        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center hover:scale-105 transition-transform">
                          <ShoppingCart className="h-5 w-5 mr-2" />
                          Commission Similar
                        </button>
                      )}
                      
                      <button className="w-full border-2 border-gray-600 text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                        Get Quote
                      </button>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-700">
                      <h4 className="font-semibold text-white mb-2">Interested in similar work?</h4>
                      <p className="text-sm text-gray-400">
                        Contact me to discuss your project requirements and get a custom quote.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ArtworkModal;