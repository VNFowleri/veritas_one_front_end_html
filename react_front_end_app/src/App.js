import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import SharedLayout from './components/SharedLayout';
import Home from './pages/home';
import About from './pages/about';
import Signup from './pages/signup';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;