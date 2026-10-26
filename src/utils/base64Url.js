export function toBase64Url(str) {
  return Buffer.from(str, "utf8").toString("base64url");
}
