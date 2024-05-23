import type { ChangeEventHandler } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

import useDebounce from '@/hooks/useDebounce';

import type { Maybe } from '@/types/utils';

import BaseTextfield from './BaseTextfield';
import type { TextfieldProps } from './types';

interface TextfieldDefaultProps extends TextfieldProps {
  maxLength?: number;
  rules?: RegExp;
  showCounter?: boolean;
}

const TextfieldDefault = (props: TextfieldDefaultProps) => {
  const {
    disabled,
    error,
    maxLength,
    message,
    onChange,
    onClickTitleIcon,
    rules,
    showCounter = false,
    title,
    titleIcon,
    value: parentValue,
    ...res
  } = props;
  const ref = useRef<HTMLInputElement>(null);
  const [counterText, setCounterText] = useState<Maybe<string>>();
  const [value, setValue] = useDebounce<string>(parentValue, onChange);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const handleOnReset = useCallback(() => {
    setValue('');
  }, [setValue]);

  useEffect(() => {
    if (maxLength && showCounter) {
      setCounterText(`${value.length}/${maxLength}`);
    }
  }, [maxLength, showCounter, value]);

  return (
    <BaseTextfield.Container
      error={error}
      disabled={disabled}
      message={message}
      nodeRef={ref}
      title={title}
      counterText={counterText}
      titleIcon={titleIcon}
      onClickTitleIcon={onClickTitleIcon}
      showMaxLengthIndicator={Boolean(maxLength)}
    >
      <BaseTextfield.Input
        {...res}
        ref={ref}
        disabled={disabled}
        error={error}
        maxLength={maxLength}
        rules={rules}
        value={value}
        onChange={handleOnChange}
        onResetValue={handleOnReset}
      />
    </BaseTextfield.Container>
  );
};

export default TextfieldDefault;
