// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
// import './styles/reset.css';
// import './styles/styles.css';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


// const domNode = document.getElementById('root');

// ReactDOM.render(<App />, domNode);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App'; // Adjust the path if needed

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App'; // Adjust the path if needed

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
// import './styles/reset.css';
// import './styles/styles.css';
// import { createRoot } from 'react-dom/client';

// const root = createRoot(document.getElementById('root')); // Use createRoot from react-dom/client
// root.render(<App />);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Import your main component
import './styles/reset.css';
import './styles/styles.css';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
