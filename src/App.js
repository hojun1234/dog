import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import SnsSection from './components/SnsSection';
import SearchSection from './components/SearchSection';
import PromotionSection from './components/PromotionSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <InfoSection />
      <SnsSection />
      <SearchSection />
      <PromotionSection />
      <Footer />
    </div>
  );
}

export default App;