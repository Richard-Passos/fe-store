'use client';

import { PopoverRoot } from '@/components/molecules/popover';
import { useCombobox } from '@/hooks';

const DemosComboboxOrganismPopover = (props) => {
  const { state, setState } = useCombobox();

  return (
    <PopoverRoot
      onOpenChange={(isOpen) => setState((state) => ({ ...state, isOpen }))}
      open={state.isOpen}
      {...props}
    />
  );
};

export default DemosComboboxOrganismPopover;
