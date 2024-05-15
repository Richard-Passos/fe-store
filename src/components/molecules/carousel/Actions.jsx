import { cn } from '@/utils';

const CarouselActions = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'splide__arrows flex flex-wrap items-center justify-center gap-2',
        className
      )}
      {...props}
    />
  );
};

export default CarouselActions;
