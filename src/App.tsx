import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import RecyclingPage from './pages/RecyclingPage';
import PartnershipsPage from './pages/PartnershipsPage';

const App: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold neon-text-teal mb-4">EcoThreads</h1>
          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink"
              style={{
                width: '100%',
                animation: 'loadingBar 2s ease-in-out'
              }}
            />
          </div>
          <style jsx>{`
            @keyframes loadingBar {
              0% { width: 0%; }
              100% { width: 100%; }
            }
          `}</style>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/recycling" element={<RecyclingPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
};

export default App;