import type { Maybe, NullAble } from '@/types/utils';

/**
 * Safely parses an input to a string.
 *
 * @param {unknown} input - The input to be parsed.
 * @returns {string} The parsed string or an empty string if parsing fails.
 */
export const safeParseToString = (input: unknown): string => {
  try {
    if (typeof input === 'undefined' || input === null) throw new Error();

    if (typeof input === 'string') return input;

    if (typeof input === 'number' || typeof input === 'boolean') {
      return String(input);
    }

    throw new Error();
  } catch {
    return '';
  }
};

/**
 * Safely parses an input to a number.
 *
 * @param {unknown} input - The input to be parsed.
 * @returns {number} The parsed number or 0 if parsing fails.
 */
export const safeParseToNumber = (input: unknown): number => {
  try {
    if (typeof input === 'undefined' || input === null) throw new Error();

    // If input is already a number, return it
    if (typeof input === 'number') {
      return input;
    }

    // If input is a string, try parsing it into a number
    if (typeof input === 'string') {
      const parsedNumber = Number(input);

      if (!isNaN(parsedNumber)) return parsedNumber;
    }

    throw new Error();
  } catch {
    return 0;
  }
};

/**
 * Safely parses a JSON string.
 *
 * @param {NullAble<Maybe<string>>} input - The JSON string to be parsed.
 * @param {T} defaultValue - The default value to return if parsing fails.
 * @returns {T} The parsed JSON object or the default value if parsing fails.
 */
export const safeParseJSON = <T>(
  input: NullAble<Maybe<string>>,
  defaultValue: T
): T => {
  try {
    if (typeof input === 'string') {
      return JSON.parse(input);
    }

    throw new Error();
  } catch (e) {
    return defaultValue;
  }
};

/**
 * Safely stringifies an input to JSON.
 *
 * @param {unknown} input - The input to be stringified.
 * @returns {string} The stringified JSON or an empty string if stringification fails.
 */
export const safeStringifyJSON = (input: unknown) => {
  try {
    if (input === null || input === undefined) throw new Error();

    return JSON.stringify(input);
  } catch {
    return '';
  }
};

/**
 * Safely parses an input to a boolean.
 *
 * @param {unknown} input - The input to be parsed.
 * @returns {boolean} The parsed boolean or false if parsing fails.
 */
export const safeParseBoolean = (input: unknown): boolean => {
  try {
    if (typeof input === 'boolean') return input;

    if (typeof input === 'string' && (input === 'true' || input === 'false')) {
      return input === 'true';
    }

    throw new Error();
  } catch {
    return false;
  }
};

/**
 * Shortens the integer value with a suffix.
 * - K for thousands
 * - M for millions
 * - B for billions
 * - T for trillions
 *
 * @param {number} value - The integer value to be shortened.
 * @returns {string} The shortened string representation of the number.
 */
export const shortenNumber = (value: number) => {
  const absValue = Math.abs(value);
  if (absValue < 1000) {
    return value.toString();
  } else if (absValue < 1_000_000) {
    return (value / 1000).toFixed(1) + 'K';
  } else if (absValue < 1_000_000_000) {
    return (value / 1_000_000).toFixed(1) + 'M';
  } else if (absValue < 1_000_000_000_000) {
    return (value / 1_000_000_000).toFixed(1) + 'B';
  } else {
    return (value / 1_000_000_000_000).toFixed(1) + 'T';
  }
};
