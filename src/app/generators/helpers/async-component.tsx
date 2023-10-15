export function asyncComponent<T>(
  fn: (props: T) => Promise<JSX.Element>
): React.FC<T> {
  return fn as any;
}
