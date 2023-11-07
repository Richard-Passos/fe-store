import { toastStyles } from '@/components/ui/toast';
import variantColors from '@/components/ui/variantColors';

const TOAST_COLOR_VARIANTS = Object.keys(variantColors),
  TOAST_STYLE_VARIANTS = Object.keys(toastStyles);

const TOAST_VARIANTS = TOAST_COLOR_VARIANTS.map((color) =>
  TOAST_STYLE_VARIANTS.map((style) => ({
    color,
    style,
  })),
)
  .reduce((arr, variants) => [...arr, ...variants], [])
  .sort((a, b) => b.style.localeCompare(a.style));

export default TOAST_VARIANTS;
export { TOAST_COLOR_VARIANTS, TOAST_STYLE_VARIANTS };
