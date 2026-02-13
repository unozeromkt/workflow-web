import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, CheckCircle2, Sparkles, Zap, Shield, Users, Server, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../components/ParticlesBackground';
import ScrollRevealItem from '../components/ScrollRevealItem';
import ClientsMarquee from '../components/ClientsMarquee';
import { useScrollReveal } from '../hooks/useScrollReveal';
import heroBackground from '../assets/hero-.webp';
import workflowEcosystem from '../assets/workflow-ecosystem.png';
import aiStrategyImg from '../assets/ai-strategy.png';
import cloudInfraImg from '../assets/iso-cloud-blue.png';
import bpoServiceImg from '../assets/bpo-service.png';
import bitrixServiceImg from '../assets/bitrix-service.png';
import whyWorkflowImg from '../assets/why-workflow.png';
import isoAi from '../assets/iso-ai.png';
import isoCloud from '../assets/iso-cloud.png';
import isometricCta from '../assets/isometric-cta.png';
import bitrix1 from '../assets/Bitrix-1.jpg';
import bitrix2 from '../assets/Bitrix.jpg';

const ServicesCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const services = [
        {
            icon: Sparkles,
            title: 'AI Strategy & Arquitectura',
            desc: 'Cerebros digitales que toman decisiones basadas en datos en tiempo real.',
            link: '/ia'
        },
        {
            icon: Zap,
            title: 'Ecosistemas Cloud',
            desc: 'Arquitectura escalable en AWS/Azure con seguridad enterprise integrada.',
            link: '/soluciones'
        },
        {
            icon: Users,
            title: 'Intelligent BPO',
            desc: 'Contact Centers aumentados con IA que operan 24/7 con máxima eficiencia.',
            link: '/soluciones'
        },
        {
            icon: Shield,
            title: 'Consultoría Bitrix24',
            desc: 'Centralización operativa total en una sola plataforma integrada.',
            link: '/bitrix24'
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    };

    const currentService = services[currentIndex];

    return {
        isMobile,
        services,
        currentIndex,
        setCurrentIndex,
        currentService,
        handleNext,
        handlePrev
    };
};

