import { Sheet } from '@/components/molecules';

import Trigger from './Trigger'
import Content from './Content'

const HeaderMenu = (props) => {
  return <Sheet.Root {...props}>
  <Trigger/>

  <Sheet.Portal>
    <Sheet.Overlay />

    <Content/>
  </Sheet.Portal>
</Sheet.Root>
};

export default HeaderMenu;