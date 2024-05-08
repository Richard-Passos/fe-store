import { useTranslations } from 'next-intl';

import * as templates from '@/components/templates';
import { getTemplate, getTranslationKeys } from '@/utils';

const HomeView = () => {
  const namespace = 'pages.home';

  const t = useTranslations(namespace);

  return getTranslationKeys(t, 'sections').map((key) => {
    const Template = getTemplate(t(`sections.${key}.template`), templates);

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
