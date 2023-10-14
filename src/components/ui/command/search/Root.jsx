import { cn } from '@/utils';

const CommandSearch = ({ className, ...props }) => {
  return (
    <div
      aria-label='Search input'
      className={cn('relative flex items-center border-b px-3')}
      {...props}
    />
  );
};

export default CommandSearch;
