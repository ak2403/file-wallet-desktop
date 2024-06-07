import { IoMdSettings } from 'react-icons/io';
import { IoMdLogOut } from 'react-icons/io';

import { IconBox } from '../../ui/icon';

export const CommonOptions = () => {
  return (
    <>
      <IconBox icon={<IoMdSettings />} />
      <IconBox icon={<IoMdLogOut />} />
    </>
  );
};
