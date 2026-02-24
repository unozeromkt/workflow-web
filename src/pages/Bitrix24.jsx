import React from 'react';
import { Layers, Box, Settings, ArrowRight } from 'lucide-react';
import ScrollRevealItem from '../components/ScrollRevealItem';
import bitrixGoldBadge from '../assets/Bitrix-1.jpg';

const Bitrix24 = () => {
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
                    lineHeight: '1.2',
                    color: 'var(--text-primary-dark)'
                }}>
                    Potenciamos su empresa con el máximo <br />nivel de <span style={{
                        background: 'linear-gradient(135deg, #0264A0 0%, #55B3D9 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>especialización en Bitrix24</span>
                </h1>
                <p style={{ 
                    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
                    color: 'var(--text-secondary-dark)', 
                    marginBottom: '2.5rem',
                    lineHeight: 1.8
                }}>
                    Como Gold Partner oficial, transformamos Bitrix24 en el centro neurálgico de su operación, integrando CRM, automatización y comunicación en una sola fuente de verdad.
                </p>
                <a href="https://www.bitrix24.com/partners/?ID=11605791" target="_blank" rel="noreferrer" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: 'clamp(0.85rem, 1vw, 1rem) clamp(1.75rem, 3vw, 2.5rem)',
                    fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                    background: '#0264A0',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '50px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: 'none'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#55B3D9';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#0264A0';
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                    Ver perfil oficial Bitrix24 <ArrowRight size={18} />
                </a>
                <div style={{ marginTop: '2rem' }}>
                    <img 
                        src={bitrixGoldBadge} 
                        alt="Bitrix24 Gold Partner" 
                        style={{
                            width: '180px',
                            maxWidth: '50%',
                            height: 'auto',
                            objectFit: 'contain',
                            display: 'inline-block',
                            filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.25))'
                        }}
                    />
                </div>
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                    {[
                        {
                            title: 'Gold Partner',
                            color: '#0264A0',
                            items: ['Experiencia Certificada.', 'Implementaciones a Medida.', 'Soporte de Ingeniería especializado.']
                        },
                        {
                            title: 'Ecosistema Bitrix24 x WORKFLOW',
                            color: '#0264A0',
                            iconItems: [
                                { text: 'CRM Avanzado y Omnicanalidad.', icon: Layers },
                                { text: 'Oficina Virtual Integral.', icon: Box },
                                { text: 'AIBot24.', icon: Settings },
                                { text: 'Integraciones y API.', icon: ArrowRight }
                            ]
                                }
                    ].map((card, idx) => (
                        <ScrollRevealItem key={idx} delay={idx * 0.1}>
                        <div className="glass" style={{
                            padding: '2.5rem',
                            background: 'rgba(255, 255, 255, 0.7)',
                            transition: 'all 0.3s ease',
                            borderLeft: card.title === 'Ecosistema' ? '4px solid #0264A0' : 'none'
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
                                marginBottom: '1.5rem', 
                                color: card.color,
                                fontWeight: '700'
                            }}>{card.title}</h3>
                            
                            {card.items && (
                                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {card.items.map((item, i) => (
                                        <li key={i} style={{ 
                                            color: 'var(--text-secondary-dark)',
                                            fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                                            lineHeight: 1.6
                                        }}>{item}</li>
                                    ))}
                                </ul>
                            )}
                            
                            {card.iconItems && (
                                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {card.iconItems.map((item, i) => {
                                        const Icon = item.icon;
                                        return (
                                            <li key={i} style={{ 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                gap: '0.75rem',
                                                color: 'var(--text-secondary-dark)',
                                                fontSize: 'clamp(0.9rem, 1.5vw, 1rem)'
                                            }}>
                                                <Icon size={18} style={{ color: '#0264A0', flexShrink: 0 }} /> 
                                                {item.text}
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                            
                        </div>
                        </ScrollRevealItem>
                    ))}
                </div>
                </div>
            </section>

            <section style={{
                padding: '6rem 0',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)',
                background: 'linear-gradient(135deg, #F7FBFF 0%, #FFFFFF 60%)'
            }}>
                <div className="container" style={{ display: 'grid', gap: '2.5rem', gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
                    <div>
                        <p style={{
                            textTransform: 'uppercase',
                            letterSpacing: '0.35rem',
                            color: '#0264A0',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            marginBottom: '1rem'
                        }}>Metodología</p>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 900,
                            marginBottom: '1.5rem',
                            lineHeight: 1.2,
                            color: 'var(--text-primary-dark)'
                        }}>Implementación Bitrix24 con precisión quirúrgica</h2>
                        <p style={{
                            color: 'var(--text-secondary-dark)',
                            lineHeight: 1.7,
                            fontSize: '1.05rem'
                        }}>
                            Nuestros ingenieros orquestan la adopción completa de Bitrix24 desde la auditoría hasta la optimización continua, asegurando alineación con objetivos estratégicos y adopción total del equipo.
                        </p>
                    </div>
                    <div className="glass" style={{
                        background: 'rgba(255,255,255,0.85)',
                        border: '1px solid rgba(2, 100, 160, 0.1)',
                        borderRadius: '24px',
                        padding: '2.5rem'
                    }}>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {['Auditoría y Diagnóstico', 'Configuración y Arquitectura', 'Gestión del Cambio', 'Optimización Continua'].map((step, index) => (
                                <div key={step} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '12px',
                                        background: 'rgba(2, 100, 160, 0.12)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#0264A0',
                                        fontWeight: 700,
                                        fontSize: '1rem'
                                    }}>{index + 1}</div>
                                    <div>
                                        <p style={{
                                            margin: 0,
                                            fontWeight: 700,
                                            color: 'var(--text-primary-dark)' ,
                                            textAlign: 'left'
                                        }}>{step}</p>
                                        <p style={{
                                            margin: '0.35rem 0 0 0',
                                            color: 'var(--text-secondary-dark)',
                                            lineHeight: 1.6,
                                            textAlign: 'left'
                                        }}>
                                            {index === 0 && 'Analizamos procesos, datos y objetivos para definir el roadmap ideal.'}
                                            {index === 1 && 'Configuramos módulos, automatizaciones y seguridad acorde a su arquitectura.'}
                                            {index === 2 && 'Acompañamos al equipo con playbooks, entrenamiento y métricas de adopción.'}
                                            {index === 3 && 'Monitoreamos resultados, ajustamos flujos y ampliamos capacidades.'}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section style={{
                padding: '6rem 0',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)',
                background: 'linear-gradient(135deg, #010D26 0%, #012B46 100%)',
                color: '#fff'
            }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
                    <div>
                        <p style={{
                            textTransform: 'uppercase',
                            letterSpacing: '0.35rem',
                            color: '#55B3D9',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            marginBottom: '1rem'
                        }}>Bitrix24 Enterprise</p>
                        <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.3 }}>¿Listo para llevar Bitrix24 al siguiente nivel?</h3>
                        <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.75rem', fontSize: '1.05rem', lineHeight: 1.8 }}>
                            Organizamos una sesión técnica para auditar su instancia actual, definir quick wins y diseñar un roadmap de automatización y reportes ejecutivos.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="/contacto" style={{
                                padding: '0.95rem 2.5rem',
                                background: '#55B3D9',
                                color: '#010D26',
                                borderRadius: '999px',
                                fontWeight: 700,
                                textDecoration: 'none',
                                boxShadow: '0 15px 35px rgba(85, 179, 217, 0.35)'
                            }}>Agendar consultoría</a>
                        </div>
                    </div>
                    <div className="glass" style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '24px',
                        padding: '2rem',
                        backdropFilter: 'blur(12px)'
                    }}>
                        {[ 'KPIs en vivo de adopción', 'Integraciones oficiales & personalizadas', 'Despliegue + soporte gestionado' ].map((item, idx) => (
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
                                    <ArrowRight size={22} />
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

export default Bitrix24;
