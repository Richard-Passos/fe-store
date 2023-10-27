import { Avatar } from '@/components/ui';
import { cn } from '@/utils';

const DialogView = ({ className, ...props }) => {
  return (
    <main
      className={cn(
        'flex min-h-screen w-full max-w-bounds items-center justify-center',
        className,
      )}
      {...props}
    >
      <Avatar>
        <Avatar.Image
          alt='A road winding through a forest near the ocean.'
          height={902}
          src='/images/demo.png'
          width={600}
        />

        <Avatar.Fallback>RF</Avatar.Fallback>
      </Avatar>
    </main>
  );
};

export default DialogView;
