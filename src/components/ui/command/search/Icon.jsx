import { Search } from 'lucide-react';

import { cn } from '@/utils';

const CommandSearchIcon = ({ className, ...props }) => {
  return (
    <Search
      className={cn(
        'pointer-events-none absolute left-3 h-4 w-4 opacity-50',
        className,
      )}
      {...props}
    />
  );
};

export default CommandSearchIcon;