const Home = () => {
    return (
        <>
            <style>{`
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes floating {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }

                .hero-badge {
                    animation: slideInLeft 0.6s ease-out;
                }

                .hero-title {
                    animation: slideInLeft 0.8s ease-out 0.1s both;
                }

                .hero-description {
                    animation: slideInUp 0.8s ease-out 0.2s both;
                }

                .hero-buttons {
                    animation: slideInUp 0.8s ease-out 0.3s both;
                }

                .hero-image {
                    animation: floating 3s ease-in-out infinite;
                }

                @media (max-width: 768px) {
                    .hero-section {
                        margin-top: 0 !important;
                        padding-top: 5rem !important;
                    }

                    .hero-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }

                    .hero-image-wrapper {
                        max-width: 280px !important;
                        margin: 0 auto !important;
                    }
                }
            `}</style>
            {/* Hero Section - Two Column Layout */}
            <section
                className="section-dark section-padding-lg hero-section"
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
                {/* Background gradient overlay */}
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
                    <div className="hero-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '4rem',
                        alignItems: 'center',
                        maxWidth: '100%'
                    }}>
                        {/* Left Column - Content */}
                        <div style={{ textAlign: 'left' }}>
                            <div className="hero-badge" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ 
                                    fontSize: '0.75rem', 
                                    fontWeight: '600', 
                                    padding: '0.5rem 1rem', 
                                    background: 'rgba(2, 100, 160, 0.15)', 
                                    color: '#0264A0',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(2, 100, 160, 0.3)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>
                                    Bitrix24 Gold Partner
                                </div>
                            </div>

                            <h1 className="hero-title" style={{ marginBottom: '2rem', textAlign: 'left' }}>
                                Soluciones Empresariales <br />
                                <span style={{
                                    background: 'linear-gradient(135deg, #0264A0 0%, #55B3D9 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>Bitrix24 Integradas</span>
                            </h1>

                            <p className="hero-description" style={{ fontSize: '1.125rem', maxWidth: '500px', marginBottom: '3rem', color: 'var(--text-secondary-dark)', lineHeight: '1.7' }}>
                                Centralización operativa total. Equipos de alto rendimiento en una plataforma integrada que unifica ventas, marketing y operaciones.
                            </p>

                            <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <a href="https://wa.me/3005243896" className="btn btn-primary">
                                    Iniciar Implementación <ArrowRight size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative'
                        }}>
                            <div className="hero-image hero-image-wrapper" style={{
                                position: 'relative',
                                width: '100%',
                                maxWidth: '500px',
                                aspectRatio: '1/1'
                            }}>
                                <img
                                    src={cloudInfraImg}
                                    alt="Cloud Infrastructure"
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

            {/* Clients - Integrated with Hero */}
            <ClientsMarquee integrated={true} style={{ marginTop: '-80px' }} />

            {/* About Us Section */}
            <section className="section-dark section-padding">
                <style>{`
                    @media (max-width: 1024px) {
                        .about-container {
                            padding: 3.5rem 2rem !important;
                            border-radius: 16px !important;
                        }

                        .about-grid {
                            grid-template-columns: 1fr !important;
                            gap: 3rem !important;
                        }

                        .about-images {
                            grid-template-columns: 1fr 1fr !important;
                            gap: 1rem !important;
                        }
                    }

                    @media (max-width: 768px) {
                        .about-container {
                            padding: 2.5rem 1.5rem !important;
                            border-radius: 12px !important;
                            padding-top: 3.5rem !important;
                        }
                        
                        .about-grid {
                            grid-template-columns: 1fr !important;
                            gap: 2rem !important;
                            min-height: auto !important;
                        }
                        
                        .about-badge {
                            padding: 0.5rem 1.25rem !important;
                            font-size: 0.7rem !important;
                            top: -12px !important;
                        }

                        .about-content h2 {
                            font-size: clamp(1.75rem, 5vw, 2.5rem) !important;
                            margin-bottom: 1.25rem !important;
                        }

                        .about-content p {
                            font-size: clamp(0.9rem, 2.5vw, 1.125rem) !important;
                            margin-bottom: 1.5rem !important;
                            line-height: 1.7 !important;
                        }

                        .about-benefits {
                            gap: 1rem !important;
                        }

                        .about-benefit-item {
                            gap: 0.75rem !important;
                        }

                        .about-benefit-item svg {
                            width: 20px !important;
                            height: 20px !important;
                            min-width: 20px !important;
                            min-height: 20px !important;
                        }

                        .about-benefit-item span {
                            font-size: clamp(0.85rem, 2vw, 1rem) !important;
                        }
                        
                        .about-images {
                            grid-template-columns: 1fr !important;
                            gap: 1rem !important;
                            margin-top: 2rem !important;
                        }

                        .about-images img {
                            width: 100% !important;
                            height: auto !important;
                            border-radius: 8px !important;
                        }
                    }

                    @media (max-width: 480px) {
                        .about-container {
                            padding: 2rem 1rem !important;
                            padding-top: 3rem !important;
                        }

                        .about-badge {
                            padding: 0.4rem 1rem !important;
                            font-size: 0.65rem !important;
                            top: -10px !important;
                        }

                        .about-content h2 {
                            font-size: clamp(1.5rem, 5vw, 2rem) !important;
                            margin-bottom: 1rem !important;
                        }

                        .about-content p {
                            font-size: clamp(0.85rem, 3vw, 1rem) !important;
                            margin-bottom: 1.25rem !important;
                        }

                        .about-benefits {
                            gap: 0.75rem !important;
                        }

                        .about-benefit-item span {
                            font-size: 0.9rem !important;
                        }

                        .about-images {
                            margin-top: 1.5rem !important;
                        }
                    }
                `}</style>
                <div className="about-container" style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    background: 'linear-gradient(135deg, rgba(2, 100, 160, 0.1) 0%, rgba(85, 179, 217, 0.05) 100%)',
                    border: '2px solid rgba(85, 179, 217, 0.2)',
                    borderRadius: '20px',
                    padding: '4rem',
                    position: 'relative',
                    overflow: 'visible',
                    paddingTop: '5rem'
                }}>
                    {/* Decorative Badge at Top */}
                    <div className="about-badge" style={{
                        position: 'absolute',
                        top: '-15px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'linear-gradient(135deg, #0264A0 0%, #55B3D9 100%)',
                        padding: '0.75rem 2rem',
                        borderRadius: '50px',
                        zIndex: 10,
                        border: '2px solid var(--bg-dark)',
                        whiteSpace: 'nowrap'
                    }}>
                        <span style={{
                            color: '#fff',
                            fontWeight: '700',
                            fontSize: '0.875rem',
                            letterSpacing: '0.05em'
                        }}>
                            SOBRE NOSOTROS
                        </span>
                    </div>

                    {/* Decorative gradient orb - Top Left */}
                    <div style={{
                        position: 'absolute',
                        top: '-50px',
                        left: '-50px',
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(circle, rgba(85, 179, 217, 0.15) 0%, transparent 70%)',
                        borderRadius: '50%',
                        zIndex: 0
                    }} />
                    
                    {/* Decorative gradient orb - Bottom Right */}
                    <div style={{
                        position: 'absolute',
                        bottom: '-100px',
                        right: '-100px',
                        width: '300px',
                        height: '300px',
                        background: 'radial-gradient(circle, rgba(2, 100, 160, 0.1) 0%, transparent 70%)',
                        borderRadius: '50%',
                        zIndex: 0
                    }} />

                    <div className="about-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '4rem',
                        alignItems: 'center',
                        minHeight: '500px',
                        position: 'relative',
                        zIndex: 1
                    }}>
                        {/* Left Column - About Content */}
                        <div className="about-content" style={{ color: '#fff' }}>
                            <h2 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 3.1rem)',
                                fontWeight: '900',
                                background: 'linear-gradient(135deg, #0264A0 0%, #55B3D9 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                marginBottom: '2rem',
                                lineHeight: '1.1'
                            }}>
                                SOMOS WORKFLOW
                            </h2>
                            
                            <p style={{
                                fontSize: '1.125rem',
                                lineHeight: '1.8',
                                color: 'var(--text-secondary-dark)',
                                marginBottom: '2rem'
                            }}>
                                Somos una empresa dedicada a impulsar el crecimiento y la productividad de las organizaciones.
                            </p>

                            <p style={{
                                fontSize: '1rem',
                                lineHeight: '1.8',
                                color: 'var(--text-secondary-dark)',
                                marginBottom: '3rem'
                            }}>
                                Agregamos valor a tus procesos y transformamos tus modelos de negocio para potenciar el desarrollo profesional de los equipos. Nuestro enfoque va más allá de la tecnología: Diseñamos soluciones a la medida, ayudando a que tu equipo crezca y se adapte al futuro.
                            </p>

                            {/* Benefits List */}
                            <div className="about-benefits" style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.25rem'
                            }}>
                                {[
                                    'Soporte integral y especializado 24/7',
                                    'Expertos transformación digital',
                                    'Consultoría Interdisciplinaria',
                                    'Optimización de productividad',
                                    'Compromiso con el crecimiento'
                                ].map((benefit, i) => (
                                    <div className="about-benefit-item" key={i} style={{
                                        display: 'flex',
                                        gap: '1rem',
                                        alignItems: 'center'
                                    }}>
                                        <Check size={24} color="#55B3D9" strokeWidth={3} style={{ flexShrink: 0 }} />
                                        <span style={{
                                            fontSize: '1rem',
                                            color: 'var(--text-primary-dark)',
                                            fontWeight: '500'
                                        }}>
                                            {benefit}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Testimonials Carousel with Images */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <TestimonialCarousel />
                            
                            {/* Images Below Testimonials */}
                            <div className="about-images" style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '1rem',
                                marginTop: '1rem'
                            }}>
                                <img 
                                    src={bitrix1} 
                                    alt="Bitrix Integration 1" 
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        objectFit: 'cover'
                                    }}
                                />
                                <img 
                                    src={bitrix2} 
                                    alt="Bitrix Integration 2" 
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Workflow Section - After Hero */}
            <section className="section-dark why-workflow-section" style={{ padding: '3rem 0' }}>
                <style>{`
                    @media (max-width: 768px) {
                        .why-workflow-section {
                            padding: 2rem 0 !important;
                        }

                        .why-grid {
                            grid-template-columns: 1fr !important;
                            gap: 1.5rem !important;
                        }

                        .why-benefit-card {
                            min-width: unset !important;
                            padding: 1.25rem !important;
                        }

                        .why-benefit-icon {
                            width: 48px !important;
                            height: 48px !important;
                            min-width: 48px !important;
                        }

                        .why-benefit-icon svg {
                            width: 24px !important;
                            height: 24px !important;
                        }
                    }
                `}</style>
                <div className="container">
                    {/* Title */}
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        {/* Decorative line */}
                        <div style={{
                            width: '80px',
                            height: '4px',
                            background: 'linear-gradient(90deg, transparent, #55B3D9, transparent)',
                            margin: '0 auto 2rem auto'
                        }} />
                        
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                            fontWeight: '800',
                            background: 'linear-gradient(135deg, #0264A0 0%, #55B3D9 50%, #0264A0 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            marginBottom: '2rem'
                        }}>
                            ¿Por qué Workflow?
                        </h2>
                        <p style={{
                            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                            fontWeight: '600',
                            lineHeight: '1.6',
                            color: '#55B3D9',
                            maxWidth: '700px',
                            margin: '0 auto 1.5rem auto'
                        }}>
                            Más ventas, más eficiencia, más resultados.
                        </p>
                        <p style={{
                            fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
                            lineHeight: '1.8',
                            color: 'var(--text-secondary-dark)',
                            maxWidth: '700px',
                            margin: '0 auto 4rem auto'
                        }}>
                            Transformamos flujos de trabajo tradicionales en ecosistemas inteligentes donde la IA, Soluciones Cloud y el Talento Humano convergen para escalar tu rentabilidad.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="why-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '4rem',
                        alignItems: 'center'
                    }}>
                        {/* Left: Benefits Cards */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                {
                                    icon: Zap,
                                    iconBg: 'rgba(14, 165, 233, 0.15)',
                                    iconColor: '#38BDF8',
                                    title: 'Metodología Ágil Garantizada',
                                    desc: 'Entregas incrementales de valor bajo marcos Scrum y Kanban para asegurar transparencia total.'
                                },
                                {
                                    icon: Server,
                                    iconBg: 'rgba(168, 85, 247, 0.15)',
                                    iconColor: '#C084FC',
                                    title: 'Infraestructura Elástica',
                                    desc: 'Diseñamos sistemas que optimizan costos y permiten un crecimiento ilimitado sin fricciones.'
                                },
                                {
                                    icon: Award,
                                    iconBg: 'rgba(34, 197, 94, 0.15)',
                                    iconColor: '#4ADE80',
                                    title: 'Experiencia Multisectorial',
                                    desc: 'Respaldados por más de 10 años transformando sectores como Educación, Salud, Banca, Manufactura y muchos más.'
                                }
                            ].map((benefit, i) => (
                                <ScrollRevealItem key={i} delay={i * 0.15}>
                                    <div className="glass" style={{
                                        padding: '2rem',
                                        borderRadius: '16px',
                                        display: 'flex',
                                        gap: '1.5rem',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-4px)';
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                        }}
                                    >
                                        {/* Icon */}
                                        <div className="why-benefit-icon" style={{
                                            width: '64px',
                                            height: '64px',
                                            minWidth: '64px',
                                            background: benefit.iconBg,
                                            borderRadius: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: `1px solid ${benefit.iconColor}33`
                                        }}>
                                            <benefit.icon size={32} color={benefit.iconColor} strokeWidth={2} />
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h3 style={{
                                                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                                                fontWeight: '700',
                                                color: 'var(--text-primary-dark)',
                                                marginBottom: '0.5rem',
                                                lineHeight: '1.3'
                                            }}>
                                                {benefit.title}
                                            </h3>
                                            <p style={{
                                                fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
                                                lineHeight: '1.6',
                                                color: 'var(--text-secondary-dark)',
                                                margin: 0
                                            }}>
                                                {benefit.desc}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollRevealItem>
                            ))}
                        </div>

                        {/* Right: Image */}
                        <ScrollRevealItem delay={0.3}>
                            <div style={{
                                position: 'relative',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                border: '3px solid #0264A0',
                                boxShadow: '0 20px 40px rgba(2, 100, 160, 0.2)'
                            }}>
                                <img
                                    src={whyWorkflowImg}
                                    alt="Workflow Team"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block'
                                    }}
                                />
                            </div>
                        </ScrollRevealItem>
                    </div>
                </div>
            </section>

            {/* Services Section - Full Width */}
            <ServicesSection />

            {/* CTA Section */}
            <section style={{
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)',
                padding: '6rem 2rem',
                background: 'linear-gradient(135deg, #0264A0 0%, #0264A0 50%, #55B3D9 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <style>{`
                    @media (max-width: 768px) {
                        .cta-section {
                            padding: 3rem 1.5rem !important;
                        }

                        .cta-grid {
                            grid-template-columns: 1fr !important;
                            gap: 2.5rem !important;
                        }

                        .cta-content h2 {
                            font-size: clamp(1.5rem, 4vw, 2.5rem) !important;
                            margin-bottom: 1.25rem !important;
                        }

                        .cta-content p {
                            font-size: clamp(0.95rem, 2.5vw, 1.125rem) !important;
                            margin-bottom: 2rem !important;
                        }

                        .cta-button {
                            padding: 0.75rem 1.5rem !important;
                            font-size: clamp(0.9rem, 2vw, 1rem) !important;
                            width: auto !important;
                        }

                        .cta-image-wrapper {
                            max-width: 300px !important;
                            margin: 0 auto !important;
                            justify-self: center !important;
                        }
                    }

                    @media (max-width: 480px) {
                        .cta-section {
                            padding: 2rem 1rem !important;
                        }

                        .cta-content h2 {
                            font-size: clamp(1.25rem, 5vw, 2rem) !important;
                            margin-bottom: 1rem !important;
                        }

                        .cta-content p {
                            font-size: clamp(0.9rem, 3vw, 1rem) !important;
                            margin-bottom: 1.5rem !important;
                        }

                        .cta-button {
                            padding: 0.65rem 1.25rem !important;
                            font-size: 0.85rem !important;
                        }

                        .cta-image-wrapper {
                            max-width: 240px !important;
                        }
                    }
                `}</style>
                {/* Decorative background shapes */}
                <div style={{
                    position: 'absolute',
                    right: '-200px',
                    top: '-100px',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)',
                    pointerEvents: 'none'
                }} />
                <div style={{
                    position: 'absolute',
                    right: '-150px',
                    top: '50px',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
                    pointerEvents: 'none'
                }} />

                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1
                }}>
                    <div className="cta-section cta-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '4rem',
                        alignItems: 'center'
                    }}>
                        {/* Left Column - Content */}
                        <div className="cta-content" style={{ color: '#fff' }}>
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                fontWeight: '800',
                                marginBottom: '2rem',
                                lineHeight: '1.2'
                            }}>
                                ¿Listo para escalar tu operación?
                            </h2>
                            <p style={{
                                fontSize: '1.125rem',
                                lineHeight: '1.8',
                                marginBottom: '3rem',
                                opacity: 0.95
                            }}>
                                Agenda una sesión de diagnóstico estratégico sin costo. Nuestros expertos analizarán tu situación y te presentarán un plan de acción personalizado.
                            </p>
                            <Link
                                to="/contacto"
                                className="cta-button"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    padding: '1rem 2rem',
                                    background: '#000',
                                    color: '#fff',
                                    borderRadius: '50px',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    fontSize: '1.05rem',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#fff';
                                    e.currentTarget.style.color = '#0264A0';
                                    e.currentTarget.style.gap = '1rem';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#000';
                                    e.currentTarget.style.color = '#fff';
                                    e.currentTarget.style.gap = '0.75rem';
                                }}
                            >
                                Agendar Sesión <ArrowRight size={20} />
                            </Link>
                        </div>

                        {/* Right Column - Image */}
                        <div className="cta-image-wrapper" style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            position: 'relative',
                            maxWidth: '100%'
                        }}>
                            <img
                                src={isometricCta}
                                alt="Isometric CTA"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    objectFit: 'contain'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

// Testimonial Carousel Component
const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    const testimonials = [
        {
            text: "Workflow transformó completamente nuestra forma de trabajar. Su enfoque consultivo y su equipo experto nos ayudaron a optimizar nuestros procesos en un 40%.",
            author: "María González",
            position: "Directora de Operaciones",
            company: "TechCorpLatam"
        },
        {
            text: "La implementación de Bitrix24 con Workflow fue seamless. Ahora nuestro equipo colabora de manera más efectiva y productiva.",
            author: "Carlos Mendez",
            position: "Gerente de Proyectos",
            company: "InnovateSolutions"
        },
        {
            text: "El soporte 24/7 de Workflow es excepcional. Siempre hay un experto disponible cuando los necesitamos.",
            author: "Ana Rodriguez",
            position: "CEO",
            company: "NextGen Corp"
        },
        {
            text: "Gracias a la transformación digital guiada por Workflow, aumentamos nuestra eficiencia operativa significativamente.",
            author: "Roberto Díaz",
            position: "Director Ejecutivo",
            company: "Digital Ventures"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeOut(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length);
                setFadeOut(false);
            }, 300);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const current = testimonials[currentIndex];

    return (
        <div className="testimonial-carousel" style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '400px'
        }}>
            <style>{`
                @media (max-width: 768px) {
                    .testimonial-carousel {
                        min-height: 350px !important;
                    }

                    .testimonial-quote-number {
                        font-size: clamp(2rem, 12vw, 4rem) !important;
                        top: -1rem !important;
                        right: -1rem !important;
                    }

                    .testimonial-text {
                        font-size: clamp(0.9rem, 2.5vw, 1.125rem) !important;
                        margin-bottom: 1.5rem !important;
                        padding-left: 1.5rem !important;
                    }

                    .testimonial-author {
                        font-size: clamp(0.9rem, 2vw, 1rem) !important;
                        margin-bottom: 0.2rem !important;
                    }

                    .testimonial-position {
                        font-size: clamp(0.8rem, 1.8vw, 0.875rem) !important;
                        margin-bottom: 0.2rem !important;
                    }

                    .testimonial-company {
                        font-size: clamp(0.75rem, 1.5vw, 0.875rem) !important;
                    }
                }

                @media (max-width: 480px) {
                    .testimonial-carousel {
                        min-height: 320px !important;
                    }

                    .testimonial-quote-number {
                        font-size: clamp(1.5rem, 10vw, 3rem) !important;
                    }

                    .testimonial-text {
                        font-size: 0.95rem !important;
                        margin-bottom: 1rem !important;
                        padding-left: 1rem !important;
                        line-height: 1.6 !important;
                    }

                    .testimonial-author {
                        font-size: 0.9rem !important;
                    }

                    .testimonial-position {
                        font-size: 0.8rem !important;
                    }

                    .testimonial-company {
                        font-size: 0.75rem !important;
                    }
                }
            `}</style>
            {/* Decorative Number */}
            <div className="testimonial-quote-number" style={{
                fontSize: 'clamp(4rem, 15vw, 8rem)',
                fontWeight: '900',
                color: 'var(--primary-blue)',
                opacity: '0.1',
                position: 'absolute',
                top: '-2rem',
                right: '-2rem',
                lineHeight: '1'
            }}>
                "
            </div>

            {/* Testimonial Content */}
            <div style={{
                opacity: fadeOut ? 0 : 1,
                transition: 'opacity 0.3s ease-in-out',
                position: 'relative',
                zIndex: 2,
                width: '100%'
            }}>
                <blockquote className="testimonial-text" style={{
                    fontSize: '1.125rem',
                    lineHeight: '1.8',
                    color: 'var(--text-primary-dark)',
                    fontStyle: 'italic',
                    marginBottom: '2rem',
                    borderLeft: '4px solid var(--accent-light-blue)',
                    paddingLeft: '2rem',
                    fontWeight: '500'
                }}>
                    "{current.text}"
                </blockquote>

                <div style={{
                    borderTop: '1px solid rgba(85, 179, 217, 0.3)',
                    paddingTop: '1.5rem'
                }}>
                    <p className="testimonial-author" style={{
                        fontSize: '1rem',
                        fontWeight: '700',
                        color: 'var(--text-primary-dark)',
                        marginBottom: '0.25rem'
                    }}>
                        {current.author}
                    </p>
                    <p className="testimonial-position" style={{
                        fontSize: '0.875rem',
                        color: 'var(--accent-light-blue)',
                        marginBottom: '0.25rem',
                        fontWeight: '500'
                    }}>
                        {current.position}
                    </p>
                    <p className="testimonial-company" style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary-dark)'
                    }}>
                        {current.company}
                    </p>
                </div>
            </div>
        </div>
    );
};

// Services Section Component
const ServicesSection = () => {
    const { isMobile, services, currentIndex, setCurrentIndex, currentService, handleNext, handlePrev } = ServicesCarousel();

    if (isMobile) {
        // Mobile Carousel View
        return (
            <section className="section-dark section-padding services-section" style={{
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)',
                padding: '2rem 0 4rem 0',
            }}>
                <style>{`
                    .services-carousel-wrapper {
                        position: relative;
                        overflow: hidden;
                    }

                    .services-carousel-slide {
                        padding: 2rem 1rem;
                    }

                    .services-carousel-controls {
                        display: flex;
                        justify-content: center;
                        gap: 1rem;
                        margin-top: 2rem;
                    }

                    .carousel-button {
                        width: 44px;
                        height: 44px;
                        border-radius: 50%;
                        background: #0264A0;
                        border: none;
                        color: white;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all 0.3s ease;
                        font-size: 1.25rem;
                    }

                    .carousel-button:hover {
                        background: #55B3D9;
                        transform: scale(1.1);
                    }

                    .carousel-dots {
                        display: flex;
                        justify-content: center;
                        gap: 0.5rem;
                        margin-top: 1.5rem;
                    }

                    .carousel-dot {
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background: rgba(2, 100, 160, 0.3);
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }

                    .carousel-dot.active {
                        background: #0264A0;
                        width: 24px;
                        border-radius: 4px;
                    }
                `}</style>

                {/* Title & Description */}
                <div className="services-title-section" style={{
                    textAlign: 'center',
                    marginBottom: '2rem',
                    maxWidth: '900px',
                    margin: '0 auto 2rem auto',
                    padding: '0 1rem'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                        fontWeight: '800',
                        color: 'var(--text-primary-dark)',
                        marginBottom: '1.25rem',
                        lineHeight: '1.2'
                    }}>
                        Soluciones de Ingeniería
                    </h2>
                    <p style={{
                        fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)',
                        lineHeight: '1.8',
                        color: 'var(--text-secondary-dark)',
                        marginBottom: '2rem'
                    }}>
                        Cuatro verticales integradas para resolver problemas complejos y transformar tu operación con tecnología de punta.
                    </p>
                    <Link
                        to="/soluciones"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.65rem 1.5rem',
                            background: '#000',
                            color: '#fff',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#0264A0';
                            e.currentTarget.style.gap = '1rem';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#000';
                            e.currentTarget.style.gap = '0.75rem';
                        }}
                    >
                        Explorar Soluciones <ArrowRight size={18} />
                    </Link>
                </div>

                {/* Carousel */}
                <div className="services-carousel-wrapper">
                    <div className="services-carousel-slide">
                        <div style={{
                            padding: '1.5rem',
                            borderRadius: '16px',
                            background: 'rgba(243, 246, 248, 0.7)',
                            border: '1px solid rgba(2, 100, 160, 0.2)',
                            transition: 'all 0.3s ease',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            minHeight: '300px',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Background Icon */}
                            <div style={{
                                position: 'absolute',
                                top: '-30px',
                                left: '-30px',
                                width: '180px',
                                height: '180px',
                                opacity: 0.15,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                pointerEvents: 'none'
                            }}>
                                <currentService.icon size={140} color="var(--primary)" strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <h3 style={{
                                    fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                                    fontWeight: '700',
                                    color: 'var(--text-primary-dark)',
                                    marginBottom: '0.75rem',
                                    lineHeight: '1.3'
                                }}>
                                    {currentService.title}
                                </h3>

                                <p style={{
                                    fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                                    lineHeight: '1.6',
                                    color: 'var(--text-secondary-dark)',
                                    margin: '0 0 1.5rem 0'
                                }}>
                                    {currentService.desc}
                                </p>

                                <Link
                                    to={currentService.link}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: 'var(--primary)',
                                        textDecoration: 'none',
                                        fontWeight: '600',
                                        fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
                                        transition: 'all 0.3s ease',
                                        borderBottom: '2px solid var(--primary)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.gap = '0.75rem';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.gap = '0.5rem';
                                    }}
                                >
                                    Explorar más <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="services-carousel-controls">
                        <button
                            className="carousel-button"
                            onClick={handlePrev}
                            aria-label="Anterior"
                        >
                            ←
                        </button>
                        <button
                            className="carousel-button"
                            onClick={handleNext}
                            aria-label="Siguiente"
                        >
                            →
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="carousel-dots">
                        {services.map((_, index) => (
                            <div
                                key={index}
                                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex?.(index)}
                                style={{
                                    cursor: 'pointer'
                                }}
                            />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    // Desktop Grid View
    return (
        <section className="section-dark section-padding services-section" style={{
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            paddingLeft: 'var(--container-padding)',
            paddingRight: 'var(--container-padding)',
            paddingTop: '6rem',
            paddingBottom: '6rem'
        }}>
            <style>{`
                @media (max-width: 1024px) {
                    .services-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 2rem !important;
                    }
                }
            `}</style>
            {/* Title & Description - Centered */}
            <div className="services-title-section" style={{
                textAlign: 'center',
                marginBottom: '4rem',
                maxWidth: '900px',
                margin: '0 auto 4rem auto'
            }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                    fontWeight: '800',
                    color: 'var(--text-primary-dark)',
                    marginBottom: '2rem',
                    lineHeight: '1.2'
                }}>
                    Soluciones de Ingeniería
                </h2>
                <p style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                    lineHeight: '1.8',
                    color: 'var(--text-secondary-dark)',
                    marginBottom: '3rem'
                }}>
                    Cuatro verticales integradas para resolver problemas complejos y transformar tu operación con tecnología de punta.
                </p>
                <Link
                    to="/soluciones"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.875rem 1.75rem',
                        background: '#000',
                        color: '#fff',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#0264A0';
                        e.currentTarget.style.gap = '1rem';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#000';
                        e.currentTarget.style.gap = '0.75rem';
                    }}
                >
                    Explorar Soluciones <ArrowRight size={20} />
                </Link>
            </div>

            {/* Services Grid - Four Columns - Full Width */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '2.5rem',
                maxWidth: '1600px',
                margin: '0 auto'
            }}>
                {services.map((service, i) => (
                    <ScrollRevealItem key={i} delay={i * 0.1}>
                        <div style={{
                            padding: '2.5rem 2rem',
                            borderRadius: '20px',
                            background: 'rgba(243, 246, 248, 0.7)',
                            border: '1px solid rgba(2, 100, 160, 0.2)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            minHeight: '380px',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-12px)';
                            e.currentTarget.style.boxShadow = '0 30px 60px rgba(2, 100, 160, 0.25)';
                            e.currentTarget.style.background = 'rgba(243, 246, 248, 1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.background = 'rgba(243, 246, 248, 0.7)';
                        }}
                        >
                            {/* Background Icon - Top Left */}
                            <div style={{
                                position: 'absolute',
                                top: '-30px',
                                left: '-30px',
                                width: '180px',
                                height: '180px',
                                opacity: 0.15,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                pointerEvents: 'none'
                            }}>
                                <service.icon size={140} color="var(--primary)" strokeWidth={1.5} />
                            </div>

                            {/* Content - Relative to position over icon */}
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                {/* Title */}
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '700',
                                    color: 'var(--text-primary-dark)',
                                    marginBottom: '1rem',
                                    lineHeight: '1.3'
                                }}>
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: 'var(--text-secondary-dark)',
                                    margin: '0 0 2rem 0',
                                    maxWidth: '100%'
                                }}>
                                    {service.desc}
                                </p>

                                {/* Explore Button */}
                                <Link
                                    to={service.link}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: 'var(--primary)',
                                        textDecoration: 'none',
                                        fontWeight: '600',
                                        fontSize: '0.95rem',
                                        transition: 'all 0.3s ease',
                                        borderBottom: '2px solid var(--primary)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.gap = '0.75rem';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.gap = '0.5rem';
                                    }}
                                >
                                    Explorar más <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </ScrollRevealItem>
                ))}
            </div>
        </section>
    );
};

export default Home;
