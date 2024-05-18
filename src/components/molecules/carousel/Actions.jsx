import { cn } from '@/utils';

const CarouselActions = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'splide__arrows flex flex-wrap items-center justify-center gap-xs',
        className
      )}
      {...props}
    />
  );
};

export default CarouselActions;
