import { cn } from '@/utils';

const { Box } = require('@/components/atoms');

const DemosCollapsibleOrganismItem = ({ className, ...props }) => {
  return (
    <Box
      className={cn(
        'h-12 flex-row items-center justify-between rounded-sm px-4 py-0',
        className
      )}
      {...props}
    />
  );
};

export default DemosCollapsibleOrganismItem;
