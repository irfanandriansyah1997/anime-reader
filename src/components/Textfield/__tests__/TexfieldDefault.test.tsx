import type { ComponentProps } from 'react';

import { act, render, screen, waitFor, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Textfield from '@/components/Textfield';

import { JestBuilder } from '@/utils/test';
import { DANGER500, GRAY400, GRAY500 } from '@/constant/theme';

const onChangeSpy = jest.fn();
const MOCK_PROPS: ComponentProps<typeof Textfield.Default> = {
  allowClear: true,
  error: undefined,
  icon: 'addnote-fill',
  maxLength: 100,
  message: 'Lorem Ipsum Dolor Sim Amet',
  name: 'notes',
  onChange: onChangeSpy,
  showCounter: true,
  title: 'Notes',
  titleIcon: 'info-fill',
  value: ''
};

describe('Testing TextField.Default Component', () => {
  beforeEach(jest.clearAllMocks);

  describe('Should be render correctly', () => {
    beforeEach(jest.clearAllMocks);

    it('Testing positive flow', () => {
      const { rerender } = render(<Textfield.Default {...MOCK_PROPS} />);

      const textfieldContainer = screen.getByRole('region', {
        name: 'textfield'
      });
      expect(textfieldContainer).toBeInTheDocument();

      /**
       * Check textfield heading
       */
      const textfieldHeading = within(textfieldContainer).getByRole('heading', {
        level: 6
      });
      JestBuilder.test(textfieldHeading)
        .toBeInTheDocument()
        .toHaveTextContent('Notes');

      const textfieldHeadingIcon = within(textfieldContainer).getByRole('img', {
        name: 'textfield heading icon'
      });
      JestBuilder.test(textfieldHeadingIcon)
        .toBeInTheDocument()
        .toHaveAttribute('data-icon', 'info-fill');

      /**
       * Check textfield helper
       */
      const textfieldMessage = within(textfieldContainer).getByRole(
        'presentation',
        {
          name: 'textfield message'
        }
      );
      JestBuilder.test(textfieldMessage)
        .toBeInTheDocument()
        .toHaveStyle({ color: GRAY500 })
        .toHaveTextContent('Lorem Ipsum Dolor Sim Amet');

      const textfieldCounter = within(textfieldContainer).getByRole(
        'presentation',
        {
          name: 'textfield counter'
        }
      );
      JestBuilder.test(textfieldCounter)
        .toBeInTheDocument()
        .toHaveStyle({ color: GRAY500 })
        .toHaveTextContent('0/100');

      /**
       * Check textfield input section
       */
      const textfieldIcon = within(textfieldContainer).getByRole('img', {
        name: 'textfield icon'
      });
      JestBuilder.test(textfieldIcon)
        .toBeInTheDocument()
        .toHaveAttribute('data-icon', 'addnote-fill');

      const textfieldInput = within(textfieldContainer).getByRole('textbox');
      JestBuilder.test(textfieldInput)
        .toBeInTheDocument()
        .toHaveValue('')
        .toHaveAttribute('maxlength', '100')
        .not.toHaveAttribute('disabled');

      expect(
        within(textfieldContainer).queryByRole('button', {
          name: 'textfield clear'
        })
      ).not.toBeInTheDocument();

      /**
       * Re-render: simulate change value
       */
      rerender(<Textfield.Default {...MOCK_PROPS} value="updated value" />);

      expect(textfieldCounter).toHaveTextContent('13/100');
      expect(textfieldInput).toHaveValue('updated value');
      expect(
        within(textfieldContainer).getByRole('button', {
          name: 'textfield clear'
        })
      ).toBeInTheDocument();
    });

    it('Should be counter text not available if maxLength / showCounter props is undefined', () => {
      const { rerender } = render(
        <Textfield.Default {...MOCK_PROPS} maxLength={undefined} />
      );

      JestBuilder.test(
        screen.queryByRole('presentation', {
          name: 'textfield counter'
        })
      ).not.toBeInTheDocument();

      rerender(<Textfield.Default {...MOCK_PROPS} showCounter={undefined} />);

      JestBuilder.test(
        screen.queryByRole('presentation', {
          name: 'textfield counter'
        })
      ).not.toBeInTheDocument();
    });

    it.each`
      testCase                                                           | disabled | error    | expectedColorText | expectedDisableAttribute
      ${'Simulate render textfield error  should be working properly'}   | ${false} | ${true}  | ${DANGER500}      | ${undefined}
      ${'Simulate render textfield disabled should be working properly'} | ${true}  | ${false} | ${GRAY400}        | ${''}
    `(
      '$testCase',
      ({ disabled, error, expectedColorText, expectedDisableAttribute }) => {
        render(
          <Textfield.Default
            {...MOCK_PROPS}
            disabled={disabled}
            error={error}
          />
        );

        const textfieldContainer = screen.getByRole('region', {
          name: 'textfield'
        });
        expect(textfieldContainer).toBeInTheDocument();

        /**
         * Check textfield helper
         */
        const textfieldMessage = within(textfieldContainer).getByRole(
          'presentation',
          {
            name: 'textfield message'
          }
        );
        JestBuilder.test(textfieldMessage)
          .toBeInTheDocument()
          .toHaveStyle({ color: expectedColorText })
          .toHaveTextContent('Lorem Ipsum Dolor Sim Amet');

        const textfieldCounter = within(textfieldContainer).getByRole(
          'presentation',
          {
            name: 'textfield counter'
          }
        );
        JestBuilder.test(textfieldCounter)
          .toBeInTheDocument()
          .toHaveStyle({ color: expectedColorText })
          .toHaveTextContent('0/100');

        /**
         * Check textfield input section
         */
        const textfieldInput = within(textfieldContainer).getByRole('textbox');
        JestBuilder.test(textfieldInput)
          .toBeInTheDocument()
          .toHaveValue('')
          .toHaveAttribute('maxlength', '100');

        if (typeof expectedDisableAttribute === 'string') {
          JestBuilder.test(textfieldInput).toHaveAttribute('disabled', '');
        } else {
          JestBuilder.test(textfieldInput).not.toHaveAttribute('disabled');
        }
      }
    );
  });

  it('Simulate click title should be textfield focused', async () => {
    render(<Textfield.Default {...MOCK_PROPS} />);

    const textfieldContainer = screen.getByRole('region', {
      name: 'textfield'
    });

    const textfieldHeading = within(textfieldContainer).getByRole('heading', {
      level: 6
    });
    JestBuilder.test(textfieldHeading)
      .toBeInTheDocument()
      .toHaveTextContent('Notes');

    const textfieldInput = within(textfieldContainer).getByRole('textbox');
    JestBuilder.test(textfieldInput)
      .toBeInTheDocument()
      .toHaveValue('')
      .toHaveAttribute('maxlength', '100')
      .not.toHaveAttribute('disabled')
      .not.toHaveFocus();

    /**
     * Simulate click heading element
     */
    await act(() => userEvent.click(textfieldHeading));

    JestBuilder.test(textfieldInput).toHaveFocus();
  });

  it('Simulate change value should be onChange props invoked', async () => {
    render(<Textfield.Default {...MOCK_PROPS} />);

    const textfieldContainer = screen.getByRole('region', {
      name: 'textfield'
    });

    const textfieldInput = within(textfieldContainer).getByRole('textbox');
    JestBuilder.test(textfieldInput)
      .toBeInTheDocument()
      .toHaveValue('')
      .toHaveAttribute('maxlength', '100')
      .not.toHaveAttribute('disabled');

    expect(
      within(textfieldContainer).queryByRole('button', {
        name: 'textfield clear'
      })
    ).not.toBeInTheDocument();

    /**
     * Simulate change value
     */
    expect(onChangeSpy).not.toHaveBeenCalled();
    await act(() => userEvent.type(textfieldInput, 'Hello World'));

    await waitFor(() => {
      JestBuilder.test(textfieldInput).toHaveValue('Hello World');
      JestBuilder.test(onChangeSpy)
        .toBeCalledTimes(1)
        .nthCalledWith(1, 'Hello World');
    });

    const textFieldClear = within(textfieldContainer).getByRole('button', {
      name: 'textfield clear'
    });
    expect(textFieldClear).toBeInTheDocument();

    jest.clearAllMocks();

    /**
     * Simulate click clear button
     */
    expect(onChangeSpy).not.toHaveBeenCalled();
    await act(() => userEvent.click(textFieldClear));

    await waitFor(() => {
      JestBuilder.test(onChangeSpy).toBeCalledTimes(1).nthCalledWith(1, '');
      JestBuilder.test(textfieldInput).toHaveValue('');
    });
  });
});
