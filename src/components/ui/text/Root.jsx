import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const Text = ({ asChild, className, ...props }) => {
  const Tag = asChild ? Slot : 'p';

  return (
    <Tag
      className={cn('text-content', className)}
      {...props}
    />
  );
};

export default Text;
