import { MotionProps } from 'framer-motion';

export const animateContent = {
    variants: {
        open: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                damping: 18,
                stiffness: 150
            }
        },
        closed: {
            x: -100,
            opacity: 0,
        },
    },
} satisfies MotionProps;

