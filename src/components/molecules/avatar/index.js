import MoleculeAvatarFallback from './Fallback';
import MoleculeAvatarImage from './Image';
import MoleculeAvatarRoot from './Root';

const MoleculeAvatar = {
  Root: MoleculeAvatarRoot,
  Fallback: MoleculeAvatarFallback,
  Image: MoleculeAvatarImage
};

export default MoleculeAvatar;
export { MoleculeAvatarRoot, MoleculeAvatarFallback, MoleculeAvatarImage };
