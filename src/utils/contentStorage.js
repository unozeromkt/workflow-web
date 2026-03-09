import {
    aiContentDefaults,
    bitrix24ContentDefaults,
    homeContentDefaults,
    solutionsContentDefaults,
    weAreContentDefaults
} from '../content/homeContentDefaults';
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';

export const CONTENT_SECTIONS = {
    HOME: 'home',
    WE_ARE: 'we_are',
    SOLUTIONS: 'solutions',
    AI: 'ai',
    BITRIX24: 'bitrix24'
};

const contentCache = {
    home: homeContentDefaults,
    weAre: weAreContentDefaults,
    solutions: solutionsContentDefaults,
    ai: aiContentDefaults,
    bitrix24: bitrix24ContentDefaults
};

const toErrorMessage = (error, fallbackMessage) => {
    if (!error) {
        return fallbackMessage;
    }

    if (typeof error === 'string') {
        return error;
    }

    return error.message || fallbackMessage;
};

const notifyContentUpdated = (page) => {
    window.dispatchEvent(new CustomEvent('site-content-updated', { detail: { page } }));
};

const readSectionData = async (section, fallbackData) => {
    if (!isSupabaseConfigured || !supabase) {
        return { data: fallbackData, error: 'Supabase no está configurado.' };
    }

    const { data, error } = await supabase
        .from('site_content')
        .select('data')
        .eq('section', section)
        .maybeSingle();

    if (error) {
        return { data: fallbackData, error: toErrorMessage(error, 'No se pudo leer contenido en Supabase.') };
    }

    return { data: data?.data || fallbackData, error: null };
};

const writeSectionData = async (section, sectionData) => {
    if (!isSupabaseConfigured || !supabase) {
        return 'Supabase no está configurado.';
    }

    const { error } = await supabase
        .from('site_content')
        .upsert(
            {
                section,
                data: sectionData,
                updated_at: new Date().toISOString()
            },
            { onConflict: 'section' }
        );

    if (error) {
        return toErrorMessage(error, 'No se pudo guardar contenido en Supabase.');
    }

    return null;
};

export const getWeAreContent = () => {
    return mergeWeAreContentWithDefaults(contentCache.weAre);
};

export const getSolutionsContent = () => {
    return mergeSolutionsContentWithDefaults(contentCache.solutions);
};

export const getAIContent = () => {
    return mergeAIContentWithDefaults(contentCache.ai);
};

export const getBitrix24Content = () => {
    return mergeBitrix24ContentWithDefaults(contentCache.bitrix24);
};

export const mergeHomeContentWithDefaults = (homeContent = {}) => {
    const hero = {
        ...homeContentDefaults.hero,
        ...(homeContent.hero || {})
    };

    const about = {
        ...homeContentDefaults.about,
        ...(homeContent.about || {}),
        benefits: Array.isArray(homeContent.about?.benefits) && homeContent.about.benefits.length > 0
            ? homeContent.about.benefits
            : homeContentDefaults.about.benefits
    };

    const valueProposal = {
        ...homeContentDefaults.valueProposal,
        ...(homeContent.valueProposal || {}),
        cards: homeContentDefaults.valueProposal.cards.map((defaultCard, index) => {
            const incomingCard = homeContent.valueProposal?.cards?.[index] || {};
            return {
                ...defaultCard,
                ...incomingCard
            };
        })
    };

    const servicesSection = {
        ...homeContentDefaults.servicesSection,
        ...(homeContent.servicesSection || {})
    };

    const services = homeContentDefaults.services.map((defaultService, index) => {
        const incomingService = homeContent.services?.[index] || {};

        return {
            ...defaultService,
            ...incomingService,
            paragraphs: Array.isArray(incomingService.paragraphs) && incomingService.paragraphs.length > 0
                ? incomingService.paragraphs
                : defaultService.paragraphs
        };
    });

    return {
        hero,
        about,
        valueProposal,
        servicesSection,
        services
    };
};

export const mergeWeAreContentWithDefaults = (weAreContent = {}) => {
    const hero = {
        ...weAreContentDefaults.hero,
        ...(weAreContent.hero || {})
    };

    const essence = {
        ...weAreContentDefaults.essence,
        ...(weAreContent.essence || {}),
        stats: weAreContentDefaults.essence.stats.map((defaultItem, index) => ({
            ...defaultItem,
            ...(weAreContent.essence?.stats?.[index] || {})
        }))
    };

    const pillars = {
        ...weAreContentDefaults.pillars,
        ...(weAreContent.pillars || {}),
        items: weAreContentDefaults.pillars.items.map((defaultItem, index) => ({
            ...defaultItem,
            ...(weAreContent.pillars?.items?.[index] || {})
        }))
    };

    return {
        hero,
        essence,
        pillars
    };
};

