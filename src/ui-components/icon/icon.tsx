import React from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { IconLayout, StyledFontAwesomeIcon } from './icon.styles';

type IconProps = {
  bgColor?: string;
  disabled?: boolean;
  icon: IconProp;
  onClick: () => void;
  opacity?: number;
  color?: string;
};

export const Icon: React.FC<IconProps> = (props) => {
  const { icon, onClick, opacity, bgColor, disabled, color } = props;

  return (
    <IconLayout bgColor={bgColor} opacity={opacity} disabled={disabled} onClick={onClick}>
      <StyledFontAwesomeIcon color={color} icon={icon} />
    </IconLayout>
  );
};
