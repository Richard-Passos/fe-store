import { Icon } from '@/components/atoms';
import { cn } from '@/utils';

const Rating = ({ className, value, icon, ...props }) => {
  return (
    <ul
      className={cn('flex rounded-sm bg-primary/5 px-2 py-1', className)}
      {...props}
    >
      {[...Array(Math.ceil(value ?? 0))].map((_, i) => (
        <div
          className='aspect-square grow basis-0 text-primary'
          key={i}
        >
          <Icon {...icon} />
        </div>
      ))}
    </ul>
  );
};

export default Rating;
