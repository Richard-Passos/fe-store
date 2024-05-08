'use client';

import { useState } from 'react';

import { useUpdateEffect } from '@/hooks';
import { usePathname } from '@/navigation';
import { capitalize, cn, normId } from '@/utils';

import Link from './Link';

const HeaderMenuNav = ({ data, className, ...props }) => {
  const lastPage = usePathname()?.split('/').at(-1);

  const [active, setActive] = useState(lastPage);

  useUpdateEffect(() => setActive(lastPage), [lastPage]);

  return (
    <nav
      className={cn('grow space-y-1 overflow-y-auto', className)}
      {...props}
    >
      {Object.entries(data ?? {}).map(([key, data]) => {
        key = normId(key);

        return (
          <Link
            href={`/components/${key}`}
            isActive={active === key}
            key={key}
          >
            {capitalize(data.title)}
          </Link>
        );
      })}
    </nav>
  );
};

export default HeaderMenuNav;