export const mergeSolutionsContentWithDefaults = (solutionsContent = {}) => {
    const hero = {
        ...solutionsContentDefaults.hero,
        ...(solutionsContent.hero || {}),
        chips: solutionsContentDefaults.hero.chips.map((chip, index) => solutionsContent.hero?.chips?.[index] || chip),
        stats: solutionsContentDefaults.hero.stats.map((stat, index) => ({
            ...stat,
            ...(solutionsContent.hero?.stats?.[index] || {})
        }))
    };

    const architecture = {
        ...solutionsContentDefaults.architecture,
        ...(solutionsContent.architecture || {}),
        cards: solutionsContentDefaults.architecture.cards.map((card, index) => {
            const incomingCard = solutionsContent.architecture?.cards?.[index] || {};
            return {
                ...card,
                ...incomingCard,
                highlights: card.highlights.map((highlight, highlightIndex) => incomingCard.highlights?.[highlightIndex] || highlight)
            };
        })
    };

    const cta = {
        ...solutionsContentDefaults.cta,
        ...(solutionsContent.cta || {}),
        bullets: solutionsContentDefaults.cta.bullets.map((bullet, index) => solutionsContent.cta?.bullets?.[index] || bullet)
    };

    return {
        hero,
        architecture,
        cta
    };
};

export const mergeAIContentWithDefaults = (aiContent = {}) => {
    const hero = {
        ...aiContentDefaults.hero,
        ...(aiContent.hero || {}),
        chips: aiContentDefaults.hero.chips.map((chip, index) => aiContent.hero?.chips?.[index] || chip)
    };

    const aibot = {
        ...aiContentDefaults.aibot,
        ...(aiContent.aibot || {}),
        features: aiContentDefaults.aibot.features.map((feature, index) => aiContent.aibot?.features?.[index] || feature)
    };

    const implementations = {
        ...aiContentDefaults.implementations,
        ...(aiContent.implementations || {}),
        items: aiContentDefaults.implementations.items.map((item, index) => ({
            ...item,
            ...(aiContent.implementations?.items?.[index] || {})
        }))
    };

    const possibilities = {
        ...aiContentDefaults.possibilities,
        ...(aiContent.possibilities || {}),
        cards: aiContentDefaults.possibilities.cards.map((item, index) => ({
            ...item,
            ...(aiContent.possibilities?.cards?.[index] || {})
        }))
    };

    const methodology = {
        ...aiContentDefaults.methodology,
        ...(aiContent.methodology || {}),
        steps: aiContentDefaults.methodology.steps.map((step, index) => ({
            ...step,
            ...(aiContent.methodology?.steps?.[index] || {})
        }))
    };

    const finalCta = {
        ...aiContentDefaults.finalCta,
        ...(aiContent.finalCta || {})
    };

    return {
        hero,
        aibot,
        implementations,
        possibilities,
        methodology,
        finalCta
    };
};

export const mergeBitrix24ContentWithDefaults = (bitrix24Content = {}) => {
    const hero = {
        ...bitrix24ContentDefaults.hero,
        ...(bitrix24Content.hero || {})
    };

    const cards = bitrix24ContentDefaults.cards.map((card, index) => {
        const incomingCard = bitrix24Content.cards?.[index] || {};
        return {
            ...card,
            ...incomingCard,
            items: card.items ? card.items.map((item, itemIndex) => incomingCard.items?.[itemIndex] || item) : undefined,
            iconItems: card.iconItems ? card.iconItems.map((item, itemIndex) => incomingCard.iconItems?.[itemIndex] || item) : undefined
        };
    });

    const methodology = {
        ...bitrix24ContentDefaults.methodology,
        ...(bitrix24Content.methodology || {}),
        steps: bitrix24ContentDefaults.methodology.steps.map((step, index) => ({
            ...step,
            ...(bitrix24Content.methodology?.steps?.[index] || {})
        }))
    };

    const finalCta = {
        ...bitrix24ContentDefaults.finalCta,
        ...(bitrix24Content.finalCta || {}),
        bullets: bitrix24ContentDefaults.finalCta.bullets.map((bullet, index) => bitrix24Content.finalCta?.bullets?.[index] || bullet)
    };

    return {
        hero,
        cards,
        methodology,
        finalCta
    };
};

export const getHomeContent = () => {
    return mergeHomeContentWithDefaults(contentCache.home);
};

export const fetchHomeContent = async () => {
    const { data, error } = await readSectionData(CONTENT_SECTIONS.HOME, homeContentDefaults);
    const mergedContent = mergeHomeContentWithDefaults(data);
    contentCache.home = mergedContent;
    return { data: mergedContent, error };
};

