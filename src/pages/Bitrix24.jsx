import React, { useEffect, useState } from 'react';
import { Layers, Box, Settings, ArrowRight } from 'lucide-react';
import ScrollRevealItem from '../components/ScrollRevealItem';
import ParticlesBackground from '../components/ParticlesBackground';
import bitrixGoldBadge from '../assets/Bitrix-1.jpg';
import workflowLogo from '../assets/workflow-logo.png';
import bitrixHeroVideo from '../assets/video/workflow_video.webm';
import { fetchBitrix24Content, getBitrix24Content } from '../utils/contentStorage';

const Bitrix24 = () => {
    const [bitrixContent, setBitrixContent] = useState(() => getBitrix24Content());

    useEffect(() => {
        const syncContent = async () => {
            const { data } = await fetchBitrix24Content();
            if (data) {
                setBitrixContent(data);
            }
        };

        syncContent();
        window.addEventListener('site-content-updated', syncContent);

        return () => {
            window.removeEventListener('site-content-updated', syncContent);
        };
    }, []);

    return (
        <>
            <style>{`
                .bitrix-hero-particles canvas {
                    z-index: 2 !important;
                }

                @keyframes bitrixCardIntro {
                    from {
                        opacity: 0;
                        transform: translateY(18px) scale(0.98);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .bitrix-feature-card {
                    position: relative;
                    overflow: visible;
                    animation: bitrixCardIntro 0.75s ease both;
                }

                .bitrix-feature-card .bitrix-bg-icon {
                    position: absolute;
                    top: -44px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 88px;
                    height: 88px;
                    border-radius: 50%;
                    background: rgba(2, 100, 160, 0.11);
                    border: 1px solid rgba(2, 100, 160, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #0264A0;
                    pointer-events: none;
                    z-index: 2;
                    box-shadow: 0 10px 24px rgba(2, 100, 160, 0.18);
                }

                .bitrix-feature-card .bitrix-card-content {
                    position: relative;
                    z-index: 1;
                }

                @media (max-width: 900px) {
                    .bitrix-hero-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }

                    .bitrix-hero-copy {
                        text-align: center !important;
                    }
                }
            `}</style>
            <section style={{ 
                padding: '8rem 0 4rem 0', 
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)',
                background: 'var(--bg-dark)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0
                    }}
                >
                    <source src={bitrixHeroVideo} type="video/webm" />
                </video>

                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(243, 246, 248, 0.9), rgba(255, 255, 255, 0.92))',
                    zIndex: 1
                }} />

                <div className="bitrix-hero-particles">
                    <ParticlesBackground />
                </div>

                <div className="container bitrix-hero-grid" style={{
                    maxWidth: '980px',
                    position: 'relative',
                    zIndex: 3
                }}>
                <div className="bitrix-hero-copy" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.9rem', flexWrap: 'wrap' }}>
                    <img
                        src={bitrixGoldBadge}
                        alt="Bitrix24 Gold Partner"
                        style={{
                            width: 'min(220px, 62%)',
                            height: 'auto',
                            objectFit: 'contain',
                            display: 'inline-block',
                            filter: 'drop-shadow(0 10px 20px rgba(2, 100, 160, 0.24))',
                            borderRadius: '12px'
                        }}
                    />
                    <div style={{
                        width: '85px',
                        height: '85px',
                        borderRadius: '50%',
                        background: 'rgba(10, 10, 10, 0.82)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 10px 20px rgba(2, 100, 160, 0.2)',
                        flexShrink: 0
                    }}>
                        <img
                            src={workflowLogo}
                            alt="Workflow"
                            style={{
                                width: '75px',
                                height: '75px',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>
                <h1 style={{ 
                    fontSize: 'clamp(2rem, 5vw, 3rem)', 
                    fontWeight: '900', 
                    marginBottom: '1.5rem', 
                    lineHeight: '1.2',
                    color: 'var(--text-primary-dark)',
                    position: 'relative'
                }}>
                    {bitrixContent.hero.titlePrefix} <br /> <span style={{
                        background: 'linear-gradient(135deg, #0264A0 0%, #55B3D9 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>{bitrixContent.hero.titleHighlight}</span>
                </h1>
                <p style={{ 
                    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
                    color: 'var(--text-secondary-dark)', 
                    marginBottom: '2.5rem',
                    lineHeight: 1.8,
                    position: 'relative'
                }}>
                    {bitrixContent.hero.description}
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
                    border: 'none',
                    position: 'relative'
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
                    {bitrixContent.hero.profileButtonLabel} <ArrowRight size={18} />
                </a>
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
                            title: bitrixContent.cards[0].title,
                            color: '#0264A0',
                            bgIcon: Layers,
                            items: bitrixContent.cards[0].items
                        },
                        {
                            title: bitrixContent.cards[1].title,
                            color: '#0264A0',
                            bgIcon: Settings,
                            iconItems: [
                                { text: bitrixContent.cards[1].iconItems[0], icon: Layers },
                                { text: bitrixContent.cards[1].iconItems[1], icon: Box },
                                { text: bitrixContent.cards[1].iconItems[2], icon: Settings },
                                { text: bitrixContent.cards[1].iconItems[3], icon: ArrowRight }
                            ]
                                }
                    ].map((card, idx) => (
                        <ScrollRevealItem key={idx} delay={idx * 0.1}>
                        <div className="glass bitrix-feature-card" style={{
                            padding: '5.2rem 2.5rem 2.5rem 2.5rem',
                            background: 'rgba(255, 255, 255, 0.7)',
                            transition: 'all 0.3s ease',
                            borderLeft: card.title === 'Ecosistema' ? '4px solid #0264A0' : 'none',
                            animationDelay: `${idx * 0.12}s`
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
                            {card.bgIcon && (
                                <div className="bitrix-bg-icon">
                                    <card.bgIcon size={46} strokeWidth={1.8} />
                                </div>
                            )}

                            <div className="bitrix-card-content">
                            <h3 style={{ 
                                fontSize: 'clamp(1.4rem, 2.8vw, 1.8rem)', 
                                marginBottom: '1.75rem', 
                                color: card.color,
                                fontWeight: '800'
                            }}>{card.title}</h3>
                            
                            {card.items && (
                                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {card.items.map((item, i) => (
                                        <li key={i} style={{ 
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '0.7rem',
                                            color: 'var(--text-secondary-dark)',
                                            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                                            lineHeight: 1.65,
                                            fontWeight: 500
                                        }}>
                                            <span style={{
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                background: '#0264A0',
                                                marginTop: '0.58rem',
                                                flexShrink: 0
                                            }}></span>
                                            <span>{item}</span>
                                        </li>
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
                                                gap: '0.85rem',
                                                color: 'var(--text-secondary-dark)',
                                                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                                                fontWeight: 500,
                                                lineHeight: 1.6
                                            }}>
                                                <Icon size={20} style={{ color: '#0264A0', flexShrink: 0 }} /> 
                                                {item.text}
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                            </div>
                            
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
                        }}>{bitrixContent.methodology.badge}</p>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 900,
                            marginBottom: '1.5rem',
                            lineHeight: 1.2,
                            color: 'var(--text-primary-dark)'
                        }}>{bitrixContent.methodology.title}</h2>
                        <p style={{
                            color: 'var(--text-secondary-dark)',
                            lineHeight: 1.7,
                            fontSize: '1.05rem'
                        }}>
                            {bitrixContent.methodology.description}
                        </p>
                    </div>
                    <div className="glass" style={{
                        background: 'rgba(255,255,255,0.85)',
                        border: '1px solid rgba(2, 100, 160, 0.1)',
                        borderRadius: '24px',
                        padding: '2.5rem'
                    }}>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {bitrixContent.methodology.steps.map((step, index) => (
                                <div key={step.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
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
                                        }}>{step.title}</p>
                                        <p style={{
                                            margin: '0.35rem 0 0 0',
                                            color: 'var(--text-secondary-dark)',
                                            lineHeight: 1.6,
                                            textAlign: 'left'
                                        }}>
                                            {step.body}
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
                        }}>{bitrixContent.finalCta.badge}</p>
                        <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.3 }}>{bitrixContent.finalCta.title}</h3>
                        <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.75rem', fontSize: '1.05rem', lineHeight: 1.8 }}>
                            {bitrixContent.finalCta.description}
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
                            }}>{bitrixContent.finalCta.buttonLabel}</a>
                        </div>
                    </div>
                    <div className="glass" style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '24px',
                        padding: '2rem',
                        backdropFilter: 'blur(12px)'
                    }}>
                        {bitrixContent.finalCta.bullets.map((item, idx) => (
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
