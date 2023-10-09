import { Link, Svg } from '@/components/ui';

const Root = (props) => {
  return (
    <Link
      href='/'
      {...props}
    >
      <Svg.Logo />
    </Link>
  );
};

export default Root;
