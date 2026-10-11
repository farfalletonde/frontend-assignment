import type { ComponentProps } from 'react';

export const Icon = (props: ComponentProps<'svg'>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  />
);
