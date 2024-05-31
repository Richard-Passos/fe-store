import { Link, Text } from './components/atoms';
import { List } from './components/molecules';

const rich = {
  b: (chunks) => <Text className='font-bold'>{chunks}</Text>,
  i: (chunks) => <Text className='italic'>{chunks}</Text>,
  a: (chunks) => <Link>{chunks}</Link>,
  ul: (chunks) => (
    <List.Root
      className='my-sm pl-md'
      type='unordered'
    >
      {chunks}
    </List.Root>
  ),
  ol: (chunks) => (
    <List.Root
      className='my-sm pl-md'
      type='ordered'
    >
      {chunks}
    </List.Root>
  ),
  li: (chunks) => <List.Item>{chunks}</List.Item>
};

export default rich;
export { rich };
