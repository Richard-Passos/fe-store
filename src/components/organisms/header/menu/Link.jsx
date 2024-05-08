import { Link } from '@/components/atoms';
import { cn } from '@/utils';

const HeaderMenuLink = ({ isActive, className, ...props }) => {
  return (
    <Link
      className={cn(
        'relative flex h-10 w-full justify-start rounded-sm px-6 no-underline transition-none hover:bg-active',
        isActive &&
          'before:absolute before:left-3 before:h-1/3 before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-primary',
        className
      )}
      {...props}
    />
  );
};

export default HeaderMenuLink;
