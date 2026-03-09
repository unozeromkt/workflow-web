import React, { useEffect, useState } from 'react';
import {
    fetchAIContent,
    fetchBitrix24Content,
    fetchHomeContent,
    fetchSolutionsContent,
    fetchWeAreContent,
    getAIContent,
    getBitrix24Content,
    getHomeContent,
    getSolutionsContent,
    getWeAreContent,
    saveAIContent,
    saveBitrix24Content,
    saveHomeContent,
    saveSolutionsContent,
    saveWeAreContent
} from '../utils/contentStorage';
import { getAdminSession, isCurrentUserAdmin, loginAsAdmin, logoutAdmin } from '../utils/adminAuth';

const AdminHome = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isCheckingSession, setIsCheckingSession] = useState(true);
    const [isLoadingContent, setIsLoadingContent] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [activeTab, setActiveTab] = useState('home');
    const [homeContent, setHomeContent] = useState(() => getHomeContent());
    const [weAreContent, setWeAreContent] = useState(() => getWeAreContent());
    const [solutionsContent, setSolutionsContent] = useState(() => getSolutionsContent());
    const [aiContent, setAIContent] = useState(() => getAIContent());
    const [bitrixContent, setBitrixContent] = useState(() => getBitrix24Content());

    useEffect(() => {
        const bootstrapSession = async () => {
            const { session } = await getAdminSession();
            if (!session) {
                setIsAuthenticated(false);
                setIsCheckingSession(false);
                return;
            }

            const adminCheck = await isCurrentUserAdmin();
            setIsAuthenticated(adminCheck.ok);
            if (!adminCheck.ok) {
                setError(adminCheck.error || 'No tienes permisos de administrador.');
            }

            setIsCheckingSession(false);
        };

        bootstrapSession();
    }, []);

    useEffect(() => {
        const loadContent = async () => {
            if (!isAuthenticated) {
                setIsLoadingContent(false);
                return;
            }

            setIsLoadingContent(true);
            const [homeResult, weAreResult, solutionsResult, aiResult, bitrixResult] = await Promise.all([
                fetchHomeContent(),
                fetchWeAreContent(),
                fetchSolutionsContent(),
                fetchAIContent(),
                fetchBitrix24Content()
            ]);

            if (homeResult.data) {
                setHomeContent(homeResult.data);
            }
            if (weAreResult.data) {
                setWeAreContent(weAreResult.data);
            }
            if (solutionsResult.data) {
                setSolutionsContent(solutionsResult.data);
            }
            if (aiResult.data) {
                setAIContent(aiResult.data);
            }
            if (bitrixResult.data) {
                setBitrixContent(bitrixResult.data);
            }

            const firstError = homeResult.error || weAreResult.error || solutionsResult.error || aiResult.error || bitrixResult.error;
            if (firstError) {
                setError(firstError);
            } else {
                setError('');
            }

            setIsLoadingContent(false);
        };

        loadContent();
    }, [isAuthenticated]);

    const updateField = (path, value) => {
        setHomeContent((previousContent) => {
            const updatedContent = structuredClone(previousContent);
            const pathParts = path.split('.');
            let cursor = updatedContent;

            for (let index = 0; index < pathParts.length - 1; index += 1) {
                const key = pathParts[index];
                cursor = cursor[key];
            }

            cursor[pathParts[pathParts.length - 1]] = value;
            return updatedContent;
        });
    };

    const handleParagraphChange = (serviceIndex, paragraphIndex, value) => {
        setHomeContent((previousContent) => {
            const updatedContent = structuredClone(previousContent);
            updatedContent.services[serviceIndex].paragraphs[paragraphIndex] = value;
            return updatedContent;
        });
    };

    const handleAboutBenefitChange = (benefitIndex, value) => {
        setHomeContent((previousContent) => {
            const updatedContent = structuredClone(previousContent);
            updatedContent.about.benefits[benefitIndex] = value;
            return updatedContent;
        });
    };

    const handleValueCardChange = (cardIndex, field, value) => {
        setHomeContent((previousContent) => {
            const updatedContent = structuredClone(previousContent);
            updatedContent.valueProposal.cards[cardIndex][field] = value;
            return updatedContent;
        });
    };

    const updateWeAreField = (path, value) => {
        setWeAreContent((previousContent) => {
            const updatedContent = structuredClone(previousContent);
            const pathParts = path.split('.');
            let cursor = updatedContent;

            for (let index = 0; index < pathParts.length - 1; index += 1) {
                const key = pathParts[index];
                cursor = cursor[key];
            }

            cursor[pathParts[pathParts.length - 1]] = value;
            return updatedContent;
        });
    };

    const handleWeAreStatChange = (statIndex, field, value) => {
        setWeAreContent((previousContent) => {
            const updatedContent = structuredClone(previousContent);
            updatedContent.essence.stats[statIndex][field] = value;
            return updatedContent;
        });
    };

    const handleWeArePillarChange = (pillarIndex, field, value) => {
        setWeAreContent((previousContent) => {
            const updatedContent = structuredClone(previousContent);
            updatedContent.pillars.items[pillarIndex][field] = value;
            return updatedContent;
        });
    };

    const updateNestedField = (setState, path, value) => {
        setState((previousContent) => {
            const updatedContent = structuredClone(previousContent);
            const pathParts = path.split('.');
            let cursor = updatedContent;

            for (let index = 0; index < pathParts.length - 1; index += 1) {
                cursor = cursor[pathParts[index]];
            }

            cursor[pathParts[pathParts.length - 1]] = value;
            return updatedContent;
        });
    };

    const prettyLabel = (rawLabel) => {
        return rawLabel
            .replace(/([A-Z])/g, ' $1')
            .replace(/_/g, ' ')
            .trim()
            .replace(/^\w/, (character) => character.toUpperCase());
    };

    const renderDynamicFields = (value, path, onChange) => {
        if (typeof value === 'string') {
            const isLargeText = value.length > 80 || value.includes('.') || value.includes('\n');

            return isLargeText ? (
                <textarea
                    value={value}
                    onChange={(event) => onChange(path, event.target.value)}
                    rows={3}
                    style={{ width: '100%' }}
                />
            ) : (
                <input
                    value={value}
                    onChange={(event) => onChange(path, event.target.value)}
                    style={{ width: '100%' }}
                />
            );
        }

        if (Array.isArray(value)) {
            return (
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                    {value.map((item, index) => {
                        const itemPath = path ? `${path}.${index}` : `${index}`;
                        const baseLabel = path ? path.split('.').slice(-1)[0] : 'item';
                        const itemLabel = `${prettyLabel(baseLabel)} ${index + 1}`;

                        if (typeof item === 'string') {
                            return (
                                <div key={itemPath}>
                                    <label style={{ display: 'block', marginBottom: '0.35rem', fontSize: '0.85rem', color: 'var(--text-secondary-dark)' }}>{itemLabel}</label>
                                    {renderDynamicFields(item, itemPath, onChange)}
                                </div>
                            );
                        }

                        return (
                            <div key={itemPath} style={{ border: '1px solid rgba(2, 100, 160, 0.2)', borderRadius: '10px', padding: '0.75rem' }}>
                                <h4 style={{ marginBottom: '0.5rem' }}>{itemLabel}</h4>
                                {Object.entries(item).map(([childKey, childValue]) => (
                                    <div key={`${itemPath}.${childKey}`} style={{ marginBottom: '0.5rem' }}>
                                        <label style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.85rem', color: 'var(--text-secondary-dark)' }}>{prettyLabel(childKey)}</label>
                                        {renderDynamicFields(childValue, `${itemPath}.${childKey}`, onChange)}
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            );
        }

        if (value && typeof value === 'object') {
            return (
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {Object.entries(value).map(([childKey, childValue]) => (
                        <div key={`${path || 'root'}.${childKey}`}>
                            <h3 style={{ marginBottom: '0.5rem' }}>{prettyLabel(childKey)}</h3>
                            {renderDynamicFields(childValue, path ? `${path}.${childKey}` : childKey, onChange)}
                        </div>
                    ))}
                </div>
            );
        }

        return null;
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        setError('');

        const result = await loginAsAdmin(email, password);
        if (result.ok) {
            setIsAuthenticated(true);
            setPassword('');
            return;
        }

        setError(result.error || 'No fue posible iniciar sesión.');
    };

    const handleSaveHome = async () => {
        setIsSaving(true);
        const result = await saveHomeContent(homeContent);
        setIsSaving(false);

        if (!result.ok) {
            setError(result.error || 'No se pudieron guardar los cambios de Home.');
            return;
        }

        setError('');
        alert('Cambios guardados correctamente.');
    };

    const handleSaveWeAre = async () => {
        setIsSaving(true);
        const result = await saveWeAreContent(weAreContent);
        setIsSaving(false);

        if (!result.ok) {
            setError(result.error || 'No se pudieron guardar los cambios de We are.');
            return;
        }

        setError('');
        alert('Cambios guardados correctamente.');
    };

    const handleSaveSolutions = async () => {
        setIsSaving(true);
        const result = await saveSolutionsContent(solutionsContent);
        setIsSaving(false);

        if (!result.ok) {
            setError(result.error || 'No se pudieron guardar los cambios de Soluciones.');
            return;
        }

        setError('');
        alert('Cambios guardados correctamente.');
    };

    const handleSaveAI = async () => {
        setIsSaving(true);
        const result = await saveAIContent(aiContent);
        setIsSaving(false);

        if (!result.ok) {
            setError(result.error || 'No se pudieron guardar los cambios de IA.');
            return;
        }

        setError('');
        alert('Cambios guardados correctamente.');
    };

    const handleSaveBitrix24 = async () => {
        setIsSaving(true);
        const result = await saveBitrix24Content(bitrixContent);
        setIsSaving(false);

        if (!result.ok) {
            setError(result.error || 'No se pudieron guardar los cambios de Bitrix24.');
            return;
        }

        setError('');
        alert('Cambios guardados correctamente.');
    };

    const handleLogout = async () => {
        await logoutAdmin();
        setIsAuthenticated(false);
        setEmail('');
        setPassword('');
    };

    const handleSaveActiveTab = async () => {
        if (activeTab === 'home') {
            await handleSaveHome();
            return;
        }

        if (activeTab === 'we-are') {
            await handleSaveWeAre();
            return;
        }

        if (activeTab === 'solutions') {
            await handleSaveSolutions();
            return;
        }

        if (activeTab === 'ai') {
            await handleSaveAI();
            return;
        }

        if (activeTab === 'bitrix24') {
            await handleSaveBitrix24();
        }
    };

    const getActiveTabLabel = () => {
        if (activeTab === 'home') return 'Home';
        if (activeTab === 'we-are') return 'We are';
        if (activeTab === 'solutions') return 'Soluciones';
        if (activeTab === 'ai') return 'Inteligencia Artificial';
        if (activeTab === 'bitrix24') return 'Bitrix24';
        return 'Sección';
    };

    const getActivePreview = () => {
        if (activeTab === 'home') {
            return {
                title: homeContent.hero.title,
                hint: homeContent.hero.description
            };
        }

        if (activeTab === 'we-are') {
            return {
                title: weAreContent.hero.title,
                hint: weAreContent.hero.description
            };
        }

        if (activeTab === 'solutions') {
            return {
                title: solutionsContent.hero.titlePrefix,
                hint: solutionsContent.hero.description
            };
        }

        if (activeTab === 'ai') {
            return {
                title: aiContent.hero.title,
                hint: aiContent.hero.description
            };
        }

        if (activeTab === 'bitrix24') {
            return {
                title: bitrixContent.hero.titlePrefix,
                hint: bitrixContent.hero.description
            };
        }

        return {
            title: 'Sección activa',
            hint: ''
        };
    };

    if (isCheckingSession) {
        return (
            <section className="section-dark section-padding" style={{ maxWidth: '560px', margin: '0 auto' }}>
                <p style={{ color: 'var(--text-secondary-dark)' }}>Verificando sesión de administrador...</p>
            </section>
        );
    }

    if (!isAuthenticated) {
        return (
            <section className="section-dark section-padding" style={{ maxWidth: '560px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '1rem' }}>Panel de Edición</h1>
                <form onSubmit={handleLogin} style={{ display: 'grid', gap: '1rem' }}>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Correo"
                        style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '10px',
                            border: '1px solid rgba(2, 100, 160, 0.3)',
                            background: '#fff'
                        }}
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Contraseña"
                        style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '10px',
                            border: '1px solid rgba(2, 100, 160, 0.3)',
                            background: '#fff'
                        }}
                    />
                    {error && <span style={{ color: '#c62828', fontSize: '0.9rem' }}>{error}</span>}
                    <button type="submit" className="btn btn-primary" style={{ width: 'fit-content' }}>
                        Entrar
                    </button>
                </form>
                <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary-dark)' }}>
                    Usa credenciales de acceso con permisos de administrador.
                </p>
            </section>
        );
    }

    const renderHomeEditor = () => (
        <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ background: 'rgba(243, 246, 248, 0.7)', border: '1px solid rgba(2, 100, 160, 0.2)', borderRadius: '14px', padding: '1rem' }}>
                <h2 style={{ marginBottom: '1rem' }}>Hero</h2>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                    <input value={homeContent.hero.badge} onChange={(event) => updateField('hero.badge', event.target.value)} placeholder="Badge" />
                    <textarea value={homeContent.hero.title} onChange={(event) => updateField('hero.title', event.target.value)} rows={2} placeholder="Título" />
                    <textarea value={homeContent.hero.tagline} onChange={(event) => updateField('hero.tagline', event.target.value)} rows={2} placeholder="Tagline" />
                    <textarea value={homeContent.hero.description} onChange={(event) => updateField('hero.description', event.target.value)} rows={3} placeholder="Descripción" />
                    <input value={homeContent.hero.ctaLabel} onChange={(event) => updateField('hero.ctaLabel', event.target.value)} placeholder="Texto botón" />
                </div>
            </div>

            <div style={{ background: 'rgba(243, 246, 248, 0.7)', border: '1px solid rgba(2, 100, 160, 0.2)', borderRadius: '14px', padding: '1rem' }}>
                <h2 style={{ marginBottom: '1rem' }}>Sobre Nosotros</h2>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                    <input value={homeContent.about.badge} onChange={(event) => updateField('about.badge', event.target.value)} placeholder="Badge sección" />
                    <input value={homeContent.about.title} onChange={(event) => updateField('about.title', event.target.value)} placeholder="Título sección" />
                    <textarea value={homeContent.about.paragraph1} onChange={(event) => updateField('about.paragraph1', event.target.value)} rows={2} placeholder="Párrafo 1" />
                    <textarea value={homeContent.about.paragraph2} onChange={(event) => updateField('about.paragraph2', event.target.value)} rows={3} placeholder="Párrafo 2" />

                    <h3 style={{ margin: '0.5rem 0 0 0' }}>Ítems de beneficios</h3>
                    {homeContent.about.benefits.map((benefit, benefitIndex) => (
                        <input
                            key={benefitIndex}
                            value={benefit}
                            onChange={(event) => handleAboutBenefitChange(benefitIndex, event.target.value)}
                            placeholder={`Beneficio ${benefitIndex + 1}`}
                        />
                    ))}
                </div>
            </div>

            <div style={{ background: 'rgba(243, 246, 248, 0.7)', border: '1px solid rgba(2, 100, 160, 0.2)', borderRadius: '14px', padding: '1rem' }}>
                <h2 style={{ marginBottom: '1rem' }}>Propuesta de Valor</h2>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                    <input value={homeContent.valueProposal.badge} onChange={(event) => updateField('valueProposal.badge', event.target.value)} placeholder="Badge" />
                    <textarea value={homeContent.valueProposal.title} onChange={(event) => updateField('valueProposal.title', event.target.value)} rows={2} placeholder="Título principal" />
                    <textarea value={homeContent.valueProposal.description} onChange={(event) => updateField('valueProposal.description', event.target.value)} rows={3} placeholder="Descripción" />
                    <input value={homeContent.valueProposal.differentialTitle} onChange={(event) => updateField('valueProposal.differentialTitle', event.target.value)} placeholder="Título secundario" />

                    <h3 style={{ margin: '0.5rem 0 0 0' }}>Tarjetas</h3>
                    {homeContent.valueProposal.cards.map((card, cardIndex) => (
                        <div key={cardIndex} style={{ border: '1px solid rgba(2, 100, 160, 0.2)', borderRadius: '10px', padding: '0.75rem' }}>
                            <input
                                value={card.title}
                                onChange={(event) => handleValueCardChange(cardIndex, 'title', event.target.value)}
                                placeholder={`Título tarjeta ${cardIndex + 1}`}
                                style={{ width: '100%', marginBottom: '0.5rem' }}
                            />
                            <textarea
                                value={card.desc}
                                onChange={(event) => handleValueCardChange(cardIndex, 'desc', event.target.value)}
                                rows={3}
                                placeholder={`Descripción tarjeta ${cardIndex + 1}`}
                                style={{ width: '100%' }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ background: 'rgba(243, 246, 248, 0.7)', border: '1px solid rgba(2, 100, 160, 0.2)', borderRadius: '14px', padding: '1rem' }}>
                <h2 style={{ marginBottom: '1rem' }}>Sección Disciplinas</h2>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                    <input value={homeContent.servicesSection.title} onChange={(event) => updateField('servicesSection.title', event.target.value)} placeholder="Título sección" />
                    <textarea value={homeContent.servicesSection.summary} onChange={(event) => updateField('servicesSection.summary', event.target.value)} rows={3} placeholder="Resumen" />
                    <input value={homeContent.servicesSection.ctaLabel} onChange={(event) => updateField('servicesSection.ctaLabel', event.target.value)} placeholder="Botón sección" />
                    <input value={homeContent.servicesSection.cardCtaLabel} onChange={(event) => updateField('servicesSection.cardCtaLabel', event.target.value)} placeholder="Botón tarjetas" />
                </div>
            </div>

            <div style={{ background: 'rgba(243, 246, 248, 0.7)', border: '1px solid rgba(2, 100, 160, 0.2)', borderRadius: '14px', padding: '1rem' }}>
                <h2 style={{ marginBottom: '1rem' }}>Servicios</h2>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {homeContent.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} style={{ border: '1px solid rgba(2, 100, 160, 0.2)', borderRadius: '10px', padding: '0.75rem' }}>
                            <input
                                value={service.title}
                                onChange={(event) => updateField(`services.${serviceIndex}.title`, event.target.value)}
                                placeholder={`Título servicio ${serviceIndex + 1}`}
                                style={{ width: '100%', marginBottom: '0.5rem' }}
                            />
                            {service.paragraphs.map((paragraph, paragraphIndex) => (
                                <textarea
                                    key={paragraphIndex}
                                    value={paragraph}
                                    onChange={(event) => handleParagraphChange(serviceIndex, paragraphIndex, event.target.value)}
                                    rows={3}
                                    placeholder={`Párrafo ${paragraphIndex + 1}`}
                                    style={{ width: '100%', marginBottom: paragraphIndex < service.paragraphs.length - 1 ? '0.5rem' : 0 }}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );

    const renderWeAreEditor = () => (
        <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ background: 'rgba(243, 246, 248, 0.7)', border: '1px solid rgba(2, 100, 160, 0.2)', borderRadius: '14px', padding: '1rem' }}>
                <h2 style={{ marginBottom: '1rem' }}>Hero We are</h2>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                    <textarea value={weAreContent.hero.title} onChange={(event) => updateWeAreField('hero.title', event.target.value)} rows={2} placeholder="Título" />
                    <textarea value={weAreContent.hero.description} onChange={(event) => updateWeAreField('hero.description', event.target.value)} rows={3} placeholder="Descripción" />
                    <input value={weAreContent.hero.ctaLabel} onChange={(event) => updateWeAreField('hero.ctaLabel', event.target.value)} placeholder="Texto botón" />
                </div>
            </div>

            <div style={{ background: 'rgba(243, 246, 248, 0.7)', border: '1px solid rgba(2, 100, 160, 0.2)', borderRadius: '14px', padding: '1rem' }}>
                <h2 style={{ marginBottom: '1rem' }}>Nuestra Esencia</h2>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                    <input value={weAreContent.essence.title} onChange={(event) => updateWeAreField('essence.title', event.target.value)} placeholder="Título" />
                    <textarea value={weAreContent.essence.paragraph} onChange={(event) => updateWeAreField('essence.paragraph', event.target.value)} rows={3} placeholder="Párrafo" />
                    <textarea value={weAreContent.essence.quote} onChange={(event) => updateWeAreField('essence.quote', event.target.value)} rows={3} placeholder="Texto destacado" />
                    <h3 style={{ margin: '0.5rem 0 0 0' }}>Métricas</h3>
                    {weAreContent.essence.stats.map((stat, statIndex) => (
                        <div key={statIndex} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '0.5rem' }}>
                            <input
                                value={stat.num}
                                onChange={(event) => handleWeAreStatChange(statIndex, 'num', event.target.value)}
                                placeholder="Número"
                            />
                            <input
                                value={stat.label}
                                onChange={(event) => handleWeAreStatChange(statIndex, 'label', event.target.value)}
                                placeholder="Etiqueta"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ background: 'rgba(243, 246, 248, 0.7)', border: '1px solid rgba(2, 100, 160, 0.2)', borderRadius: '14px', padding: '1rem' }}>
                <h2 style={{ marginBottom: '1rem' }}>Pilares</h2>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                    <input value={weAreContent.pillars.title} onChange={(event) => updateWeAreField('pillars.title', event.target.value)} placeholder="Título sección" />
                    <textarea value={weAreContent.pillars.subtitle} onChange={(event) => updateWeAreField('pillars.subtitle', event.target.value)} rows={2} placeholder="Subtítulo" />
                    {weAreContent.pillars.items.map((item, itemIndex) => (
                        <div key={itemIndex} style={{ border: '1px solid rgba(2, 100, 160, 0.2)', borderRadius: '10px', padding: '0.75rem' }}>
                            <input
                                value={item.title}
                                onChange={(event) => handleWeArePillarChange(itemIndex, 'title', event.target.value)}
                                placeholder={`Título pilar ${itemIndex + 1}`}
                                style={{ width: '100%', marginBottom: '0.5rem' }}
                            />
                            <textarea
                                value={item.desc}
                                onChange={(event) => handleWeArePillarChange(itemIndex, 'desc', event.target.value)}
                                rows={3}
                                placeholder={`Descripción pilar ${itemIndex + 1}`}
                                style={{ width: '100%' }}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );

    const renderSectionEditor = (title, description, content, onChangeField) => (
        <div style={{ display: 'grid', gap: '1rem' }}>
            <div style={{ background: 'rgba(243, 246, 248, 0.7)', border: '1px solid rgba(2, 100, 160, 0.2)', borderRadius: '14px', padding: '1rem' }}>
                <h2 style={{ marginBottom: '0.5rem' }}>{title}</h2>
                <p style={{ marginBottom: '0.75rem', color: 'var(--text-secondary-dark)' }}>{description}</p>
                {renderDynamicFields(content, '', onChangeField)}
            </div>
        </div>
    );

    return (
        <section className="section-dark section-padding" style={{ maxWidth: '1300px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                    <h1 style={{ marginBottom: '0.5rem' }}>Panel General de Contenidos</h1>
                </div>
                <button onClick={handleLogout} className="btn btn-secondary">Cerrar sesión</button>
            </div>
            {error && (
                <p style={{ marginBottom: '1rem', color: '#c62828' }}>{error}</p>
            )}
            {isLoadingContent ? (
                <p style={{ color: 'var(--text-secondary-dark)' }}>Cargando contenido...</p>
            ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '1.5rem', alignItems: 'start' }}>
                <aside style={{
                    background: 'rgba(243, 246, 248, 0.7)',
                    border: '1px solid rgba(2, 100, 160, 0.2)',
                    borderRadius: '14px',
                    padding: '1rem',
                    position: 'sticky',
                    top: '100px'
                }}>
                    <p style={{ margin: '0 0 0.75rem 0', color: 'var(--text-secondary-dark)', fontSize: '0.9rem' }}>Secciones</p>
                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                        <button
                            onClick={() => setActiveTab('home')}
                            style={{
                                padding: '0.65rem 0.75rem',
                                textAlign: 'left',
                                borderRadius: '10px',
                                border: activeTab === 'home' ? '1px solid #0264A0' : '1px solid rgba(2, 100, 160, 0.2)',
                                background: activeTab === 'home' ? 'rgba(2, 100, 160, 0.1)' : '#fff',
                                color: 'var(--text-primary-dark)',
                                cursor: 'pointer',
                                fontWeight: 600
                            }}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => setActiveTab('we-are')}
                            style={{
                                padding: '0.65rem 0.75rem',
                                textAlign: 'left',
                                borderRadius: '10px',
                                border: activeTab === 'we-are' ? '1px solid #0264A0' : '1px solid rgba(2, 100, 160, 0.2)',
                                background: activeTab === 'we-are' ? 'rgba(2, 100, 160, 0.1)' : '#fff',
                                color: 'var(--text-primary-dark)',
                                cursor: 'pointer',
                                fontWeight: 600
                            }}
                        >
                            We are
                        </button>
                        <button
                            onClick={() => setActiveTab('solutions')}
                            style={{
                                padding: '0.65rem 0.75rem',
                                textAlign: 'left',
                                borderRadius: '10px',
                                border: activeTab === 'solutions' ? '1px solid #0264A0' : '1px solid rgba(2, 100, 160, 0.2)',
                                background: activeTab === 'solutions' ? 'rgba(2, 100, 160, 0.1)' : '#fff',
                                color: 'var(--text-primary-dark)',
                                cursor: 'pointer',
                                fontWeight: 600
                            }}
                        >
                            Soluciones
                        </button>
                        <button
                            onClick={() => setActiveTab('ai')}
                            style={{
                                padding: '0.65rem 0.75rem',
                                textAlign: 'left',
                                borderRadius: '10px',
                                border: activeTab === 'ai' ? '1px solid #0264A0' : '1px solid rgba(2, 100, 160, 0.2)',
                                background: activeTab === 'ai' ? 'rgba(2, 100, 160, 0.1)' : '#fff',
                                color: 'var(--text-primary-dark)',
                                cursor: 'pointer',
                                fontWeight: 600
                            }}
                        >
                            Inteligencia Artificial
                        </button>
                        <button
                            onClick={() => setActiveTab('bitrix24')}
                            style={{
                                padding: '0.65rem 0.75rem',
                                textAlign: 'left',
                                borderRadius: '10px',
                                border: activeTab === 'bitrix24' ? '1px solid #0264A0' : '1px solid rgba(2, 100, 160, 0.2)',
                                background: activeTab === 'bitrix24' ? 'rgba(2, 100, 160, 0.1)' : '#fff',
                                color: 'var(--text-primary-dark)',
                                cursor: 'pointer',
                                fontWeight: 600
                            }}
                        >
                            Bitrix24
                        </button>
                    </div>

                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(2, 100, 160, 0.15)' }}>
                        <button
                            onClick={handleSaveActiveTab}
                            className="btn btn-primary"
                            disabled={isSaving}
                            style={{ width: '100%', justifyContent: 'center' }}
                        >
                            {isSaving ? 'Guardando...' : 'Guardar'}
                        </button>
                    </div>
                </aside>

                <div>
                    <div style={{
                        background: 'rgba(243, 246, 248, 0.7)',
                        border: '1px solid rgba(2, 100, 160, 0.2)',
                        borderRadius: '14px',
                        padding: '0.85rem 1rem',
                        marginBottom: '1rem'
                    }}>
                        <p style={{ margin: '0 0 0.35rem 0', fontSize: '0.8rem', color: '#0264A0', fontWeight: 700, letterSpacing: '0.04em' }}>
                            Editando ahora: {getActiveTabLabel()}
                        </p>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-primary-dark)', fontWeight: 600 }}>
                            {getActivePreview().title}
                        </p>
                        <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: 'var(--text-secondary-dark)' }}>
                            {getActivePreview().hint}
                        </p>
                    </div>
                    {activeTab === 'home' && renderHomeEditor()}
                    {activeTab === 'we-are' && renderWeAreEditor()}
                    {activeTab === 'solutions' && renderSectionEditor(
                        'Soluciones',
                        'Edición por campos para la página Soluciones.',
                        solutionsContent,
                        (path, value) => updateNestedField(setSolutionsContent, path, value)
                    )}
                    {activeTab === 'ai' && renderSectionEditor(
                        'Inteligencia Artificial',
                        'Edición por campos para la página IA.',
                        aiContent,
                        (path, value) => updateNestedField(setAIContent, path, value)
                    )}
                    {activeTab === 'bitrix24' && renderSectionEditor(
                        'Bitrix24',
                        'Edición por campos para la página Bitrix24.',
                        bitrixContent,
                        (path, value) => updateNestedField(setBitrixContent, path, value)
                    )}
                </div>
            </div>
            )}
        </section>
    );
};

export default AdminHome;
