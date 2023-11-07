import { ComponentsNav } from '@/components';
import { Text } from '@/components/ui';
import { cn } from '@/utils';

const HomeView = ({ className, ...props }) => {
  return (
    <main
      className={cn(
        'flex min-h-screen w-full max-w-bounds flex-col items-center gap-2 py-24',
        className,
      )}
      {...props}
    >
      <Text.Title className='text-center'>Components demonstration</Text.Title>

      <Text className='mb-6 text-center'>
        A easy way to navigate between component demonstrations.
      </Text>

      <ComponentsNav className='grid max-w-screen-lg grid-cols-1 gap-x-5 gap-y-1.5 rounded-md border p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' />
    </main>
  );
};

export default HomeView;
