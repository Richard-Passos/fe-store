import { useTranslations } from 'next-intl';

import * as templates from '@/components/templates';
import { template, translationKeys } from '@/utils';

const HomeView = () => {
  const namespace = 'pages.home';

  const t = useTranslations(namespace);

  return translationKeys(t, 'sections').map((key) => {
    const Template = template(t(`sections.${key}.template`), templates);

    return (
      Template && (
        <Template
          key={key}
          namespace={`${namespace}.sections.${key}`}
        />
      )
    );
  });
};

export default HomeView;
