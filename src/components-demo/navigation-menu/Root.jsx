'use client';

import { ChevronDownIcon } from '@radix-ui/react-icons';

import { Logo } from '@/components';
import { NavigationMenu, Text } from '@/components/ui';
import { navigationMenuTriggerVariants } from '@/components/ui/navigation-menu/Trigger';
import { cn } from '@/utils';

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>

          <NavigationMenu.Content>
            <ul className='grid gap-x-3 gap-y-1.5 p-6 sm:w-[500px] sm:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3 grid'>
                <NavigationMenu.Link
                  className='flex h-full w-full flex-col justify-end gap-2 rounded-sm bg-gradient-to-b from-primary/50 to-primary p-6 no-underline'
                  href='/'
                >
                  <Logo />

                  <Text.Subtitle className='mt-2'>fe template</Text.Subtitle>

                  <Text className='text-sm leading-tight text-muted-content'>
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS.
                  </Text>
                </NavigationMenu.Link>
              </li>

              <ListItem
                href='#'
                title='Introduction'
              >
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>

              <ListItem
                href='#'
                title='Installation'
              >
                How to install dependencies and structure your app.
              </ListItem>

              <ListItem
                href='#'
                title='Typography'
              >
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>

          <NavigationMenu.Content>
            <ul className='grid w-full gap-3 p-4 sm:w-[500px] sm:grid-cols-2 lg:w-[600px] '>
              {components.map(({ description, ...props }) => (
                <ListItem
                  key={props.href}
                  {...props}
                >
                  {description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={navigationMenuTriggerVariants()}
            href='#'
          >
            Documentation
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <NavigationMenu.Viewport />
    </NavigationMenu>
  );
};

const components = [
  {
    title: 'Alert Dialog',
    href: '/components/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/components/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/components/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/components/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/components/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/components/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

const NavigationMenuTrigger = ({ children, ...props }) => {
  return (
    <NavigationMenu.Trigger {...props}>
      {children}

      <ChevronDownIcon
        aria-hidden
        className='h-3.5 w-3.5 transition-transform duration-300 group-data-open:rotate-180'
      />
    </NavigationMenu.Trigger>
  );
};

const ListItem = ({ className, title, children, ...props }) => {
  return (
    <li>
      <NavigationMenu.Link
        className={cn(
          'flex flex-col gap-2 rounded-sm p-3 no-underline transition-colors hover:bg-muted',
          className,
        )}
        {...props}
      >
        <Text.Subtitle className='text-sm leading-none'>{title}</Text.Subtitle>

        <Text className='line-clamp-2 text-sm leading-snug text-muted-content'>
          {children}
        </Text>
      </NavigationMenu.Link>
    </li>
  );
};

export default NavigationMenuDemo;
