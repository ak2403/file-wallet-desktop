import React from 'react';
import { v4 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHouse } from '@fortawesome/free-solid-svg-icons';

import { BreadCrumbLayout, Path } from './bread-crumb.styles';

type BreadCrumbType = {
  path: string[];
  onClick: (path: string) => void;
};

export const BreadCrumb: React.FC<BreadCrumbType> = (props) => {
  const { path, onClick } = props;

  return (
    <BreadCrumbLayout>
      <FontAwesomeIcon icon={faHouse} fontSize={'12px'} onClick={() => onClick('home')} />
      {path.map((flow) => (
        <Path key={uuid()} onClick={() => onClick(flow)}>
          {flow}
        </Path>
      ))}
    </BreadCrumbLayout>
  );
};
