import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const AlertIcon = ({ className, ...props }) => {
  return (
    <Slot
      className={cn('absolute left-4 top-4 h-5 w-5 [&~*]:pl-8', className)}
      {...props}
    />
  );
};

export default AlertIcon;
