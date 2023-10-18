import { CalendarDays } from 'lucide-react';

import { Avatar, Button, HoverCard, Text } from '@/components/ui';

const Home = () => {
  return (
    <main className='mt-24 flex min-h-screen w-full justify-center'>
      <HoverCard>
        <HoverCard.Trigger asChild>
          <Button variant='link'>@nextjs</Button>
        </HoverCard.Trigger>

        <HoverCard.Content>
          <div className='flex justify-between space-x-4'>
            <Avatar>
              <Avatar.Image />

              <Avatar.Fallback className='bg-main'>PH</Avatar.Fallback>
            </Avatar>

            <div className='space-y-1'>
              <h4 className='text-sm font-semibold'>@nextjs</h4>

              <Text className='text-sm'>
                The React Framework – created and maintained by @vercel.
              </Text>

              <div className='flex items-center pt-2'>
                <CalendarDays className='mr-2 h-4 w-4 opacity-70' />{' '}
                <span className='text-muted-foreground text-xs'>
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard>
    </main>
  );
};

export default Home;
