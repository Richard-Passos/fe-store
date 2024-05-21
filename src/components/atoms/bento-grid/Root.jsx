import { forwardRef } from 'react';

import { cn, normGridTemplates } from '@/utils';

const BentoGridRoot = ({ className, templates, style, ...props }, ref) => {
  return (
    <ul
      className={cn(
        'grid grid-cols-[repeat(auto-fit,minmax(0px,1fr))] [--template:--default-template] [grid-template-areas:--template] sm:[--template:--sm-template] md:[--template:--md-template] lg:[--template:--lg-template] xl:[--template:--xl-template] 2xl:[--template:--2xl-template]',
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

export default forwardRef(BentoGridRoot);
