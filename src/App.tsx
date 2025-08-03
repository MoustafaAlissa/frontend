import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Willkommen from './components/pages/Willkommen';
import Impressum from './components/pages/Impressum';


import Technologie from './components/pages/Technologie';
import Bestellung from './components/pages/Bestellung';
import Card from './components/CardProps';


const App = () => {

    const cardData = [
        { title: 'Angebot 1', image: 'https://via.placeholder.com/150', content: 'Dies ist der Inhalt von Angebot 1.' },
        { title: 'Angebot 2', image: 'https://via.placeholder.com/150', content: 'Dies ist der Inhalt von Angebot 2.' },
        { title: 'Angebot 3', image: 'https://via.placeholder.com/150', content: 'Dies ist der Inhalt von Angebot 3.' },
    ];

  return (
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/willkommen">Willkommen</Link></li>
            <li><Link to="/impressum">Impressum</Link></li>
            <li><Link to="/technologie">Technologie</Link></li>
            <li><Link to="/bestellung">Bestellung</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<div>Home</div>}/>
          <Route path="/willkommen" element={<Willkommen/>}/>
          <Route path="/impressum" element={<Impressum/>}/>
          <Route path="/technologie" element={<Technologie/>}/>
          <Route path="/bestellung" element={<Bestellung/>}/>
        </Routes>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {cardData.map((card, index) => (
                  <Card key={index} title={card.title} image={card.image} content={card.content} />
              ))}
          </div>
      </Router>
  );
};

export default App;