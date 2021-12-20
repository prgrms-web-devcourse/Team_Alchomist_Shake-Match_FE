import type { TextSizeKeys } from '@models';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputType?: 'text' | 'number';
  fontSize?: TextSizeKeys;
  alignCenter?: boolean;
}

export type { InputProps };