export const saveHomeContent = async (homeContent) => {
    const mergedContent = mergeHomeContentWithDefaults(homeContent);
    const error = await writeSectionData(CONTENT_SECTIONS.HOME, mergedContent);

    if (!error) {
        contentCache.home = mergedContent;
        notifyContentUpdated('home');
    }

    return { ok: !error, error };
};

export const resetHomeContent = async () => {
    const error = await writeSectionData(CONTENT_SECTIONS.HOME, homeContentDefaults);

    if (!error) {
        contentCache.home = homeContentDefaults;
        notifyContentUpdated('home');
    }

    return { data: mergeHomeContentWithDefaults(contentCache.home), ok: !error, error };
};

export const fetchWeAreContent = async () => {
    const { data, error } = await readSectionData(CONTENT_SECTIONS.WE_ARE, weAreContentDefaults);
    const mergedContent = mergeWeAreContentWithDefaults(data);
    contentCache.weAre = mergedContent;
    return { data: mergedContent, error };
};

export const saveWeAreContent = async (weAreContent) => {
    const mergedContent = mergeWeAreContentWithDefaults(weAreContent);
    const error = await writeSectionData(CONTENT_SECTIONS.WE_ARE, mergedContent);

    if (!error) {
        contentCache.weAre = mergedContent;
        notifyContentUpdated('weAre');
    }

    return { ok: !error, error };
};

export const resetWeAreContent = async () => {
    const error = await writeSectionData(CONTENT_SECTIONS.WE_ARE, weAreContentDefaults);

    if (!error) {
        contentCache.weAre = weAreContentDefaults;
        notifyContentUpdated('weAre');
    }

    return { data: mergeWeAreContentWithDefaults(contentCache.weAre), ok: !error, error };
};

export const fetchSolutionsContent = async () => {
    const { data, error } = await readSectionData(CONTENT_SECTIONS.SOLUTIONS, solutionsContentDefaults);
    const mergedContent = mergeSolutionsContentWithDefaults(data);
    contentCache.solutions = mergedContent;
    return { data: mergedContent, error };
};

export const saveSolutionsContent = async (solutionsContent) => {
    const mergedContent = mergeSolutionsContentWithDefaults(solutionsContent);
    const error = await writeSectionData(CONTENT_SECTIONS.SOLUTIONS, mergedContent);

    if (!error) {
        contentCache.solutions = mergedContent;
        notifyContentUpdated('solutions');
    }

    return { ok: !error, error };
};

export const resetSolutionsContent = async () => {
    const error = await writeSectionData(CONTENT_SECTIONS.SOLUTIONS, solutionsContentDefaults);

    if (!error) {
        contentCache.solutions = solutionsContentDefaults;
        notifyContentUpdated('solutions');
    }

    return { data: mergeSolutionsContentWithDefaults(contentCache.solutions), ok: !error, error };
};

export const fetchAIContent = async () => {
    const { data, error } = await readSectionData(CONTENT_SECTIONS.AI, aiContentDefaults);
    const mergedContent = mergeAIContentWithDefaults(data);
    contentCache.ai = mergedContent;
    return { data: mergedContent, error };
};

export const saveAIContent = async (aiContent) => {
    const mergedContent = mergeAIContentWithDefaults(aiContent);
    const error = await writeSectionData(CONTENT_SECTIONS.AI, mergedContent);

    if (!error) {
        contentCache.ai = mergedContent;
        notifyContentUpdated('ai');
    }

    return { ok: !error, error };
};

export const resetAIContent = async () => {
    const error = await writeSectionData(CONTENT_SECTIONS.AI, aiContentDefaults);

    if (!error) {
        contentCache.ai = aiContentDefaults;
        notifyContentUpdated('ai');
    }

    return { data: mergeAIContentWithDefaults(contentCache.ai), ok: !error, error };
};

export const fetchBitrix24Content = async () => {
    const { data, error } = await readSectionData(CONTENT_SECTIONS.BITRIX24, bitrix24ContentDefaults);
    const mergedContent = mergeBitrix24ContentWithDefaults(data);
    contentCache.bitrix24 = mergedContent;
    return { data: mergedContent, error };
};

export const saveBitrix24Content = async (bitrix24Content) => {
    const mergedContent = mergeBitrix24ContentWithDefaults(bitrix24Content);
    const error = await writeSectionData(CONTENT_SECTIONS.BITRIX24, mergedContent);

    if (!error) {
        contentCache.bitrix24 = mergedContent;
        notifyContentUpdated('bitrix24');
    }

    return { ok: !error, error };
};

export const resetBitrix24Content = async () => {
    const error = await writeSectionData(CONTENT_SECTIONS.BITRIX24, bitrix24ContentDefaults);

    if (!error) {
        contentCache.bitrix24 = bitrix24ContentDefaults;
        notifyContentUpdated('bitrix24');
    }

    return { data: mergeBitrix24ContentWithDefaults(contentCache.bitrix24), ok: !error, error };
};
