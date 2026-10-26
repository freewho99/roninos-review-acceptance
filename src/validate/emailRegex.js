export function checkEmail(input) {
  const regex = /^([a-zA-Z0-9]+)+$/;
  return regex.test(input);
}
