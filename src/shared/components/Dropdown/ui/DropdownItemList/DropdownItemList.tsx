import React from 'react';
import { useLocation } from 'react-router-dom';
import type { DropDownItemList } from '../../model/types/dropDownItem';
import { animate } from '../../model/constants/animate';
import { DropdownItem } from '../DropdownItem/DropdownItem';

export const DropdownItemList = ({ items, onNavigate }: DropDownItemList) => {
    const { pathname } = useLocation();

    return (
        <>
            {items.map((i) => (
                <DropdownItem
                    key={i.path}
                    {...animate}
                    aria-disabled={i.path === pathname && i.path !== '/'}
                    onClick={() => (onNavigate ? onNavigate(i.path, i.label) : undefined)}
                >
                    {i.icon}
                    {i.label}
                </DropdownItem>
            ))}
        </>
    );
};
