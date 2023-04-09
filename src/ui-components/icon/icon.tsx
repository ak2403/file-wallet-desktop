import React from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { IconLayout, StyledFontAwesomeIcon } from './icon.styles';

type IconProps = {
  icon: IconProp;
  onClick: () => void;
};

export const Icon: React.FC<IconProps> = (props) => {
  const { icon, onClick } = props;

  return (
    <IconLayout>
      <StyledFontAwesomeIcon icon={icon} onClick={onClick} />
    </IconLayout>
  );
};
