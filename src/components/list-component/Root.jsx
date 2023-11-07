import { cn } from '@/utils';

const ListComponent = ({ className, ...props }) => {
  return (
    <ul
      className={cn('flex w-full flex-wrap justify-center gap-12', className)}
      {...props}
    />
  );
};

export default ListComponent;
