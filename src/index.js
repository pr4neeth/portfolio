import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import FullJourney from './components/FullJourney'; 
import Capabilities from './components/Capabilities';
import Career from './components/Career';
import CareerEnd from './components/CareerEnd';

import reportWebVitals from './reportWebVitals';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              {/* <BackgroundGlobe /> */}
              <Introduction />
              <Experience />
              <Capabilities />
              <Career />
              <CareerEnd showReviewButton={true} />
              <Footer />
            </>
          }
        />

        {/* FULL JOURNEY PAGE */}
        <Route
          path="/full-journey"
          element={
            <>
              {/* <BackgroundGlobe /> */}
              <FullJourney />
              <CareerEnd showReviewButton={false} />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
