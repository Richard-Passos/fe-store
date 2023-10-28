import { Text } from '@/components/ui';
import { capitalize, normalizeCompName } from '@/utils';
import * as Views from '@/views';

const HomePage = ({ params: { component } }) => {
  const Component = Views[normalizeCompName(component)],
    isComponent = Boolean(Component);

  const View = Component ?? Views.Home;

  return isComponent ? (
    <main className='mx-auto flex min-h-screen w-full max-w-bounds flex-col items-center gap-24 py-24'>
      <Text.Title
        asChild
        className='text-center text-5xl'
      >
        <h1>{capitalize(component.replace(/[-_]/, ' '))}</h1>
      </Text.Title>

      <View />
    </main>
  ) : (
    <View />
  );
};

export default HomePage;
