import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const CommandSearchIcon = ({ className, ...props }) => {
  return (
    <Slot
      className={cn(
        'text-content/750 pointer-events-none absolute left-[.9375rem] h-[1.125rem] w-[1.125rem]',
        className
      )}
      {...props}
    />
  );
};

export default CommandSearchIcon;
