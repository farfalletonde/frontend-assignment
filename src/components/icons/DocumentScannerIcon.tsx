import type { ComponentProps } from 'react';
import { Icon } from './Icon';

export const DocumentScannerIcon = (props: ComponentProps<'svg'>) => (
  <Icon {...props}>
    <path
      transform="translate(7.37 5.12)"
      d="M3.3 21.8H14C16.1 21.8 17.3 20.6 17.3 18.5V9.5H9.7C8.5 9.5 7.9 8.9 7.9 7.6V0H3.3C1.1 0 0 1.1 0 3.3V18.5C0 20.6 1.1 21.8 3.3 21.8ZM9.9 8H17.2C17.1 7.5 16.8 7.1 16.2 6.6L10.7 1C10.2 0.5 9.8 0.2 9.3 0.1V7.4C9.3 7.8 9.5 8 9.9 8ZM4.7 13.9C4.3 13.9 4 13.6 4 13.2C4 12.8 4.3 12.5 4.7 12.5H12.6C13 12.5 13.3 12.8 13.3 13.2C13.3 13.6 13 13.9 12.6 13.9H4.7ZM4.7 17.7C4.3 17.7 4 17.4 4 17C4 16.6 4.3 16.3 4.7 16.3H12.6C13 16.3 13.3 16.6 13.3 17C13.3 17.4 13 17.7 12.6 17.7H4.7Z"
    />
  </Icon>
);
