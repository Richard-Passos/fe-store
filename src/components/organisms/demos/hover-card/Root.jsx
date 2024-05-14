import { CalendarIcon } from '@radix-ui/react-icons';

import { Button, Text } from '@/components/atoms';
import { Avatar, HoverCard } from '@/components/molecules';

const HoverCardDemo = (props) => {
  return (
    <HoverCard.Root {...props}>
      <HoverCard.Trigger asChild>
        <Button variants={{ variant: 'link' }}>@nextjs</Button>
      </HoverCard.Trigger>

      <HoverCard.Content>
        <Avatar.Root>
          <Avatar.Image
            alt='A road winding through a forest near the ocean.'
            height={902}
            priority
            src='/images/demo.png'
            width={600}
          />

          <Avatar.Fallback>RF</Avatar.Fallback>
        </Avatar.Root>

        <section className='space-y-1 text-sm'>
          <Text.Subtitle className='text-sm'>@nextjs</Text.Subtitle>

          <Text.Root>
            The React Framework – created and maintained by @vercel.
          </Text.Root>

          <div className='flex items-center gap-2 pt-2 text-content/75'>
            <CalendarIcon className='h-4 w-4' />

            <Text.Root>Joined December 2021</Text.Root>
          </div>
        </section>
      </HoverCard.Content>
    </HoverCard.Root>
  );
};

export default HoverCardDemo;
