import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const MoleculeAlertDialogHeader = ({ asChild, className, ...props }) => {
  const Tag = asChild ? Slot : 'header';

  return (
    <Tag
      className={cn(
        'flex flex-col gap-xs max-sm:items-center max-sm:text-center',
        className
      )}
      {...props}
    />
  );
};

export default MoleculeAlertDialogHeader;
