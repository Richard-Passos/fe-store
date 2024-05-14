import colors from '@/components/colors';

const TOAST_COLORS = Object.keys(colors);

const TOAST = TOAST_COLORS.map((color) => ({ color }));

export default TOAST;
export { TOAST_COLORS };
