import { Text } from '@/components/ui';
import { cn } from '@/utils';

const Logo = ({ className, ...props }) => {
  return (
    <Text
      asChild
      className={cn('font-semibold uppercase', className)}
      href='/'
      {...props}
    >
      <span>Logo</span>
    </Text>
  );
};

export default Logo;
