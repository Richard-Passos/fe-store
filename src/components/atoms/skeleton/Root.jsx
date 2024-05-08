import { cn } from '@/utils';

const Skeleton = ({ className, ...props }) => {
  return (
    <div
      aria-label='Skeleton'
      className={cn('bg-content/75/25 animate-pulse rounded-md', className)}
      {...props}
    />
  );
};

export default Skeleton;
