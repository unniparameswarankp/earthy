import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  // Import the header component
import Home from './pages/Home';
import Footer from './components/Footer';
import './styles/App.css';  // Importing the stylesheet

function App() {
  return (
    <Router>
    <Header />  {/* Add the Header component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* You can add more routes here, like /products, /cart, etc. */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
