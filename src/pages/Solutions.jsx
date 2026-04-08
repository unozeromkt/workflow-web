import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, BrainCircuit, Cloud, Bot, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';
import cloudVisual from '../assets/cloud-visual.png';
import ScrollRevealItem from '../components/ScrollRevealItem';
import ParticlesBackground from '../components/ParticlesBackground';
import { fetchSolutionsContent, getSolutionsContent } from '../utils/contentStorage';

const Solutions = () => {
    const [solutionsContent, setSolutionsContent] = useState(() => getSolutionsContent());

    useEffect(() => {
        const syncContent = async () => {
            const { data } = await fetchSolutionsContent();
            if (data) {
                setSolutionsContent(data);
            }
        };

        syncContent();
        window.addEventListener('site-content-updated', syncContent);

        return () => {
            window.removeEventListener('site-content-updated', syncContent);
        };
    }, []);

    const solutions = solutionsContent.architecture.cards;
    const architectureIcons = [BrainCircuit, Cloud, Bot, LayoutDashboard];

    return (
        <>
            <style>{`
                @keyframes solutionsFloating {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }

                .solutions-hero-image {
                    animation: solutionsFloating 3s ease-in-out infinite;
                }

                .hero-chip-row {
                    flex-wrap: nowrap;
                }

                @media (max-width: 768px) {
                    .solutions-hero-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }

                    .solutions-hero-image-wrapper {
                        max-width: 320px !important;
                        margin: 0 auto !important;
                    }

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
                    background: 'linear-gradient(135deg, rgba(243, 246, 248, 0.95), rgba(255, 255, 255, 0.95))',
                    zIndex: 0
                }}></div>

                <ParticlesBackground />

                <div className="container solutions-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                <div>
                    <p style={{
                        textTransform: 'uppercase',
                        letterSpacing: '0.4rem',
                        color: '#0264A0',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        marginBottom: '1.25rem'
                    }}>{solutionsContent.hero.badge}</p>
                    <h1 style={{ 
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
                        fontWeight: '900', 
                        marginBottom: '1.5rem', 
                        lineHeight: '1.1',
                        color: 'var(--text-primary-dark)'
                    }}>
                        {solutionsContent.hero.titlePrefix} <span style={{
                            background: 'linear-gradient(135deg, #0264A0 0%, #55B3D9 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>{solutionsContent.hero.titleHighlight}</span>
                    </h1>
                    <p style={{ 
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
                        color: 'var(--text-secondary-dark)', 
                        marginBottom: '2rem',
                        lineHeight: 1.8
                    }}>
                        {solutionsContent.hero.description}
                    </p>
                    <div style={{ paddingLeft: '1rem', borderLeft: '4px solid #0264A0', background: 'rgba(2, 100, 160, 0.05)', padding: '1.5rem 1rem 1.5rem 1rem', borderRadius: '8px' }}>
                        <p style={{ fontStyle: 'italic', color: 'var(--text-primary-dark)', margin: 0 }}>{solutionsContent.hero.quote}</p>
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
                        {solutionsContent.hero.chips.map((chip, idx) => (
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
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative'
                }}>
                    <div className="solutions-hero-image solutions-hero-image-wrapper" style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '540px',
                        aspectRatio: '1/1'
                    }}>
                        <img
                            src={cloudVisual}
                            alt="Cloud Architecture"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                display: 'block',
                                filter: 'drop-shadow(0 20px 40px rgba(2, 100, 160, 0.15))'
                            }}
                        />
                    </div>
                </div>
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
                    }}>{solutionsContent.architecture.badge}</p>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                        fontWeight: 900,
                        marginBottom: '1rem',
                        color: 'var(--text-primary-dark)'
                    }}>{solutionsContent.architecture.title}</h2>
                    <p style={{
                        fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                        color: 'var(--text-secondary-dark)',
                        maxWidth: '760px',
                        margin: '0 auto'
                    }}>
                        {solutionsContent.architecture.description}
                    </p>
                </div>
                <div className="solutions-row" style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, minmax(260px, 1fr))',
                    gap: '2rem'
                }}>
                    {solutions.map((sol, i) => (
                        <ScrollRevealItem key={i} delay={i * 0.1}>
                        {(() => {
                            const ArchitectureIcon = architectureIcons[i] || BrainCircuit;
                            return (
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
                            <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', padding: '0.75rem', opacity: 0.18, color: '#0264A0' }}>
                                <ArchitectureIcon size={56} strokeWidth={1.8} />
                            </div>
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
                                {solutionsContent.architecture.cardCtaLabel} <ArrowRight size={18} />
                            </Link>
                        </div>
                            );
                        })()}
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
                        }}>{solutionsContent.cta.badge}</p>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 900,
                            marginBottom: '1.5rem',
                            lineHeight: 1.2
                        }}>{solutionsContent.cta.title}</h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'rgba(255,255,255,0.75)',
                            marginBottom: '2rem',
                            lineHeight: 1.8
                        }}>
                            {solutionsContent.cta.description}
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <Link to="/contacto" style={{
                                background: '#55B3D9',
                                color: '#010D26',
                                padding: '0.9rem 2rem',
                                borderRadius: '50px',
                                fontWeight: 700,
                                textDecoration: 'none'
                            }}>
                                {solutionsContent.cta.primaryLabel}
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
                        {solutionsContent.cta.bullets.map((item, idx) => (
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
