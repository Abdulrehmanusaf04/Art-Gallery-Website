import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Instagram, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Palette className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold">ArtistPortfolio</span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Creating stunning digital art and animations that bring imagination to life. 
              Specializing in 2D animations, NFT art, and game assets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors border border-gray-700">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors border border-gray-700">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors border border-gray-700">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors border border-gray-700">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-purple-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-purple-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">2D Animation</span></li>
              <li><span className="text-gray-400">NFT Art</span></li>
              <li><span className="text-gray-400">Game Assets</span></li>
              <li><span className="text-gray-400">Storyboards</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} ArtistPortfolio. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-2 md:mt-0">
            Made with <Heart className="h-4 w-4 text-pink-500 mx-1" /> by a passionate artist
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;