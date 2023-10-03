import React from 'react';
import { useLocation } from 'react-router-dom';
import type { DropDownItemType } from '../../model/types/dropDownItem';
import { animate } from '../../model/constants/animate';
import { DropdownItem } from '@/shared/components/Dropdown/ui/DropdownItem/DropdownItem';

export const DropdownItemList = ({ label, Icon, path, onNavigate }: DropDownItemType) => {
    const { pathname } = useLocation();

    return (
        <DropdownItem
            key={path}
            {...animate}
            aria-disabled={path === pathname && path !== '/'}
            onClick={() => (onNavigate ? onNavigate(path, label) : undefined)}
        >
            <Icon style={{ width: '24px', height: '24px', marginRight: '8px' }} />
            {label}
        </DropdownItem>
    );
};
