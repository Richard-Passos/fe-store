import { Notifications } from '@mantine/notifications';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const MoleculesNotifications = ({ className, ...props }, ref) => {
  return (
    <Notifications
      className={cn(
        '[--mantine-radius-default:theme(borderRadius.md)]',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MoleculesNotifications);
