export interface GenericNormalizeResponseType<FormattedResponse> {
  error?: Error;
  response?: FormattedResponse;
}

export interface GenericNormalizeFnType<FormattedResponse, APIResponse> {
  (args: APIResponse): GenericNormalizeResponseType<FormattedResponse>;
}
