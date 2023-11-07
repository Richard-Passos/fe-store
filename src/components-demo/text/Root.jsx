import { ListComponent } from '@/components';
import { Text } from '@/components/ui';
import { cn, normalizeCompName } from '@/utils';

const TEXT_VARIANTS = ['title', 'subtitle', 'text', 'small'];

const TextDemo = ({ className, ...props }) => {
  return (
    <ListComponent
      className={cn('flex-col flex-nowrap items-center', className)}
      {...props}
    >
      {TEXT_VARIANTS.map((variants) => {
        const TextComp = Text[normalizeCompName(variants)] || Text;

        return (
          <ListComponent.Item key={variants}>
            <Text.Title className='text-base capitalize'>{variants}</Text.Title>

            <TextComp>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              tempora!
            </TextComp>
          </ListComponent.Item>
        );
      })}
    </ListComponent>
  );
};

export default TextDemo;
