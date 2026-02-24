import React from 'react';
import { Bot, Check, LayoutGrid, Database, LineChart, Puzzle, Brain, PlugZap, RefreshCw, Cog, BadgeCheck } from 'lucide-react';
import aiVisual from '../assets/ai-visual.png';
import aiBotPhoto from '../assets/AIBOT.jpg';
import ScrollRevealItem from '../components/ScrollRevealItem';

const AI = () => {
    const methodologySteps = [
        {
            title: 'Auditoría de Datos',
            desc: 'Mapeamos fuentes, calidad y flujos para encontrar oportunidades accionables.',
            icon: Puzzle,
            accent: '#55B3D9'
        },
        {
            title: 'Entrenamiento y Personalización',
            desc: 'Diseñamos y ajustamos modelos junto a tu equipo para personalizar comportamientos según tus procesos.',
            icon: Brain,
            accent: '#0264A0'
        },
        {
            title: 'Integración de Ecosistema',
            desc: 'Acoplamos APIs, CRM y operaciones clave para que los agentes IA gobiernen todo tu stack.',
            icon: PlugZap,
            accent: '#0394D0'
        },
        {
            title: 'Optimización Continua',
            desc: 'Monitoreamos KPIs, recalibramos modelos y automatizamos mejoras con feedback real.',
            icon: RefreshCw,
            accent: '#55B3D9'
        }
    ];

    return (
        <>
            <section style={{ 
                padding: '9rem 0 5rem 0',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)',
                background: 'linear-gradient(135deg, #f7fbff 0%, #ffffff 55%)',
                color: '#0b1b3a'
            }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3rem', alignItems: 'center' }}>
                    <div>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', borderRadius: '999px', background: 'rgba(2, 100, 160, 0.08)', color: '#0264A0', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.25rem' }}>
                            <BadgeCheck size={18} /> Bitrix24 Gold Partner
                        </div>
                        <h1 style={{ 
                            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', 
                            fontWeight: '900', 
                            marginBottom: '1.5rem', 
                            lineHeight: '1.15'
                        }}>
                            Orquestamos Agentes de IA que transforman su operación en una <span style={{
                                background: 'linear-gradient(135deg, #45C5FF 0%, #5CE1E6 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>máquina de ventas</span>
                        </h1>
                        <p style={{ 
                            fontSize: 'clamp(1rem, 2.4vw, 1.2rem)', 
                            color: 'rgba(11,27,58,0.8)', 
                            marginBottom: '2rem', 
                            lineHeight: 1.9
                        }}>
                            Vaya más allá de los chatbots tradicionales. Implementamos inteligencia autónoma capaz de gestionar su CRM, cerrar ventas y administrar su ecosistema digital 24/7.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                            <button
                                style={{ 
                                    padding: '0.95rem 2.5rem', 
                                    fontSize: '1rem',
                                    background: '#55B3D9',
                                    color: '#010D26',
                                    border: 'none',
                                    borderRadius: '50px',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onClick={() => {
                                    const section = document.getElementById('aibot24');
                                    if (section) {
                                        section.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 10px 25px rgba(85, 179, 217, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = 'none';
                                }}
                            >
                                Saber más →
                            </button>
                        </div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.85)',
                            borderRadius: '24px',
                            padding: '2rem',
                            border: '1px solid rgba(11, 27, 58, 0.08)',
                            backdropFilter: 'blur(12px)',
                            boxShadow: '0 25px 50px rgba(15, 23, 42, 0.1)'
                        }}>
                            <p style={{ color: '#0264A0', fontSize: '0.85rem', letterSpacing: '0.2rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Simulación en vivo</p>
                            <div style={{ background: `url(${aiVisual})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '16px', height: '260px', position: 'relative' }}>
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(3,18,40,0.15))' }}></div>
                            </div>
                            <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                {[ 'CRM Bitrix24', 'Redes Sociales', 'WhatsApp Business', 'E-commerce' ].map((chip) => (
                                    <span key={chip} style={{
                                        padding: '0.4rem 0.75rem',
                                        borderRadius: '999px',
                                        background: 'rgba(2,100,160,0.08)',
                                        color: '#0264A0',
                                        fontSize: '0.85rem',
                                        textAlign: 'center'
                                    }}>{chip}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="aibot24" style={{ 
                padding: '4rem 0',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)',
                background: '#f7f9fc'
            }}>
                <div className="container">
                <div className="glass" style={{ 
                    padding: '0', 
                    margin: '0 auto',
                    border: '1px solid rgba(2, 100, 160, 0.08)',
                    overflow: 'hidden',
                    background: 'rgba(255, 255, 255, 0.97)',
                    color: '#0b1b3a'
                }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', minHeight: '520px', alignItems: 'center' }}>
                        <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
                            <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(2, 100, 160, 0.08)', color: '#0264A0', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1.5rem', border: '1px solid rgba(2, 100, 160, 0.15)' }}>NUESTRO BOT MÁS INTELIGENTE</div>
                            <h2 style={{ 
                                fontSize: 'clamp(2rem, 4vw, 3rem)', 
                                marginBottom: '1rem', 
                                lineHeight: '1.1',
                                fontWeight: '900'
                            }}>
                                <span style={{
                                    display: 'inline-flex',
                                    alignItems: 'flex-start',
                                    gap: '0.25rem',
                                    letterSpacing: '0.05em'
                                }}>
                                    <span style={{
                                        padding: '0.2rem 0.4rem',
                                        borderRadius: '12px',
                                        border: '2px solid #0264A0',
                                        color: '#0264A0',
                                        fontWeight: 900,
                                        fontSize: 'clamp(1.5rem, 3vw, 2.3rem)'
                                    }}>AIBot24</span>
                                    <sup style={{ fontSize: '0.65rem', color: '#0264A0', fontWeight: 800, transform: 'translateY(-6px)', display: 'inline-block' }}>TM</sup>
                                </span>
                                <span style={{ display: 'block', marginTop: '0.35rem', fontSize: '0.85rem', color: 'rgba(11,27,58,0.65)', fontWeight: 600, letterSpacing: '0.15em' }}>powered by WORKFLOW</span>
                            </h2>
                            <p style={{ color: 'rgba(11,27,58,0.75)', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.7 }}>
                                El primer Agente Autónomo diseñado para dominar tu empresa.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
                                {[
                                    'Gestión Inteligente de CRM.',
                                    'Cierre de Ventas y Cotización en tiempo real.',
                                    'Omnicanalidad activa.',
                                    'Agenda y seguimiento automatizado.',
                                    'Integración con e-commerce y Project Management.',
                                    'Capacidad para desempeñar cualquier función administrativa delegada.'
                                ].map((feature) => (
                                    <li key={feature} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                        <div style={{ background: 'rgba(2,100,160,0.12)', padding: '6px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '26px', height: '26px', flexShrink: 0 }}>
                                            <Check size={14} color="#0264A0" />
                                        </div>
                                        <span style={{ color: '#0b1b3a', lineHeight: 1.6, fontWeight: 600 }}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Visual Side */}
                        <div style={{
                            background: `linear-gradient(120deg, rgba(247,249,252,0.15), rgba(255,255,255,0.4)), url(${aiBotPhoto})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            minHeight: '100%',
                            height: '100%'
                        }}></div>
                    </div>
                </div>
                </div>
            </section>

            <section style={{ 
                padding: '6rem 0',
                background: '#f9fcff',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)'
            }}>
                <div className="container">
                <h2 style={{ 
                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
                    marginBottom: '4rem', 
                    textAlign: 'center',
                    color: 'var(--text-primary-dark)',
                    fontWeight: '900'
                }}>Otras Implementaciones de IA</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {[
                        { 
                            icon: Database, 
                            title: 'IA Strategy y Machine Learning predictivo.', 
                            desc: '' 
                        },
                        { 
                            icon: Bot, 
                            title: 'Agentes avanzados de servicio al cliente.', 
                            desc: '' 
                        },
                        { 
                            icon: LayoutGrid, 
                            title: 'Automatización interdepartamental.', 
                            desc: '' 
                        },
                        { 
                            icon: LineChart, 
                            title: 'Visión Artificial e IA Generativa.', 
                            desc: '' 
                        }
                    ].map((item, i) => (
                        <ScrollRevealItem key={i} delay={i * 0.1}>
                        <div className="glass" style={{ 
                            padding: '2.5rem 2rem', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            textAlign: 'center', 
                            transition: 'all 0.3s ease',
                            background: 'rgba(255, 255, 255, 0.7)',
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
                            <div style={{ padding: '1.5rem', background: 'rgba(2, 100, 160, 0.15)', borderRadius: '50%', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <item.icon size={32} style={{ color: '#0264A0' }} />
                            </div>
                            <h3 style={{ 
                                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', 
                                marginBottom: item.desc ? '1rem' : 0,
                                color: 'var(--text-primary-dark)',
                                fontWeight: '700'
                            }}>{item.title}</h3>
                            {item.desc && (
                                <p style={{ color: 'var(--text-secondary-dark)', fontSize: 'clamp(0.9rem, 1.5vw, 1rem)', lineHeight: 1.7 }}>{item.desc}</p>
                            )}
                        </div>
                        </ScrollRevealItem>
                    ))}
                </div>
                </div>
            </section>

            <section style={{ 
                padding: '5rem 0',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)',
                background: '#ffffff',
                color: '#0b1b3a'
            }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3rem', alignItems: 'center' }}>
                    <div>
                        <p style={{ textTransform: 'uppercase', letterSpacing: '0.4rem', color: '#0264A0', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>Posibilidades de Implementación</p>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.2 }}>
                            IA + Personas + Procesos en un mismo ecosistema
                        </h2>
                        <p style={{ color: 'rgba(11,27,58,0.75)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                            Configuramos casos de uso donde los agentes autónomos colaboran con sus equipos humanos. Diseñamos el playbook, entrenamos al bot y lo integramos con Bitrix24, ERP o el sistema que ya utilicen.
                        </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                        {[
                            {
                                title: 'Ventas Consultivas',
                                body: 'Captura leads, presenta catálogos dinámicos y envía propuestas personalizadas que registran cada interacción en el CRM.'
                            },
                            {
                                title: 'Experiencia al Cliente',
                                body: 'Gestiona soporte técnico, agenda visitas y coordina inventarios en segundo plano para acelerar la resolución.'
                            },
                            {
                                title: 'Operaciones & Campo',
                                body: 'Da instrucciones a personal en sitio, reporta incidencias con foto/video y dispara workflows de mantenimiento.'
                            },
                            {
                                title: 'Backoffice Autónomo',
                                body: 'Conciliación, facturación, reporteo y cualquier otra tarea administrativa que hoy consume horas valiosas.'
                            }
                        ].map((item) => (
                            <div key={item.title} style={{
                                background: 'rgba(2, 100, 160, 0.05)',
                                border: '1px solid rgba(2, 100, 160, 0.15)',
                                borderRadius: '18px',
                                padding: '1.75rem'
                            }}>
                                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 700, color: '#0b1b3a' }}>{item.title}</h3>
                                <p style={{ margin: 0, color: 'rgba(11,27,58,0.7)', lineHeight: 1.6 }}>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ 
                padding: '6rem 2rem', 
                background: '#f2f5fb',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)'
            }}>
                <div className="container">
                    <style>{`
                        .methodology-flow {
                            display: flex;
                            gap: 1.5rem;
                            flex-wrap: wrap;
                            align-items: stretch;
                            justify-content: center;
                        }

                        .methodology-step {
                            position: relative;
                            flex: 1;
                            min-width: 240px;
                            padding: 2.5rem 2rem;
                            border-radius: 28px;
                            background: #fff;
                            border: 1px solid rgba(2, 100, 160, 0.08);
                            box-shadow: 0 25px 45px rgba(15, 23, 42, 0.08);
                            overflow: hidden;
                        }

                        .methodology-icon {
                            width: 64px;
                            height: 64px;
                            border-radius: 18px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin-bottom: 1.5rem;
                        }

                        .puzzle-node {
                            position: absolute;
                            width: 26px;
                            height: 26px;
                            border-radius: 999px;
                            border: 1px solid rgba(2, 100, 160, 0.15);
                            opacity: 0.5;
                        }

                        .puzzle-node.top {
                            top: -13px;
                            left: 50%;
                            transform: translateX(-50%);
                        }

                        .puzzle-node.right {
                            right: -13px;
                            top: 50%;
                            transform: translateY(-50%);
                        }

                        .methodology-connector {
                            display: none;
                            align-items: center;
                            gap: 0.5rem;
                            color: #0264A0;
                        }

                        .methodology-connector span {
                            width: 80px;
                            height: 2px;
                            background: linear-gradient(90deg, rgba(2, 100, 160, 0.15), rgba(2, 100, 160, 0.4));
                        }

                        @media (min-width: 1024px) {
                            .methodology-flow {
                                flex-wrap: nowrap;
                            }

                            .methodology-connector {
                                display: inline-flex;
                            }
                        }
                    `}</style>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <p style={{
                            textTransform: 'uppercase',
                            letterSpacing: '0.4rem',
                            color: '#0264A0',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            marginBottom: '1rem'
                        }}>Metodología IA</p>
                        <h2 style={{
                            fontSize: 'clamp(1.9rem, 4vw, 2.6rem)',
                            fontWeight: 900,
                            color: 'var(--text-primary-dark)',
                            marginBottom: '0.75rem'
                        }}>Un engranaje de piezas que se ensamblan</h2>
                        <p style={{
                            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                            color: 'var(--text-secondary-dark)',
                            maxWidth: '700px',
                            margin: '0 auto'
                        }}>
                            Cada fase encaja con la anterior como un rompecabezas inteligente, asegurando trazabilidad y valor desde el dato hasta la operación.
                        </p>
                    </div>
                    <div className="methodology-flow">
                        {methodologySteps.map((step, idx) => (
                            <React.Fragment key={step.title}>
                                <div className="methodology-step">
                                    <span className="puzzle-node top" style={{ background: step.accent }}></span>
                                    <span className="puzzle-node right" style={{ background: step.accent }}></span>
                                    <div className="methodology-icon" style={{ background: `${step.accent}15` }}>
                                        <step.icon size={28} color={step.accent} />
                                    </div>
                                    <div style={{
                                        fontSize: '0.85rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.3rem',
                                        color: step.accent,
                                        fontWeight: 700
                                    }}>Paso {idx + 1}</div>
                                    <h3 style={{
                                        fontSize: '1.1rem',
                                        fontWeight: 800,
                                        margin: '0.5rem 0',
                                        color: 'var(--text-primary-dark)'
                                    }}>{step.title}</h3>
                                    <p style={{
                                        color: 'var(--text-secondary-dark)',
                                        lineHeight: 1.7,
                                        fontSize: '0.95rem'
                                    }}>{step.desc}</p>
                                </div>
                                {idx < methodologySteps.length - 1 && (
                                    <div className="methodology-connector">
                                        <span></span>
                                        <Cog size={22} />
                                        <span></span>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
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
                        }}>Testimonios en vivo</p>
                        <p style={{ fontSize: '1.15rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.85)' }}>
                            "Workflow nos acompañó en todo el proceso: desde mapear datos, entrenar al agente con la voz de nuestra marca y ponerlo a vender. Hoy el equipo humano se enfoca en cerrar oportunidades masivas." 
                        </p>
                        <p style={{ marginTop: '1rem', fontWeight: 700, letterSpacing: '0.02em' }}>Director Comercial · Sector Servicios B2B</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.3 }}>¿Listo para activar su primer Agente de IA?</h3>
                        <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.75rem', fontSize: '1.05rem', lineHeight: 1.8 }}>
                            Agendemos una consultoría y definamos juntos el primer caso de uso que entregará valor en semanas, no en meses.
                        </p>
                        <button style={{
                            padding: '0.95rem 2.5rem',
                            background: '#55B3D9',
                            color: '#010D26',
                            border: 'none',
                            borderRadius: '999px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            boxShadow: '0 15px 35px rgba(85, 179, 217, 0.35)'
                        }}>Agendar consultoría</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AI;
