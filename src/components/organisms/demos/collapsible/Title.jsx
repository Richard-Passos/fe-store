import { TextSubtitle } from '@/components/atoms/text';
import { cn } from '@/utils';

const DemosCollapsibleOrganismTitle = ({ className, ...props }) => {
  return (
    <TextSubtitle
      className={cn('text-sm font-normal first-letter:normal-case', className)}
      {...props}
    />
  );
};

export default DemosCollapsibleOrganismTitle;
