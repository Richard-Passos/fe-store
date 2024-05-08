import { BellIcon } from '@radix-ui/react-icons';

import { Button, Switch, Text } from '@/components/atoms';
import { Card } from '@/components/molecules';
import { cn } from '@/utils';

const CardDemoNotfications = ({ className, ...props }) => {
  return (
    <Card.Root
      className={cn('w-full max-w-sm', className)}
      {...props}
    >
      <Card.Header>
        <Card.Title>Notifications</Card.Title>

        <Card.Description>You have 3 unread messages.</Card.Description>
      </Card.Header>

      <Card.Content>
        <section className='flex items-center gap-4 rounded-sm border p-4'>
          <BellIcon className='h-6 w-6' />

          <div className='flex-1 space-y-1'>
            <Text.Subtitle className='text-sm'>
              Push Notifications
            </Text.Subtitle>

            <Text.Root className='text-sm text-content/75'>
              Send notifications to device.
            </Text.Root>
          </div>

          <Switch.Root>
            <Switch.Thumb />
          </Switch.Root>
        </section>

        <ul className='space-y-6'>
          {notifications.map(({ title, description }) => (
            <li
              className='flex gap-4 px-4'
              key={title + description}
            >
              <span className='h-2 w-2 translate-y-1/2 rounded-full bg-primary' />

              <section className='space-y-1'>
                <Text.Subtitle className='text-sm'>{title}</Text.Subtitle>

                <Text.Root className='text-sm text-content/75'>
                  {description}
                </Text.Root>
              </section>
            </li>
          ))}
        </ul>
      </Card.Content>

      <Card.Actions>
        <Button className='w-full'>Mark all as read</Button>
      </Card.Actions>
    </Card.Root>
  );
};

const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago'
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago'
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago'
  }
];

export default CardDemoNotfications;
