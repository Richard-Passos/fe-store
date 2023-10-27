import { AspectRatio, Image } from '@/components/ui';
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
      <div className='w-full max-w-lg'>
        <AspectRatio ratio={16 / 9}>
          <Image
            alt='A road winding through a forest near the ocean.'
            className='rounded-md object-cover'
            fill
            priority
            quality={100}
            src='/images/demo.png'
          />
        </AspectRatio>
      </div>
    </main>
  );
};

export default DialogView;
