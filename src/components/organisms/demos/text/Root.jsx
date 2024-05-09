import { ListComponent } from '@/components/molecules';
import { Text } from '@/components/atoms';
import { cn, normCompName } from '@/utils';

const TEXT = ['title', 'subtitle', 'text', 'small'];

const TextDemo = ({ className, ...props }) => {
  return (
    <ListComponent.Root
      className={cn('flex-col flex-nowrap items-center', className)}
      {...props}
    >
      {TEXT.map((variants) => {
        const TextComp = Text[normCompName(variants)] || Text.Root;

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
    </ListComponent.Root>
  );
};

export default TextDemo;
