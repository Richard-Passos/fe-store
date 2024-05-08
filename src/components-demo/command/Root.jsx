import {
  CalendarIcon,
  CameraIcon,
  FaceIcon,
  GearIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PersonIcon,
} from '@radix-ui/react-icons';

import { ListComponent, Command, Dialog } from '@/components/molecules';
import { Button, Text } from '@/components/atoms';

const CommandDemo = (props) => {
  return (
    <ListComponent.Root {...props}>
      <ListComponent.Item>
        <Text.Root className='font-medium'>Without dialog</Text.Root>

        <CommandComp />
      </ListComponent.Item>

      <ListComponent.Item>
        <Text.Root className='font-medium'>With dialog</Text.Root>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button>Open dialog</Button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay />

            <Dialog.Content className='border-0 p-0'>
              <CommandComp />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </ListComponent.Item>
    </ListComponent.Root>
  );
};

const CommandComp = (props) => {
  return (
    <Command.Root {...props}>
      <Command.Search.Root>
        <Command.Search.Input placeholder='Type a command or search...' />

        <Command.Search.Icon>
          <MagnifyingGlassIcon />
        </Command.Search.Icon>
      </Command.Search.Root>

      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading='Suggestions'>
          <Command.Item>
            <Command.Icon>
              <CalendarIcon />
            </Command.Icon>

            <span>Calendar</span>
          </Command.Item>

          <Command.Item>
            <Command.Icon>
              <FaceIcon />
            </Command.Icon>

            <span>Search Emoji</span>
          </Command.Item>

          <Command.Item>
            <Command.Icon>
              <CameraIcon />
            </Command.Icon>

            <span>Camera</span>
          </Command.Item>
        </Command.Group>

        <Command.Separator />

        <Command.Group heading='Config'>
          <Command.Item>
            <Command.Icon>
              <PersonIcon />
            </Command.Icon>

            <span>Profile</span>

            <Command.Shortcut>⌘P</Command.Shortcut>
          </Command.Item>

          <Command.Item>
            <Command.Icon>
              <LockClosedIcon />
            </Command.Icon>

            <span>Security</span>

            <Command.Shortcut>⌘S</Command.Shortcut>
          </Command.Item>

          <Command.Item>
            <Command.Icon>
              <GearIcon />
            </Command.Icon>

            <span>Config</span>

            <Command.Shortcut>⌘C</Command.Shortcut>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Root>
  );
};

export default CommandDemo;
