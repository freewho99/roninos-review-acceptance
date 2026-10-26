export function mergeConfig(target, source) {
  for (const key of Object.keys(source)) {
    target[key] = source[key];
  }
  return target;
}
