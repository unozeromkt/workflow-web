import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import cloudVisual from '../assets/cloud-visual.png';
import ScrollRevealItem from '../components/ScrollRevealItem';

const Solutions = () => {
    const solutions = [
        { 
            title: "IA Strategy & Data Science", 
            desc: "Transformamos datos en activos estratégicos.",
            tag: 'IA + DataOps',
            highlights: [
                'Modelos Predictivos y Machine Learning para la toma de decisiones.',
                'Arquitectura de Decisiones basada en análisis en tiempo real.',
                'IA aplicada a modelos de negocio.'
            ]
        },
        { 
            title: "Ecosistemas Digitales & Software", 
            desc: "Creamos el sistema nervioso digital de su empresa.",
            tag: 'Cloud + DevX',
            highlights: [
                'Desarrollo Full-Stack y Móvil.',
                'Modernización Cloud en AWS, Azure y Google Cloud.',
                'Ciberseguridad Integral desde diseño.'
            ]
        },
        { 
            title: "Intelligent Process Outsourcing (iBPO)", 
            desc: "Eficiencia operativa potenciada por automatización inteligente y personal altamente calificado.",
            tag: 'BPO Augmentado',
            highlights: [
                'Contact Center Inteligente.',
                'Dirección Comercial y Ventas.',
                'Automatización de flujos críticos.',
                'Dirección tecnológica especializada.'
            ]
        },
        { 
            title: "Ecosistema Bitrix24 & Consultoría 360°", 
            desc: "Eliminamos el caos operativo con una única fuente de verdad.",
            tag: 'Bitrix24 Elite',
            highlights: [
                'Implementamos oficinas virtuales, Project Management, Workflows y CRM avanzado.',
                'Definimos hojas de ruta para migración digital.',
                'Entrenamos equipos para asegurar adopción exitosa.'
            ]
        }
    ];

    const heroStats = [
        { value: '+120M', label: 'Pipeline gestionado con IA' },
        { value: '45% menos', label: 'Time-to-market promedio' },
        { value: '5 regiones', label: 'Operaciones activas' }
    ];

    return (
        <>
            <style>{`
                .hero-chip-row {
                    flex-wrap: nowrap;
                }

                @media (max-width: 768px) {
                    .hero-chip-row {
                        flex-wrap: wrap;
                    }
                }
            `}</style>
            <section style={{ 
                padding: '8rem 0 4rem 0',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)',
                background: 'var(--bg-dark)',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at top right, rgba(2, 100, 160, 0.12), transparent 45%)'
                }}></div>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                <div>
                    <p style={{
                        textTransform: 'uppercase',
                        letterSpacing: '0.4rem',
                        color: '#0264A0',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        marginBottom: '1.25rem'
                    }}>Enfoque</p>
                    <h1 style={{ 
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
                        fontWeight: '900', 
                        marginBottom: '1.5rem', 
                        lineHeight: '1.1',
                        color: 'var(--text-primary-dark)'
                    }}>
                        Soluciones de Ingeniería <span style={{
                            background: 'linear-gradient(135deg, #0264A0 0%, #55B3D9 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>diseñadas para escalar.</span>
                    </h1>
                    <p style={{ 
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
                        color: 'var(--text-secondary-dark)', 
                        marginBottom: '2rem',
                        lineHeight: 1.8
                    }}>
                        No solo entregamos herramientas; construimos ecosistemas inteligentes que fusionan IA, Cloud y Metodología estratégica para garantizar resultados cuantificables.
                    </p>
                    <div style={{ paddingLeft: '1rem', borderLeft: '4px solid #0264A0', background: 'rgba(2, 100, 160, 0.05)', padding: '1.5rem 1rem 1.5rem 1rem', borderRadius: '8px' }}>
                        <p style={{ fontStyle: 'italic', color: 'var(--text-primary-dark)', margin: 0 }}>Para garantizar resultados cuantificables.</p>
                    </div>
                    <div 
                        className="hero-chip-row"
                        style={{ 
                            display: 'flex', 
                            flexWrap: 'nowrap',
                            gap: '1rem',
                            marginTop: '2.5rem',
                            overflowX: 'auto',
                            paddingBottom: '0.25rem'
                        }}
                    >
                        {['Arquitectura cloud-native', 'IA aplicada al negocio', 'Gobernanza & Compliance'].map((chip, idx) => (
                            <span key={idx} style={{
                                padding: '0.35rem 1rem',
                                borderRadius: '999px',
                                background: 'rgba(2, 100, 160, 0.12)',
                                color: '#0264A0',
                                fontSize: '0.85rem',
                                fontWeight: 600
                            }}>{chip}</span>
                        ))}
                    </div>
                </div>
                <div className="glass" style={{ padding: '1rem', position: 'relative', background: 'rgba(255, 255, 255, 0.7)' }}>
                    <img src={cloudVisual} alt="Cloud Architecture" style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(2, 100, 160, 0.1) 0%, transparent 100%)', pointerEvents: 'none', borderRadius: '12px' }}></div>
                </div>
                </div>
                <div className="container" style={{
                    marginTop: '3rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.5rem',
                    position: 'relative',
                    zIndex: 1
                }}>
                    {heroStats.map((stat, idx) => (
                        <div key={idx} style={{
                            padding: '1.75rem',
                            borderRadius: '16px',
                            background: '#fff',
                            boxShadow: '0 15px 35px rgba(2, 100, 160, 0.12)'
                        }}>
                            <div style={{
                                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                fontWeight: 800,
                                color: '#0264A0'
                            }}>{stat.value}</div>
                            <p style={{
                                margin: '0.5rem 0 0 0',
                                color: 'var(--text-secondary-dark)',
                                fontSize: '0.95rem'
                            }}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ 
                padding: '7rem 0',
                background: 'linear-gradient(180deg, #F3F6F8 0%, #FFFFFF 100%)',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)'
            }}>
                <div className="container" style={{ maxWidth: '1600px', width: '95vw' }}>
                <style>{`
                    @media (max-width: 1400px) {
                        .solutions-row {
                            grid-template-columns: repeat(2, minmax(260px, 1fr));
                        }
                    }

                    @media (max-width: 768px) {
                        .solutions-row {
                            grid-template-columns: 1fr;
                        }
                    }
                `}</style>
                <div style={{
                    textAlign: 'center',
                    marginBottom: '4rem'
                }}>
                    <p style={{
                        textTransform: 'uppercase',
                        letterSpacing: '0.4rem',
                        color: '#0264A0',
                        fontSize: '0.85rem',
                        fontWeight: 600
                    }}>Arquitectura Integral</p>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                        fontWeight: 900,
                        marginBottom: '1rem',
                        color: 'var(--text-primary-dark)'
                    }}>4 verticales conectadas para escalar tu operación</h2>
                    <p style={{
                        fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                        color: 'var(--text-secondary-dark)',
                        maxWidth: '760px',
                        margin: '0 auto'
                    }}>
                        Cada vertical activa un módulo de nuestra plataforma estratégica. Conectadas, forman un sistema operativo empresarial listo para evolucionar.
                    </p>
                </div>
                <div className="solutions-row" style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, minmax(260px, 1fr))',
                    gap: '2rem'
                }}>
                    {solutions.map((sol, i) => (
                        <ScrollRevealItem key={i} delay={i * 0.1}>
                        <div style={{ 
                            padding: '2.5rem', 
                            position: 'relative', 
                            overflow: 'hidden',
                            background: '#FFFFFF',
                            borderRadius: '24px',
                            border: '1px solid rgba(2, 100, 160, 0.1)',
                            boxShadow: '0 35px 60px rgba(15, 23, 42, 0.08)',
                            transition: 'all 0.35s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = '0 40px 70px rgba(2, 100, 160, 0.18)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 35px 60px rgba(15, 23, 42, 0.08)';
                        }}
                        >
                            <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem', opacity: 0.06, fontSize: '4rem', fontWeight: '900', color: '#0264A0' }}>{i + 1}</div>
                            <span style={{
                                alignSelf: 'flex-start',
                                padding: '0.35rem 0.9rem',
                                borderRadius: '999px',
                                background: 'rgba(2, 100, 160, 0.1)',
                                color: '#0264A0',
                                fontSize: '0.85rem',
                                fontWeight: 600
                            }}>{sol.tag}</span>
                            <h3 style={{ 
                                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', 
                                marginBottom: '1rem', 
                                fontWeight: '700',
                                color: 'var(--text-primary-dark)',
                                position: 'relative',
                                zIndex: 1
                            }}>{sol.title}</h3>
                            <p style={{ 
                                color: 'var(--text-secondary-dark)', 
                                marginBottom: '0.5rem',
                                fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                                lineHeight: 1.7,
                                position: 'relative',
                                zIndex: 1
                            }}>{sol.desc}</p>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.65rem',
                                flex: 1
                            }}>
                                {sol.highlights.map((item, idx) => (
                                    <li key={idx} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.75rem',
                                        fontSize: '0.95rem',
                                        color: 'var(--text-primary-dark)',
                                        lineHeight: 1.5
                                    }}>
                                        <span style={{
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            background: '#0264A0',
                                            marginTop: '0.45rem',
                                            flexShrink: 0
                                        }}></span>
                                        <span style={{ display: 'block' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link 
                                to="/contacto"
                                style={{ 
                                    display: 'inline-flex', 
                                    alignItems: 'center', 
                                    gap: '0.5rem', 
                                    color: '#0264A0', 
                                    fontWeight: '600', 
                                    textDecoration: 'none',
                                    transition: 'gap 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.gap = '0.75rem'}
                                onMouseLeave={(e) => e.currentTarget.style.gap = '0.5rem'}
                                className="group"
                            >
                                Contáctanos Ahora <ArrowRight size={18} />
                            </Link>
                        </div>
                        </ScrollRevealItem>
                    ))}
                </div>
                </div>
            </section>

            <section style={{ 
                background: 'linear-gradient(135deg, #010D26 0%, #012B46 100%)',
                padding: '6rem 0',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)',
                color: '#fff'
            }}>
                <div className="container" style={{ 
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 0.8fr',
                    gap: '3rem',
                    alignItems: 'center'
                }}>
                    <div>
                        <p style={{
                            textTransform: 'uppercase',
                            letterSpacing: '0.4rem',
                            color: '#55B3D9',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            marginBottom: '1rem'
                        }}>Diferenciadores</p>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 900,
                            marginBottom: '1.5rem',
                            lineHeight: 1.2
                        }}>Orquestamos la operación mientras tu equipo acelera el negocio</h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'rgba(255,255,255,0.75)',
                            marginBottom: '2rem',
                            lineHeight: 1.8
                        }}>
                            Equipos multidisciplinarios, estándares globales y métricas en vivo. Listos para conectar tu visión con tecnología accionable.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/contacto" style={{
                                background: '#55B3D9',
                                color: '#010D26',
                                padding: '0.9rem 2rem',
                                borderRadius: '50px',
                                fontWeight: 700,
                                textDecoration: 'none'
                            }}>
                                Contáctanos Ahora
                            </Link>
                            <Link to="/contacto" style={{
                                background: 'transparent',
                                color: '#fff',
                                padding: '0.9rem 2rem',
                                borderRadius: '50px',
                                fontWeight: 600,
                                border: '1px solid rgba(255,255,255,0.4)',
                                textDecoration: 'none'
                            }}>
                                Descargar dossier
                            </Link>
                        </div>
                    </div>
                    <div className="glass" style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '24px',
                        padding: '2rem',
                        backdropFilter: 'blur(12px)'
                    }}>
                        {[ 'Metodología Ágil Garantizada.', 'Infraestructura Elástica.', 'Seguridad por Diseño.' ].map((item, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1rem 0',
                                borderBottom: idx !== 2 ? '1px solid rgba(255,255,255,0.1)' : 'none'
                            }}>
                                <div style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    background: 'rgba(85, 179, 217, 0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#55B3D9'
                                }}>
                                    <CheckCircle size={22} />
                                </div>
                                <span style={{ fontSize: '1rem', fontWeight: 600 }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Solutions;
