import colorVariants from '@/components/colorVariants';
import { toastTypes } from '@/components/molecules/toast';

const TOAST_COLORS = Object.keys(colorVariants),
  TOAST_TYPES = Object.keys(toastTypes);

const TOAST = TOAST_COLORS.map((color) =>
  TOAST_TYPES.map((type) => ({
    color,
    type
  }))
)
  .reduce((arr, variants) => [...arr, ...variants], [])
  .sort((a, b) => b.type.localeCompare(a.type));

export default TOAST;
export { TOAST_COLORS, TOAST_TYPES };
