import * as Ariakit from '@ariakit/react';
import { forwardRef } from 'react';
import { AnimatePresence, MotionConfig, motion, Variants } from 'framer-motion';
import clsx from 'clsx';
import styles from './Dropdown.module.scss';
import { DropdownProps } from '../../model/types/dropDownItem';

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
export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((
    {
        open,
        setOpen,
        label,
        children,
        icon,
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
                {icon && icon}
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
