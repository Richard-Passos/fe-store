import { cn } from '@/utils';

const SheetHeader = ({ className, ...props }) => {
  return (
    <header
      className={cn('flex flex-col', className)}
      {...props}
    />
  );
};
export default SheetHeader;
