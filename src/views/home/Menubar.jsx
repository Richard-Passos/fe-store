import { Check, ChevronRight, Circle } from 'lucide-react';

import { Menubar } from '@/components/ui';

const HomeMenubar = (props) => {
  return (
    <Menubar {...props}>
      <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>

        <Menubar.Portal>
          <Menubar.Content>
            <Menubar.Item>
              New Tab <Menubar.Shortcut>⌘T</Menubar.Shortcut>
            </Menubar.Item>

            <Menubar.Item>
              New Window <Menubar.Shortcut>⌘N</Menubar.Shortcut>
            </Menubar.Item>

            <Menubar.Item disabled>New Incognito Window</Menubar.Item>

            <Menubar.Separator />

            <Menubar.Sub>
              <Menubar.Sub.Trigger>
                Share <ChevronRight className='ml-auto' />
              </Menubar.Sub.Trigger>

              <Menubar.Sub.Content>
                <Menubar.Item>Email link</Menubar.Item>

                <Menubar.Item>Messages</Menubar.Item>

                <Menubar.Item>Notes</Menubar.Item>
              </Menubar.Sub.Content>
            </Menubar.Sub>

            <Menubar.Separator />

            <Menubar.Item>
              Print... <Menubar.Shortcut>⌘P</Menubar.Shortcut>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger>Edit</Menubar.Trigger>

        <Menubar.Portal>
          <Menubar.Content>
            <Menubar.Item>
              Undo <Menubar.Shortcut>⌘Z</Menubar.Shortcut>
            </Menubar.Item>

            <Menubar.Item>
              Redo <Menubar.Shortcut>⇧⌘Z</Menubar.Shortcut>
            </Menubar.Item>

            <Menubar.Separator />

            <Menubar.Sub>
              <Menubar.Sub.Trigger>
                Find <ChevronRight className='ml-auto' />
              </Menubar.Sub.Trigger>

              <Menubar.Sub.Content>
                <Menubar.Item>Search the web</Menubar.Item>

                <Menubar.Separator />

                <Menubar.Item>Find...</Menubar.Item>

                <Menubar.Item>Find Next</Menubar.Item>

                <Menubar.Item>Find Previous</Menubar.Item>
              </Menubar.Sub.Content>
            </Menubar.Sub>

            <Menubar.Separator />

            <Menubar.Item>Cut</Menubar.Item>

            <Menubar.Item>Copy</Menubar.Item>

            <Menubar.Item>Paste</Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>View</Menubar.Trigger>

        <Menubar.Portal>
          <Menubar.Content>
            <Menubar.CheckboxItem>
              <Menubar.ItemIndicator>
                <Check />
              </Menubar.ItemIndicator>
              Always Show Bookmarks Bar
            </Menubar.CheckboxItem>

            <Menubar.CheckboxItem checked>
              <Menubar.ItemIndicator>
                <Check />
              </Menubar.ItemIndicator>
              Always Show Full URLs
            </Menubar.CheckboxItem>

            <Menubar.Separator />

            <Menubar.Item inset>
              Reload <Menubar.Shortcut>⌘R</Menubar.Shortcut>
            </Menubar.Item>

            <Menubar.Item
              disabled
              inset
            >
              Force Reload <Menubar.Shortcut>⇧⌘R</Menubar.Shortcut>
            </Menubar.Item>

            <Menubar.Separator />

            <Menubar.Item inset>Toggle Fullscreen</Menubar.Item>

            <Menubar.Separator />

            <Menubar.Item inset>Hide Sidebar</Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger>Profiles</Menubar.Trigger>

        <Menubar.Portal>
          <Menubar.Content>
            <Menubar.RadioGroup value='benoit'>
              <Menubar.RadioItem value='andy'>
                <Menubar.ItemIndicator className='w-2'>
                  <Circle className='fill-current' />
                </Menubar.ItemIndicator>
                Andy
              </Menubar.RadioItem>

              <Menubar.RadioItem value='benoit'>
                <Menubar.ItemIndicator className='w-2'>
                  <Circle className='fill-current' />
                </Menubar.ItemIndicator>
                Benoit
              </Menubar.RadioItem>

              <Menubar.RadioItem value='Luis'>
                <Menubar.ItemIndicator className='w-2'>
                  <Circle className='fill-current' />
                </Menubar.ItemIndicator>
                Luis
              </Menubar.RadioItem>
            </Menubar.RadioGroup>

            <Menubar.Separator />

            <Menubar.Item inset>Edit...</Menubar.Item>

            <Menubar.Separator />

            <Menubar.Item inset>Add Profile...</Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar>
  );
};

export default HomeMenubar;
