import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import FullJourney from './components/FullJourney'; // <-- import full journey

import reportWebVitals from './reportWebVitals';
import Capabilities from './components/Capabilities';
import Career from './components/Career';
import CareerEnd from './components/CareerEnd';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Introduction />
              <Experience />
              <Capabilities />
              <Career />
              <CareerEnd />

            </>
          }
        />

        {/* FULL JOURNEY PAGE */}
        <Route path="/full-journey" element={
          <>
            <FullJourney />
            <CareerEnd />
          </>
        } />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
