import { X } from 'lucide-react';

import { Button, Dialog } from '@/components/ui/';

const Home = () => {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      <Dialog>
        <Dialog.Trigger asChild>
          <Button variants={{ variant: 'outline' }}>Edit Profile</Button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay />

          <Dialog.Content className='sm:max-w-[425px]'>
            <Dialog.Header>
              <Dialog.Title>Edit profile</Dialog.Title>

              <Dialog.Description>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </Dialog.Description>
            </Dialog.Header>

            <div className='grid gap-4 py-4'>
              <div className='grid grid-cols-4 items-center gap-4'>
                <label
                  className='text-right'
                  htmlFor='name'
                >
                  Name
                </label>

                <input
                  className='col-span-3'
                  defaultValue='Pedro Duarte'
                  id='name'
                />
              </div>

              <div className='grid grid-cols-4 items-center gap-4'>
                <label
                  className='text-right'
                  htmlFor='username'
                >
                  Username
                </label>
                <input
                  className='col-span-3'
                  defaultValue='@peduarte'
                  id='username'
                />
              </div>
            </div>

            <Dialog.Actions>
              <Button type='submit'>Save changes</Button>
            </Dialog.Actions>

            <Dialog.Close>
              <X className='h-4 w-4' />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </main>
  );
};
export default Home;
