import React from 'react';
import { v4 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFolder, faHouse } from '@fortawesome/free-solid-svg-icons';

import { BreadCrumbLayout, Path } from './bread-crumb.styles';

type BreadCrumbType = {
  path: any[];
  onClick: (data?: any) => void;
};

export const BreadCrumb: React.FC<BreadCrumbType> = (props) => {
  const { path, onClick } = props;

  return (
    <BreadCrumbLayout>
      <FontAwesomeIcon cursor={'pointer'} icon={faHouse} fontSize={'18px'} onClick={() => onClick()} />

      {path.map(({ id, name }) => (
        <Path data-testid={`crumb-${name}`} key={uuid()} onClick={() => onClick({ id, name })}>
          <FontAwesomeIcon icon={faFolder} color="#1d1c1d" fontSize={'18px'} />
          <span>{name}</span>
        </Path>
      ))}
    </BreadCrumbLayout>
  );
};
