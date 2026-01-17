import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontWeight: 900, letterSpacing: '0.2em', fontSize: '1.5rem' }}>LUMENYX</span>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.4em', opacity: 0.5, marginTop: '0.2rem' }}>BRINGING IDEAS TO LIGHT</span>
            </div>
        </header>
    );
};

export default Header;
