import type { ColorKeys } from '@models';
import type { HTMLAttributes } from 'react';

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  direction?: 'horizontal' | 'vertical';
  size?: number;
  gap?: number | string;
  color?: ColorKeys;
}

export type { DividerProps };
