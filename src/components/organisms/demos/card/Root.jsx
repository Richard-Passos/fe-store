import { useTranslations } from 'next-intl';

import { cn, normCompName, translationKeys } from '@/utils';

import templates from './templates';

const DemosCardOrganism = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  return translationKeys(t, 'templates').map((key) => {
    const Card = templates[normCompName(key)];

    return (
      Card && (
        <Card
          className={cn('h-fit w-full max-w-sm', className)}
          key={key}
          namespace={`${namespace}.templates.${key}`}
          {...props}
        />
      )
    );
  });
};

export default DemosCardOrganism;
