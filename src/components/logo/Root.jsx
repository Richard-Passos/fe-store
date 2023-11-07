import { Text } from '@/components/ui';

const Logo = (props) => {
  return (
    <Text
      asChild
      className='font-semibold'
      href='/'
      {...props}
    >
      <span>Logo</span>
    </Text>
  );
};

export default Logo;
