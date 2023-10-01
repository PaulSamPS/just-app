export const animateContainer = {
    open: {
        opacity: 1,
        transition: {
            type: 'tween',
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
