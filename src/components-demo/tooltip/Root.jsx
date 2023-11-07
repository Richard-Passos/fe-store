import { PlusIcon } from '@radix-ui/react-icons';

import { Button, Tooltip } from '@/components/ui';
import { cn } from '@/utils';

const TooltipDemo = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-center gap-12',
        className,
      )}
      {...props}
    >
      <Tooltip.Provider>
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button>Hover</Button>
          </Tooltip.Trigger>

          <Tooltip.Portal>
            <Tooltip.Content>Tooltip demo</Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip>

        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button className='aspect-square px-0'>
              <PlusIcon className='h-5 w-5' />
            </Button>
          </Tooltip.Trigger>

          <Tooltip.Portal>
            <Tooltip.Content>Add to library</Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip>
      </Tooltip.Provider>
    </div>
  );
};

export default TooltipDemo;
