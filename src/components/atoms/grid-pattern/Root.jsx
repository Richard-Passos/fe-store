import { cn } from '@/utils';

const GridPattern = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        'absolute inset-0 -z-40 overflow-hidden border bg-center [background-image:linear-gradient(theme(colors.border)_.8px,transparent_.8px),linear-gradient(to_right,theme(colors.border)_.8px,transparent_.8px)] [background-size:180px_180px]',
        className
      )}
      {...props}
    />
  );
};

export default GridPattern;
