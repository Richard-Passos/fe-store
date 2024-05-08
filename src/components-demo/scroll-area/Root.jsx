import { Separator, Text } from '@/components/atoms';
import { ScrollArea } from '@/components/molecules';
import { cn } from '@/utils';

const ScrollAreaDemo = ({ className, ...props }) => {
  return (
    <div
      className={cn('flex flex-col items-center gap-12', className)}
      {...props}
    >
      <ScrollArea.Root
        className={cn('h-72 w-48 rounded-md border', className)}
        {...props}
      >
        <ScrollArea.Viewport className='p-4'>
          <Text.Subtitle className='mb-4 text-sm leading-none'>
            Vertical Tags
          </Text.Subtitle>

          {tags.map((tag) => (
            <>
              <div
                className='text-sm'
                key={tag}
              >
                {tag}
              </div>

              <Separator className='my-2' />
            </>
          ))}
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar.Root orientation='vertical'>
          <ScrollArea.Scrollbar.Thumb />
        </ScrollArea.Scrollbar.Root>
      </ScrollArea.Root>

      <ScrollArea.Root
        className={cn('w-72 rounded-md border', className)}
        {...props}
      >
        <ScrollArea.Viewport className='p-4'>
          <Text.Subtitle className='mb-4 text-sm leading-none'>
            Horizontal Tags
          </Text.Subtitle>

          <div className='flex h-5'>
            {tags.map((tag) => (
              <>
                <div
                  className='w-max text-sm'
                  key={tag}
                >
                  {tag}
                </div>

                <Separator
                  className='mx-2'
                  orientation='vertical'
                />
              </>
            ))}
          </div>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar.Root orientation='horizontal'>
          <ScrollArea.Scrollbar.Thumb />
        </ScrollArea.Scrollbar.Root>
      </ScrollArea.Root>

      <ScrollArea.Root
        className={cn('h-72 w-48 rounded-md border', className)}
        {...props}
      >
        <ScrollArea.Viewport className='p-4'>
          <Text.Subtitle className='mb-4 text-sm leading-none'>
            Both Tags
          </Text.Subtitle>

          <div className='w-[158.4px]'>
            {tags.map((tag) => (
              <>
                <div
                  className='text-sm'
                  key={tag}
                >
                  {tag}
                </div>

                <Separator className='my-2' />
              </>
            ))}
          </div>

          <Text.Subtitle className='my-4 text-sm leading-none'>
            Both Tags
          </Text.Subtitle>

          <div className='flex h-5'>
            {tags.map((tag) => (
              <>
                <div
                  className='w-max text-sm'
                  key={tag}
                >
                  {tag}
                </div>

                <Separator
                  className='mx-2'
                  orientation='vertical'
                />
              </>
            ))}
          </div>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar.Root orientation='vertical'>
          <ScrollArea.Scrollbar.Thumb />
        </ScrollArea.Scrollbar.Root>

        <ScrollArea.Scrollbar.Root orientation='horizontal'>
          <ScrollArea.Scrollbar.Thumb />
        </ScrollArea.Scrollbar.Root>

        <ScrollArea.Corner />
      </ScrollArea.Root>
    </div>
  );
};

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

export default ScrollAreaDemo;
