import React from 'react';
import { Link } from 'react-router-dom';
import { Recycle, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background/95 pt-8 pb-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Recycle className="h-6 w-6 mr-2 text-neon-green" />
              <span className="text-lg font-bold text-neon-green">EcoThreads</span>
            </Link>
            <p className="text-foreground/70 text-sm mb-4">
              Revolutionizing the fashion industry through sustainable practices.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-neon-green transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/recycling" className="text-foreground/70 hover:text-neon-green transition-colors text-sm">
                  Recycling Methods
                </Link>
              </li>
              <li>
                <Link to="/partnerships" className="text-foreground/70 hover:text-neon-green transition-colors text-sm">
                  Brand Partnerships
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact US</h3>
            <ul className="space-y-2">
              <li className="text-foreground/70 text-sm cursor-pointer">
                Email: info@ecothreads.com
              </li>
              <li className="text-foreground/70 text-sm cursor-pointer">
                Location: Sustainable Fashion District, Pune
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-foreground/50 text-xs">
            © {new Date().getFullYear()} EcoThreads. All rights reserved.
          </p>
          <p className="text-foreground/50 text-xs mt-2 sm:mt-0 flex items-center">
            Made with <Heart className="h-3 w-3 mx-1 text-neon-green" /> for a sustainable future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;