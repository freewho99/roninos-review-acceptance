export function mapKeys(obj, fn) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [fn(k), v]));
}
