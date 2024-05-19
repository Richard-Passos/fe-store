import { cn } from '@/utils';

const GridPattern = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        'absolute inset-0 -z-40 overflow-hidden border border-[--color] bg-center [--color:hsl(var(--root-content)/calc(var(--border-opacity)*var(--times)))] [--times:.75] [background-image:linear-gradient(var(--color)_.8px,transparent_.8px),linear-gradient(to_right,var(--color)_.8px,transparent_.8px)] [background-size:180px_180px] dark:[--times:.5]',
        className
      )}
      {...props}
    />
  );
};

export default GridPattern;
