import React from 'react';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { NavItemIcon, NavItemLabel, NavItemLayout } from './nav-item.styles';

type NavItemType = {
  icon: IconDefinition;
  label: string;
  onClick: () => void;
};

export const NavItem: React.FC<NavItemType> = (props) => {
  const { icon, label, onClick } = props;

  return (
    <NavItemLayout onClick={onClick}>
      <NavItemIcon icon={icon} />
      <NavItemLabel>{label}</NavItemLabel>
    </NavItemLayout>
  );
};
