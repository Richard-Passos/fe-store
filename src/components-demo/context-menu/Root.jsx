import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from '@radix-ui/react-icons';

import { ContextMenu } from '@/components/molecules';

const ContextMenuDemo = (props) => {
  return (
    <ContextMenu.Root {...props}>
      <ContextMenu.Trigger className='flex aspect-video w-full max-w-xs items-center justify-center rounded-md border border-dashed text-sm'>
        Right click here
      </ContextMenu.Trigger>

      <ContextMenu.Content className='w-64'>
        <ContextMenu.Item>
          Back
          <ContextMenu.Shortcut>⌘[</ContextMenu.Shortcut>
        </ContextMenu.Item>

        <ContextMenu.Item disabled>
          Forward
          <ContextMenu.Shortcut>⌘]</ContextMenu.Shortcut>
        </ContextMenu.Item>

        <ContextMenu.Item>
          Reload
          <ContextMenu.Shortcut>⌘R</ContextMenu.Shortcut>
        </ContextMenu.Item>

        <ContextMenu.Sub.Root>
          <ContextMenu.Sub.Trigger>
            More Tools
            <ContextMenu.Icon className='ml-auto'>
              <ChevronRightIcon />
            </ContextMenu.Icon>
          </ContextMenu.Sub.Trigger>

          <ContextMenu.Sub.Content className='w-48'>
            <ContextMenu.Item>
              Save Page As...
              <ContextMenu.Shortcut>⇧⌘S</ContextMenu.Shortcut>
            </ContextMenu.Item>

            <ContextMenu.Item>Create Shortcut...</ContextMenu.Item>

            <ContextMenu.Item>Name Window...</ContextMenu.Item>

            <ContextMenu.Separator />

            <ContextMenu.Item>Developer Tools</ContextMenu.Item>
          </ContextMenu.Sub.Content>
        </ContextMenu.Sub.Root>

        <ContextMenu.Separator />

        <ContextMenuCheckboxItem checked>
          Show Bookmarks Bar
          <ContextMenu.Shortcut>⌘⇧B</ContextMenu.Shortcut>
        </ContextMenuCheckboxItem>

        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>

        <ContextMenu.Separator />

        <ContextMenu.RadioGroup value='pedro'>
          <ContextMenu.Label>People</ContextMenu.Label>

          <ContextMenuRadioItem value='pedro'>
            Pedro Duarte
          </ContextMenuRadioItem>

          <ContextMenuRadioItem value='colm'>Colm Tuite</ContextMenuRadioItem>
        </ContextMenu.RadioGroup>
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
};

const ContextMenuCheckboxItem = ({ children, ...props }) => {
  return (
    <ContextMenu.CheckboxItem {...props}>
      <ContextMenu.ItemIndicator>
        <CheckIcon />
      </ContextMenu.ItemIndicator>

      {children}
    </ContextMenu.CheckboxItem>
  );
};

const ContextMenuRadioItem = ({ children, ...props }) => {
  return (
    <ContextMenu.RadioItem {...props}>
      <ContextMenu.ItemIndicator>
        <DotFilledIcon />
      </ContextMenu.ItemIndicator>

      {children}
    </ContextMenu.RadioItem>
  );
};

export default ContextMenuDemo;
