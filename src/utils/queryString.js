export function stringifyQuery(params) {
  return new URLSearchParams(params).toString();
}
