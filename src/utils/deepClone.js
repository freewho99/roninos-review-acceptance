export function safeClone(data) {
  return JSON.parse(JSON.stringify(data));
}
