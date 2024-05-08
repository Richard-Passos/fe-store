const colorVariants = {
  main: '[--root-main:--main] [--root-active:--active] [--root-content:--content] [--root-muted:--muted]',
  muted: '[--root-main:--root-muted]',
  inverted:
    '[--root-main:--inverted] [--root-active:--inverted-a] [--root-content:--inverted-c] [--root-muted:--inverted-m]',
  primary:
    '[--root-main:--primary] [--root-active:--primary-a] [--root-content:--primary-c] [--root-muted:--primary-m] [--root-primary:--main] [--root-primary-a:--active] [--root-primary-c:--content] [--root-primary-m:--muted]',
  secondary:
    '[--root-main:--secondary] [--root-active:--secondary-a] [--root-content:--secondary-c] [--root-muted:--secondary-m]',
  accent:
    '[--root-main:--accent] [--root-active:--accent-a] [--root-content:--accent-c] [--root-muted:--accent-m]',
  success:
    '[--root-main:--success] [--root-active:--success-a] [--root-content:--success-c] [--root-muted:--success-m]',
  warning:
    '[--root-main:--warning] [--root-active:--warning-a] [--root-content:--warning-c] [--root-muted:--warning-m]',
  danger:
    '[--root-main:--danger] [--root-active:--danger-a] [--root-content:--danger-c] [--root-muted:--danger-m]'
};

const defaultColor = 'main';

export default colorVariants;
export { defaultColor };
