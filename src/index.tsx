/**
 * Application Entry Point
 * 
 * Initializes the React 18 application using createRoot API
 * and imports global styles.
 */

import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/globals.css';

// Get the root element
const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error(
        'Failed to find the root element. Make sure there is a div with id="root" in your HTML.'
    );
}

// Create root and render
const root = createRoot(rootElement);

root.render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
);
