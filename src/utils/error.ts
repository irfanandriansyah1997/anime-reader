import { DEFAULT_ERROR_MESSAGE } from '@/constant/api';

/**
 * Casts an unknown value to an Error object.
 * If the input value is already an Error instance, it returns it unchanged.
 * If the input value is a string or number, it creates a new Error object with the value converted to a string.
 * If the input value is of any other type, it creates a new Error object with an "Unknown error" message.
 * @param e - The value to cast to an Error object.
 * @returns The resulting Error object.
 */
export const castingError = (e: unknown): Error => {
  if (e instanceof Error) return e;

  if (typeof e === 'string' || typeof e === 'number') {
    return new Error(String(e));
  }

  return new Error(`Unknown error: ${e}`);
};

/**
 * Throws an error with the provided message and logs the message using the error logger.
 * This function is typically used for handling unexpected errors in the application.
 * @param message - The error message to throw and log.
 * @throws {Error} - Always throws an Error object with the default error message.
 * @returns {never} - This function never returns as it always throws an error.
 */
export const throwError = (message: string): never => {
  /**
   * INFO: for logging purpose
   */
  // eslint-disable-next-line no-console
  console.log(message);

  throw new Error(DEFAULT_ERROR_MESSAGE);
};
