import { Badge } from '@/components/atoms';
import { CardRoot } from '@/components/molecules/card';
import { capitalize, cn, renderComp } from '@/utils';

const Demos = ({ variants, className, children, ...props }) => {
  variants = Object.entries(variants ?? {});

  return (
    <CardRoot
      className={cn('items-center', className)}
      {...props}
    >
      <ul className='mb-sm flex flex-wrap justify-center gap-2.5'>
        {variants.map(([key, value]) =>
          renderComp(
            <Badge
              asChild
              color='muted'
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
      </ul>

      {children}
    </CardRoot>
  );
};

export default Demos;
