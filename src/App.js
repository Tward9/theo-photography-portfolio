import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import React from 'react';

function App() {

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
