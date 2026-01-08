import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { WhyBlockchain } from './components/WhyBlockchain';
import { Audience } from './components/Audience';
import { Disclaimer } from './components/Disclaimer';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-stone-200 selection:text-ink">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <WhyBlockchain />
        <Audience />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  );
}

export default App;