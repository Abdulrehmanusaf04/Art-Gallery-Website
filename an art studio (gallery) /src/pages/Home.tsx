import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import FeaturedArtwork from '../components/FeaturedArtwork';
import Bio from '../components/Bio';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <FeaturedArtwork />
      <Bio />
    </motion.div>
  );
};

export default Home;