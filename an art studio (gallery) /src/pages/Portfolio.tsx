import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { Eye, Filter } from 'lucide-react';

const Portfolio: React.FC = () => {
  const { artworks, categories, openModal } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredArtworks = selectedCategory === 'All' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedCategory);

  const allCategories = ['All', ...categories];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-20 bg-black"
    >
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-900/50 via-black to-pink-900/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore my creative journey through various digital art forms and animations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-12"
          >
            <div className="flex items-center space-x-2 bg-gray-800 rounded-full p-2 border border-gray-700">
              <Filter className="h-5 w-5 text-gray-400 ml-2" />
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-purple-400 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Artwork Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openModal(artwork)}
              >
                <div className="relative overflow-hidden rounded-xl bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={artwork.imageUrl}
                      alt={artwork.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Eye className="h-12 w-12 mx-auto mb-4" />
                      <p className="text-lg font-medium">View Details</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-purple-400 font-medium">{artwork.category}</span>
                      <span className="text-sm text-gray-400">{artwork.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{artwork.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{artwork.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {artwork.tools.slice(0, 2).map((tool, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded border border-gray-600">
                          {tool}
                        </span>
                      ))}
                      {artwork.tools.length > 2 && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded border border-gray-600">
                          +{artwork.tools.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredArtworks.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-400 text-lg">No artworks found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Portfolio;