import { cn } from '@/utils';

const Skeleton = ({ className, ...props }) => {
  return (
    <div
      aria-label='Skeleton'
      className={cn('animate-pulse rounded-md bg-active', className)}
      {...props}
    />
  );
};

export default Skeleton;
