import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import BookDetails from '../pages/EditBook';
import AddBook from '../pages/AddBook';
import {Toaster} from 'react-hot-toast'
import EditBook from '../pages/EditBook';
import About from '../pages/About';
import Footer from '../pages/Footer';
// Import all pages

const App = () => {
  return (<>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books/:id" element={<EditBook />} />
        <Route path="/books/add" element={<AddBook />} />
      </Routes>
      <Footer/>
    </Router>
      <Toaster/>
  </>
  );
};

export default App;
