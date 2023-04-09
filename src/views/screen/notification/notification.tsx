import React from 'react';

import { NotificationLayout } from './notification.styles';

export const NotificationComponent = () => {
  // //@ts-ignore
  // window.bridge.accessRequest((event: any, listener: any) => {
  //   console.log('listener : ', listener);
  //   //@ts-ignore

  //   notification.push(listener);

  //   setNotification(() => [...notification]);
  // });

  return <NotificationLayout>Notify...</NotificationLayout>;
};
