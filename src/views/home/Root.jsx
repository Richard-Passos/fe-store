import {
  ChevronRight,
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from 'lucide-react';

import { Button, DropdownMenu } from '@/components/ui/';

const Home = () => {
  return (
    <main className='mt-24 flex min-h-screen justify-center'>
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button variants={{ variant: 'outline' }}>Open</Button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className='w-56'>
            <DropdownMenu.Label>My Account</DropdownMenu.Label>

            <DropdownMenu.Separator />

            <DropdownMenu.Group>
              <DropdownMenu.Item>
                <User className='h-4 w-4' />

                <span>Profile</span>

                <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
              </DropdownMenu.Item>

              <DropdownMenu.Item>
                <CreditCard className='h-4 w-4' />

                <span>Billing</span>

                <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
              </DropdownMenu.Item>

              <DropdownMenu.Item>
                <Settings className='h-4 w-4' />

                <span>Settings</span>

                <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
              </DropdownMenu.Item>

              <DropdownMenu.Item>
                <Keyboard className='h-4 w-4' />

                <span>Keyboard shortcuts</span>

                <DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
              </DropdownMenu.Item>
            </DropdownMenu.Group>

            <DropdownMenu.Separator />

            <DropdownMenu.Group>
              <DropdownMenu.Item>
                <Users className='h-4 w-4' />

                <span>Team</span>
              </DropdownMenu.Item>

              <DropdownMenu.Sub>
                <DropdownMenu.Sub.Trigger>
                  <UserPlus className='h-4 w-4' />

                  <span>Invite users</span>

                  <ChevronRight className='ml-auto h-4 w-4 ' />
                </DropdownMenu.Sub.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Sub.Content>
                    <DropdownMenu.Item>
                      <Mail className='h-4 w-4' />

                      <span>Email</span>
                    </DropdownMenu.Item>

                    <DropdownMenu.Item>
                      <MessageSquare className='h-4 w-4' />

                      <span>Message</span>
                    </DropdownMenu.Item>

                    <DropdownMenu.Separator />

                    <DropdownMenu.Item>
                      <PlusCircle className='h-4 w-4' />

                      <span>More...</span>
                    </DropdownMenu.Item>
                  </DropdownMenu.Sub.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Sub>

              <DropdownMenu.Item>
                <Plus className='h-4 w-4' />

                <span>New Team</span>

                <DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
              </DropdownMenu.Item>
            </DropdownMenu.Group>

            <DropdownMenu.Separator />

            <DropdownMenu.Item>
              <Github className='h-4 w-4' />

              <span>GitHub</span>
            </DropdownMenu.Item>

            <DropdownMenu.Item>
              <LifeBuoy className='h-4 w-4' />

              <span>Support</span>
            </DropdownMenu.Item>

            <DropdownMenu.Item disabled>
              <Cloud className='h-4 w-4' />

              <span>API</span>
            </DropdownMenu.Item>

            <DropdownMenu.Separator />

            <DropdownMenu.Item>
              <LogOut className='h-4 w-4' />

              <span>Log out</span>

              <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu>
    </main>
  );
};
export default Home;
