import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const TextTitle = ({ asChild, className, ...props }) => {
  const Tag = asChild ? Slot : 'h2';

  return (
    <Tag
      className={cn('text-xl font-bold text-content', className)}
      {...props}
    />
  );
};

export default TextTitle;
