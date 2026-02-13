import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WeAre from './pages/WeAre';
import Solutions from './pages/Solutions';
import AI from './pages/AI';
import Bitrix24 from './pages/Bitrix24';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/we-are" element={<WeAre />} />
          <Route path="/soluciones" element={<Solutions />} />
          <Route path="/ia" element={<AI />} />
          <Route path="/bitrix24" element={<Bitrix24 />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
