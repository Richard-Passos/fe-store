import CommandEmpty from './Empty';
import CommandGroup from './Group';
import CommandIcon from './Icon';
import CommandItem from './Item';
import CommandList from './List';
import CommandLoading from './Loading';
import CommandRoot from './Root';
import CommandSeparator from './Separator';
import CommandShortcut from './Shortcut';
import CommandSearch from './search';

const Command = {
  Root: CommandRoot,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Icon: CommandIcon,
  Item: CommandItem,
  List: CommandList,
  Loading: CommandLoading,
  Separator: CommandSeparator,
  Shortcut: CommandShortcut,
  Search: CommandSearch,
}

export default Command;
export {
  CommandRoot,
  CommandEmpty,
  CommandGroup,
  CommandIcon,
  CommandItem,
  CommandList,
  CommandLoading,
  CommandSeparator,
  CommandShortcut,
  CommandSearch,
};
