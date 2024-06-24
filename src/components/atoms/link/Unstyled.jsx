'use client';

import { forwardRef } from 'react';

import { Link } from '@/navigation';
import { isExternalUrl } from '@/utils';

const AtomsLinkUnstyled = ({ href, ...props }, ref) => {
  const isExternal = isExternalUrl(href);

  const externalLinkProps = { rel: 'noreferrer', target: '_blank' };

  return (
    <Link
      href={href ?? ''}
      ref={ref}
      {...(isExternal && externalLinkProps)}
      {...props}
    />
  );
};

export default forwardRef(AtomsLinkUnstyled);
