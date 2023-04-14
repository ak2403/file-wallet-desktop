import React from 'react';
import { v4 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFolder, faHouse } from '@fortawesome/free-solid-svg-icons';

import { BreadCrumbLayout, Path } from './bread-crumb.styles';

type BreadCrumbType = {
  path: any[];
  onClick: (data: any) => void;
};

export const BreadCrumb: React.FC<BreadCrumbType> = (props) => {
  const { path, onClick } = props;

  return (
    <BreadCrumbLayout>
      <FontAwesomeIcon icon={faHouse} fontSize={'12px'} onClick={() => onClick({ name: 'home' })} />

      {path.map(({ id, name }) => (
        <Path key={uuid()} onClick={() => onClick({ id, name })}>
          <FontAwesomeIcon icon={faFolder} color="#1d1c1d" fontSize={'12px'} />
          {name}
        </Path>
      ))}
    </BreadCrumbLayout>
  );
};
