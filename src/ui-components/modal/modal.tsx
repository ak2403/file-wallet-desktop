import React from 'react';

import { ModalContentLayout, ModalHeaderLayout, ModalLayout, ModalMainLayout } from './modal.styles';
import { ModalHeader } from './modal-header';

type ModalProps = {
  show: boolean;
  header: string;
  children: React.ReactNode;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = (props) => {
  const { show, header, children, onClose } = props;

  if (!show) {
    return null;
  }

  return (
    <ModalLayout>
      <ModalMainLayout>
        <ModalHeaderLayout>
          <ModalHeader header={header} onClose={onClose} />
        </ModalHeaderLayout>

        <ModalContentLayout>{children}</ModalContentLayout>
      </ModalMainLayout>
    </ModalLayout>
  );
};
