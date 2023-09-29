import { MotionProps } from 'framer-motion';

export const animatePopup = {
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
                stiffness: 200
            }
        },
    },
} satisfies MotionProps;
