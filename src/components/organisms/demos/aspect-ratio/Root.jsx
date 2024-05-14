import { useTranslations } from 'next-intl';

import { AspectRatio, Image } from '@/components/atoms';
import variantsComb from '@/utils/variantsComb';

import Demos from '../Root';

const ASPECT_RATIO = {
  ratio: [16 / 9, 4 / 3, 3 / 2, 5 / 3, 5 / 4, 1 / 1]
};

const DemosAspectRatioOrganism = ({ namespace, ...props }) => {
  const t = useTranslations(namespace);

  return variantsComb(ASPECT_RATIO).map((variants, i) => (
    <Demos
      key={i}
      variants={{
        ...variants,
        ratio: variants.ratio?.toString().replace(/(\.\d\d).*/, '$1') + ':1'
      }}
      {...props}
    >
      <AspectRatio
        className='overflow-hidden rounded-sm bg-muted'
        {...variants}
      >
        <Image
          alt={t('alt')}
          className='size-full object-cover'
          height={t.raw('height')}
          priority={i === 0}
          src={t('src')}
          width={t.raw('width')}
        />
      </AspectRatio>
    </Demos>
  ));
};

export default DemosAspectRatioOrganism;
