import React, { useState } from 'react';

import Intro from './components/Intro';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import ResumePage from './components/Resume';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div id="wrapper" className="fade-in">
      <Intro></Intro>
      <Nav 
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main id="main">
        {/* {!contactSelected ? (
          <>
            <About />
            <Portfolio />
          </>
        ) : (
          <ContactForm />
        )} */}
      <div>
        if(!contactSelected && !resumeSelected) {
          <>
            <About />
            <Portfolio />
          </>
        } else if (resumeSelected && !contactSelected) {
          <ResumePage />
        } else {
          <ContactForm />
        }
      </div>
        
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;