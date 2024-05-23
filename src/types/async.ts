export interface AsyncStateType<T> {
  error?: Error;
  loading: boolean;
  result?: T;
}
