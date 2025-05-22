import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Solutions from './components/Solutions';
import wallpaper from './assets/wallpaper.png'; 
import TopHeader from './components/TopHeader';
import TopNavTabs from './components/TopNavTabs';
function App() {
  return (
    <div style={{
    backgroundImage: `url(${wallpaper})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  }}
             >
              <TopHeader />
              
      <Navbar />
      <TopNavTabs />
      <HeroSection />
      <Solutions />
    </div>
  );
}

export default App;
