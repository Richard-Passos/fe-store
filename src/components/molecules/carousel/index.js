import CarouselAction from './Action';
import CarouselActions from './Actions';
import CarouselActiveIdx from './ActiveIdx';
import CarouselItem from './Item';
import CarouselProgress from './Progress';
import CarouselRoot from './Root';
import CarouselTrack from './Track';

const Carousel = {
  Root: CarouselRoot,
  Action: CarouselAction,
  Actions: CarouselActions,
  ActiveIdx: CarouselActiveIdx,
  Item: CarouselItem,
  Progress: CarouselProgress,
  Track: CarouselTrack
};

export default Carousel;
export {
  CarouselRoot,
  CarouselAction,
  CarouselActions,
  CarouselActiveIdx,
  CarouselItem,
  CarouselProgress,
  CarouselTrack
};
