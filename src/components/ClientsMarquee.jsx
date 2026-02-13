import React from 'react';
import amfora from '../assets/logos-clientes/amfora.png';
import cajamag from '../assets/logos-clientes/cajamag.png';
import credinomina from '../assets/logos-clientes/credinomina.png';
import fadesa from '../assets/logos-clientes/fadesa.png';
import sena from '../assets/logos-clientes/sena.png';
import uam from '../assets/logos-clientes/uam.png';

const ClientsMarquee = ({ integrated = false }) => {
    const logos = [
        { id: 1, src: amfora, alt: 'Amfora' },
        { id: 2, src: cajamag, alt: 'Cajamag' },
        { id: 3, src: credinomina, alt: 'Credinomina' },
        { id: 4, src: fadesa, alt: 'Fadesa' },
        { id: 5, src: sena, alt: 'SENA' },
        { id: 6, src: uam, alt: 'UAM' }
    ];

    // Duplicamos los logos para crear el efecto infinito sin gaps
    const duplicatedLogos = [...logos, ...logos];

    return (
        <section className="section-dark" style={{
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            marginTop: integrated ? '-120px' : '0',
            padding: integrated ? '2rem 0 4rem 0' : '6rem 0',
            background: integrated ? 'transparent' : 'var(--bg-dark)',
            position: 'relative',
            zIndex: integrated ? 10 : 'auto'
        }}>
            {!integrated && (
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <p style={{
                        color: '#55B3D9',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        margin: 0
                    }}>
                        Empresas que confían en nosotros
                    </p>
                </div>
            )}

            {/* Full Width Marquee Container */}
            <div style={{
                position: 'relative',
                overflow: 'hidden',
                width: '100%'
            }}>
                {/* Gradient masks para efecto fade en los extremos */}
                <style>{`
                    @media (max-width: 768px) {
                        .marquee-left-fade {
                            width: 120px !important;
                        }

                        .marquee-right-fade {
                            width: 120px !important;
                        }
                    }

                    @media (max-width: 480px) {
                        .marquee-left-fade {
                            width: 80px !important;
                        }

                        .marquee-right-fade {
                            width: 80px !important;
                        }
                    }
                `}</style>
                <div className="marquee-left-fade" style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '250px',
                    height: '100%',
                    background: 'linear-gradient(to right, rgba(243, 246, 248, 1), transparent)',
                    zIndex: 10,
                    pointerEvents: 'none'
                }} />
                <div className="marquee-right-fade" style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: '250px',
                    height: '100%',
                    background: 'linear-gradient(to left, rgba(243, 246, 248, 1), transparent)',
                    zIndex: 10,
                    pointerEvents: 'none'
                }} />

                {/* Marquee Track */}
                <style>{`
                    @keyframes marquee {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }

                    .marquee-track {
                        display: flex;
                        gap: 0;
                        animation: marquee 70s linear infinite;
                        width: fit-content;
                    }

                    .logo-item {
                        flex-shrink: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        min-width: 500px;
                        height: 300px;
                        padding: 0;
                        margin: 0;
                        opacity: 1;
                        transition: opacity 0.3s ease;
                    }

                    .logo-item:hover {
                        opacity: 1;
                    }

                    .logo-item img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                        padding: 10px;
                        box-sizing: border-box;
                        filter: brightness(1);
                        transition: filter 0.3s ease;
                    }

                    .logo-item:hover img {
                        filter: brightness(1.2);
                    }

                    @media (max-width: 1024px) {
                        .logo-item {
                            min-width: 300px;
                            height: 200px;
                        }

                        .logo-item img {
                            padding: 8px;
                        }
                    }

                    @media (max-width: 768px) {
                        .logo-item {
                            min-width: 200px;
                            height: 140px;
                        }

                        .logo-item img {
                            padding: 6px;
                        }
                    }

                    @media (max-width: 480px) {
                        .logo-item {
                            min-width: 150px;
                            height: 100px;
                        }

                        .logo-item img {
                            padding: 4px;
                        }
                    }
                `}</style>

                <div className="marquee-track">
                    {duplicatedLogos.map((logo, index) => (
                        <div key={`${logo.id}-${index}`} className="logo-item">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsMarquee;
