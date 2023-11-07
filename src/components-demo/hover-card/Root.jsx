import { CalendarIcon } from '@radix-ui/react-icons';

import { Avatar, Button, HoverCard, Text } from '@/components/ui';

const HoverCardDemo = (props) => {
  return (
    <HoverCard {...props}>
      <HoverCard.Trigger asChild>
        <Button variants={{ style: 'link' }}>@nextjs</Button>
      </HoverCard.Trigger>

      <HoverCard.Content>
        <Avatar>
          <Avatar.Image
            alt='A road winding through a forest near the ocean.'
            height={902}
            priority
            src='/images/demo.png'
            width={600}
          />

          <Avatar.Fallback>RF</Avatar.Fallback>
        </Avatar>

        <section className='space-y-1 text-sm'>
          <Text.Subtitle className='text-sm'>@nextjs</Text.Subtitle>

          <Text>The React Framework – created and maintained by @vercel.</Text>

          <div className='flex items-center gap-2 pt-2 text-muted-content'>
            <CalendarIcon className='h-4 w-4' />

            <Text>Joined December 2021</Text>
          </div>
        </section>
      </HoverCard.Content>
    </HoverCard>
  );
};

export default HoverCardDemo;
