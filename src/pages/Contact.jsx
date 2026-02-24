import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Zap } from 'lucide-react';
import ScrollRevealItem from '../components/ScrollRevealItem';

const Contact = () => {
    return (
        <>
            <section style={{ 
                padding: '8rem 0 4rem 0', 
                textAlign: 'center',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)',
                background: 'var(--bg-dark)'
            }}>
                <div className="container">
                <h1 style={{ 
                    fontSize: 'clamp(2rem, 5vw, 3rem)', 
                    fontWeight: '900', 
                    marginBottom: '1.5rem',
                    color: 'var(--text-primary-dark)'
                }}>
                    Construyamos el <span style={{
                        background: 'linear-gradient(135deg, #0264A0 0%, #55B3D9 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>siguiente nivel</span> de su organización
                </h1>
                <p style={{ 
                    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
                    color: 'var(--text-secondary-dark)', 
                    maxWidth: '600px', 
                    margin: '0 auto',
                    lineHeight: 1.8
                }}>
                    Estamos listos para escuchar sus desafíos operativos y convertirlos en soluciones de ingeniería escalables.
                </p>
                </div>
            </section>

            <section style={{ 
                padding: '6rem 0',
                background: 'var(--bg-dark)',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)'
            }}>
                <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'center' }}>

                    <ScrollRevealItem delay={0}>
                    <div className="glass" style={{ 
                        padding: '2.5rem', 
                        flex: '1', 
                        minWidth: '300px', 
                        maxWidth: '500px',
                        background: 'rgba(255, 255, 255, 0.7)',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-8px)';
                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(2, 100, 160, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                    >
                        <h3 style={{ 
                            fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', 
                            marginBottom: '2rem',
                            color: 'var(--text-primary-dark)',
                            fontWeight: '700'
                        }}>Canales de Contacto</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ width: '48px', height: '48px', background: 'rgba(2, 100, 160, 0.15)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0264A0', flexShrink: 0 }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <div style={{ fontSize: 'clamp(0.85rem, 1.2vw, 0.9rem)', color: 'var(--text-secondary-dark)' }}>Consultoría Inmediata (WhatsApp)</div>
                                    <div style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', fontWeight: '600', color: 'var(--text-primary-dark)' }}>3005243896</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ width: '48px', height: '48px', background: 'rgba(2, 100, 160, 0.15)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0264A0', flexShrink: 0 }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <div style={{ fontSize: 'clamp(0.85rem, 1.2vw, 0.9rem)', color: 'var(--text-secondary-dark)' }}>Correo Corporativo</div>
                                    <div style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', fontWeight: '600', color: 'var(--text-primary-dark)' }}>consultoria@weareworkflow.com</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ width: '48px', height: '48px', background: 'rgba(2, 100, 160, 0.15)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0264A0', flexShrink: 0 }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <div style={{ fontSize: 'clamp(0.85rem, 1.2vw, 0.9rem)', color: 'var(--text-secondary-dark)' }}>Presencia</div>
                                    <div style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', fontWeight: '600', color: 'var(--text-primary-dark)', lineHeight: '1.5' }}>
                                        Medellín, Miami, Guayaquil, Lima, Buenos Aires.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </ScrollRevealItem>

                    <ScrollRevealItem delay={0.1}>
                    <div style={{ flex: '1', minWidth: '300px', maxWidth: '400px' }}>
                        <h3 style={{ 
                            fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', 
                            marginBottom: '2rem',
                            color: 'var(--text-primary-dark)',
                            fontWeight: '700'
                        }}>¿Por qué Workflow?</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '1rem', 
                                background: 'rgba(2, 100, 160, 0.1)', 
                                padding: '1.25rem', 
                                borderRadius: '12px',
                                borderLeft: '4px solid #0264A0',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(8px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                            >
                                <Zap color="#0264A0" size={24} style={{ flexShrink: 0 }} />
                                <span style={{ fontWeight: '600', color: 'var(--text-primary-dark)', fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)' }}>Gold Partner Bitrix24</span>
                            </div>
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '1rem', 
                                background: 'rgba(2, 100, 160, 0.1)', 
                                padding: '1.25rem', 
                                borderRadius: '12px',
                                borderLeft: '4px solid #0264A0',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(8px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                            >
                                <Zap color="#0264A0" size={24} style={{ flexShrink: 0 }} />
                                <span style={{ fontWeight: '600', color: 'var(--text-primary-dark)', fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)' }}>Metodología Ágil</span>
                            </div>
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '1rem', 
                                background: 'rgba(2, 100, 160, 0.1)', 
                                padding: '1.25rem', 
                                borderRadius: '12px',
                                borderLeft: '4px solid #0264A0',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(8px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                            >
                                <ShieldCheck color="#0264A0" size={24} style={{ flexShrink: 0 }} />
                                <span style={{ fontWeight: '600', color: 'var(--text-primary-dark)', fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)' }}>Seguridad de Datos</span>
                            </div>
                        </div>
                    </div>
                    </ScrollRevealItem>
                </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
