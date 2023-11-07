import {
  CalendarIcon,
  CameraIcon,
  FaceIcon,
  GearIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PersonIcon,
} from '@radix-ui/react-icons';

import { ListComponent } from '@/components';
import { Button, Command, Dialog, Text } from '@/components/ui';

const CommandDemo = (props) => {
  return (
    <ListComponent {...props}>
      <ListComponent.Item>
        <Text className='font-medium'>Without dialog</Text>

        <CommandComp />
      </ListComponent.Item>

      <ListComponent.Item>
        <Text className='font-medium'>With dialog</Text>

        <Dialog>
          <Dialog.Trigger asChild>
            <Button>Open dialog</Button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay />

            <Dialog.Content className='border-0 p-0'>
              <CommandComp />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog>
      </ListComponent.Item>
    </ListComponent>
  );
};

const CommandComp = (props) => {
  return (
    <Command {...props}>
      <Command.Search>
        <Command.Search.Input placeholder='Type a command or search...' />

        <Command.Search.Icon>
          <MagnifyingGlassIcon />
        </Command.Search.Icon>
      </Command.Search>

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
    </Command>
  );
};

export default CommandDemo;
