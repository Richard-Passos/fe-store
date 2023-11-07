import { Fragment } from 'react';

import { cn } from '@/utils';

import { Text } from '../ui';

const ListComponentSubtitle = ({ variants, className, ...props }) => {
  return (
    <Text.Title
      className={cn('text-base font-medium', className)}
      {...props}
    >
      {Object.entries(variants).map(([key, value], i, arr) => (
        <Fragment key={key + value}>
          <span className='first:capitalize'>{key}</span>:{' '}
          <span className='text-muted-content'>{value.toString()}</span>
          {i < arr.length - 1 && ' - '}
        </Fragment>
      ))}
    </Text.Title>
  );
};

export default ListComponentSubtitle;
