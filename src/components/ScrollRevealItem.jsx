import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * Wrapper component that adds scroll reveal animation to its children
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {number} props.delay - Optional delay in seconds for staggered effect
 */
const ScrollRevealItem = ({ children, delay = 0 }) => {
    const [ref, isVisible] = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`reveal-item ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
};

export default ScrollRevealItem;
