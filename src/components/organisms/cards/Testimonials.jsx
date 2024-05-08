import { useTranslations } from 'next-intl';

import { Icon } from '@/components/atoms';
import { Avatar, Card, Rating } from '@/components/molecules';
import { cn } from '@/utils';

const CardsTestimonials = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  return (
    <Card.Root
      className={cn('isolate max-w-80', className)}
      color={t('color')}
      type={t('type')}
      {...props}
    >
      <div className='flex items-start justify-between gap-4'>
        <div className='size-12 text-content/5'>
          <Icon src={t('quoteIcon')} />
        </div>

        <Rating
          className='w-1/3'
          icon={t('rating.icon')}
          value={t.raw('rating.value')}
        />
      </div>
      <Card.Description className='mb-6 mt-4 font-medium text-content'>
        {t('description')}
      </Card.Description>
      <section className='mt-auto flex items-center gap-4'>
        <Avatar.Root>
          <Avatar.Image
            alt={t('author.image.alt')}
            height={t.raw('author.image.height')}
            src={t('author.image.src')}
            width={t.raw('author.image.width')}
          />

          <Avatar.Fallback className='border'>
            {t('author.name')
              ?.split(' ')
              .map((w) => w[0])
              .join('')}
          </Avatar.Fallback>
        </Avatar.Root>

        <section>
          <Card.Title
            asChild
            className='text-xs/none font-medium'
          >
            <h3>{t('author.name')}</h3>
          </Card.Title>

          <Card.Description
            asChild
            className='mt-1 text-xs text-content/75'
          >
            <h3>{t('author.role')}</h3>
          </Card.Description>
        </section>
      </section>{' '}
    </Card.Root>
  );
};

export default CardsTestimonials;
