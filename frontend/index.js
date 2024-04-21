import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Import your main component
import './styles/reset.css';
import './styles/styles.css';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<App />);