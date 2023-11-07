import { Skeleton } from '@/components/ui';
import { cn } from '@/utils';

const SkeletonDemo = ({ className, ...props }) => {
  return (
    <section
      className={cn('flex items-center space-x-4', className)}
      {...props}
    >
      <Skeleton className='h-12 w-12 rounded-full' />

      <div className='space-y-2'>
        <Skeleton className='h-4 w-[250px]' />
        <Skeleton className='h-4 w-[200px]' />
      </div>
    </section>
  );
};

export default SkeletonDemo;
