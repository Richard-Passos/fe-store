'use client';

import { ChevronDown, LogOut } from 'lucide-react';
import { forwardRef } from 'react';

import { Link, NavigationMenu } from '@/components/ui';
import { triggerVariants } from '@/components/ui/navigation-menu/Trigger';
import { cn } from '@/utils';

import HomeMenubar from './Menubar';

const components = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

const Home = () => {
  return (
    <main className='mt-48 flex w-full flex-col items-center gap-48'>
      <NavigationMenu>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>
              Getting started
              <ChevronDown
                aria-hidden
                className='relative top-[1px] w-3.5 transition-transform group-data-open:-rotate-180'
              />
            </NavigationMenu.Trigger>

            <NavigationMenu.Content>
              <ul className='grid list-none gap-x-3 gap-y-1.5 p-6 sm:w-[500px] sm:grid-cols-[0.75fr_1fr]'>
                <li className='row-span-3 grid'>
                  <Link
                    href='/'
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenu.Link className='flex h-full w-full flex-col justify-end rounded-sm bg-gradient-to-b from-primary/50 to-primary p-6 no-underline'>
                      <LogOut className='h-6 w-6' />

                      <div className='mb-2 mt-4 text-lg font-medium'>
                        shadcn/ui
                      </div>

                      <p className='text-sm leading-tight text-muted-content'>
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </NavigationMenu.Link>
                  </Link>
                </li>

                <ListItem
                  href='/docs'
                  title='Introduction'
                >
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>

                <ListItem
                  href='/docs/installation'
                  title='Installation'
                >
                  How to install dependencies and structure your app.
                </ListItem>

                <ListItem
                  href='/docs/primitives/typography'
                  title='Typography'
                >
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger>
              Components
              <ChevronDown
                aria-hidden
                className='relative top-[1px] w-3.5 transition-transform group-data-open:-rotate-180'
              />
            </NavigationMenu.Trigger>

            <NavigationMenu.Content>
              <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                {components.map((component) => (
                  <ListItem
                    href={component.href}
                    key={component.title}
                    title={component.title}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <Link
              href='/docs'
              legacyBehavior
              passHref
            >
              <NavigationMenu.Link className={triggerVariants()}>
                Documentation
              </NavigationMenu.Link>
            </Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>

        <NavigationMenu.Viewport />
      </NavigationMenu>

      <HomeMenubar />
    </main>
  );
};

const ListItem = forwardRef(function Item(
  { className, title, children, href, ...props },
  ref,
) {
  return (
    <li>
      <Link
        href={href}
        legacyBehavior
        passHref
      >
        <NavigationMenu.Link
          className={cn(
            'block space-y-1.5 rounded-sm p-3 leading-none no-underline transition-colors hover:bg-muted',
            className,
          )}
          ref={ref}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>

          <p className='line-clamp-2 text-sm leading-snug text-muted-content'>
            {children}
          </p>
        </NavigationMenu.Link>
      </Link>
    </li>
  );
});

export default Home;
