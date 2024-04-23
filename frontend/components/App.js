import React from 'react';
 import { Routes, Route, NavLink } from 'react-router-dom'; // Make sure you have the correct version of React Router installed
import Home from './Home';
import AboutPage from './Order';
import  Form  from './Form';

const App = () => {
  return (
    // <Router>
    
      <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Form />} />
            {/* Add more routes as needed */}
          </Routes>
          <header>
          <h1>My Pizza App</h1>
          <nav>
            <ul>
              <li><NavLink to="/" end activeclassname="active">Home</NavLink></li> {/* Use activeclassname */}
              <li><NavLink to="/order" activeclassname="active">Order</NavLink></li> {/* Use activeclassname */}
              {/* Add more navigation links as needed */}
            </ul>
          </nav>
        </header>
      </div>
    // </Router>
  );
};

export default App;
