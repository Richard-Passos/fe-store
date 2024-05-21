'use client';

import { createContext, useId, useState } from 'react';

const CarouselContext = createContext({
  id: '',
  state: { activeIdx: 0, progress: 0 },
  setState: () => {}
});

const CarouselProvider = ({ value, ...props }) => {
  const [state, setState] = useState({ activeIdx: 0, progress: 0 }),
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
