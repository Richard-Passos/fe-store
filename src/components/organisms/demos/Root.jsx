import { Badge } from '@/components/atoms';
import { CardRoot } from '@/components/molecules/card';
import { capitalize, cn, renderComp } from '@/utils';

const Demos = ({ variants, className, children, ...props }) => {
  variants = Object.entries(variants ?? {});

  return (
    <CardRoot
      className={cn(
        'w-[calc(theme(maxWidth.md)+theme(spacing.sm)*2)] max-w-full grow-0 basis-auto items-center',
        className
      )}
      {...props}
    >
      {renderComp(
        <ul className='mb-md flex flex-wrap justify-center gap-2.5'>
          {variants.map(([key, value]) =>
            renderComp(
              <Badge
                asChild
                className='bg-primary/10'
                color='main'
                key={key}
              >
                <li>
                  {capitalize(key[0] + key.slice(1).replace(/([A-Z])/g, ' $1'))}
                  :&nbsp;
                  <span className='text-primary'>
                    {value?.join?.(', ') || value?.toString?.()}
                  </span>
                </li>
              </Badge>,
              [key, value?.length || value === true || value === false]
            )
          )}
        </ul>,
        [variants.length]
      )}

      {children}
    </CardRoot>
  );
};

export default Demos;
