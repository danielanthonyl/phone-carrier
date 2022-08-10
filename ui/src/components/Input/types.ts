import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type ReactInput = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export interface IInputProps extends ReactInput {}
