import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import workflowLogo from '../assets/workflow-logo.png';
import bitrixMenuLogo from '../assets/Bitrix-menu.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'text-primary' : '';

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'We Are', path: '/we-are' },
        { name: 'Soluciones', path: '/soluciones' },
        { name: 'Inteligencia Artificial', path: '/ia' },
        { name: 'Bitrix24', path: '/bitrix24', isLogo: true },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            background: 'rgba(10, 10, 10, 0.8)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1rem 0',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
            <style>{`
                @media (max-width: 768px) {
                    .desktop-menu {
                        display: none !important;
                    }
                    .mobile-toggle {
                        display: block !important;
                    }
                }
                
                @media (min-width: 769px) {
                    .mobile-toggle {
                        display: none !important;
                    }
                }
            `}</style>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img
                        src={workflowLogo}
                        alt="Workflow Logo"
                        style={{
                            width: '40px',
                            height: '40px',
                            objectFit: 'contain',
                            transition: 'transform 0.2s ease',
                            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            style={
                                link.isLogo
                                    ? {
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        padding: '0.25rem 0.5rem',
                                        textDecoration: 'none',
                                        cursor: 'pointer'
                                    }
                                    : {
                                        textDecoration: 'none',
                                        color: location.pathname === link.path ? 'var(--accent)' : 'rgba(255, 255, 255, 0.85)',
                                        fontSize: '0.95rem',
                                        fontWeight: '500',
                                        transition: 'color 0.2s ease',
                                        position: 'relative'
                                    }
                            }
                            onMouseEnter={(e) => {
                                if (!link.isLogo) {
                                    e.currentTarget.style.color = 'var(--accent)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!link.isLogo && location.pathname !== link.path) {
                                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
                                }
                            }}
                            aria-label={link.isLogo ? link.name : undefined}
                        >
                            {link.isLogo ? (
                                <>
                                    <img
                                        src={bitrixMenuLogo}
                                        alt="Bitrix24"
                                        style={{
                                            width: '90px',
                                            height: 'auto',
                                            objectFit: 'contain',
                                            display: 'block'
                                        }}
                                    />
                                    <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
                                        {link.name}
                                    </span>
                                </>
                            ) : (
                                link.name
                            )}
                        </Link>
                    ))}
                    <Link to="/contacto" className="btn btn-primary" style={{ padding: '0.625rem 1.5rem', fontSize: '0.95rem' }}>
                        Contáctanos
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: '#FFFFFF',
                        cursor: 'pointer',
                        display: 'none',
                        padding: '0.5rem'
                    }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'rgba(10, 10, 10, 0.98)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            style={{
                                textDecoration: 'none',
                                color: location.pathname === link.path ? 'var(--accent)' : 'rgba(255, 255, 255, 0.85)',
                                fontSize: link.isLogo ? '0' : '1rem',
                                fontWeight: '500',
                                transition: 'color 0.2s ease',
                                padding: '0.5rem 0',
                                display: 'flex',
                                alignItems: 'center',
                                cursor: 'pointer'
                            }}
                            aria-label={link.isLogo ? link.name : undefined}
                        >
                            {link.isLogo ? (
                                <>
                                    <img
                                        src={bitrixMenuLogo}
                                        alt="Bitrix24"
                                        style={{ width: '110px', height: 'auto', objectFit: 'contain', display: 'block' }}
                                    />
                                    <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
                                        {link.name}
                                    </span>
                                </>
                            ) : (
                                link.name
                            )}
                        </Link>
                    ))}
                    <Link 
                        to="/contacto" 
                        className="btn btn-primary" 
                        onClick={() => setIsOpen(false)}
                        style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', marginTop: '0.5rem' }}
                    >
                        Contáctanos
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
