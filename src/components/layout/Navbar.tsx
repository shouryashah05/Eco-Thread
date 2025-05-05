import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Recycle, ShoppingBag, Globe, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/', icon: <Globe className="w-4 h-4" /> },
    { name: 'Recycling', path: '/recycling', icon: <Recycle className="w-4 h-4" /> },
    { name: 'Partnerships', path: '/partnerships', icon: <ShoppingBag className="w-4 h-4" /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex-shrink-0 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <NavLink to="/" className="flex items-center">
              <Recycle className="h-8 w-8 mr-2 text-neon-teal" />
              <span className="text-xl font-bold neon-text-teal">EcoThreads</span>
            </NavLink>
          </motion.div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `
                  relative flex items-center space-x-1 text-sm font-medium transition duration-300
                  ${isActive ? 'neon-text-teal' : 'text-foreground/80 hover:text-foreground'}
                `}
              >
                {({ isActive }) => (
                  <>
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-teal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-neon-teal focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <motion.div
        className={`md:hidden glassmorphic mx-4 mt-2 rounded-xl overflow-hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                block px-3 py-2 rounded-md text-base font-medium flex items-center
                ${isActive ? 'neon-text-teal bg-white/5' : 'text-foreground/80 hover:bg-white/5 hover:text-foreground'}
              `}
            >
              <span className="mr-2">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;