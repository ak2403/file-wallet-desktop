import React from 'react';
import { TailSpin } from 'react-loader-spinner';

import { LoadingViewLayout } from './loading-view.styles';
import { Colors } from '../../../config/colors';

export const LoadingView: React.FC = () => {
  return (
    <LoadingViewLayout data-testid="loading-view">
      <TailSpin color={Colors.appBg} ariaLabel="tail-spin-loading" radius="2" visible={true} />
    </LoadingViewLayout>
  );
};
