import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to detect when an element enters the viewport
 * @param {Object} options - IntersectionObserver options
 * @returns {Array} [ref, isVisible] - Reference to attach to element and visibility state
 */
export const useScrollReveal = (options = {}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                // Once visible, stop observing (animation only happens once)
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            }
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px',
            ...options
        });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return [ref, isVisible];
};
