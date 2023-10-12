import { Check, ChevronRight, Circle } from 'lucide-react';

import { Button, DropdownMenu } from '@/components/ui';
import { cn } from '@/utils';

const Home = ({ className, ...props }) => {
  return (
    <main
      className={cn('mt-24 flex w-full justify-center', className)}
      {...props}
    >
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button aria-label='Customise options'>Open</Button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content>
            <DropdownMenu.Group>
              <DropdownMenu.Item>
                New Tab <DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
              </DropdownMenu.Item>

              <DropdownMenu.Item>
                New Window <DropdownMenu.Shortcut>⌘+N</DropdownMenu.Shortcut>
              </DropdownMenu.Item>

              <DropdownMenu.Item disabled>
                New Private Window{' '}
                <DropdownMenu.Shortcut>⇧+⌘+N</DropdownMenu.Shortcut>
              </DropdownMenu.Item>

              <DropdownMenu.Sub>
                <DropdownMenu.Sub.Trigger>
                  More Tools <ChevronRight />
                </DropdownMenu.Sub.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Sub.Content
                    alignOffset={-5}
                    sideOffset={8}
                  >
                    <DropdownMenu.Item>
                      Save Page As…{' '}
                      <DropdownMenu.Shortcut>⌘+S</DropdownMenu.Shortcut>
                    </DropdownMenu.Item>

                    <DropdownMenu.Item>Create Shortcut…</DropdownMenu.Item>

                    <DropdownMenu.Item>Name Window…</DropdownMenu.Item>

                    <DropdownMenu.Separator />

                    <DropdownMenu.Item>Developer Tools</DropdownMenu.Item>
                  </DropdownMenu.Sub.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Sub>
            </DropdownMenu.Group>

            <DropdownMenu.Separator />

            <DropdownMenu.Group>
              <DropdownMenu.CheckboxItem checked>
                <DropdownMenu.ItemIndicator>
                  <Check />
                </DropdownMenu.ItemIndicator>
                Show Bookmarks{' '}
                <DropdownMenu.Shortcut>⌘+B</DropdownMenu.Shortcut>
              </DropdownMenu.CheckboxItem>

              <DropdownMenu.CheckboxItem>
                <DropdownMenu.ItemIndicator>
                  <Check />
                </DropdownMenu.ItemIndicator>
                Show Full URLs
              </DropdownMenu.CheckboxItem>
            </DropdownMenu.Group>

            <DropdownMenu.Separator />

            <DropdownMenu.Group>
              <DropdownMenu.Label>People</DropdownMenu.Label>

              <DropdownMenu.RadioGroup value='pedro'>
                <DropdownMenu.RadioItem value='pedro'>
                  <DropdownMenu.ItemIndicator>
                    <Circle className='scale-50 fill-current' />
                  </DropdownMenu.ItemIndicator>
                  Pedro Duarte
                </DropdownMenu.RadioItem>

                <DropdownMenu.RadioItem value='colm'>
                  <DropdownMenu.ItemIndicator>
                    <Circle className='scale-50 fill-current' />
                  </DropdownMenu.ItemIndicator>
                  Colm Tuite
                </DropdownMenu.RadioItem>
              </DropdownMenu.RadioGroup>
            </DropdownMenu.Group>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu>
    </main>
  );
};

export default Home;
