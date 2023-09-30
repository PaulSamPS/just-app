import { MotionProps } from 'framer-motion';

export const animateOverlay = {
    open: {
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1,
            delayChildren: 0.2,
            staggerChildren: 0.05,
        },
    },
    closed: {
        opacity: 0,
        transition: {
            delay: 0.3,
        }
    },
};

export const animatePopupContent = {
    variants: {
        closed: {
            x: -100,
            opacity: 0,
        },
        open: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 18,
                stiffness: 150
            }
        },
    },
} satisfies MotionProps;

export const animateCloseButton = {
    variants: {
        closed: { x: 100,
            opacity: 0,
        },
        open: { x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 18,
                stiffness: 200
            }
        },
    },
} satisfies MotionProps;
