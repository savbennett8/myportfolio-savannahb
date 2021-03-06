import React, { useState } from 'react';

import Intro from './components/Intro';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div id="wrapper" className="fade-in">
      <Intro></Intro>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main id="main">
        {!contactSelected ? (
          <>
            <About />
            <Portfolio />
          </>
        ) : (
          <ContactForm />
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;