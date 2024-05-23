/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Maybe } from '@/types/utils';

import { safeParseToString } from './parse';

/////////////////////////////////////////////////////////////////////////////
// URL Constructor Helper
/////////////////////////////////////////////////////////////////////////////

interface URLQueryParameterType {
  key: string;
  value: string;
}

/**
 * Constructs URL query parameters recursively.
 *
 * @param formattedKey The formatted key for the query parameter.
 * @param currentValue The current value of the query parameter.
 * @returns An array of URLQueryParameterType representing the constructed URL query parameters.
 */
const _constructURLQueryParameterItemReqursive = (
  formattedKey: string,
  currentValue: any
): URLQueryParameterType[] => {
  if (
    typeof currentValue === 'string' ||
    typeof currentValue === 'number' ||
    typeof currentValue === 'boolean'
  ) {
    return [{ key: formattedKey, value: safeParseToString(currentValue) }];
  }

  if (typeof currentValue === 'object') {
    return constructURLQueryParameter(currentValue, formattedKey);
  }

  return [];
};

/**
 * Constructs URL query parameters.
 *
 * @param parameter The parameter object to be converted into URL query parameters.
 * @param previousKey The previous key if any.
 * @returns An array of URLQueryParameterType representing the constructed URL query parameters.
 */
export const constructURLQueryParameter = (
  parameter: any,
  previousKey: Maybe<string> = undefined
): URLQueryParameterType[] => {
  if (Array.isArray(parameter)) {
    return parameter.reduce<URLQueryParameterType[]>(
      (result, currentValue, index) => {
        let formattedKey = `[${index}]`;
        if (previousKey) formattedKey = `${previousKey}[${index}]`;

        result.push(
          ..._constructURLQueryParameterItemReqursive(
            formattedKey,
            currentValue
          )
        );

        return result;
      },
      []
    );
  }

  if (typeof parameter === 'object' && parameter) {
    return Object.keys(parameter).reduce<URLQueryParameterType[]>(
      (result, currentKey) => {
        const currentValue = parameter[currentKey];
        let formattedKey: string = currentKey;
        if (previousKey) formattedKey = `${previousKey}[${currentKey}]`;

        result.push(
          ..._constructURLQueryParameterItemReqursive(
            formattedKey,
            currentValue
          )
        );

        return result;
      },
      []
    );
  }

  return [];
};

/**
 * Constructs a URL with query parameters.
 *
 * @param baseURL The base URL.
 * @param parameter The parameter object to be converted into URL query parameters.
 * @returns A new URL object with the constructed query parameters.
 */
export const constructURL = (
  baseURL: string,
  parameter: Maybe<any> = undefined
): URL => {
  const url = new URL(baseURL);

  constructURLQueryParameter(parameter).forEach((item) => {
    url.searchParams.set(item.key, item.value);
  });

  return url;
};
