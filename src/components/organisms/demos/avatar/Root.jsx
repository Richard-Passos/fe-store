import { useTranslations } from 'next-intl';

import { Avatar } from '@/components/molecules';
import { cn } from '@/utils';

import Demos from '../Root';

const DemosAvatarOrganism = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  return (
    <Demos
      className={cn('w-fit', className)}
      {...props}
    >
      <Avatar.Root>
        <Avatar.Image
          alt={t('alt')}
          height={t.raw('height')}
          priority
          src={t('src')}
          width={t.raw('width')}
        />

        <Avatar.Fallback>{t('fallback')}</Avatar.Fallback>
      </Avatar.Root>
    </Demos>
  );
};

export default DemosAvatarOrganism;
