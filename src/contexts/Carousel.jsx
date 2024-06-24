'use client';

import { createContext, useState } from 'react';

import { useId } from '@/hooks';

const DEFAULTS = {
  id: '',
  state: { activeIdx: 0, progress: 0 },
  setState: () => {}
};

const CarouselContext = createContext(DEFAULTS);

const CarouselProvider = ({ value, ...props }) => {
  const [state, setState] = useState(DEFAULTS.state),
    id = useId();

  return (
    <CarouselContext.Provider
      value={{ id, state, setState, ...value }}
      {...props}
    />
  );
};

export default CarouselContext;
export { CarouselProvider };
