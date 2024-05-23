import type { InputHTMLAttributes } from 'react';

import type { FithubIconType } from '@/types/icon';

interface BaseTextfieldProps {
  allowClear?: boolean;
  error?: boolean;
  icon?: FithubIconType;
  message?: string;
  onChange: (value: string) => void;
  onClickTitleIcon?: () => void;
  title?: string;
  titleIcon?: FithubIconType;
  value: string;
}

type HTMLTextfieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  keyof BaseTextfieldProps | 'maxLength'
>;

export type TextfieldProps = HTMLTextfieldProps & BaseTextfieldProps;
