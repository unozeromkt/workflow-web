import React, { useEffect, useState } from 'react';
import { Target, UserCheck, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollRevealItem from '../components/ScrollRevealItem';
import ParticlesBackground from '../components/ParticlesBackground';
import teamBg from '../assets/iso-cloud-blue_old.png';
import { fetchWeAreContent, getWeAreContent } from '../utils/contentStorage';

const WeAre = () => {
    const [weAreContent, setWeAreContent] = useState(() => getWeAreContent());

    useEffect(() => {
        const syncContent = async () => {
            const { data } = await fetchWeAreContent();
            if (data) {
                setWeAreContent(data);
            }
        };

        syncContent();
        window.addEventListener('storage', syncContent);
        window.addEventListener('site-content-updated', syncContent);

        return () => {
            window.removeEventListener('storage', syncContent);
            window.removeEventListener('site-content-updated', syncContent);
        };
    }, []);

    const pillarVisualData = [
        { icon: Target },
        { icon: Zap },
        { icon: UserCheck },
        { icon: ShieldCheck }
    ];

    return (
        <>
            <style>{`
                @keyframes weAreSlideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes weAreSlideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes weAreFloating {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-18px);
                    }
                }

                .weare-hero-title {
                    animation: weAreSlideInLeft 0.8s ease-out 0.1s both;
                }

                .weare-hero-description {
                    animation: weAreSlideInUp 0.8s ease-out 0.2s both;
                }

                .weare-hero-button {
                    animation: weAreSlideInUp 0.8s ease-out 0.3s both;
                }

                .weare-hero-image {
                    animation: weAreFloating 3.2s ease-in-out infinite;
                }

                @media (max-width: 768px) {
                    .weare-hero-section {
                        margin-top: 0 !important;
                        padding-top: 5rem !important;
                    }

                    .weare-hero-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }

                    .weare-hero-image-wrapper {
                        max-width: 320px !important;
                        margin: 0 auto !important;
                    }
                }
            `}</style>

            {/* Hero Section */}
            <section
                className="section-dark section-padding-lg weare-hero-section"
                style={{
                    marginTop: '-140px',
                    paddingTop: 'calc(10rem + 80px)',
                    paddingBottom: '6rem',
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100vw',
                    marginLeft: 'calc(-50vw + 50%)',
                    marginRight: 'calc(-50vw + 50%)',
                    background: 'var(--bg-dark)'
                }}
            >
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(243, 246, 248, 0.95), rgba(255, 255, 255, 0.95))',
                    zIndex: 0
                }} />

                <ParticlesBackground />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="weare-hero-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '4rem',
                        alignItems: 'center',
                        maxWidth: '100%'
                    }}>
                        <div style={{ textAlign: 'left' }}>
                            <h1
                                className="weare-hero-title"
                                style={{
                                    fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                                    fontWeight: '900',
                                    lineHeight: 1.1,
                                    marginBottom: '1.75rem',
                                    background: 'linear-gradient(135deg, #0264A0 0%, #55B3D9 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}
                            >
                                {weAreContent.hero.title}
                            </h1>

                            <p
                                className="weare-hero-description"
                                style={{
                                    fontSize: 'clamp(1.05rem, 2.2vw, 1.25rem)',
                                    color: 'var(--text-secondary-dark)',
                                    maxWidth: '680px',
                                    lineHeight: 1.8,
                                    marginBottom: '2.25rem'
                                }}
                            >
                                {weAreContent.hero.description}
                            </p>

                            <div className="weare-hero-button" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
                                        transition: 'all 0.3s ease'
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
                                    {weAreContent.hero.ctaLabel} <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative'
                        }}>
                            <div
                                className="weare-hero-image weare-hero-image-wrapper"
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    maxWidth: '560px',
                                    aspectRatio: '1/1'
                                }}
                            >
                                <img
                                    src={teamBg}
                                    alt="Equipo Workflow"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        filter: 'drop-shadow(0 20px 40px rgba(2, 100, 160, 0.15))'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
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
                            }}>{weAreContent.essence.title}</h2>
                            <p style={{ 
                                fontSize: 'clamp(1rem, 2vw, 1.1rem)', 
                                color: 'var(--text-secondary-dark)', 
                                marginBottom: '1.5rem', 
                                lineHeight: 1.8
                            }}>
                                {weAreContent.essence.paragraph}
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
                                }}>{weAreContent.essence.quote}</p>
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
                                {weAreContent.essence.stats.map((s, i) => (
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
                        }}>{weAreContent.pillars.title}</h2>
                        <p style={{
                            fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
                            color: 'var(--text-secondary-dark)',
                            maxWidth: '700px',
                            margin: '0 auto',
                            lineHeight: 1.8
                        }}>
                            {weAreContent.pillars.subtitle}
                        </p>
                    </div>

                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                        maxWidth: '1400px',
                        margin: '0 auto'
                    }}>
                        {weAreContent.pillars.items.map((item, i) => {
                            const visual = pillarVisualData[i] || pillarVisualData[0];
                            const IconComponent = visual.icon;
                            return (
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
                                        <IconComponent size={28} strokeWidth={2} />
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
                            );
                        })}
                    </div>
                </div>
            </section>

        </>
    );
};

export default WeAre;
