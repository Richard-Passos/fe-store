import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';

const CALENDAR_PROPS = {
  components: {
    IconLeft: ChevronLeftIcon,
    IconRight: ChevronRightIcon,
    IconDropdown: ChevronDownIcon,
  },
  fromYear: 2023,
  toYear: 2024,
};

export default CALENDAR_PROPS;
