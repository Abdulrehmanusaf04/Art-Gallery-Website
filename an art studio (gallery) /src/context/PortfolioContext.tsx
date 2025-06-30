import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Artwork } from '../types';
import { portfolioData } from '../data/portfolioData';

interface PortfolioContextType {
  artworks: Artwork[];
  selectedArtwork: Artwork | null;
  isModalOpen: boolean;
  openModal: (artwork: Artwork) => void;
  closeModal: () => void;
  getArtworksByCategory: (category: string) => Artwork[];
  categories: string[];
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

interface PortfolioProviderProps {
  children: ReactNode;
}

export const PortfolioProvider: React.FC<PortfolioProviderProps> = ({ children }) => {
  const [artworks] = useState<Artwork[]>(portfolioData);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedArtwork(null);
    setIsModalOpen(false);
  };

  const getArtworksByCategory = (category: string) => {
    return artworks.filter(artwork => artwork.category === category);
  };

  const categories = [...new Set(artworks.map(artwork => artwork.category))];

  return (
    <PortfolioContext.Provider value={{
      artworks,
      selectedArtwork,
      isModalOpen,
      openModal,
      closeModal,
      getArtworksByCategory,
      categories
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};