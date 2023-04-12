import React from 'react';

import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../icon';

import { ModalHeaderLayout, ModalHeaderText } from './modal-header.styles';

type ModalHeaderProps = {
  header: string;
  onClose: () => void;
};

export const ModalHeader: React.FC<ModalHeaderProps> = (props) => {
  const { header, onClose } = props;

  return (
    <ModalHeaderLayout>
      <ModalHeaderText>{header}</ModalHeaderText>

      <Icon bgColor="none" color="#000" icon={faClose} onClick={onClose} />
    </ModalHeaderLayout>
  );
};
