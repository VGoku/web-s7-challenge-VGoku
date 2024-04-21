// // // // import React from 'react';
// // // // import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
// // // // import Home from './Home';
// // // // import AboutPage from './AboutPage'; // Correct import path

// // // // const App = () => {
// // // //   return (
// // // //     <Router>
// // // //       <div className="App">
// // // //         <header>
// // // //           <h1>My Pizza App</h1>
// // // //           <nav>
// // // //             <ul>
// // // //               <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
// // // //               <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
// // // //               {/* Add more navigation links as needed */}
// // // //             </ul>
// // // //           </nav>
// // // //         </header>
// // // //         <main>
// // // //           <Switch>
// // // //             <Route path="/" exact component={Home} />
// // // //             <Route path="/about" component={AboutPage} />
// // // //             {/* Add more routes as needed */}
// // // //           </Switch>
// // // //         </main>
// // // //       </div>
// // // //     </Router>
// // // //   );
// // // // };

// // // // export default App;


// // // import React from 'react';
// // // import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// // // import Home from './Home';
// // // import AboutPage from './AboutPage'; // Correct import path

// // // const App = () => {
// // //   return (
// // //     <Router>
// // //       <div className="App">
// // //         <header>
// // //           <h1>My Pizza App</h1>
// // //           <nav>
// // //             <ul>
// // //               <li><NavLink to="/" end activeClassName="active">Home</NavLink></li>
// // //               <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
// // //               {/* Add more navigation links as needed */}
// // //             </ul>
// // //           </nav>
// // //         </header>
// // //         <main>
// // //           <Routes>
// // //             <Route path="/" element={<Home />} />
// // //             <Route path="/about" element={<AboutPage />} />
// // //             {/* Add more routes as needed */}
// // //           </Routes>
// // //         </main>
// // //       </div>
// // //     </Router>
// // //   );
// // // };

// // // export default App;

// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// // import Home from './Home';
// // import AboutPage from './AboutPage'; // Correct import path

// // const App = () => {
// //   return (
// //     <Router>
// //       <div className="App">
// //         <header>
// //           <h1>My Pizza App</h1>
// //           <nav>
// //             <ul>
// //               <li><NavLink to="/" end activeClassName="active">Home</NavLink></li>
// //               <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
// //               {/* Add more navigation links as needed */}
// //             </ul>
// //           </nav>
// //         </header>
// //         <main>
// //           <Routes>
// //             <Route path="/" element={<Home />} />
// //             <Route path="/about" element={<AboutPage />} />
// //             {/* Add more routes as needed */}
// //           </Routes>
// //         </main>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// import Home from './Home';
// import AboutPage from './AboutPage';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <header>
//           <h1>My Pizza App</h1>
//           <nav>
//             <ul>
//               <li><NavLink to="/" end activeClassName="active">Home</NavLink></li>
//               <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
//               {/* Add more navigation links as needed */}
//             </ul>
//           </nav>
//         </header>
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<AboutPage />} />
//             {/* Add more routes as needed */}
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// };

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// import Home from './Home';
// import AboutPage from './AboutPage';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <header>
//           <h1>My Pizza App</h1>
//           <nav>
//             <ul>
//               <li><NavLink to="/" end activeClassName="active">Home</NavLink></li>
//               <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
//               {/* Add more navigation links as needed */}
//             </ul>
//           </nav>
//         </header>
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<AboutPage />} />
//             {/* Add more routes as needed */}
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'; // Make sure you have the correct version of React Router installed
import Home from './Home';
import AboutPage from './AboutPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>My Pizza App</h1>
          <nav>
            <ul>
              <li><NavLink to="/" end activeclassname="active">Home</NavLink></li> {/* Use activeclassname */}
              <li><NavLink to="/about" activeclassname="active">About</NavLink></li> {/* Use activeclassname */}
              {/* Add more navigation links as needed */}
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

