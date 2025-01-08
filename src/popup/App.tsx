import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/settings' element={<>Settings</>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
