import { useTranslations } from 'next-intl';

import * as organisms from '@/components/organisms';
import { cn, template } from '@/utils';

const BoxStructure = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  const Block = template(t('template'), organisms);

  return (
    <div
      className={cn('flex size-full items-start justify-center', className)}
      {...props}
    >
      {Block && <Block namespace={namespace} />}
    </div>
  );
};

export default BoxStructure;
