import CarouselAction from './Action';
import CarouselActions from './Actions';
import CarouselActiveIdx from './ActiveIdx';
import CarouselItem from './Item';
import CarouselRoot from './Root';
import CarouselTrack from './Track';
import CarouselProgress from './progress';

const Carousel = {
  Root: CarouselRoot,
  Action: CarouselAction,
  Actions: CarouselActions,
  ActiveIdx: CarouselActiveIdx,
  Item: CarouselItem,
  Track: CarouselTrack,
  Progress: CarouselProgress,  
};

export default Carousel;
export {
  CarouselRoot,
  CarouselAction,
  CarouselActions,
  CarouselActiveIdx,
  CarouselItem,
  CarouselTrack,
  CarouselProgress,
};
