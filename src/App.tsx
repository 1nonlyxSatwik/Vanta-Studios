import React from 'react';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import MissionStatement from './components/MissionStatement';
import Services from './components/Services';
import Manifesto from './components/Manifesto';
import Footer from './components/Footer';


function App() {
  const scrollToCalendar = () => {
    const el = document.getElementById('book-call');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      <Hero onBookCall={scrollToCalendar} />
      <ValueProps />
      <MissionStatement />
      <Services onBookCall={scrollToCalendar} />
      <Manifesto />
      <Footer />
    </>
  );
}

export default App;
