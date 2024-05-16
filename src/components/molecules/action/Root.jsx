import { Button, Link } from '@/components/atoms';

const Action = ({ href, children, ...props }) => {
  const isLink = !!href;

  return (
    <Button
      asChild={isLink}
      {...props}
    >
      {isLink ? (
        <Link
          className='before:hidden'
          href={href}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </Button>
  );
};

export default Action;
