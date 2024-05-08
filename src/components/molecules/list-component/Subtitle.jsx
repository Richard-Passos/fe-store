import { Fragment } from 'react';

import { Text } from '@/components/atoms';
import { cn } from '@/utils';

const ListComponentSubtitle = ({ variants, className, ...props }) => {
  return (
    <Text.Title
      className={cn('text-base font-medium', className)}
      {...props}
    >
      {Object.entries(variants).map(([key, value], i, arr) => (
        <Fragment key={key}>
          <span className='text-content/75 first-letter:capitalize'>
            {key}:
          </span>
          &nbsp;
          <span className='first-letter:capitalize'>{value.toString()}</span>
          {i < arr.length - 1 && (
            <span
              className='text-content/75'
              role='separator'
            >
              &nbsp;-&nbsp;
            </span>
          )}
        </Fragment>
      ))}
    </Text.Title>
  );
};

export default ListComponentSubtitle;
