import CommandEmpty from './Empty';
import CommandGroup from './Group';
import CommandInput from './Input';
import CommandItem from './Item';
import CommandList from './List';
import CommandLoading from './Loading';
import CommandRoot from './Root';

const Command = {
  Root: CommandRoot,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Input: CommandInput,
  Item: CommandItem,
  List: CommandList,
  Loading: CommandLoading
};

export default Command;
export {
  CommandRoot,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading
};
