import ContextMenu from './ContextMenu';
import DropdownMenu from './DropdownMenu';
import Menubar from './Menubar';

const Home = () => {
  return (
    <main className='flex min-h-screen flex-col'>
      <section className='mt-48 flex h-screen w-full justify-center'>
        <ContextMenu />
      </section>

      <section className='mt-48 flex h-screen w-full justify-center'>
        <DropdownMenu />
      </section>

      <section className='mt-48 flex h-screen w-full justify-center'>
        <Menubar />
      </section>
    </main>
  );
};

export default Home;
