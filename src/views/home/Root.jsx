import { Terminal } from 'lucide-react';

import { Alert } from '@/components/ui/';

const Home = () => {
  return (
    <main className='flex min-h-screen items-center justify-center px-48'>
      <Alert>
        <Terminal className='h-4 w-4' />

        <Alert.Title>Heads up!</Alert.Title>

        <Alert.Description>
          You can add components to your app using the cli.
        </Alert.Description>
      </Alert>
    </main>
  );
};

export default Home;
