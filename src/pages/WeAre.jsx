import React from 'react';
import { Target, UserCheck, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollRevealItem from '../components/ScrollRevealItem';
import teamBg from '../assets/team-bg.png';

const WeAre = () => {
    return (
        <>
            {/* Hero Section */}
            <section style={{ 
                position: 'relative', 
                padding: '10rem 2rem 6rem 2rem', 
                overflow: 'hidden',
                background: 'var(--bg-dark)',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)'
            }}>
                <div style={{ 
                    position: 'absolute', 
                    top: 0, 
                    right: 0, 
                    width: '60%', 
                    height: '100%', 
                    backgroundImage: `url(${teamBg})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    opacity: 0.15, 
                    maskImage: 'linear-gradient(to right, transparent, black)',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <h1 style={{ 
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                        fontWeight: '900', 
                        marginBottom: '2rem', 
                        maxWidth: '900px', 
                        lineHeight: 1.1,
                        background: 'linear-gradient(135deg, #0264A0 0%, #55B3D9 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        margin: '0 auto 2rem auto'
                    }}>
                        Expertos en la Intersección de Tecnología y Estrategia
                    </h1>
                    <p style={{ 
                        fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)', 
                        color: 'var(--text-secondary-dark)', 
                        maxWidth: '700px', 
                        lineHeight: 1.8,
                        marginBottom: '2rem',
                        margin: '0 auto 2rem auto'
                    }}>
                        Fusionamos ingeniería, estrategia y tecnología avanzada para transformar vidas y modelos de negocio.
                    </p>
                    <Link 
                        to="/contacto"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.875rem 1.75rem',
                            background: '#0264A0',
                            color: '#fff',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                            transition: 'all 0.3s ease',
                            margin: '0 auto',
                            display: 'inline-flex'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#55B3D9';
                            e.currentTarget.style.gap = '1rem';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#0264A0';
                            e.currentTarget.style.gap = '0.75rem';
                        }}
                    >
                        Agenda una Asesoría <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* Our Essence Section */}
            <section style={{ 
                padding: '6rem 0', 
                background: 'var(--bg-dark)',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)'
            }}>
                <div className="container">
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: '1fr 1fr', 
                        gap: '4rem', 
                        alignItems: 'center'
                    }}>
                        <div>
                            <h2 style={{ 
                                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
                                marginBottom: '1.5rem', 
                                fontWeight: '800',
                                color: 'var(--text-primary-dark)'
                            }}>Nuestra Esencia</h2>
                            <p style={{ 
                                fontSize: 'clamp(1rem, 2vw, 1.1rem)', 
                                color: 'var(--text-secondary-dark)', 
                                marginBottom: '1.5rem', 
                                lineHeight: 1.8
                            }}>
                                No somos solo una consultora tecnológica; somos el partner estratégico que ayuda a las organizaciones a navegar la complejidad de la era digital.
                            </p>
                            <div style={{ 
                                padding: '2rem', 
                                borderLeft: '4px solid #0264A0', 
                                background: 'rgba(2, 100, 160, 0.05)',
                                borderRadius: '8px'
                            }}>
                                <p style={{ 
                                    fontStyle: 'italic', 
                                    fontSize: 'clamp(1rem, 2vw, 1.1rem)', 
                                    color: 'var(--text-primary-dark)',
                                    margin: 0,
                                    lineHeight: 1.7
                                }}>"Nuestro compromiso es la excelencia técnica sin compromisos."</p>
                            </div>
                        </div>
                        <div className="glass" style={{ 
                            padding: '3rem',
                            background: 'rgba(255, 255, 255, 0.7)'
                        }}>
                            <div style={{ 
                                display: 'grid', 
                                gridTemplateColumns: '1fr 1fr', 
                                gap: '2rem' 
                            }}>
                                {[
                                    { num: '10+', label: 'Años Experiencia' },
                                    { num: '50+', label: 'Proyectos Enterprise' },
                                    { num: '5', label: 'Países' },
                                    { num: '100%', label: 'Certificados' }
                                ].map((s, i) => (
                                    <div key={i} style={{ textAlign: 'center' }}>
                                        <div style={{ 
                                            fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
                                            fontWeight: '900', 
                                            color: '#0264A0',
                                            marginBottom: '0.5rem'
                                        }}>{s.num}</div>
                                        <div style={{ 
                                            fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', 
                                            color: 'var(--text-secondary-dark)',
                                            fontWeight: '500'
                                        }}>{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Pillars Section */}
            <section style={{ 
                padding: '8rem 0',
                background: 'var(--bg-dark)',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)'
            }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ 
                            fontSize: 'clamp(2rem, 4vw, 2.8rem)', 
                            fontWeight: '900',
                            background: 'linear-gradient(135deg, #0264A0 0%, #55B3D9 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            marginBottom: '1rem'
                        }}>Nuestros Pilares</h2>
                        <p style={{
                            fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
                            color: 'var(--text-secondary-dark)',
                            maxWidth: '700px',
                            margin: '0 auto',
                            lineHeight: 1.8
                        }}>
                            Los cuatro pilares que sustentan nuestra arquitectura de soluciones
                        </p>
                    </div>

                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                        maxWidth: '1400px',
                        margin: '0 auto'
                    }}>
                        {[
                            { title: 'Alineación Estratégica', icon: Target, desc: 'Cada línea de código responde a un objetivo de negocio.' },
                            { title: 'Excelencia Técnica', icon: Zap, desc: 'Estándares globales de arquitectura y clean code.' },
                            { title: 'Transparencia Radical', icon: UserCheck, desc: 'Visibilidad total del proceso para nuestros socios.' },
                            { title: 'Seguridad por Diseño', icon: ShieldCheck, desc: 'Protección de datos desde la concepción del sistema.' }
                        ].map((item, i) => (
                            <ScrollRevealItem key={i} delay={i * 0.1}>
                                <div className="glass" style={{ 
                                    padding: '2.5rem', 
                                    transition: 'all 0.3s ease',
                                    background: 'rgba(255, 255, 255, 0.7)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%'
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
                                    <div style={{ 
                                        width: '56px', 
                                        height: '56px', 
                                        background: 'rgba(2, 100, 160, 0.15)', 
                                        borderRadius: '12px', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center', 
                                        marginBottom: '1.5rem',
                                        color: '#0264A0'
                                    }}>
                                        <item.icon size={28} strokeWidth={2} />
                                    </div>
                                    <h3 style={{ 
                                        fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', 
                                        marginBottom: '1rem', 
                                        fontWeight: '700',
                                        color: 'var(--text-primary-dark)'
                                    }}>{item.title}</h3>
                                    <p style={{ 
                                        color: 'var(--text-secondary-dark)', 
                                        lineHeight: 1.7,
                                        fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                                        margin: 0,
                                        flex: 1
                                    }}>{item.desc}</p>
                                </div>
                            </ScrollRevealItem>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default WeAre;
