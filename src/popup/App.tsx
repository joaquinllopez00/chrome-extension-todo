import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Create from '../pages/Create';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/settings' element={<>Settings</>} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
