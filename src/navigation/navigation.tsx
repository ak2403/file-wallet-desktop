import { RouterProvider } from 'react-router-dom';

import { router } from './browser-router';

import { Wrapper } from './navigation.styles';

export const Navigation: React.FC = () => {
  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  );
};
