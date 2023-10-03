import * as Ariakit from '@ariakit/react';
import { ComponentPropsWithoutRef, FC, forwardRef, ReactNode, SVGProps } from 'react';
import { AnimatePresence, MotionConfig, motion, Variants } from 'framer-motion';
import clsx from 'clsx';
import styles from './Dropdown.module.scss';

export interface MenuProps extends ComponentPropsWithoutRef<'div'> {
    open?: boolean;
    setOpen?: (open: boolean) => void;
    label: ReactNode;
    disabled?: boolean;
    Icon?: FC<SVGProps<SVGSVGElement>>
}

export const animate = {
    closed: {
        scale: 0,
        transition: {
            delay: 0.15,
        },
    },
    open: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.4,
            delayChildren: 0.2,
            staggerChildren: 0.05,
        },
    },
} satisfies Variants;
export const Dropdown = forwardRef<HTMLDivElement, MenuProps>((
    {
        open,
        setOpen,
        label,
        children,
        Icon,
        className,
        ...props
    },
    ref,
) => {
    const menu = Ariakit.useMenuStore({ open, setOpen });
    const currentPlacement = menu.useState('currentPlacement');
    const mounted = menu.useState('mounted');

    return (
        <MotionConfig reducedMotion='user'>
            <Ariakit.MenuButton store={menu} ref={ref} className={clsx(styles.button, className)} {...props}>
                {Icon && <Icon />}
                {label}
            </Ariakit.MenuButton>
            <AnimatePresence>
                {mounted && (
                    <Ariakit.Menu
                        store={menu}
                        alwaysVisible
                        className={styles.menu}
                        data-placement={currentPlacement}
                        render={(
                            <motion.div
                                animate={open ? 'open' : 'closed'}
                                initial='closed'
                                exit='closed'
                                variants={animate}
                            />
                        )}
                    >
                        <Ariakit.MenuArrow className={styles['menu-arrow']} />
                        {children}
                    </Ariakit.Menu>
                )}
            </AnimatePresence>
        </MotionConfig>
    );
});
