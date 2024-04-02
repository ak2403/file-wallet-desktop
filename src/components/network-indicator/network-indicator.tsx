import { useEffect, useState } from 'react';
import { NetworkIssueBanner } from './network-issue-banner';
import { get } from '../../utils/api/get';

const NetworkIndicator = () => {
  const [isNetworkConnected, setIsNetworkConnected] = useState<boolean>(true);

  useEffect(() => {
    const checkNetworkStatus = setInterval(async () => {
      const isNetworkOnline = await get('https://www.google.com/');

      if (isNetworkOnline?.success) {
        setIsNetworkConnected(true);
        return;
      }

      setIsNetworkConnected(false);
    }, 50000);

    return () => clearInterval(checkNetworkStatus);
  }, []);

  if (isNetworkConnected) {
    return;
  }

  return <NetworkIssueBanner />;
};

export { NetworkIndicator };
