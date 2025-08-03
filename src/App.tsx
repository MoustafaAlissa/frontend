import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Willkommen from './components/pages/Willkommen';
import Impressum from './components/pages/Impressum';
import Technologie from './components/pages/Technologie';
import Bestellung from './components/pages/Bestellung';

const App: React.FC = () => {
  return (
    <Router>
      <nav style={{ backgroundColor: 'lightblue', padding: '10px' }}>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '16px', margin: 0 }}>
          <li><Link style={{ color: 'white', textDecoration: 'none' }} to="/">Home</Link></li>
          <li><Link style={{ color: 'white', textDecoration: 'none' }} to="/willkommen">Willkommen</Link></li>
          <li><Link style={{ color: 'white', textDecoration: 'none' }} to="/impressum">Impressum</Link></li>
          <li><Link style={{ color: 'white', textDecoration: 'none' }} to="/technologie">Technologie</Link></li>
          <li><Link style={{ color: 'white', textDecoration: 'none' }} to="/bestellung">Bestellung</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/willkommen" element={<Willkommen />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/technologie" element={<Technologie />} />
        <Route path="/bestellung" element={<Bestellung />} />
      </Routes>
      <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', marginTop: '40px', textAlign: 'center' }}>
        <p>Impressum: Beispiel GmbH</p>
        <p>Adresse: Musterstraße 1, 12345 Musterstadt</p>
        <p>Öffnungszeiten: Mo-Fr 9:00-18:00</p>
      </footer>
    </Router>
  );
};

export default App;
