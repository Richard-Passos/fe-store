import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const BentoGridItem = ({ asChild, className, idx, style, ...props }) => {
  const Tag = asChild ? Slot : 'li';

  return (
    <Tag
      className={cn('size-full', className)}
      style={{
        gridArea: `item-${idx}`,
        ...style
      }}
      {...props}
    />
  );
};

export default BentoGridItem;
