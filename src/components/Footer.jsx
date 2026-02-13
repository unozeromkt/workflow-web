import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import workflowLogo from '../assets/workflow-logo.png';

const Footer = () => {
    return (
        <footer style={{
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            padding: '4rem 2rem 3rem 2rem',
            marginTop: 'auto',
            background: '#000',
            borderTop: '1px solid rgba(85, 179, 217, 0.3)'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {/* Main Content */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4rem',
                    marginBottom: '3rem',
                    textAlign: 'center'
                }}>
                    {/* Logo & Description */}
                    <div style={{ color: '#fff' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
                            <img
                                src={workflowLogo}
                                alt="Workflow Logo"
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    objectFit: 'contain'
                                }}
                            />
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            Ingeniería de Alto Impacto para la Era de la Inteligencia Artificial.
                        </p>
                    </div>
                </div>

                {/* Contact Section */}
                <div style={{
                    paddingBottom: '3rem',
                    borderBottom: '1px solid rgba(255,255,255,0.15)',
                    textAlign: 'center'
                }}>
                    <div style={{
                        display: 'flex',
                        gap: '3rem',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        {/* Address */}
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <MapPin size={20} color="#55B3D9" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                            <div>
                                <p style={{ color: 'rgba(255,255,255,0.8)', margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>Km 5 Av Las Palmas</p>
                                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, fontSize: '0.9rem' }}>Medellín, Antioquia</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <Phone size={20} color="#55B3D9" style={{ flexShrink: 0 }} />
                            <a href="tel:+573005243896" style={{
                                color: 'rgba(255,255,255,0.8)',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                fontWeight: '500',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#55B3D9'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                            >
                                +57 300 524 3896
                            </a>
                        </div>

                        {/* Email */}
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <Mail size={20} color="#55B3D9" style={{ flexShrink: 0 }} />
                            <a href="mailto:info@workflowteams.com" style={{
                                color: '#55B3D9',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#55B3D9'}
                            >
                                info@workflowteams.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div style={{
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.85rem',
                    flexWrap: 'wrap',
                    gap: '2rem'
                }}>
                    <p style={{ margin: 0 }}>
                        Copyright © {new Date().getFullYear()}{' '}
                        <span style={{ color: '#55B3D9', fontWeight: '600' }}>WORKFLOW SAS</span>
                        . All rights reserved.
                    </p>
                    
                    {/* Legal Links & Social Icons */}
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <span style={{
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                                color: 'rgba(255,255,255,0.6)',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#55B3D9'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                            >Privacidad</span>
                            <span style={{
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                                color: 'rgba(255,255,255,0.6)',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#55B3D9'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                            >Términos</span>
                        </div>

                        {/* Social Icons */}
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{
                                width: '40px',
                                height: '40px',
                                border: '1.5px solid rgba(255,255,255,0.3)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'rgba(255,255,255,0.6)',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#55B3D9';
                                e.currentTarget.style.color = '#55B3D9';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                                e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                            }}
                            >
                                <Linkedin size={18} />
                            </a>
                            <a href="#" style={{
                                width: '40px',
                                height: '40px',
                                border: '1.5px solid rgba(255,255,255,0.3)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'rgba(255,255,255,0.6)',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#55B3D9';
                                e.currentTarget.style.color = '#55B3D9';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                                e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                            }}
                            >
                                <Instagram size={18} />
                            </a>
                            <a href="#" style={{
                                width: '40px',
                                height: '40px',
                                border: '1.5px solid rgba(255,255,255,0.3)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'rgba(255,255,255,0.6)',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#55B3D9';
                                e.currentTarget.style.color = '#55B3D9';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                                e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                            }}
                            >
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
