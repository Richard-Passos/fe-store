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

import { Button, DropdownMenu } from '@/components/ui';

const HomeDropdownMenu = (props) => {
  return (
    <DropdownMenu {...props}>
      <DropdownMenu.Trigger asChild>
        <Button variants={{ variant: 'outline' }}>Open</Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className='w-64'>
          <DropdownMenu.Label>My Account</DropdownMenu.Label>

          <DropdownMenu.Separator />

          <DropdownMenu.Group>
            <DropdownMenu.Item>
              <User />

              <span>Profile</span>

              <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
            </DropdownMenu.Item>

            <DropdownMenu.Item>
              <CreditCard />

              <span>Billing</span>

              <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
            </DropdownMenu.Item>

            <DropdownMenu.Item>
              <Settings />

              <span>Settings</span>

              <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
            </DropdownMenu.Item>

            <DropdownMenu.Item>
              <Keyboard />

              <span>Keyboard shortcuts</span>

              <DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
          </DropdownMenu.Group>

          <DropdownMenu.Separator />

          <DropdownMenu.Group>
            <DropdownMenu.Item>
              <Users />

              <span>Team</span>
            </DropdownMenu.Item>

            <DropdownMenu.Sub>
              <DropdownMenu.Sub.Trigger>
                <UserPlus />

                <span>Invite users</span>

                <ChevronRight className='ml-auto' />
              </DropdownMenu.Sub.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Sub.Content>
                  <DropdownMenu.Item>
                    <Mail />

                    <span>Email</span>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item>
                    <MessageSquare />

                    <span>Message</span>
                  </DropdownMenu.Item>

                  <DropdownMenu.Separator />

                  <DropdownMenu.Item>
                    <PlusCircle />

                    <span>More...</span>
                  </DropdownMenu.Item>
                </DropdownMenu.Sub.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>

            <DropdownMenu.Item>
              <Plus />

              <span>New Team</span>

              <DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
          </DropdownMenu.Group>

          <DropdownMenu.Separator />

          <DropdownMenu.Item>
            <Github />

            <span>GitHub</span>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <LifeBuoy />

            <span>Support</span>
          </DropdownMenu.Item>

          <DropdownMenu.Item disabled>
            <Cloud />

            <span>API</span>
          </DropdownMenu.Item>

          <DropdownMenu.Separator />

          <DropdownMenu.Item>
            <LogOut />

            <span>Log out</span>

            <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu>
  );
};

export default HomeDropdownMenu;
