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
            alt=''
            className='rounded-md object-cover'
            fill
          />
        </AspectRatio>
      </div>
    </main>
  );
};

export default DialogView;
