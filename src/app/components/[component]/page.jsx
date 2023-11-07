import { Cross2Icon, HamburgerMenuIcon, HomeIcon } from '@radix-ui/react-icons';

import { ComponentsNav } from '@/components';
import * as ComponentsDemo from '@/components-demo';
import { Button, Link, Separator, Sheet, Text } from '@/components/ui';
import { capitalize, cn, normalizeCompName } from '@/utils';
import { HomeView } from '@/views';

const ComponentsPage = ({ params: { component } }) => {
  const Component = ComponentsDemo[normalizeCompName(component) + 'Demo'],
    isComponent = !!Component;

  return isComponent ? (
    <>
      <header className='fixed left-8 top-6 z-50 flex items-center gap-6'>
        <ComponentsSheet />

        <Button
          asChild
          className='group relative aspect-square px-0'
          variants={{ color: 'inverted', style: 'outline' }}
        >
          <Link
            className='hover:no-underline'
            href='/'
          >
            <HeaderButtonBackground />

            <HomeIcon className='h-5 w-5' />
          </Link>
        </Button>
      </header>

      <main className='mx-auto flex min-h-screen w-full max-w-bounds flex-col items-center gap-24 py-24'>
        <Text.Title
          asChild
          className='text-center text-5xl'
        >
          <h1>{capitalize(component.replace(/[-_]/, ' '))}</h1>
        </Text.Title>

        <Component />
      </main>
    </>
  ) : (
    <HomeView />
  );
};

const HeaderButtonBackground = ({ className, ...props }) => {
  return (
    <>
      <span
        className={cn(
          'absolute inset-0 -z-10 w-auto rounded-inherit bg-inverted-content',
          className,
        )}
        {...props}
      />

      <span
        className={cn(
          'absolute inset-0 -z-10 w-auto rounded-inherit bg-main opacity-0 transition-opacity group-hover:opacity-20',
          className,
        )}
        {...props}
      />
    </>
  );
};

const ComponentsSheet = (props) => {
  return (
    <Sheet {...props}>
      <Sheet.Trigger asChild>
        <Button
          className='group relative aspect-square px-0'
          variants={{ style: 'outline', color: 'inverted' }}
        >
          <HeaderButtonBackground />

          <HamburgerMenuIcon
            aria-hidden
            className='h-5 w-5'
          />

          <Text className='sr-only'>Toggle menu</Text>
        </Button>
      </Sheet.Trigger>

      <Sheet.Portal>
        <Sheet.Overlay />

        <Sheet.Content
          className='[&::-webkit-scrollbar]:w-1.5'
          variants={{ side: 'left' }}
        >
          <Sheet.Header>
            <Sheet.Title>Components demonstration</Sheet.Title>

            <Sheet.Description>
              A easy way to navigate between component demonstrations.
            </Sheet.Description>
          </Sheet.Header>

          <Separator />

          <ComponentsNav />

          <Sheet.Close className='!mt-0'>
            <Cross2Icon />
          </Sheet.Close>
        </Sheet.Content>
      </Sheet.Portal>
    </Sheet>
  );
};

export default ComponentsPage;
