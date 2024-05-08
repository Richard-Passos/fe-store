import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from '@radix-ui/react-icons';

import { Menubar } from '@/components/molecules';

const MenubarDemo = ({ className, ...props }) => {
  return (
    <Menubar.Root {...props}>
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

            <Menubar.Sub.Root>
              <Menubar.Sub.Trigger>
                Share <ChevronRightIcon className='ml-auto' />
              </Menubar.Sub.Trigger>

              <Menubar.Sub.Content>
                <Menubar.Item>Email link</Menubar.Item>

                <Menubar.Item>Messages</Menubar.Item>

                <Menubar.Item>Notes</Menubar.Item>
              </Menubar.Sub.Content>
            </Menubar.Sub.Root>

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

            <Menubar.Sub.Root>
              <Menubar.Sub.Trigger>
                Find <ChevronRightIcon className='ml-auto' />
              </Menubar.Sub.Trigger>

              <Menubar.Sub.Content>
                <Menubar.Item>Search the web</Menubar.Item>

                <Menubar.Separator />

                <Menubar.Item>Find...</Menubar.Item>

                <Menubar.Item>Find Next</Menubar.Item>

                <Menubar.Item>Find Previous</Menubar.Item>
              </Menubar.Sub.Content>
            </Menubar.Sub.Root>

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
            <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>

            <MenubarCheckboxItem checked>
              Always Show Full URLs
            </MenubarCheckboxItem>

            <Menubar.Separator />

            <Menubar.Item>
              Reload <Menubar.Shortcut>⌘R</Menubar.Shortcut>
            </Menubar.Item>

            <Menubar.Item disabled>
              Force Reload <Menubar.Shortcut>⇧⌘R</Menubar.Shortcut>
            </Menubar.Item>

            <Menubar.Separator />

            <Menubar.Item>Toggle Fullscreen</Menubar.Item>

            <Menubar.Separator />

            <Menubar.Item>Hide Sidebar</Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger>Profiles</Menubar.Trigger>

        <Menubar.Portal>
          <Menubar.Content>
            <Menubar.RadioGroup value='benoit'>
              <MenubarRadioItem value='andy'>Andy</MenubarRadioItem>

              <MenubarRadioItem value='benoit'>Benoit</MenubarRadioItem>

              <MenubarRadioItem value='Luis'>Luis</MenubarRadioItem>
            </Menubar.RadioGroup>

            <Menubar.Separator />

            <Menubar.Item>Edit...</Menubar.Item>

            <Menubar.Separator />

            <Menubar.Item>Add Profile...</Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
};

const MenubarCheckboxItem = ({ children, ...props }) => {
  return (
    <Menubar.CheckboxItem {...props}>
      <Menubar.ItemIndicator>
        <CheckIcon />
      </Menubar.ItemIndicator>

      {children}
    </Menubar.CheckboxItem>
  );
};

const MenubarRadioItem = ({ children, ...props }) => {
  return (
    <Menubar.RadioItem {...props}>
      <Menubar.ItemIndicator>
        <DotFilledIcon />
      </Menubar.ItemIndicator>

      {children}
    </Menubar.RadioItem>
  );
};

export default MenubarDemo;
