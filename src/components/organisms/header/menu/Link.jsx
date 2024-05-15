import { Link } from '@/components/atoms';
import { cn } from '@/utils';

const HeaderMenuLink = ({ isActive, className, ...props }) => {
  return (
    <Link
      className={cn(
        'relative flex h-10 w-full items-center justify-start rounded-sm px-6 text-content text-opacity-75 transition-none before:hidden hover:bg-active hover:text-opacity-100',
        isActive &&
          'after:absolute after:left-3 after:h-1/3 after:w-0.5 after:-translate-x-1/2 after:rounded-full after:bg-primary',
        className
      )}
      {...props}
    />
  );
};

export default HeaderMenuLink;
