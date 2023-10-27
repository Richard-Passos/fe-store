import { ArrowLeft, Check, ChevronRight, Circle } from 'lucide-react';

import { ContextMenu } from '@/components/ui';
import { cn } from '@/utils';

const ContextMenuView = ({ className, ...props }) => {
  return (
    <main
      className={cn(
        'flex min-h-screen w-full max-w-bounds justify-center pt-48',
        className,
      )}
      {...props}
    >
      <ContextMenu>
        <ContextMenu.Trigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>
          Right click here
        </ContextMenu.Trigger>

        <ContextMenu.Content className='w-64'>
          <ContextMenu.Item>
            <ArrowLeft />
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

          <ContextMenu.Sub>
            <ContextMenu.Sub.Trigger>
              More Tools <ChevronRight className='ml-auto' />
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
          </ContextMenu.Sub>

          <ContextMenu.Separator />

          <ContextMenu.CheckboxItem checked>
            <ContextMenu.ItemIndicator>
              <Check />
            </ContextMenu.ItemIndicator>
            Show Bookmarks Bar
            <ContextMenu.Shortcut>⌘⇧B</ContextMenu.Shortcut>
          </ContextMenu.CheckboxItem>

          <ContextMenu.CheckboxItem>
            <ContextMenu.ItemIndicator>
              <Check />
            </ContextMenu.ItemIndicator>
            Show Full URLs
          </ContextMenu.CheckboxItem>

          <ContextMenu.Separator />

          <ContextMenu.RadioGroup value='pedro'>
            <ContextMenu.Label>People</ContextMenu.Label>

            <ContextMenu.Separator />

            <ContextMenu.RadioItem value='pedro'>
              <ContextMenu.ItemIndicator className='w-2'>
                <Circle className='fill-current' />
              </ContextMenu.ItemIndicator>
              Pedro Duarte
            </ContextMenu.RadioItem>

            <ContextMenu.RadioItem value='colm'>
              <ContextMenu.ItemIndicator className='w-2'>
                <Circle className='fill-current' />
              </ContextMenu.ItemIndicator>
              Colm Tuite
            </ContextMenu.RadioItem>
          </ContextMenu.RadioGroup>
        </ContextMenu.Content>
      </ContextMenu>
    </main>
  );
};

export default ContextMenuView;
