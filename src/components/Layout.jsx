import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const Layout = ({ children }) => {
    return (
        <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ScrollToTop />
            <div className="hero-glow"></div>
            <Navbar />
            <main style={{ flex: 1, paddingTop: '80px' }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
