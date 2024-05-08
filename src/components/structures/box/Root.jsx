import { useTranslations } from 'next-intl';

import * as organisms from '@/components/organisms';
import { cn, getTemplate } from '@/utils';

const BoxStructure = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  const Block = getTemplate(t('template'), organisms);

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
