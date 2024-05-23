import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn, normGridTemplates } from '@/utils';

const MoleculeBentoGrid = (
  { asChild, className, templates, style, ...props },
  ref
) => {
  const Tag = asChild ? Slot : 'ul';

  return (
    <Tag
      className={cn(
        'grid size-full grid-cols-[repeat(auto-fit,minmax(0px,1fr))] gap-sm [--template:--default-template] [grid-template-areas:--template] sm:[--template:--sm-template] md:[--template:--md-template] lg:[--template:--lg-template] xl:[--template:--xl-template] 2xl:[--template:--2xl-template]',
        className
      )}
      ref={ref}
      style={{
        '--default-template': '',
        '--sm-template': 'var(--default-template)',
        '--md-template': 'var(--sm-template)',
        '--lg-template': 'var(--md-template)',
        '--xl-template': 'var(--lg-template)',
        '--2xl-template': 'var(--xl-template)',
        ...normGridTemplates(templates),
        ...style
      }}
      {...props}
    />
  );
};

export default forwardRef(MoleculeBentoGrid);
