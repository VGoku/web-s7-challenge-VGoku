// // import React from 'react';
// // import { NavLink } from 'react-router-dom';

// // const Home = () => {
// //   return (
// //     <div>
      
// //       <h2>Welcome to Bloom Pizza.</h2>
// //       <p>This is the Home page.</p>
// //     </div>
// //   );
// // };

// // export default Home;


// // import React from 'react';
// // import { Link } from 'react-router-dom'; // Import Link component

// // const Home = () => {
// //   return (
// //     <div>
// //       <h2>Welcome to Bloom Pizza.</h2>
// //       <p>This is the Home page.</p>
// //       {/* Add a Link to the pizza image */}
// //       <Link to="/order">
// //         <img src="path/to/your/pizza-image.jpg" alt="order-pizza" />
// //       </Link>
// //     </div>
// //   );
// // };

// // export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link component

// const Home = () => {
//   return (
//     <div>
//       <h2>Welcome to Bloom Pizza.</h2>
//       <p>This is the Home page.</p>
//       {/* Add a Link to the pizza image */}
//       <Link to="/order">
//         <img src="path/to/your/pizza-image.jpg" alt="order-pizza" />
//       </Link>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component

const Home = () => {
  return (
    <div>
      <h2>Welcome to Bloom Pizza.</h2>
      <p>This is the Home page.</p>
      {/* Add a Link to the pizza image */}
      <Link to="/order">
        <img src="/pizza-image.jpg" alt="order-pizza" />
      </Link>
    </div>
  );
};

export default Home;