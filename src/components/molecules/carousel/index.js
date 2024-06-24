import CarouselAction from './Action';
import CarouselActions from './Actions';
import CarouselItem from './Item';
import CarouselPagination from './Pagination';
import CarouselRoot from './Root';
import CarouselTrack from './Track';

const Carousel = {
  Root: CarouselRoot,
  Action: CarouselAction,
  Actions: CarouselActions,
  Item: CarouselItem,
  Pagination: CarouselPagination,
  Track: CarouselTrack
};

export default Carousel;
export {
  Carousel,
  CarouselRoot,
  CarouselAction,
  CarouselActions,
  CarouselItem,
  CarouselPagination,
  CarouselTrack
};
