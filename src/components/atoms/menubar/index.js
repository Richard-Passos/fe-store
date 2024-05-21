import MenubarMenuArrow from './Arrow';
import MenubarMenuContent from './Content';
import MenubarMenuGroup from './Group';
import MenubarMenuLabel from './Label';
import MenubarMenuPortal from './Portal';
import MenubarMenuRadioGroup from './RadioGroup';
import MenubarMenuRoot from './Root';
import MenubarMenuSeparator from './Separator';
import MenubarMenuTrigger from './Trigger';
import MenubarMenuItem from './item';
import MenubarMenuSub from './sub';

const MenubarMenu = {
  Root: MenubarMenuRoot,
  Content: MenubarMenuArrow,
  Content: MenubarMenuContent,
  Group: MenubarMenuGroup,
  Item: MenubarMenuItem,
  Label: MenubarMenuLabel,
  Portal: MenubarMenuPortal,
  RadioGroup: MenubarMenuRadioGroup,
  Separator: MenubarMenuSeparator,
  Trigger: MenubarMenuTrigger,
  Sub: MenubarMenuSub
};

export default MenubarMenu;
export {
  MenubarMenuRoot,
  MenubarMenuArrow,
  MenubarMenuContent,
  MenubarMenuGroup,
  MenubarMenuItem,
  MenubarMenuLabel,
  MenubarMenuPortal,
  MenubarMenuRadioGroup,
  MenubarMenuSeparator,
  MenubarMenuTrigger,
  MenubarMenuSub
};
