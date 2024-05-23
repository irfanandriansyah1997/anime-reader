import type {
  ChangeEventHandler,
  InputHTMLAttributes,
  MouseEventHandler,
  RefObject
} from 'react';
import { forwardRef, useCallback, useMemo } from 'react';

import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Images from '@/components/Images';
import Typography from '@/components/Typography';

import { noop } from '@/utils/noop';
import { DANGER500, GRAY400, GRAY500, GRAY700 } from '@/constant/theme';
import type { FithubIconType } from '@/types/icon';
import type { PropsWithRequiredChildren } from '@/types/react';

import { styBaseTextfield } from './style';

/////////////////////////////////////////////////////////////////////////////
// Base Container Textfield Section
/////////////////////////////////////////////////////////////////////////////

interface ContainerTextfieldProps {
  counterText?: string;
  disabled?: boolean;
  error?: boolean;
  isSuccess?: boolean;
  message?: string;
  nodeRef: RefObject<HTMLInputElement>;
  onClickTitleIcon?: () => void;
  showMaxLengthIndicator?: boolean;
  title?: string;
  titleIcon?: FithubIconType;
}

/**
 * BaseContainerTextfield component represents a container for a textfield with
 * optional heading and helper sections.
 *
 * @param props - The props for the BaseContainerTextfield component.
 * @returns Returns the JSX element representing the BaseContainerTextfield.
 */
const BaseContainerTextfield = (
  props: PropsWithRequiredChildren<ContainerTextfieldProps>
) => {
  const {
    children,
    counterText,
    disabled,
    error,
    message,
    nodeRef,
    onClickTitleIcon,
    showMaxLengthIndicator,
    title,
    titleIcon
  } = props;

  const {
    isShowHeadingSection,
    isShowHelperSection,
    isShowMaxLengthIndicator
  } = useMemo(() => {
    return {
      isShowHeadingSection: Boolean(title),
      isShowHelperSection: Boolean(
        Boolean(showMaxLengthIndicator && counterText) || message
      ),
      isShowMaxLengthIndicator: Boolean(showMaxLengthIndicator && counterText)
    };
  }, [counterText, message, showMaxLengthIndicator, title]);

  const { color } = useMemo(() => {
    if (disabled) return { color: GRAY400 };
    if (error) return { color: DANGER500 };

    return { color: GRAY500 };
  }, [disabled, error]);

  const handleOnClickTitle: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    if (nodeRef.current) nodeRef.current.focus();
  };

  const handleOnClickIcon: MouseEventHandler<HTMLSpanElement> = useCallback(
    (e) => {
      e.preventDefault();

      if (onClickTitleIcon) onClickTitleIcon();
    },
    [onClickTitleIcon]
  );

  return (
    <Flex role="region" aria-label="textfield" flexDirection="column" gap={8}>
      {/* Heading Section */}
      {isShowHeadingSection && (
        <Flex.Item fullWidth={false}>
          <Flex gap={4} alignItems="center">
            <Flex.Item>
              <Typography.H6
                modifier="heading-6"
                color={GRAY700}
                onClick={handleOnClickTitle}
              >
                {title}
              </Typography.H6>
            </Flex.Item>

            {titleIcon && (
              <Flex.Item>
                <Icon
                  aria-label="textfield heading icon"
                  className="textfield__heading-icon exclude-icon"
                  icon={titleIcon}
                  color={GRAY700}
                  onClick={handleOnClickIcon}
                />
              </Flex.Item>
            )}
          </Flex>
        </Flex.Item>
      )}

      {/* Textfield Section */}
      <Flex.Item>{children}</Flex.Item>

      {/* Helper Section */}
      {isShowHelperSection && (
        <Flex.Item>
          <Flex gap={4} alignItems="center" justifyContent="space-between">
            <Flex.Item>
              {message && (
                <Typography.Paragraph
                  role="presentation"
                  aria-label="textfield message"
                  modifier="caption"
                  color={color}
                >
                  {message}
                </Typography.Paragraph>
              )}
            </Flex.Item>

            {isShowMaxLengthIndicator && (
              <Flex.Item>
                <Typography.Paragraph
                  role="presentation"
                  aria-label="textfield counter"
                  modifier="caption"
                  color={color}
                >
                  {counterText}
                </Typography.Paragraph>
              </Flex.Item>
            )}
          </Flex>
        </Flex.Item>
      )}
    </Flex>
  );
};

/////////////////////////////////////////////////////////////////////////////
// Base Textfield Input Section
/////////////////////////////////////////////////////////////////////////////

interface BaseTextfieldProps {
  allowClear?: boolean;
  error?: boolean;
  icon?: FithubIconType;
  image?: string;
  imageAlt?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onResetValue?: () => void;
  rules?: RegExp;
}

type HTMLBaseTextfieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  keyof BaseTextfieldProps
>;

type TextfieldProps = BaseTextfieldProps & HTMLBaseTextfieldProps;

const BaseTextfield = forwardRef<HTMLInputElement, TextfieldProps>(
  (props, ref) => {
    const {
      allowClear,
      disabled,
      error = false,
      icon,
      image,
      imageAlt = 'input icon',
      onChange,
      onResetValue,
      rules,
      value,
      ...res
    } = props;

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = useCallback(
      (e) => {
        // INFO: special case if user clear the textfield still trigger onChange props
        if (e.target.value === '') onChange(e);

        // INFO: skip if regex test result is false
        if (rules && !rules.test(e.target.value)) {
          return;
        }

        onChange(e);
      },
      [onChange, rules]
    );

    const handleOnClickClearIcon: MouseEventHandler<HTMLSpanElement> =
      useCallback(
        (e) => {
          e.preventDefault();

          if (onResetValue) onResetValue();
        },
        [onResetValue]
      );

    return (
      <section
        css={styBaseTextfield}
        data-error={error}
        data-disabled={disabled}
      >
        {icon && (
          <Icon
            aria-label="textfield icon"
            data-section="icon"
            icon={icon}
            color={GRAY500}
            size={24}
          />
        )}

        {!icon && image && (
          <Images alt={imageAlt} src={image} size={24} layout="circle" />
        )}

        <input
          {...res}
          disabled={disabled}
          data-section="input"
          ref={ref}
          value={value}
          onChange={handleOnChange}
        />

        {allowClear && value && (
          <Icon
            aria-label="textfield clear"
            data-section="icon"
            icon="delete-fill"
            color={GRAY500}
            size={24}
            role="button"
            tabIndex={0}
            onClick={handleOnClickClearIcon}
            onKeyDown={noop}
          />
        )}
      </section>
    );
  }
);

export default {
  Container: BaseContainerTextfield,
  Input: BaseTextfield
};
