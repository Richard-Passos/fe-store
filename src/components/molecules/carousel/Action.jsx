import { Button } from '@/components/atoms';
import { button } from '@/components/atoms/button';
import { cn } from '@/utils';

const CarouselAction = ({
  color,
  variant,
  size,
  type,
  className,
  ...props
}) => {
  const types = {
    next: 'splide__arrow--next',
    prev: 'splide__arrow--prev'
  };

  return (
    <Button
      className={button({
        color,
        variant,
        size,
        className: cn(
          'splide__arrow aspect-square shrink-0 px-0',
          types[type ?? 'next'],
          className
        )
      })}
      {...props}
    />
  );
};

export default CarouselAction;
