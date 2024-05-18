import { useTranslations } from 'next-intl';

import demos from '@/components/organisms/demos';
import { cn, template } from '@/utils';

const DemoStructure = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  const Items = template(t('template'), demos);

  return (
    <ul
      className={cn(
        'flex h-fit w-full flex-wrap justify-center gap-md',
        className
      )}
      {...props}
    >
      <Items namespace={namespace} />
    </ul>
  );
};

export default DemoStructure;
