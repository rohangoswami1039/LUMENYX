/**
 * Main Application Component
 * 
 * Root component that sets up the main layout with the
 * LaserFlow background and renders the current page.
 */

import React from 'react';
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';

const App: React.FC = () => {
    return (
        <MainLayout>
            <Home />
        </MainLayout>
    );
};

export default App;
